import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import { PaymentForm } from "@components/Public/Payment/Form";
import { PaymentPageProps } from "@components/Public/Payment/types";
import i18n from "@configs/i18n";
import { getCharge } from "@services/Charges/GetPreview/SSR";
import { GetServerSideProps } from "next";
import Script from "next/script";

export default function Checkout({ charge }: PaymentPageProps) {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <div>
        <Script
          src="https://sdk.mercadopago.com/js/v2"
          strategy="afterInteractive"
        ></Script>
        <Header />
        <div className="container max-w-[1100px] mx-auto my-12">
          <div className="title mb-6">
            <h1 className="text-2xl font-bold">{i18n("Words.checkout")}</h1>
          </div>
          <PaymentForm charge={charge} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<PaymentPageProps> = async ({
  query,
  req,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { charge: reference } = query as { charge: string }; // Tipando o params
  const charge = await getCharge(tokenNavigation, { reference: reference });

  if (!charge || Object.hasOwn(charge, "errors")) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      charge, // Passa o ID para o componente
    },
  };
};
