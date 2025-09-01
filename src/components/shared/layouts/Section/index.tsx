type Props = {
  children: React.ReactNode;
  isContainer?: boolean;
  className?: string;
};

export function Section({ children, isContainer = true, className = "" }: Props) {
  return (
    <section
      className={`relative ${className} ${
        isContainer ? "px-2 md:px-6 max-w-[1250px] mx-auto my-10 md:my-20" : null
      }`}
    >
      {children}
    </section>
  );
}
