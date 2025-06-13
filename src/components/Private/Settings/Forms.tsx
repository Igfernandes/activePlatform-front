import { bgColors } from "@assets/colors/colors";
import { useForms } from "./hooks/useForms";
import { InfoBoard } from "@components/shared/forms/InfoBoard/form";
import { TInput } from "@components/shared/forms/InfoBoard/fields/Input";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  getCPFFormatted,
  getNumberFormatted,
  handleMaskCPF,
  handleMaskPhone,
} from "@helpers/string";
import { handleMaskDate } from "@helpers/date";
import { ModalAlterPassword } from "./modals/AlterPassword";

dayjs.extend(customParseFormat);

export function SettingsForms() {
  const {
    formMethods,
    submit,
    userAuth,
    errors,
    handleToggleModel,
    isShowModal,
    isPending,
  } = useForms();

  return (
    <div>
      <InfoBoard
        formMethods={formMethods}
        submit={submit}
        isLoading={isPending}
      >
        <TInput
          label={i18n("Words.name")}
          name={"name"}
          dataTestId="name"
          errors={errors.name}
          defaultValue={userAuth?.name}
        />
        <TInput
          label={i18n("Words.cpf")}
          name={"cpf"}
          dataTestId="cpf"
          errors={errors.cpf}
          onChange={(ev) => {
            handleMaskCPF(ev);
            formMethods.setValue("cpf", ev.currentTarget.value);
          }}
          defaultValue={getCPFFormatted(userAuth?.cpf)}
        />
        <TInput
          label={i18n("Words.birthdate")}
          name={"birthdate"}
          dataTestId="birthdate"
          errors={errors.birthdate}
          defaultValue={dayjs(userAuth?.birthdate, "YYYY-MM-DD").format(
            "DD/MM/YYYY"
          )}
          onChange={(ev) => {
            handleMaskDate(ev);
            formMethods.setValue("birthdate", ev.currentTarget.value);
          }}
        />
        <TInput
          label={i18n("Words.phone")}
          name={"phone"}
          dataTestId="phone"
          errors={errors.phone}
          onChange={(ev) => {
            handleMaskPhone(ev);
            formMethods.setValue("phone", ev.currentTarget.value);
          }}
          defaultValue={getNumberFormatted(userAuth?.phone)}
        />
        <TInput
          label={i18n("Words.email")}
          name={"email"}
          dataTestId="email"
          disabled
          defaultValue={userAuth?.email}
          style={{
            background: bgColors.white,
          }}
        />
        <TInput
          type="password"
          label={i18n("Words.password")}
          name={"password"}
          dataTestId="password"
          style={{
            background: bgColors.white,
          }}
          placeholder="************"
          action={
            <button
              onClick={() => handleToggleModel(true)}
              type="button"
              className="font-semibold text-red mr-1"
            >
              {i18n("Words.alter")}
            </button>
          }
          disabled
        />
      </InfoBoard>
      <ModalAlterPassword
        handleModal={handleToggleModel}
        isShowModal={isShowModal}
      />
    </div>
  );
}
