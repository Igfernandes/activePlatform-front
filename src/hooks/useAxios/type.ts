import { AxiosError } from "axios";

export type CustomAxiosError = AxiosError<string>;

export type ShapeError = {
  message: string;
};
