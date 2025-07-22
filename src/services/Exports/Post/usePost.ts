import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { usePostFormService } from ".";
import { AxiosError } from "axios";
import { PostExportsPayload } from "./type";

export default function usePostExports() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postForm } = usePostFormService();

  const handleMutate = async (payload: PostExportsPayload) => {
    dispatchSnackbar({
      type: "notice",
      message: i18n("Components.shared.awaiting_text")
    });
    const { data } = await postForm(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success, file }) => {
      if (!file)
        return dispatchSnackbar({
          message: i18n("Api.exports.service_problem"),
          type: "notice",
        });

      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });

      window.open(file, "_blank");
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
