import i18n from "@configs/i18n";
import { decodeHtmlToWhatsApp } from "@helpers/html";
import { EventShape } from "@type/Events";
import dayjs from "dayjs";

type Props = {
  event: EventShape;
  link: string;
  clientName: string;
};

export const getMessageConfirmation = ({ event, link, clientName }: Props) => {
  return `Confirmação de Inscrição - ${event.name}

Olá, *${clientName}*!
Confirme a sua inscrição no link: ${link} 

${event.alerts ? `*Instruções:* \n ${decodeHtmlToWhatsApp(event.alerts)}` : ""}

*Data:* ${
    event.realized_at
      ? dayjs(event.realized_at ?? "").format(i18n("Configs.format.date"))
      : "Não definido"
  }
*Horário:* ${
    event.realized_at
      ? dayjs(event.realized_at ?? "", "YYYY-MM-DD HH:mm:ss").format("HH:mm")
      : "Não definido"
  }
*Local:* ${event.address ?? "Não definido"}

*Fique atento(a)* às nossas próximas mensagens com mais informações importantes.
Se precisar de qualquer ajuda, é só responder aqui! Estamos à disposição.

Até lá!
Equipe AGM
`.trim();
};
