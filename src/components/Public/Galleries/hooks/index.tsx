import useGetGalleriesPreview from "@services/Galleries/GetPreview/useGet"
import { GalleryPhotoShape } from "@type/Galleries/photo"
import { useMemo, useState } from "react"

export function useGalleries() {
    const { data: rows, isPending } = useGetGalleriesPreview()
    const galleries = useMemo(() => rows, [rows])
    const [targetPhotos, setTargetPhotos] = useState<Array<GalleryPhotoShape>>([])

    const handleChangeTargetPhotos = (photos: Array<GalleryPhotoShape> = [], galleryTitle?: string) => {
        setTargetPhotos(photos.map(photo => ({ src: photo.src, alt: `Photo da Galeria ${galleryTitle}` })))
    }

    return {
        galleries,
        handleChangeTargetPhotos,
        targetPhotos,
        isLoading: isPending
    }
}