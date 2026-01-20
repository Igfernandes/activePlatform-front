import { textColors } from "@assets/colors/colors";
import { TimeLineChartDataShape } from "@components/shared/others/Graphics/TimeLineChart/type";
import { useI18n } from "@contexts/I18n";
import useGetPayments from "@services/Payments/Get/useGet";
import { useCallback, useMemo, useRef } from "react";

type Props = {
  chargeId: number;
};

export function usePaymentsData({ chargeId }: Props) {
  const { t } = useI18n();
  const { data } = useGetPayments({
    charge_id: chargeId,
  });
  const payments = useMemo(() => data ?? [], [data]);
  const statusColors = useRef({
    PAID: textColors.green,
    CANCELED: textColors.red,
    PENDENT: textColors.yellow,
  });
  const getPaymentsByMonth = useCallback((): Array<TimeLineChartDataShape> => {
    const paymentsByMonth = [];
    for (let month = 0; month < 12; month++) {
      const currentDate = new Date();
      currentDate.setMonth(month);
      const date = currentDate.toISOString().split("T")[0];

      paymentsByMonth.push({
        color: "",
        label: t("Words.pendent") as string,
        value: 0,
        date: date,
      });
    }

    payments.forEach((payment) => {
      paymentsByMonth.push({
        date: payment.created_at.split(" ")[0],
        label: t(`Words.${payment.status.toLocaleLowerCase()}`) as string,
        value: payment.paid_amount,
        color: statusColors.current[payment.status],
      });
    });

    return paymentsByMonth;
  }, [payments, statusColors, t]);

  return {
    payments,
    getPaymentsByMonth,
  };
}
