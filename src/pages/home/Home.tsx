import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscar, deletar } from "../../services/Service";
import ListarObjetivo from "../../components/objetivo/ListarObjetivo";
import ModalObjetivo from "../../components/modal/ModalObjetivo";
import type Objetivo from "../../models/Objetivo";
import { AuthContext } from "../../contexts/AuthContext";
import { TailSpin } from "react-loader-spinner";
import { ModalParabens } from "../../components/modal/ModalParabens";
import { ToastAlerta } from "../../utils/ToastAlerta";

export function Home() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [showModalObjetivo, setShowModalObjetivo] = useState(false);
  const [showModalDeletar, setShowModalDeletar] = useState(false);
  const [objetivoSelecionado, setObjetivoSelecionado] =
    useState<Objetivo | null>(null);
  const [objetivos, setObjetivos] = useState<Objetivo[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [objetivoConcluido, setObjetivoConcluido] = useState<Objetivo | null>(null);


  const buscarObjetivos = async () => {
    try {
      setCarregando(true);
      await buscar(`/objetivos/usuario/${usuario.id}`, setObjetivos, {
        headers: { Authorization: token },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao buscar objetivos.", "erro");
      }
    } finally {
      setCarregando(false);

    }
  };

  async function confirmarDeletarObjetivo() {
    try {
      await deletar(`/objetivos/${objetivoSelecionado?.id}`, {
        headers: { Authorization: token },
      });
      buscarObjetivos();
      fecharModalDeletar();
    } catch {
      ToastAlerta("Erro ao deletar objetivo.", "sucesso");
    }
  }

  function abrirModalCriar() {
    setObjetivoSelecionado(null);
    setShowModalObjetivo(true);
  }

  function abrirModalEditar(objetivo: Objetivo) {
    setObjetivoSelecionado(objetivo);
    setShowModalObjetivo(true);
  }

  function abrirModalDeletar(objetivo: Objetivo) {
    setObjetivoSelecionado(objetivo);
    setShowModalDeletar(true);
  }

  function fecharModalObjetivo() {
    setObjetivoSelecionado(null);
    setShowModalObjetivo(false);
  }

  function fecharModalDeletar() {
    setObjetivoSelecionado(null);
    setShowModalDeletar(false);
  }

  function handleObjetivoConcluido(obj: Objetivo) {
  setObjetivoConcluido(obj);
}

function fecharModalParabens() {
  setObjetivoConcluido(null);
  buscarObjetivos(); // atualiza a lista e remove o card concluído
}



  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    } else {
      buscarObjetivos();
    }
  }, [token]);

  return (
    <div className="flex flex-col justify-start min-h-screen h-auto bg-gradient-to-b from-preto to-azul-escuro2 pt-28">
      <div className="flex flex-col lg:flex-row lg:justify-between w-96 lg:w-full h-auto px-5">
        <div className="lg:w-full lg:ml-4">
          <h1 className="h-28 lg:h-[70px] lg:w-3/5 font-urbanist font-bold text-5xl lg:text-6xl text-left text-gradiente-custom">
            O seu futuro começa agora
          </h1>
          <div className="lg:h-20 flex flex-col items-center lg:flex-row lg:justify-between lg:pr-4">
            <p className="lg:w-3/5 font-urbanist text-azul-gelo text-xl lg:text-3xl text-justify lg:text-left">
              Defina seus objetivos e crie as tarefas necessárias para
              atingi-los!
            </p>
            <button
              onClick={abrirModalCriar}
              className="w-32 h-16 lg:w-44 bg-gradient-to-r from-azul-escuro to-azul-profundo rounded-xl mt-4 transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:from-azul-profundo hover:to-azul-noite"
            >
              <span className="font-urbanist font-bold text-gradiente-custom text-base lg:text-xl ">
                Criar Objetivo
              </span>
            </button>
          </div>
        </div>
      </div>

      {carregando ? (
        <TailSpin
          height="120"
          width="120"
          color="#4CE0C3"
          ariaLabel="tail-spin-loading"
          wrapperClass="mx-auto mt-12"
          visible={true}
        />
      ) : (
        <ListarObjetivo
          objetivos={objetivos.filter(obj => obj.percentual < 100)}
          aoEditar={abrirModalEditar}
          aoDeletar={abrirModalDeletar}
          aoConcluir={handleObjetivoConcluido}
        />
      )}

      {showModalObjetivo && (
        <ModalObjetivo
          fecharModal={fecharModalObjetivo}
          objetivo={objetivoSelecionado}
          atualizarLista={buscarObjetivos}
        />
      )}

      {objetivoConcluido && (
      <ModalParabens objetivo={objetivoConcluido} fecharModal={fecharModalParabens} />
      )}


      {showModalDeletar && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-preto to-azul-denso  p-8 rounded-xl w-[90%] max-w-lg">
            <h2 className="font-notosans font-bold text-xl text-white mb-4">Excluir objetivo</h2>
            <p className="font-notosans text-sm lg:text-base text-white mb-6">
              Tem certeza que deseja excluir o objetivo{" "}
              <strong>{objetivoSelecionado?.titulo}</strong>?
            </p>
            <div className="flex flex-col justify-between gap-2">
              <button
                onClick={confirmarDeletarObjetivo}
                className="bg-vermelho h-10 px-4 py-2 rounded-md font-inter font-semibold text-sm lg:text-base text-white tracking-wide"
              >
                Excluir
              </button>
              <button
                onClick={fecharModalDeletar}
                className="bg-preto h-10  px-4 py-2 rounded-md font-inter font-semibold text-sm lg:text-base text-white tracking-wide"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
