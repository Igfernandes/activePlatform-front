export type PostExportsPayload = {
  in_ids: Array<number>;
  entity: EntitiesShape;
  type: "EXCEL" | "PDF";
};

export type EntitiesShape = "CLIENTS" | "USERS" | "SERVICES" | "FORMS" | "CHARGES" | "FORMS_FILLS";
