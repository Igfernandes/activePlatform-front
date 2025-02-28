export type AccordionContextData = {
  accordionActive: number;
  handleCollapse: (accordionId: number) => void;
};

export type AccordionProps = {
  children: React.ReactNode;
};

export type AccordionData = AccordionProps;
