import { AxiosError } from "axios";

export type CustomAxiosError = AxiosError<{
  error?: string;
}>;

export type ShapeError = {
  title: string;
  message: string;
};
