import Image from "next/image";
import Link from "next/link";

export function PrivacyAndCookies() {
  return (
    <div className="fixed left-0 bottom-10 z-[9999]">
      <div className="cursor-pointer ml-[-11rem] hover:ml-[0vw] transition-all duration-500 flex items-center bg-red shadow-lg rounded-l-md border-2 border-red py-1 px-2">
        <div>
          <span className="text-white">
            <Link href={"/politics-privacy"}>Políticas</Link> ou
            <Link href={"/cookies"}> Cookies</Link>
          </span>
        </div>
        <div className="ml-3">
          <Image
            src={"/imgs/cookies.png"}
            width={35}
            height={35}
            className="min-w-[50px]"
            alt="cookies icon"
          />
        </div>
      </div>
    </div>
  );
}
