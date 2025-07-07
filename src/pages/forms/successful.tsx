import { Checks } from "@assets/Icons/colorful/Checks";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";

export default function Successful() {
  return (
    <ExternalContainer>
      <div className="row">
        <div className="column ">
          <div className="mb-6 mt-3">
            <Checks className="mx-auto" />
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl">
              <strong>A Agm recebeu seu Formulário com Sucesso!</strong>
            </h2>
          </div>
          <div className="text-justify mb-6">
            <p className="text-sm">
              Sua resposta é super importante para podermos entender e melhorar
              cada vez mais.
            </p>
          </div>
        </div>
      </div>
    </ExternalContainer>
  );
}
