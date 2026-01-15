import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback, useMemo } from "react"
import { GalleryShape } from "@type/Galleries"
import { GalleryProfilePayload, GalleryProfileSchema } from "../profileSchemas"
import usePostGallery from "@services/Galleries/Post/usePost"
import { useI18n } from "@contexts/I18n"

type Props = {
    gallery?: GalleryShape
}

export function useProfile({ gallery = {} as GalleryShape }: Props = {} as Props) {
    const { t } = useI18n();
    const schema = useMemo(() => GalleryProfileSchema(t), [t]);
    const { formMethods, handleSubmit, register, errors } = useFormRules<GalleryProfilePayload>({
        schema: schema,
        defaultValues: gallery
    })
    const { mutateAsync: postGallery, isPending: isLoadingPost } = usePostGallery()

    const onSubmit = useCallback(async (payload: GalleryProfilePayload) => {

        if (gallery?.id)
            payload.id = gallery.id

        await postGallery(payload)

    }, [postGallery, gallery])

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoadingPost
    }
}