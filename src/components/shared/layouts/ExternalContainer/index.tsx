import { Footer } from "@components/Footer";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function ExternalContainer({ children, className = "" }: Props) {
  return (
    <main className={`${className} bg-[url(/imgs/backgrounds/3d-wave.png)] bg-cover bg-no-repeat min-h-[100vh] flex items-center flex-col justify-center font-poppins`}>
      <div className={`container w-[312px] sm:w-[424px] mx-auto shadow-sm border-secondary border-2 px-6 sm:py-10 py-6 p rounded-[1.5rem] mb-10`}>
        {children}
      </div>
      <Footer />
    </main>
  );
}
