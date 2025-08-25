import { useEffect, useState, useContext } from "react";
import { buscar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";
import type Usuario from "../../models/Usuario";
import ListarObjetivo from "../../components/objetivo/ListarObjetivo";

type Objetivo = {
  id: number;
  titulo: string;
  concluido: boolean;
  percentual: number;
  usuario: Usuario;
};

type ResumoPerfil = {
  nome: string;
  email: string;  
  totalObjetivosConcluidos: number;
  totalObjetivosPendentes: number;
  totalTarefasConcluidas: number;
  totalTarefasPendentes: number;
  objetivosConcluidos: Objetivo[];
};

export function Profile() {
  const { usuario } = useContext(AuthContext); // pega usuário logado
  const [resumo, setResumo] = useState<ResumoPerfil | null>(null);

useEffect(() => {
  const buscarResumo = async () => {
    if (usuario.id !== 0 && usuario.token) {
      try {
        await buscar(`/usuarios/resumo-perfil/${usuario.id}`, setResumo, {
          headers: { Authorization: usuario.token },
        });
      } catch (error) {
        console.error("Erro ao buscar resumo:", error);
      }
      console.log("Token salvo:", `"${usuario.token}"`);
    }
  };

  buscarResumo();
}, [usuario]);



  return (
    <div className="flex flex-col justify-start min-h-screen h-auto bg-gradient-to-b from-preto to-azul-escuro2 pt-28">
      <div className="flex flex-col lg:flex-row justify-between lg:items-start  p-8 lg:px-8">
        <div className="flex flex-row">
          <div className="w-[70px] lg:w-[108px] h-[70px] lg:h-[108px] rounded-[35px] lg:rounded-[54px] bg-branco"></div>
          <div className="flex flex-col p-4">
            <h3 className="font-inter font-bold text-sm lg:text-3xl text-branco pb-2">
              Olá, seja bem vindo!
            </h3>
            <div className="flex flex-row">
              <p className="font-bold text-branco text-[10px] lg:text-sm ">Nome: </p>
              <p className="font-light text-branco text-[10px] lg:text-sm ml-2">
                {resumo?.nome}
              </p>
            </div>
            <div className="flex flex-row">
              <p className="font-bold text-branco text-[10px] lg:text-sm">Email:</p>
              <p className="font-light text-branco text-[10px] lg:text-sm ml-2">
                {resumo?.email}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-items-center justify-between  w-[100%] lg:w-[300px] h-[152px] mt-8 lg:mt-0">
          <h5 className="font-bold font-inter text-center text-branco text-base">Minhas Atividades</h5>
          <div className="flex flex-row justify-around mt-2">
            <div className="w-[140px] h-[60px] rounded-3xl bg-preto">
              <p className="text-xs text-acinzentado2 text-center pt-1">Objetivos Pendentes</p>
              <p className="font-bold text-base text-branco text-center mt-2">
                {resumo?.totalObjetivosPendentes}
              </p>
            </div>
            <div className="w-[140px] h-[60px] rounded-3xl bg-preto">
              <p className="text-xs text-acinzentado2 text-center pt-1">Objetivos Concluídos</p>
              <p className="font-bold text-base text-branco text-center mt-2">
                {resumo?.totalObjetivosConcluidos}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-around mt-2">
            <div className="w-[140px] h-[60px] rounded-3xl bg-preto">
              <p className="text-xs text-acinzentado2 text-center pt-1">Tarefas Pendentes</p>
              <p className="font-bold text-base text-branco text-center mt-2">{resumo?.totalTarefasPendentes}</p>
            </div>
            <div className="w-[140px] h-[60px] rounded-3xl bg-preto">
              <p className="text-xs text-acinzentado2 text-center pt-1">Tarefas Concluídos</p>
              <p className="font-bold text-base text-branco text-center mt-2">{resumo?.totalTarefasConcluidas}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-inter font-bold text-4xl text-branco lg:px-8">
        Objetivos concluídos
      </h2>

        {resumo?.objetivosConcluidos && resumo.objetivosConcluidos.length > 0 && (
        <div className="mt-4">
            <ListarObjetivo
            objetivos={resumo.objetivosConcluidos}
            aoEditar={() => {}}
            aoDeletar={() => {}}
             aoConcluir={() => {}}
            />
        </div>
        )}

    </div>
  );
}
