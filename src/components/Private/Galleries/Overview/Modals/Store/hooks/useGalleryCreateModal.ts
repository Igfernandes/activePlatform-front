import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useModalContext } from "@contexts/Modal";
import {
  GalleryProfilePayload,
  GalleryProfileSchema,
} from "@components/Private/Galleries/Profile/profileSchemas";
import usePostGallery from "@services/Galleries/Post/usePost";
import { useMemo } from "react";
import { useI18n } from "@contexts/I18n";

dayjs.extend(customParseFormat);

export function useGalleryCreateModal() {
  const { t } = useI18n();
  const schema = useMemo(() => GalleryProfileSchema(t), [t]);
  const { formMethods, handleSubmit } = useFormRules<GalleryProfilePayload>({
    schema: schema,
  });
  const { handleToggleModal } = useModalContext();
  const { mutateAsync: postCreateGallery, isPending } = usePostGallery();

  const submit = (payload: GalleryProfilePayload) => {
    postCreateGallery(payload).then(() => {
      handleToggleModal(false);
    });
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
  };
}
