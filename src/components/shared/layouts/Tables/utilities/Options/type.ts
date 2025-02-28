export type TableActions = {
  text: string;
  handle: () => void;
};

export type TableOptionsProps = {
  actions: Array<TableActions>;
};
