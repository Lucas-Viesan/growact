import type Objetivo from "./Objetivo";

export default interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  foto: string;
  objetivo?: Objetivo[] | null;
}
