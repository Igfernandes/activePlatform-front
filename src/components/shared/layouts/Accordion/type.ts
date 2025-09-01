export type TabHeaderProps = AccordionItemData & {
  title?: string | React.ReactNode;
  buttons?: React.ReactNode;
};

export type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

export type AccordionItemData = {
  accordionId: number;
};
