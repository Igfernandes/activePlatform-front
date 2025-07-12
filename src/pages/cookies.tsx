import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import i18n from "@configs/i18n";
import Link from "next/link";

export default function Cookies() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between min-h-[85vh] mx-w-[1440px]">
        <main className="w-full lg:w-[800px] mx-auto">
          <div className="bg-tertiary p-4 mx-auto mt-4">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">
                {i18n("Words.cookies")}
              </h1>
            </div>
          </div>
          <div className="w-full mt-6 px-6 mx-auto mb-10">
            <p className="text-sm text-end">Última atualização: 16/06/2025</p>
            <ol className="list-decimal text-2xl mt-4 pl-5">
              <li>
                <h2 className="text-2xl">
                  <strong>O que são Cookies</strong>
                </h2>
                <br />
                <p className="text-sm text-justify">
                  Cookies são pequenos arquivos de texto armazenados no seu
                  navegador ou dispositivo quando você acessa um site. Eles
                  permitem reconhecer suas preferências, melhorar sua
                  experiência de navegação e fornecer conteúdo personalizado.
                </p>
              </li>
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Tipos de Cookies Utilizados</strong>
                </h2>
                <br />
                <p className="text-base">
                  Utilizamos os seguintes tipos de cookies em nosso site:
                </p>
                <ol className="list-item text-base mt-4">
                  <li>
                    <span>a) Cookies estritamente necessários:</span>
                    <br />
                    <p>
                      Essenciais para o funcionamento do site e para garantir
                      funcionalidades básicas, como login, segurança e
                      movimentação entre páginas.
                    </p>
                  </li>
                  <li>
                    <span>b) Cookies de desempenho:</span>
                    <br />
                    <p>
                      Coletam informações sobre como os visitantes usam o site
                      (ex.: páginas visitadas, tempo de navegação), com o
                      objetivo de melhorar sua funcionalidade.
                    </p>
                  </li>
                  <li>
                    <span>c) Cookies de funcionalidade:</span>
                    <br />
                    <p>
                      Permitem que o site lembre escolhas que você fez (ex.:
                      idioma, região), fornecendo uma experiência personalizada.
                    </p>
                  </li>
                  <li>
                    <span>d) Cookies de publicidade/marketing:</span>
                    <br />
                    <p>
                      Usados para exibir anúncios relevantes com base em seus
                      interesses e medir a eficácia das campanhas publicitárias.
                    </p>
                  </li>
                </ol>
              </li>
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Cookies de Terceiros</strong>
                </h2>
                <p className="text-base mt-4">
                  Alguns cookies podem ser definidos por terceiros com quem
                  trabalhamos, como:
                </p>
                <ol className="pl-6">
                  {[
                    "Google Analytics;",
                    "Facebook Pixel;",
                    "Google Ads;",
                    "Ferramentas de chat online;",
                    "Plataformas de vídeo incorporado (YouTube, Vimeo).",
                  ].map((li, key) => (
                    <li key={`li_${key}`} className="text-base my-2">
                      {"- "}
                      <span>{li}</span>
                    </li>
                  ))}
                </ol>
                <p>
                  Esses cookies são regidos pelas respectivas políticas de
                  privacidade dos provedores.
                </p>
              </li>
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Consentimento e Gerenciamento de Cookies</strong>
                </h2>
                <p className="text-base mt-4">
                  Ao acessar nosso site pela primeira vez, você verá um banner
                  solicitando o seu consentimento para o uso de cookies, exceto
                  os estritamente necessários. Você pode, a qualquer momento:
                </p>
                <ol className="pl-6">
                  {[
                    "Aceitar ou rejeitar cookies não essenciais por meio do banner de cookies;",
                    "Modificar as permissões de cookies diretamente nas configurações do seu navegador;",
                    "Excluir cookies armazenados no seu dispositivo.",
                    "Lembre-se: a desativação de alguns cookies pode afetar o funcionamento do site e limitar funcionalidades.",
                  ].map((li, key) => (
                    <li key={`li_${key}`} className="text-base my-3">
                      {"- "}
                      <span>{li}</span>
                    </li>
                  ))}
                </ol>
              </li>
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Como Gerenciar Cookies no Navegador</strong>
                </h2>
                <p className="text-base mt-4">
                  Veja como gerenciar cookies nos principais navegadores:
                </p>
                <ol className="pl-6">
                  {[
                    "Google Chrome: chrome://settings/cookies",
                    "Mozilla Firefox: about:preferences#privacy",
                    "Microsoft Edge: Configurações > Cookies e permissões de site",
                    "Safari: Preferências > Privacidade > Gerenciar Dados do Site",
                  ].map((li, key) => (
                    <li key={`li_${key}`} className="text-base my-3">
                      {"- "}
                      <span>{li}</span>
                    </li>
                  ))}
                </ol>
              </li>
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Alterações nesta Política de Cookies</strong>
                </h2>
                <p className="text-base mt-4">
                  Podemos atualizar esta Política de Cookies conforme mudanças
                  tecnológicas ou regulatórias. Recomendamos que você revise
                  este documento periodicamente.
                </p>
              </li>
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Fale Conosco</strong>
                </h2>
                <p className="text-base mt-4">
                  Se tiver dúvidas sobre nossa Política de Cookies ou desejar
                  mais informações sobre o tratamento de seus dados, entre em
                  contato:
                </p>
               
                <ol className="pl-6">
                  {[
                    <span key={"email"} className="break-words">
                      E-mail:
                      <Link
                        href="mailto:contato@agmturismomarica.com.br"
                        className="text-red"
                      >
                        {" "}
                        contato@agmturismomarica.com.br
                      </Link>
                    </span>,
                    "Endereço: Rua Vinicius Oliveira da Rocha, 079, Lagoa Amendoeiras, São José do Imbassai, 24931315",
                  ].map((li, key) => (
                    <li key={`li_${key}`} className="text-base my-3">
                      <span>{li}</span>
                    </li>
                  ))}
                </ol>
              </li>
            </ol>
          </div>
        </main>
        <Footer hasPoliticsCookies={false} />
      </div>
    </>
  );
}
