export type PostClientsFieldsPayload = {
  client: number;
  fields: Array<FieldValue>;
};

export type FieldValue = {
  id: number;
  value: string;
};
