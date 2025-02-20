import React from "react";

type MyComponentProps = React.PropsWithChildren & {
  key: string | number;
  component: React.ReactNode;
};

export function useComponents() {
  const convertJSXComponent = ({ key, component }: MyComponentProps) => {
    return React.createElement(React.Fragment, { key }, component);
  };

  return {
    convertJSXComponent,
  };
}
