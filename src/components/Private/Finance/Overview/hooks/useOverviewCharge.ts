import { CardItemShape } from "@components/shared/layouts/CardBoard/types";
import useGetCharges from "@services/Charges/Get/useGetCharges";
import { useCallback, useEffect, useMemo, useState } from "react";
import { financeCardsBoard } from "../../../../../data/finance/cardsBoard";
import useGetPayments from "@services/Payments/Get/useGet";
import dayjs from "dayjs";

export function useOverviewCharge() {
  const { data: chargesData } = useGetCharges();
  const { data: paymentsData } = useGetPayments();
  const charges = useMemo(() => chargesData ?? [], [chargesData]);
  const payments = useMemo(() => paymentsData ?? [], [paymentsData]);
  const [cardsBoard, setCardsBoard] = useState<Array<CardItemShape>>([]);

  const updateLinkedCustomers = useCallback(
    (cardBoard: CardItemShape) => {
      const clientsLinked = charges
        .map((charge) => charge.clients?.length)
        .reduce((acc: number, c) => acc + (c ?? 0), 0);
      return {
        ...cardBoard,
        value: String(clientsLinked),
      };
    },
    [charges],
  );
  const getPaymentsExtract = useCallback(() => {
    let monthlyIncome = 0;
    let revenueIncome = 0;

    const quantity = payments.filter(({ created_at, status, paid_amount }) => {
      const paymentDate = dayjs(created_at);
      const nowDate = dayjs();

      if (
        paymentDate.month() === nowDate.month() &&
        paymentDate.year() === nowDate.year()
      )
        monthlyIncome += status === "PAID" ? paid_amount : 0;

      if (paymentDate.year() === nowDate.year())
        revenueIncome += status === "PAID" ? paid_amount : 0;

      return status === "PAID";
    }).length;

    return {
      quantity,
      monthly: monthlyIncome,
      revenue: revenueIncome,
    };
  }, [payments]);

  useEffect(() => {
    const amountMonthly = getPaymentsExtract();
    const updatedLinkedCostumers = financeCardsBoard.map((card) => {
      let value = "";
      if (card.key == "linked_customers") {
        return updateLinkedCustomers(card);
      } else if (card.key == "annual_revenue") {
        value = String(amountMonthly.revenue);
      } else if (card.key == "monthly_income") {
        value = String(amountMonthly.monthly);
      } else if (card.key == "non_compliant") {
        value = String(amountMonthly.quantity);
      } else {
        value = String(payments.length - amountMonthly.quantity);
      }

      return { ...card, value };
    });

    setCardsBoard(updatedLinkedCostumers);
  }, [charges, getPaymentsExtract, updateLinkedCustomers, payments]);

  return {
    charges,
    cardsBoard,
  };
}
