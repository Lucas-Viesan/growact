import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import type TarefaType from "../../models/Tarefa";
import { Tarefa } from "../tarefa/Tarefa";

interface Props {
  objetivoId: number;
}

export default function ListarTarefa({ objetivoId }: Props) {
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTarefas() {
    try {
      await buscar(`/tarefas/objetivo/${objetivoId}`, setTarefas, {
        headers: { Authorization: token },
      });
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  }

  useEffect(() => {
    buscarTarefas();
  }, [objetivoId]);

  return (
    <>
      {tarefas.map((tarefa: TarefaType) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </>
  );
}
