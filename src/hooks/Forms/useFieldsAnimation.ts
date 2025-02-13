import { CSSProperties, FormEvent, useRef, useState } from "react";

type StatusLabelStyled = "UP" | "DOWN";

export function useFieldsAnimation() {
  const labelStyled = useRef({
    UP: {
      left: "1rem",
      top: ".5rem",
      fontSize: ".75rem",
    },
    DOWN: {
      left: ".75rem",
      top: ".75rem",
    },
  });
  const [labelStyledState, setLabelStateClass] = useState<CSSProperties>(
    labelStyled.current.DOWN
  );

  /**
   * @function changeLabelClass
   * - A função irá trocar as classes para criar a animação do label subir e descer no input.
   *
   * @param {"UP"|"DOWN"} state O estado que defini a posição do label.
   */
  const changeLabelClass = (state: StatusLabelStyled) => {
    setLabelStateClass(labelStyled.current[state]);
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

    if (input.placeholder) return changeLabelClass("UP");

    if (currentValue || ev.type == "focus") return changeLabelClass("UP");

    changeLabelClass("DOWN");
  };

  return {
    labelStyledState,
    handleTransitionLabel,
    changeLabelClass,
  };
}
