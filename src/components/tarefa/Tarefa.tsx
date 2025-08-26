import { useContext, useState } from "react";
import type TarefaType from "../../models/Tarefa";
import { AuthContext } from "../../contexts/AuthContext";
import { atualizar } from "../../services/Service";
import ModalEditarTarefa from "../modal/ModalEditarTarefa";

interface TarefaProps {
  tarefa: TarefaType;
  onUpdate: () => void;
}

export function Tarefa({ tarefa, onUpdate }: TarefaProps) {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;
  const [modalAberto, setModalAberto] = useState(false);

  const handleCheck = async () => {
    if (!tarefa.concluido) {
      try {
        await atualizar(`/tarefas/concluir/${tarefa.id}`, tarefa, {
          headers: {
            Authorization: token,
          },
        });

        onUpdate();
      } catch (erro) {
        console.error("Erro ao concluir tarefa:", erro);
      }
    }
  };

  return (
    <>
      <div className="w-[310px] lg:w-[350px] h-[46px] flex flex-row items-center bg-gradient-to-r from-azul-forte to-azul-noite rounded-xl mt-4 px-2">
        <img
          className="w-6 h-6 cursor-pointer"
          src={
            tarefa.concluido
              ? "/assets/checked.png"
              : "/assets/unchecked.png"
          }
          onClick={handleCheck}
        />
        <div className="w-full flex flex-row justify-between ml-2">
          <p className="font-notosans font-bold text-branco text-sm lg:text-base">
            {tarefa.descricao}
          </p>
          <img
            className="w-6 h-6 cursor-pointer"
            src="/assets/arrow.png"
            onClick={() => setModalAberto(true)}
          />
        </div>
      </div>

      {modalAberto && (
        <ModalEditarTarefa
          tarefa={tarefa}
          fecharModal={() => setModalAberto(false)}
          onUpdate={onUpdate}
        />
      )}
    </>
  );
}
