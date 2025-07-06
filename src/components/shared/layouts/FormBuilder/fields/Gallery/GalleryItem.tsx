import { When } from "@components/utilities/When";
import { GalleryFileShape } from "./type";
import Image from "next/image";
import { FileSymlink } from "@assets/Icons/black/FileSymlink";
import { Close } from "@assets/Icons/black/CloseClean";

type Props = GalleryFileShape;

export function GalleryItem({ name, type, url, handleDelete }: Props) {
  return (
    <li className="relative w-[19%] h-40 bg-slate-100 m-1">
      <When value={type.includes("image")}>
        <Image
          src={url}
          alt={name}
          width={200}
          height={200}
          className="object-contain h-full w-full"
        />
      </When>
      <When value={!type.includes("image")}>
        <a
          href={url}
          className="text-center flex flex-col w-full h-40 items-center justify-center border-2 border-red"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            clique aqui para <br /> visualizar o arquivo
          </span>
          <FileSymlink className="w-8 h-8 mt-2" />
        </a>
      </When>
      <div
        className="absolute top-0 right-0 bg-white hover:bg-neutral-300   shadow-sm cursor-pointer"
        onClick={() => handleDelete(name)}
      >
        <Close />
      </div>
    </li>
  );
}
