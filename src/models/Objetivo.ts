import type Tarefa from "./Tarefa";
import type Usuario from "./Usuario";

export default interface Objetivo {
  id: number;
  titulo: string;
  concluido: boolean;
  percentual: number;
  usuario: Usuario | null;
  tarefa?: Tarefa[] | null;
}
