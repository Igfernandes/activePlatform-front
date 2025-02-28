export type TabHeaderProps = AccordionItemData & {
  title?: string | React.ReactNode;
  buttons?: React.ReactNode;
};

export type AccordionProps = {
  children: React.ReactNode;
};

export type AccordionItemData = {
  accordionId: number;
};
