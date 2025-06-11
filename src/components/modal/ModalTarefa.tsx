import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { cadastrar } from "../../services/Service";

interface ModalTarefaProps {
  fecharModal: () => void;
  objetivoId: number;
}

export default function ModalTarefa({
  fecharModal,
  objetivoId,
}: ModalTarefaProps) {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const tarefa = {
      descricao,
      concluida: false, // nome correto da propriedade no backend
      usuario: { id: usuario.id },
    };

    try {
      await cadastrar(`/tarefas/cadastrar/${objetivoId}`, tarefa, {
        headers: { Authorization: token },
      });

      fecharModal();
      alert("Tarefa criada com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar tarefa.");
      console.error(error);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-preto p-8 rounded-xl w-[90%] max-w-lg">
        <h2 className="text-xl text-white mb-4">Criar Nova Tarefa</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Título da tarefa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="p-2 rounded-md bg-cinza/20 text-white"
            required
          />

          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={fecharModal}
              className="bg-vermelho px-4 py-2 rounded-md text-white"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="bg-azul-profundo2 px-4 py-2 rounded-md text-white"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
