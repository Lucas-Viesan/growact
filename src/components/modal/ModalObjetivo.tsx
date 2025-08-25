import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { atualizar, cadastrar } from "../../services/Service";
import type Objetivo from "../../models/Objetivo";

interface ModalProps {
  fecharModal: () => void;
  objetivo: Objetivo | null;
  atualizarLista: () => void;
}

function ModalObjetivo({ fecharModal, objetivo, atualizarLista }: ModalProps) {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    if (objetivo) {
      setTitulo(objetivo.titulo);
    } else {
      setTitulo("");
    }
  }, [objetivo]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const objetivoDados = {
      id: objetivo?.id,
      titulo,
      usuario: { id: usuario.id },
    };

    try {
      if (objetivo) {
        await atualizar("/objetivos/atualizar", objetivoDados, {
          headers: { Authorization: token },
        });
      } else {
        await cadastrar(`/objetivos/cadastrar/${usuario.id}`, objetivoDados, {
          headers: { Authorization: token },
        });
      }

      atualizarLista();
      fecharModal();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.status === 500) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao salvar objetivo.");
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-preto to-azul-denso p-8 rounded-xl w-[90%] max-w-lg">
        <h2 className="font-notosans font-bold text-xl text-white mb-4">
          {objetivo ? "Atualize seu objetivo" : "Defina seu objetivo"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ex: Ler 12 livros até dezembro"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
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
              {objetivo ? "Atualizar" : "Cadastrar"}
            </button>
            <button
              type="button"
              onClick={fecharModal}
              className="bg-vermelho h-10  px-4 py-2 rounded-md font-inter font-semibold text-sm lg:text-base text-white tracking-wide"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalObjetivo;
