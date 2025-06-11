import type TarefaType from "../../models/Tarefa";

interface TarefaProps {
  tarefa: TarefaType;
}

export function Tarefa({ tarefa }: TarefaProps) {
  return (
    <div className="w-[310px] lg:w-[350px] h-[46px] flex flex-row items-center bg-gradient-to-r from-azul-forte to-azul-noite rounded-xl mt-4 px-2">
      <img className="w-6 h-6" src="./src/assets/checked.png" />
      <div className="w-full flex flex-row justify-between ml-2">
        <p className="font-notosans font-bold text-branco text-sm lg:text-base">
          {tarefa.descricao}
        </p>
        <img className="w-6 h-6" src="./src/assets/arrow.png" />
      </div>
    </div>
  );
}
