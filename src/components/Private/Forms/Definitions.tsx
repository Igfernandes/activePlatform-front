import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import { TextArea } from "@components/shared/forms/TextArea";
import i18n from "@configs/i18n";
import { useFormContext } from "react-hook-form";
import { FormsPayload } from "./schema";
import useGetUsers from "@services/Users/Get/useGetUsers";
import { useEffect, useState } from "react";
import { UsersShape } from "@type/Users/Users";

export function Definitions() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormsPayload>();
  const { data: dataUsers } = useGetUsers();
  const [users, setUsers] = useState<UsersShape[]>([]);

  useEffect(() => {
    setUsers(dataUsers ?? []);
  }, [dataUsers]);

  return (
    <div className="form-definitions">
      <div className="form-row flex flex-wrap mb-4 justify-between">
        <div className="form-group w-full lg:w-[49%]">
          <Select
            {...register("type")}
            options={[
              {
                text: i18n("words.people_physical"),
                value: "PEOPLE",
              },
              {
                text: i18n("words.people_legal"),
                value: "COMPANY",
              },
            ]}
            label={i18n(`words.type_people`)}
            dataTestId="type_people"
            required={true}
            errors={errors.type}
          />
        </div>
        <div className="form-group w-full lg:w-[49%]">
          <Input
            {...register("name")}
            label={i18n(`words.form_name`)}
            dataTestId="form_name"
            required={true}
            errors={errors.name}
          />
        </div>
      </div>
      <div className="mb-5">
        <div className="mb-1">
          <h4>{`Escolha abaixo os clientes impedidos de preenchimento desse formulário:`}</h4>
        </div>
        <Select
          {...register("users")}
          options={users.map((user) => ({
            text: user.name,
            value: user.id,
          }))}
          label={i18n(`words.exclude_people`)}
          dataTestId="exclude_people"
          multiple={true}
        />
      </div>
      <div className="form-group">
        <TextArea
          {...register("description")}
          label={i18n("words.description")}
          dataTestId="description"
          maxLength={200}
          errors={errors.description}
        />
      </div>
    </div>
  );
}
