import { CardItemShape } from "@components/shared/layouts/CardBoard/types";
import useGetCharges from "@services/Charges/Get/useGetCharges";
import { ChargeShape } from "@type/Charges";
import { useEffect, useState } from "react";
import { financeCardsBoard } from "../../../../../data/finance/cardsBoard";
import useGetPayments from "@services/Payments/Get/useGet";
import { PaymentShape } from "@type/Payments";
import dayjs from "dayjs";

export function useOverviewCharge() {
  const { data: chargesData } = useGetCharges();
  const [charges, setCharges] = useState<Array<ChargeShape>>([]);
  const [payments, setPayments] = useState<Array<PaymentShape>>([]);
  const [cardsBoard, setCardsBoard] = useState<Array<CardItemShape>>([]);
  const { data: paymentsData } = useGetPayments();


  const updateLinkedCustomers = (cardBoard: CardItemShape) => {
    const clientsLinked = charges
      .map((charge) => charge.clients?.length)
      .reduce((acc: number, c) => acc + (c ?? 0), 0);
    return {
      ...cardBoard,
      value: String(clientsLinked),
    };
  };
  const getPaymentsExtract = () => {
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
  };

  useEffect(() => {
    if (!chargesData) return;

    setCharges(chargesData);
  }, [chargesData]);

  useEffect(() => {
    if (!paymentsData) return;

    setPayments(paymentsData);
  }, [paymentsData]);

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
  }, [charges, financeCardsBoard, payments]);

  return {
    charges,
    cardsBoard,
  };
}
