import type Objetivo from "./Objetivo";

export default interface Tarefa {
  id: number;
  descricao: string;
  concluido: boolean;
  objetivo: Objetivo | null;
}
