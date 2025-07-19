import { CSRFShape } from "../CSRF/types";

export type PostAuthPayload = {
  login: string;
  password: string;
  rememberMe?: boolean;
  csrf: CSRFShape;
};
