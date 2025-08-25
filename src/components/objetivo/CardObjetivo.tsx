import { useContext, useEffect, useState } from "react";
import BarraProgresso from "../progressBar/BarraProgresso";
import type Objetivo from "../../models/Objetivo";
import { buscar } from "../../services/Service";
import ModalTarefa from "../modal/ModalTarefa";
import { Tarefa as TarefaItem } from "../tarefa/Tarefa";
import { TailSpin } from "react-loader-spinner";
import type Tarefa from "../../models/Tarefa";
import { AuthContext } from "../../contexts/AuthContext";

interface CardObjetivoProps {
  objetivo: Objetivo;
  aoEditar: (objetivo: Objetivo) => void;
  aoDeletar: (objetivo: Objetivo) => void;
  aoConcluir?: (objetivo: Objetivo) => void;
}

export function CardObjetivo({
  objetivo,
  aoEditar,
  aoDeletar,
  aoConcluir,
}: CardObjetivoProps) {
  const [modalAberto, setModalAberto] = useState(false);
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [progresso, setProgresso] = useState(0);

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const buscarTarefas = async () => {
    setCarregando(true);
    try {
      await buscar(
        `/tarefas/objetivo/${objetivo.id}`,
        (dados: Tarefa[]) => {
          setTarefas(dados);

          // Calcula o progresso com base nas tarefas concluídas
          const total = dados.length;
          const concluidas = dados.filter((t) => t.concluido).length;
          const percentual =
            total > 0 ? Math.round((concluidas / total) * 100) : 0;
          setProgresso(percentual);

          if (percentual === 100) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          aoConcluir && aoConcluir(objetivo);
        }
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (erro) {
      console.error("Erro ao buscar tarefas:", erro);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarTarefas();
  }, [objetivo.id]);

  function aoFecharModal() {
    setModalAberto(false);
    buscarTarefas(); // Atualiza tarefas após adicionar
  }

  return (
    <div className="flex flex-col items-center w-[350px] lg:w-[410px] h-[465px] lg:h-[447px] bg-preto rounded-xl p-4 box-border">
      <div className="w-[331px] lg:w-[380px] h-[137px] lg:h-[122px] bg-cinza/10 rounded-xl lg:p-3 p-4">
        <div className="flex flex-row justify-between">
          <div className="flex items-center justify-center w-[76px] h-[27px] bg-azul-profundo2 rounded-md p-1">
            <p className="font-inter text-xs text-azul-destaque">OBJETIVO</p>
          </div>
          <div className="flex flex-row w-[72px] justify-between">
            <button
              className="flex items-center justify-center w-8 h-8 bg-bege rounded-md"
              onClick={() => aoEditar(objetivo)}
            >
              <img
                className="w-5 h-5"
                src="./src/assets/editar.png"
                alt="Editar"
              />
            </button>
            <button
              className="flex items-center justify-center w-8 h-8 bg-vermelho rounded-md"
              onClick={() => aoDeletar(objetivo)}
            >
              <img
                className="w-5 h-5"
                src="./src/assets/delete.png"
                alt="Deletar"
              />
            </button>
          </div>
        </div>
        <h4 className="font-notosans font-bold text-branco text-base lg:text-lg mt-4 lg:mt-2">
          {objetivo.titulo}
        </h4>
        <BarraProgresso progress={progresso} />
      </div>

      <div className="w-[331px] lg:w-[380px] h-[273px] bg-cinza/10 rounded-xl mt-4 pl-2  lg:pl-4 pr-1 pt-4 pb-4 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-notosans font-normal text-base lg:text-xl text-branco">
            Tarefas para atingir o objetivo
          </h3>
          {objetivo.percentual < 100 && (
          <button
            onClick={() => setModalAberto(true)}
            className="w-11 h-11 bg-gradient-to-b from-azul-noite to-azul-forte rounded-[22px] font-bold text-branco text-base mr-2"
          >
            +
          </button>
          )}
        </div>

        {carregando ? (
          <div className="flex justify-center mt-6">
            <TailSpin height="30" width="30" color="#4CE0C3" />
          </div>
        ) : (
          <div className="mt-4 overflow-y-auto flex-1 scrollbar-thin-hide">
            {tarefas.map((tarefa) => (
              <TarefaItem
                key={tarefa.id}
                tarefa={tarefa}
                onUpdate={buscarTarefas}
              />
            ))}
          </div>
        )}
      </div>

      {modalAberto && (
        <ModalTarefa objetivoId={objetivo.id} fecharModal={aoFecharModal} />
      )}
    </div>
  );
}
