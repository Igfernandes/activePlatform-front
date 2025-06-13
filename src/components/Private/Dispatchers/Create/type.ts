import { ClientShape } from "@type/Clients";

export type ClientsProps = {
  clients: ClientShape[];
  clientsSelected: Array<ClientShape>;
  handleUpdateClients: (clients: Array<ClientShape>) => void;
};


export type FormsCardProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};