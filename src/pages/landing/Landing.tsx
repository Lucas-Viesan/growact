import React from "react";

function Landing() {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-preto to-azul-base min-h-screen h-auto pt-24">
        <div className="flex flex-col lg:flex-row lg:justify-between w-96 lg:w-full h-auto px-5 ">
          <div className="lg:w-1/2">
            <h1 className="font-urbanist font-bold text-6xl lg:text-8xl text-gradiente-custom">
              Cresça com atitude
            </h1>
            <p className="lg:w-lg font-urbanist text-azul-gelo text-xl lg:text-3xl text-left mt-4 mb-4">
              Aqui, cada tarefa concluída é um passo rumo ao seu crescimento.
              Assuma o controle dos seus objetivos e avance com foco e
              disciplina.
            </p>
            <button className="w-32 h-16 bg-gradient-to-r from-azul-escuro to-azul-profundo rounded-xl">
              <span className="font-urbanist font-bold text-gradiente-custom text-base">
                Comece agora
              </span>
            </button>
          </div>
          <div className=" h-auto flex justify-center lg:justify-between mt-4">
            <img className="lg:h-[450px]" src="/src/assets/iPhone-13.png" />
          </div>
        </div>

        <div className="w-96 lg:w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-4 p-8">
          <div className="flex flex-col  items-center justify-center w-72 lg:w-[412px] h-36 lg:h-60 bg-gradient-to-b from-azul-escuro to-azul-profundo rounded-xl p-4">
            <span className="font-urbanist font-bold text-4xl text-gradiente-custom">
              Organize
            </span>
            <span className="font-urbanist font-bold text-2xl text-gradiente-custom">
              seus objetivos
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-72 lg:w-[412px] h-36 lg:h-60 bg-gradient-to-b from-azul-escuro to-azul-profundo rounded-xl p-4">
            <span className="font-urbanist font-bold text-4xl text-gradiente-custom">
              Execute
            </span>
            <span className="flex-col font-urbanist font-bold text-2xl text-gradiente-custom">
              suas tarefas
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-72 lg:w-[412px] h-36 lg:h-60 bg-gradient-to-b from-azul-escuro to-azul-profundo rounded-xl p-4">
            <span className="font-urbanist font-bold text-4xl text-gradiente-custom">
              Evolua
            </span>
            <span className="font-urbanist font-bold text-2xl text-gradiente-custom">
              atingindo-os 100%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
