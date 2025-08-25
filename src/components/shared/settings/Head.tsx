import Head from "next/head";

export default function HeadSettings() {
  return (
    <Head>
      <meta
        property="og:title"
        content="Associação de Guias de Turismo de Maricá"
      />
      <meta
        property="og:description"
        content="Site oficial da Associação de Guias de Turismo de Maricá. Conheça nossos serviços e iniciativas."
      />
      <meta
        property="og:image"
        content="https://agmturismomarica.com.br/imagens/capa-site.jpg"
      />
      <meta property="og:url" content="https://agmturismomarica.com.br/" />
      <meta property="og:type" content="platform" />
    </Head>
  );
}
