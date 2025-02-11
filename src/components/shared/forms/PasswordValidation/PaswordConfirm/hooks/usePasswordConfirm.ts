import { FormEvent, useState } from "react";

export function usePasswordConfirm() {
  const [labelClassState, setLabelStateClass] =
    useState<string>("left-3 top-3");

  /**
   * @function changeLabelClass
   * - A função irá trocar as classes para criar a animação do label subir e descer no input.
   *
   * @param {"UP"|"DOWN"} state O estado que defini a posição do label.
   */
  const changeLabelClass = (state: "UP" | "DOWN") => {
    setLabelStateClass(state == "UP" ? "left-3 top-2 text-xs" : "left-3 top-3");
  };

  /**
   * @function handleTransitionLabel
   * - Algumas regras que definem o comportamento de quando o label deve subir ou não.
   *
   * @param {FormEvent<HTMLInputElement>} ev A propriedade é baseada no valor de retorno de um evento de elemento
   * html input
   *
   * @returns {void}
   */
  const handleTransitionLabel = (ev: FormEvent<HTMLInputElement>) => {
    const input = ev.currentTarget;
    const currentValue = input.value;

    if (currentValue || ev.type == "focus") return changeLabelClass("UP");

    changeLabelClass("DOWN");
  };


  return {
    labelClassState,
    handleTransitionLabel,
    changeLabelClass
  };
}
