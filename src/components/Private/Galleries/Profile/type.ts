import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { GalleryProfilePayload } from "./profileSchemas";
import { ProfileManagerProps } from "../type";

export type ProfileFormProps = Pick<ProfileManagerProps, "gallery"> & {
  watch: UseFormWatch<GalleryProfilePayload>;
  register: UseFormRegister<GalleryProfilePayload>;
  errors: FieldErrors<GalleryProfilePayload>;
  setValue: UseFormSetValue<GalleryProfilePayload>;
};
