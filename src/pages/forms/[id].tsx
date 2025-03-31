import { BrandInstagram } from "@assets/Icons/black/BrandInstagram";
import { BrandTikTok } from "@assets/Icons/black/BrandTiktok";
import { BrandYoutube } from "@assets/Icons/black/BrandYoutube";
import { LockSquareRoundedFilled } from "@assets/Icons/black/LockSquareRoundedFilled";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { getFormFields } from "../../services/Forms/Get/SSR";
import { FieldsPageProps } from "@components/Public/Forms/types";
import { FormBuilderPreview } from "@components/shared/layouts/FormBuilder/Preview";

export default function Form({ fields }: FieldsPageProps) {

  return (
    <>
      <header>
        <div className="flex justify-between items-center px-6 py-4 border-b-2 border-zinc-200">
          <div>
            <div>
              <Image
                src={"/imgs/agm-round-logo.png"}
                width={53}
                height={56}
                alt="logotipo AGM"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center bg-secondary p-2 rounded-lg">
              <LockSquareRoundedFilled className="mr-2" />
              <span className="text-xs">
                <strong>Site protegido</strong>
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col justify-between min-h-[85vh] mx-w-[1440px]">
        <main>
          <div className="w-[60%] mx-auto">
            <FormBuilderPreview fields={fields} />
          </div>
        </main>
        <footer>
          <div className="text-center border-t-2 border-secondary">
            <div>
              <ul className="flex justify-center my-4">
                <li className="mx-2">
                  <Link href="">
                    <BrandTikTok />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link href="">
                    <BrandInstagram />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link href="">
                    <BrandYoutube />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <p>© 2024 AGM | Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<FieldsPageProps> = async ({
  params,
}) => {
  const { id } = params as { id: string }; // Tipando o params
  const fields = await getFormFields({ id: parseInt(id) });

  console.log(fields)
  if (!fields || Object.hasOwn(fields, "errors")) {
    return {
      redirect: {
        destination: `/404`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      fields: fields, // Passa o ID para o componente
    },
  };
};
