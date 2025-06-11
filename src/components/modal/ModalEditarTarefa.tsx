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
      <div className="bg-white rounded-xl p-6 w-[300px] flex flex-col gap-4">
        <h2 className="text-xl font-bold text-black">Editar Tarefa</h2>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="border rounded-md px-2 py-1"
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={handleSalvar}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Salvar
          </button>
          <button
            onClick={handleDeletar}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Deletar
          </button>
          <button
            onClick={fecharModal}
            className="bg-gray-400 text-white px-3 py-1 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
