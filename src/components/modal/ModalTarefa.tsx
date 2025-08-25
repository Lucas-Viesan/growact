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
      concluida: false, 
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
      <div className="bg-gradient-to-b from-preto to-azul-denso p-8 rounded-xl w-[90%] max-w-lg">
        <h2 className="font-notosans font-bold text-xl text-white mb-4">Defina a tarefa</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ex: ler Hábitos Atômicos" 
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="p-2 rounded-md bg-cinza/10 font-notosans text-white border-2 border-transparent 
             focus:border-azul-escuro focus:ring-2 focus:ring-azul-vivo
             placeholder:text-cinza-claro
             transition duration-300 outline-none"
            required
          />

          <div className="flex flex-col justify-between gap-2">
            <button
              type="submit"
              className="bg-azul-oceano h-10 px-4 py-2 rounded-md font-inter font-semibold text-sm lg:text-base text-white tracking-wide"
            >
              Cadastrar
            </button>
            <button
              type="button"
              onClick={fecharModal}
              className="bg-vermelho h-10 px-4 py-2 rounded-md font-inter font-semibold text-sm lg:text-base text-white tracking-wide"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
