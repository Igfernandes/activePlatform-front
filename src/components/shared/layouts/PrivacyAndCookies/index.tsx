import Image from "next/image";
import Link from "next/link";

export function PrivacyAndCookies() {
  return (
    <div className="fixed right-0 bottom-10">
      <div className="cursor-pointer mr-[-11rem] hover:mr-[0vw] transition-all duration-500 flex items-center bg-red shadow-lg rounded-l-md border-2 border-red py-1 px-2">
        <div className="mr-3">
          <Image
            src={"/imgs/cookies.png"}
            width={35}
            height={35}
            className="min-w-[50px]"
            alt="cookies icon"
          />
        </div>
        <div>
          <span className="text-white">
            <Link href={"/politics-privacy"}>Políticas</Link> ou
            <Link href={"/cookies"}> Cookies</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
