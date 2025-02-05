import { Button } from "@components/shared/form/button";
import { Checkbox } from "@components/shared/form/checkbox";
import { Input } from "@components/shared/form/input";
import { Password } from "@components/shared/form/password";
import Link from "next/link";

export function LoginForm() {
  return (
    <form action="">
      <div className="form-group">
        <Input name="login" type="email" dataTestId="login" label={"E-mail"} />
      </div>
      <div className="form-group my-4">
        <Password name="password" dataTestId="password" label={"Password"} />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <Checkbox dataTestId="remember-me" label={"Lembre de mim"} />
        </div>
        <div>
          <Link href={""} className="text-sm text-red relative top-[-3.5]">
            <strong>{"Esqueci a minha senha"}</strong>
          </Link>
        </div>
      </div>
      <div className="form-submit mt-6">
        <Button text="Carregando"  disabled={true}/>
      </div>
    </form>
  );
}
