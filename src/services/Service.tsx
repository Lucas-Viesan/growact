import axios from "axios";
import type Usuario from "../models/Usuario";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

export async function cadastrarUsuario(
  url: string,
  dados: Omit<Usuario, "id">
) {
  try {
    const resposta = await api.post(url, {
      ...dados,
      id: undefined, // Garante que o id não será enviado
    });
    return resposta.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // ...
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const login = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};
