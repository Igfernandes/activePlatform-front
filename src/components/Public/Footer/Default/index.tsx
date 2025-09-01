import Link from "next/link";

export function FooterDefault() {
  return (
    <div>
      <div className="text-center pb-4">
        <p className="leading-5 text-sm">
          Desenvolvido pela &nbsp;
          <Link
            href="https://companymarket.com.br"
            target="_blank"
            rel="noopener"
            className="text-red"
          >
            Company Market
          </Link>
          &nbsp; © <strong>AGM – Associação de Guias de Maricá.</strong> <br />
          Todos os direitos reservados. &nbsp; · &nbsp;
          <Link href="/politics-privacy" className="underline">Política de Privacidade</Link>
        </p>
      </div>
    </div>
  );
}
