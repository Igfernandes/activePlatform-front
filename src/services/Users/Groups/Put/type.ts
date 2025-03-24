export type PutCreateGroupPayload = {
  id: number;
  name: string;
  description?: string;
  permissions: Array<number>;
};
