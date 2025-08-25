import type Objetivo from "../../models/Objetivo";
import { CardObjetivo } from "./CardObjetivo";

interface ListarObjetivoProps {
  objetivos: Objetivo[];
  aoEditar: (objetivo: Objetivo) => void;
  aoDeletar: (objetivo: Objetivo) => void;
  aoConcluir: (objetivo: Objetivo) => void;
}

function ListarObjetivo({
  objetivos,
  aoEditar,
  aoDeletar,
  aoConcluir,
}: ListarObjetivoProps) {
  return (
    <>
      {objetivos.length === 0 ? (
        <h2 className="text-center text-2xl text-white mt-32">
          Você ainda não tem objetivos, crie agora no botão acima!
        </h2>
      ) : (
        <div className="flex flex-row gap-4 lg:gap-8 overflow-x-auto scroll-smooth px-4 lg:px-8 py-8">
          {objetivos.map((objetivo) => (
            <CardObjetivo
              key={objetivo.id}
              objetivo={objetivo}
              aoEditar={aoEditar}
              aoDeletar={aoDeletar}
              aoConcluir={aoConcluir}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ListarObjetivo;
