import { ConfirmationForm } from "@components/Public/Confirmations/Form";
import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import { GetServerSideProps } from "next";

export default function Confirmations() {
  return (
    <div>
      <Header />
      <div className="container h-[72vh] mx-auto">
        <div className="row h-full">
          <div className="w-full h-full flex items-center md:w-[25vw] px-2 mx-auto pt-">
            <ConfirmationForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
