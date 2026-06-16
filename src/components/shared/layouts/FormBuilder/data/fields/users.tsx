
import { Date } from "../../fields/Date";
import { Dependents } from "../../fields/Dependents";
import { Email } from "../../fields/Email";
import { Password } from "../../fields/Password";
import { Phone } from "../../fields/Phone";
import { CPF } from "../../fields/CPF";
import { CEP } from "../../fields/CEP";
import { Name } from "../../fields/Name";

export const classNameDefault = "";
export const fieldsUser = {
  name: Name,
  email: Email,
  password: Password,
  phone: Phone,
  birthdate: Date,
  cpf: CPF,
  zipcode: CEP,
  dependents: Dependents,
};
