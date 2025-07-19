export type TurnsTile = {
  execute: () => void;
  getResponse: () => string | null;
  implicitRender: () => void;
  isExpired: () => boolean;
  ready: () => Promise<void>;
  remove: (widgetId?: string) => void;
  render: (
    container: string | HTMLDivElement | null,
    context: ShapeContextRecaptcha & {
      callback: (token: string) => void;
    }
  ) => string;
  reset: (widgetId?: string) => void;
};

type ShapeContextRecaptcha = {
  sitekey?: string;
  theme?: "light" | "dark" | "auto";
  action?: string;
};
