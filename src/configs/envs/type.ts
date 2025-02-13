export type EnvironmentProprieties = {
  API_URL?: string;
};

export type EnvironmentShape = {
  PROD: EnvironmentProprieties;
  DEV: EnvironmentProprieties;
};

export type EnvironmentTypes = "PROD" | "DEV";
