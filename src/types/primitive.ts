import type { JSX } from 'react';

export type PossiblesTypesToComponents = string | number | React.ReactNode;
export type Component = (props: unknown) => JSX.Element;
