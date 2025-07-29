import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import i18n from "@configs/i18n";
import Link from "next/link";

export default function Cookies() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between min-h-[85vh] max-w-[1440px]">
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
                      movimentação entre páginas. Estes cookies não requerem seu
                      consentimento.
                    </p>
                  </li>
                  <li>
                    <span>b) Cookies de desempenho:</span>
                    <br />
                    <p>
                      Coletam informações sobre como os visitantes usam o site
                      (ex.: páginas visitadas, tempo de navegação), com o
                      objetivo de melhorar sua funcionalidade. Só são usados
                      após seu consentimento explícito.
                    </p>
                  </li>
                  <li>
                    <span>c) Cookies de funcionalidade:</span>
                    <br />
                    <p>
                      Permitem que o site lembre escolhas que você fez (ex.:
                      idioma, região), fornecendo uma experiência personalizada.
                      Só são usados após seu consentimento explícito.
                    </p>
                  </li>
                  <li>
                    <span>d) Cookies de publicidade/marketing:</span>
                    <br />
                    <p>
                      Usados para exibir anúncios relevantes com base em seus
                      interesses, remarketing e medir a eficácia das campanhas
                      publicitárias. Só são usados após seu consentimento
                      explícito.
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
                    <span key="google-analytics">
                      Google Analytics:{" "}
                      <Link
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red underline"
                      >
                        Política do Google
                      </Link>
                    </span>,
                    <span key="facebook-pixel">
                      Facebook Pixel (Meta):{" "}
                      <Link
                        href="https://www.facebook.com/policy.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red underline"
                      >
                        Política do Facebook
                      </Link>
                    </span>,
                    "Google Ads;",
                    "Ferramentas de chat online;",
                    "Plataformas de vídeo incorporado (YouTube, Vimeo).",
                  ].map((li, key) => (
                    <li key={`li_${key}`} className="text-base my-2">
                      {"- "} <span>{li}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-2">
                  Estes cookies são regidos pelas respectivas políticas de
                  privacidade dos provedores e podem coletar dados para fins
                  próprios. Recomendamos consultar as políticas acima para mais
                  informações.
                </p>
              </li>
              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Consentimento e Gerenciamento de Cookies</strong>
                </h2>
                <p className="text-base mt-4">
                  Ao acessar nosso site pela primeira vez, um banner solicitará
                  seu consentimento para o uso de cookies não essenciais,
                  permitindo que você aceite ou recuse categorias específicas,
                  como cookies de desempenho, funcionalidade e marketing.
                </p>
                <p className="text-base mt-2">
                  Os cookies estritamente necessários são essenciais para o
                  funcionamento do site e não exigem consentimento.
                </p>
                <p className="text-base mt-2">
                  Você pode modificar suas permissões de cookies a qualquer
                  momento, por meio do link {"Gerenciar Cookies"} disponível no
                  rodapé do site ou diretamente nas configurações do seu
                  navegador.
                </p>
                <p className="text-base mt-2">
                  Lembre-se: a desativação de alguns cookies pode afetar o
                  funcionamento do site e limitar funcionalidades.
                </p>
                <p className="text-base mt-2">
                  Para revogar o consentimento a cookies de marketing ou
                  publicidade, você pode usar as opções disponíveis no banner,
                  nas configurações do site ou nos links das políticas dos
                  provedores.
                </p>
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
                      {"- "} <span>{li}</span>
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
                  este documento periodicamente. Mudanças relevantes serão
                  comunicadas por e-mail ou notificações no site.
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
                      E-mail:{" "}
                      <Link
                        href="mailto:contato@agmturismomarica.com.br"
                        className="text-red underline"
                        rel="noopener noreferrer"
                      >
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
