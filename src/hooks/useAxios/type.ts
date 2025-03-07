import { AxiosError } from "axios";

export type CustomAxiosError = AxiosError<string>;

export type ShapeError = {
  title: string;
  message: string;
};
