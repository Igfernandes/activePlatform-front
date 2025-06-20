import { LockSquareRoundedFilled } from "@assets/Icons/black/LockSquareRoundedFilled";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  
  return (
    <>
      <header>
        <div className=" px-6 py-4 border-b-2 border-zinc-200">
          <div className="content flex justify-between items-center max-w-[1100px] mx-auto">
            <div>
              <Link href={"/"}>
                <Image
                  src={"/imgs/agm-round-logo.png"}
                  width={53}
                  height={56}
                  alt="logotipo AGM"
                />
              </Link>
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
        </div>
      </header>
    </>
  );
}
