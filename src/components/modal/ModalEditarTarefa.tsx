import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { atualizar, deletar } from "../../services/Service";
import type Tarefa from "../../models/Tarefa";

interface ModalEditarTarefaProps {
  tarefa: Tarefa;
  fecharModal: () => void;
  onUpdate: () => void;
}

export default function ModalEditarTarefa({
  tarefa,
  fecharModal,
  onUpdate,
}: ModalEditarTarefaProps) {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;
  const [descricao, setDescricao] = useState(tarefa.descricao);

  const handleSalvar = async () => {
    try {
      await atualizar(
        `/tarefas/atualizar/${tarefa.id}`,
        { ...tarefa, descricao },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      onUpdate();
      fecharModal();
    } catch (erro) {
      console.error("Erro ao atualizar tarefa:", erro);
    }
  };

  const handleDeletar = async () => {
    try {
      await deletar(`/tarefas/${tarefa.id}`, {
        headers: {
          Authorization: token,
        },
      });
      onUpdate();
      fecharModal();
    } catch (erro) {
      console.error("Erro ao deletar tarefa:", erro);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gradient-to-b from-preto to-azul-denso rounded-xl p-6 w-[300px] flex flex-col gap-4">
        <h2 className="text-xl font-notosans font-bold text-white">Editar tarefa</h2>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="p-2 rounded-md bg-cinza/10 font-notosans text-white border-2 border-transparent 
             focus:border-azul-escuro focus:ring-2 focus:ring-azul-vivo
             placeholder:text-cinza-claro
             transition duration-300 outline-none"
        />
        <div className="flex flex-col justify-between mt-1 gap-2">
          <button
            onClick={handleSalvar}
            className="bg-azul-oceano h-10 font-inter font-semibold text-sm lg:text-base text-white tracking-wide px-3 py-1 rounded-md"
          >
            Salvar
          </button>
          <button
            onClick={handleDeletar}
            className="bg-red-600 h-10 font-inter font-semibold text-sm lg:text-base text-white tracking-wide px-3 py-1 rounded-md"
          >
            Deletar
          </button>
          <button
            onClick={fecharModal}
            className="bg-preto h-10 font-inter font-semibold text-sm lg:text-base text-white tracking-wide px-3 py-1 rounded-md"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
