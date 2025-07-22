import { CSRFShape } from "@services/Authentications/CSRF/types";
import { postRememberMe } from "../services/Authentications/RememberMe/SSR";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { setCookie } from "cookies-next";
import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

type Props = {
  referenceToken: string;
  csrf: CSRFShape;
  res: ServerResponse<IncomingMessage>;
  req: IncomingMessage & {
    cookies: NextApiRequestCookies;
  };
};

export async function handleRememberMe({
  referenceToken,
  csrf,
  req,
  res,
}: Props) {
  const resp = await postRememberMe({
    referenceToken,
  });

  if (!resp)
    return {
      props: {
        csrf,
      },
    };

  setCookie("token_navigation", resp.token_navigation, {
    req,
    res,
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });

  return {
    redirect: {
      destination: privateRoutes.dashboard,
      permanent: false,
    },
  };
}
