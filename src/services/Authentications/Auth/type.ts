export type PostAuthPayload = {
  login: string;
  password: string;
  rememberMe?: boolean;
  "g-recaptcha-response": string;
};
