import dayjs from "dayjs";

export function useCard() {
  const handleIsAvailableDate = (
    realizedAt?: string,
    expiredAt?: string
  ): boolean => {
    const now = dayjs(); // data e hora atuais

    // Nenhuma restrição -> sempre disponível
    if (!realizedAt && !expiredAt) return true;

    // Só tem realizedAt -> válido se já começou
    if (realizedAt && !expiredAt) {
      return now.isAfter(dayjs(realizedAt));
    }

    // Só tem expiredAt -> válido se ainda não expirou
    if (!realizedAt && expiredAt) {
      return now.isBefore(dayjs(expiredAt));
    }

    // Tem os dois -> válido se já começou E ainda não expirou
    if (realizedAt && expiredAt) {
      return now.isAfter(dayjs(realizedAt)) && now.isBefore(dayjs(expiredAt));
    }

    return false; // fallback seguro
  };

  return { handleIsAvailableDate };
}
