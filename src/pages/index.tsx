import { UserShare } from "@assets/Icons/colorful/UserShare";
import { LoginForm } from "@components/Login/form";

export default function Home() {
  return (
    <main className="bg-[url(/imgs/backgrounds/3d-wave.png)] bg-cover bg-no-repeat h-[90vh] flex items-center font-poppins">
      <div className="container w-[424] mx-auto shadow-sm border-secondary border-2 px-6 py-10 rounded-[1.5rem]">
        <div className="row">
          <div className="column text-center">
            <div className="my-6">
              <UserShare className="mx-auto" />
            </div>
            <div className="mb-1">
              <h2 className="text-2xl">
                <strong>{"Seja bem-vindo!"}</strong>
              </h2>
            </div>
            <div className="mb-6">
              <p className="text-sm">
                {"Entre com sua conta de e-mail cadastrada"}
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
