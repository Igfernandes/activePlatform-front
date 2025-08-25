import Link from "next/link";

export function FooterSimple() {
  return (
    <div>
      <div className="text-center">
        <p>
          <strong>
            Powered by <span className="text-xl sm:text-md">CoderT2</span>{" "}
            <br />{" "}
            <span className="text-xs font-normal">
              Developed by Company Market
            </span>
          </strong>
        </p>
        <Link href="/politics-privacy">
          <span className="text-xs">Politicas de Privacidade</span>
        </Link>
      </div>
    </div>
  );
}
