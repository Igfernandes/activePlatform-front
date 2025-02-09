declare global {
  interface Window {
    captchaOnLoad: () => void;
    grecaptcha: ReCaptchaInstance;
  }
}

export interface ReCaptchaInstance {
  ready: (cb: () => unknown) => unknown;
  execute: (key: string, options: ReCaptchaExecuteOptions) => Promise<string>;
  render: (id: string, options: ReCaptchaRenderOptions) => unknown;
}

export interface ReCaptchaExecuteOptions {
  action: string;
}

export interface ReCaptchaRenderOptions {
  sitekey: string;
  size: "invisible";
}