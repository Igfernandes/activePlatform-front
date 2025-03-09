import { postRememberMe } from "../services/Authentications/RememberMe/SSR";
import { privateRoutes } from "@configs/routes/Web/navigation";

type Props = {
  referenceToken: string;
};

export async function handleRememberMe({ referenceToken }: Props) {
  const resp = await postRememberMe({
    referenceToken,
  });

  if (!resp)
    return {
      props: {},
    };

  return {
    redirect: {
      destination: privateRoutes.dashboard,
      permanent: false,
    },
  };
}
