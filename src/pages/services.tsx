import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import { BoardCharge } from "@components/Public/Services/boards/Charge";
import { BoardDefault } from "@components/Public/Services/boards/Default";
import { ServicesPageProps } from "@components/Public/Services/types";
import { Subscribe } from "@components/shared/layouts/Subscribe";
import { When } from "@components/utilities/When";
import i18n from "@configs/i18n";
import { getServicePreview } from "@services/Services/GetPreview/SSR";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Script from "next/script";

export default function Services({ service }: ServicesPageProps) {
  const { charge, photo, form } = service;

  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <div>
        <Subscribe />
        <Script
          src="https://sdk.mercadopago.com/js/v2"
          strategy="afterInteractive"
        ></Script>
        <Header />
        <div className="container max-w-[1100px] mx-auto my-12">
          <div className="image shadow-md rounded-xl mb-6">
            <Image
              src={photo ? photo : "/imgs/backgrounds/default-service.png"}
              width={1000}
              height={307}
              className="w-full max-h-[310px] object-cover rounded-xl"
              alt="logotipo AGM"
            />
          </div>
          <div className="title text-center mb-6">
            <h1 className="font-bold text-2xl">{service.name}</h1>
          </div>
          <div
            className="text text-justify"
            dangerouslySetInnerHTML={{ __html: service.description ?? "" }}
          ></div>
        </div>
        <div className="box flex flex-wrap sm:flex-nowrap max-w-[800px] mx-auto min-h-[400px] my-20">
          <div className="w-full md:w-[45%] bg-red-strong p-8 rounded-xl">
            <div className="logotype mb-4">
              <Image
                src={"/imgs/agm-round-logo.png"}
                width={90}
                height={56}
                alt="logotipo AGM"
              />
            </div>
            <div className="information">
              <div className="contact">
                <div>
                  <h4 className="font-semibold text-lg text-white">
                    {i18n(`Words.contact`)}
                  </h4>
                </div>
                <div>
                  <ul className="flex flex-wrap justify-between text-white">
                    <li className="my-1">
                      <a href="tel:+55 (21) 9 8181-8787">(21) 9 8181-8787</a>
                    </li>
                    <li className="my-1">
                      <a href="tel:+55 (21) 3232-3232">(21) 3232-3232</a>
                    </li>
                    <li className="my-1">
                      <a href="mailto:contato@agm.com.br">contato@agm.com.br</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="address mt-2">
                <div>
                  <h4 className="font-semibold text-lg text-white">
                    {i18n(`Words.address`)}
                  </h4>
                </div>
                <div className="my-2">
                  <p className="text-white ">
                    R. Antônio Marques Mathias, 338 Itaipuaçu, Maricá/RJ
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[55%] px-8 py-16 bg-secondary rounded-xl shadow-md">
            <When value={!!charge}>
              <BoardCharge charge={charge} />
            </When>
            <When value={!charge && !form}>
              <BoardDefault {...service} />
            </When>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
  ServicesPageProps
> = async ({ query }) => {
  const { charge, form, key } = query as {
    charge: string;
    form: string;
    key: string;
  }; // Tipando o params
  const service = await getServicePreview({ id: +key, form, charge });

  if (!service || Object.hasOwn(service, "errors")) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      service, // Passa o ID para o componente
    },
  };
};
