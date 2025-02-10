type Props = {
  children: React.ReactNode;
};

export function ExternalContainer({ children }: Props) {
  return (
    <main className="bg-[url(/imgs/backgrounds/3d-wave.png)] bg-cover bg-no-repeat h-[90vh] flex items-center font-poppins">
      <div className="container w-[424px] mx-auto shadow-sm border-secondary border-2 px-6 py-10 rounded-[1.5rem]">
        {children}
      </div>
    </main>
  );
}
