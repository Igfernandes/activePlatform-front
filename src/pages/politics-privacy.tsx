import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import i18n from "@configs/i18n";
import Link from "next/link";

export default function PoliticsPrivacy() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between min-h-[85vh] max-w-[1440px] mx-auto">
        <main className="w-full lg:w-[800px] mx-auto">
          <div className="bg-tertiary p-4 mx-auto mt-4">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">
                {i18n("Words.politics_privacy")}
              </h1>
              <p className="text-sm mt-1">
                Associação de Guias de Turismo de Maricá- CNPJ: 44.431.497/0001-78
              </p>
            </div>
          </div>
          <div className="w-full mt-6 px-6 mx-auto mb-10">
            <p className="text-sm text-end">Última atualização: 16/06/2025</p>
            <ol className="list-decimal text-2xl mt-4 pl-5">
              <li>
                <h2 className="text-2xl">
                  <strong>Introdução</strong>
                </h2>
                <br />
                <p className="text-sm text-justify">
                  A presente Política de Privacidade tem como objetivo
                  esclarecer como os dados pessoais dos usuários são coletados,
                  utilizados, armazenados e protegidos pelo site
                  [agmturismomarica.com.br], de acordo com a Lei nº 13.709/2018
                  (LGPD), o Marco Civil da Internet (Lei nº 12.965/2014), o
                  GDPR, e demais legislações aplicáveis.
                </p>
                <p className="text-sm text-justify mt-2">
                  Ao utilizar nossos serviços, você declara que leu, compreendeu
                  e concorda com os termos desta política, incluindo o uso do
                  WhatsApp para comunicação e atendimento ao cliente. 
                </p>
              </li>

              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Dados Pessoais Coletados</strong>
                </h2>
                <br />
                <p className="text-base">
                  Coletamos diferentes tipos de dados pessoais, de forma
                  automática ou por meio de interações diretas do usuário com o
                  site. Esses dados incluem, mas não se limitam a:
                </p>
                <ol className="list-item text-base mt-4">
                  <li>
                    <span>a) Dados fornecidos pelo usuário:</span>
                    <br />
                    <ul className="pl-5 mt-2">
                      {[
                        "Nome completo;",
                        "Endereço de e-mail;",
                        "CPF ou CNPJ;",
                        "Endereço completo;",
                        "Telefone;",
                        "Dados de pagamento (via parceiros de pagamento);",
                        "Informações inseridas em formulários de contato, cadastros, compras ou suporte.",
                      ].map((li, key) => (
                        <li key={`li_${key}`} className="my-2">
                          <span>- {li}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ol>
                <ol className="list-item text-base mt-6">
                  <li>
                    <span>b) Dados coletados automaticamente:</span>
                    <br />
                    <ul className="pl-5 mt-2">
                      {[
                        "Endereço IP;",
                        "Tipo de navegador;",
                        "Sistema operacional;",
                        "Data e hora de acesso;",
                        "Páginas acessadas;",
                        "Comportamento de navegação;",
                        "Cookies e identificadores anônimos (veja a Política de Cookies).",
                      ].map((li, key) => (
                        <li key={`li_${key}`} className="my-2">
                          <span>- {li}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ol>
              </li>

              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Finalidade do Tratamento de Dados</strong>
                </h2>
                <p className="text-base mt-4">
                  Os dados coletados são tratados para as seguintes finalidades:
                </p>
                <ol className="pl-6">
                  {[
                    "Processamento de compras e entregas;",
                    "Criação e gerenciamento de contas de usuário;",
                    "Comunicação com o usuário (e-mails, notificações, atendimento ao cliente, inclusive via WhatsApp Business);",
                    "O contato via WhatsApp será feito apenas mediante consentimento do usuário, que poderá revogar a qualquer momento.",
                    "Envio de ofertas, promoções e conteúdos personalizados, mediante consentimento explícito do usuário (ex.: cadastro com opção de marketing);",
                    "Cumprimento de obrigações legais e regulatórias;",
                    "Prevenção à fraude, segurança e integridade da plataforma;",
                    "Análise de uso e melhorias nos serviços prestados.",
                  ].map((li, key) => (
                    <li key={`li_${key}`} className="text-base my-2">
                      - <span>{li}</span>
                    </li>
                  ))}
                </ol>
              </li>

              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Política de Cookies e Rastreamento</strong>
                </h2>
                <p className="text-base mt-4">
                  Utilizamos cookies e ferramentas de rastreamento, como Google
                  Analytics e Facebook Pixel, para melhorar a experiência do
                  usuário, analisar tráfego e fornecer conteúdos e anúncios
                  personalizados. Você pode gerenciar suas preferências de
                  cookies a qualquer momento. Para mais informações, consulte
                  nossa&nbsp;
                  <Link
                    href="/cookies"
                    className="text-red underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política de Cookies
                  </Link>
                  .
                </p>
              </li>

              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Compartilhamento de Dados</strong>
                </h2>
                <p className="text-base mt-4">
                  Os dados pessoais poderão ser compartilhados nas seguintes
                  hipóteses:
                </p>
                <ol className="pl-6">
                  {[
                    "Com prestadores de serviços essenciais para a operação da plataforma (ex.: meios de pagamento, servidores, marketing, segurança da informação);",
                    "Com autoridades públicas, mediante requisição ou cumprimento legal;",
                    "Com parceiros comerciais, somente mediante consentimento expresso do titular.",
                    "Todos os terceiros que tratam dados em nosso nome são contratualmente obrigados a manter a confidencialidade e segurança das informações.",
                  ].map((li, key) => (
                    <li key={`li_${key}`} className="text-base my-3">
                      - <span>{li}</span>
                    </li>
                  ))}
                </ol>
              </li>

              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Armazenamento e Retenção dos Dados</strong>
                </h2>
                <p className="text-base mt-4">
                  Seus dados serão armazenados em ambientes seguros, controlados
                  e de acesso restrito. O período de retenção seguirá os
                  seguintes critérios:
                </p>
                <ol className="pl-6">
                  {[
                    "Enquanto houver relacionamento ativo com o usuário;",
                    "Pelo tempo necessário para cumprir obrigações legais ou regulatórias;",
                    "Até a solicitação de exclusão dos dados, quando aplicável.",
                  ].map((li, key) => (
                    <li key={`li_${key}`} className="text-base my-3">
                      - <span>{li}</span>
                    </li>
                  ))}
                </ol>
              </li>

              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Direitos do Titular dos Dados</strong>
                </h2>
                <p className="text-base mt-4">
                  De acordo com a LGPD, você possui os seguintes direitos:
                </p>
                <ol className="pl-6">
                  {[
                    "Confirmação da existência de tratamento;",
                    "Acesso aos dados;",
                    "Correção de dados incompletos, inexatos ou desatualizados;",
                    "Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;",
                    "Portabilidade dos dados;",
                    "Eliminação dos dados pessoais tratados com consentimento;",
                    "Informações sobre compartilhamento de dados;",
                    "Revogação do consentimento.",
                  ].map((li, key) => (
                    <li key={`li_${key}`} className="text-base my-3">
                      - <span>{li}</span>
                    </li>
                  ))}
                </ol>
                <br />
                <p>
                  Solicitações podem ser feitas pelo e-mail:&nbsp;
                  <Link
                    href="mailto:contato@agmturismomarica.com.br"
                    className="text-red underline"
                  >
                    contato@agmturismomarica.com.br
                  </Link>
                  .
                </p>
              </li>

              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Segurança da Informação</strong>
                </h2>
                <p className="text-base mt-4">
                  Utilizamos medidas de segurança administrativas, técnicas e
                  físicas para proteger os dados pessoais. Tais medidas incluem:
                </p>
                <ol className="pl-6">
                  {[
                    "Criptografia de dados sensíveis;",
                    "Controle de acesso;",
                    "Monitoramento de atividades suspeitas;",
                    "Firewalls e antivírus atualizados;",
                    "Armazenamento seguro em servidores com proteção física e lógica.",
                  ].map((li, key) => (
                    <li key={`li_${key}`} className="text-base my-3">
                      - <span>{li}</span>
                    </li>
                  ))}
                </ol>
              </li>

              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Transferência Internacional de Dados</strong>
                </h2>
                <p className="text-base mt-4">
                  Eventualmente, dados poderão ser transferidos e armazenados em
                  servidores localizados fora do Brasil. Nesses casos,
                  garantimos que tais transferências respeitem os princípios
                  legais da LGPD e que os países ou empresas envolvidas ofereçam
                  grau adequado de proteção.
                </p>
              </li>

              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Alterações nesta Política</strong>
                </h2>
                <p className="text-base mt-4">
                  Esta política pode ser atualizada a qualquer momento.
                  Recomendamos a leitura periódica. Mudanças relevantes serão
                  comunicadas por e-mail, notificações no site ou banner
                  informativo.
                </p>
              </li>

              <li className="mt-8">
                <h2 className="text-2xl">
                  <strong>Contato</strong>
                </h2>
                <p className="text-base mt-4">
                  Caso tenha dúvidas ou queira exercer seus direitos
                  relacionados à proteção de dados pessoais, entre em contato
                  com nosso Encarregado de Dados (DPO):
                </p>
                <ol className="pl-6">
                  {[
                    "Alberto Luiz Alves Rodrigues;",
                    <span key={"email"} className="break-words">
                      E-mail:&nbsp;
                      <Link
                        href="mailto:contato@agmturismomarica.com.br"
                        className="text-red underline"
                      >
                        contato@agmturismomarica.com.br
                      </Link>
                    </span>,
                    "Endereço: Rua Vinicius Oliveira da Rocha 79, Quadra 19, Lote 5, São José do Imbassai, 24931-315",
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
