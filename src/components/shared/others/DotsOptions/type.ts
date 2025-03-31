export type DotsOptionsProps = {
  actions: Array<ActionsData>;
};

export type ActionsData = {
  text: string;
  handle: () => void;
};
