import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Modal } from "@components/shared/layouts/Modal";
import { useModal } from "./hooks/useModal";
import { useModalContext } from "@contexts/Modal";
import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { Input } from "@components/shared/forms/Input";
import { TextArea } from "@components/shared/forms/TextArea";
import { Color } from "@components/shared/forms/Color";
import { ScheduleShape } from "@type/Schedule";
import { useEffect, useState } from "react";
import { Datetime } from "@components/shared/forms/DateTime";
import dayjs from "dayjs";

type Props = {
  schedules?: Array<ScheduleShape>;
};

export function SchedulingModal({ schedules }: Props) {
  const { modal, handleToggleModal } = useModalContext();
  const [schedule, setSchedule] = useState<ScheduleShape>();
  const {
    formMethods,
    handleSubmit,
    submit,
    isLoading,
    users,
    handleDeleteSchedule,
  } = useModal();
  const {
    register,
    setValue,
    reset,
    formState: { errors },
  } = formMethods;

  useEffect(() => {
    const current = schedules?.find((schedule) => schedule.id === +modal.id);

    setSchedule(current);
    if (!current) {
      return reset();
    }
    const linkedUsers = current.linked?.map((user) => user.id) ?? [];

    setValue(
      "linked",
      users.map((user) =>
        linkedUsers.includes(user.id) ? String(user.id) : false
      )
    );
  }, [schedules, modal.id]);

  return (
    <Modal
      title={i18n("Words.new_scheduling")}
      isShowModal={modal.type === "SCHEDULE"}
      handleModal={handleToggleModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className=" w-full md:w-[400px]">
          <div className="content h-[60vh] px-2 scroll-smooth overflow-x-hidden overflow-y-auto">
            <div className="form-group mb-4">
              <Input
                {...register("title")}
                label={i18n("Words.title")}
                dataTestId="title"
                required={true}
                defaultValue={schedule?.title}
                errors={errors.title}
              />
            </div>
            <div className="form-group my-4">
              <Datetime
                {...register("date")}
                label={i18n("Words.start")}
                dataTestId="date"
                min={dayjs().format("YYYY-MM-DD HH:MM")}
                required={true}
                defaultValue={schedule?.date}
                placeholder={i18n(`Configs.format.date`)}
                type="datetime-local"
                errors={errors.date}
              />
            </div>
            <div className="form-group my-4">
              <Datetime
                {...register("end_date")}
                label={i18n("Words.until")}
                dataTestId="end_date"
                defaultValue={schedule?.end_date ?? ""}
                required={true}
                errors={errors.end_date}
              />
            </div>
            <div className="form-group mt-4 mb-1">
              <TextArea
                {...register("describe")}
                label="describe"
                dataTestId="describe"
                defaultValue={schedule?.describe}
              />
            </div>
            <div className="w-full ">
              <div className="form-group">
                <Color
                  {...register("color")}
                  label={i18n("Words.color")}
                  dataTestId="color"
                  type="color"
                  errors={errors.color}
                />
              </div>
            </div>
            <div className="form-title mt-6 mb-4">
              <h4 className="text-lg">
                <strong>{i18n("Words.list_linked_users")}</strong>
              </h4>
            </div>
            <div className="form-group">
              <GroupChecks
                name="linked"
                register={register}
                items={users.map((user) => ({
                  label: user.name,
                  value: String(user.id),
                }))}
              />
            </div>
          </div>
          <div className="form-btn flex justify-between pt-4 border-t-2 border-secondary">
            <div className="w-1/2 mx-2">
              <div className="ml-auto">
                <Button
                  type="button"
                  className="bg-primary border-tertiary  font-semibold border-2"
                  text={i18n("Words.exclude")}
                  onClick={handleDeleteSchedule}
                />
              </div>
            </div>
            <div className="w-1/2 mx-2">
              <div className=" ml-auto">
                <Button
                  type="submit"
                  className="bg-red text-white"
                  text={i18n("Words.save")}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
