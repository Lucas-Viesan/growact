import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-preto to-azul-base min-h-screen h-auto pt-24">
        <div className="flex flex-col lg:flex-row lg:justify-between w-96 lg:w-full h-auto px-5">
          <div className="lg:w-2/5 lg:ml-4">
            <h1 className="font-urbanist font-bold text-6xl lg:text-8xl text-gradiente-custom">
              Cresça com atitude
            </h1>
            <p className="w-xs font-urbanist text-azul-gelo text-xl lg:text-3xl text-justify lg:text-left mt-4 mb-4 lg:mt-8 lg:mb-8">
              Aqui, cada tarefa concluída é um passo rumo ao seu crescimento.
              Assuma o controle dos seus objetivos e avance com foco e
              disciplina.
            </p>
            <Link to="/register">
            <button className="w-32 h-16 lg:w-44  bg-gradient-to-r from-azul-escuro to-azul-profundo rounded-xl transform transition-all duration-300 hover:scale-105 hover:brightness-110 hover:from-azul-profundo hover:to-azul-noite">
              <span className="font-urbanist font-bold text-gradiente-custom text-base lg:text-xl ">
                Comece agora
              </span>
            </button>
            </Link>
          </div>
          <div className=" h-auto flex justify-center lg:justify-between mt-8 lg:mr-2">
            <img
              className="lg:h-[400px] lg:w-[680px]"
              src="/src/assets/Macbook-Air-.png"
            />

          </div>
        </div>

        <div className="w-96 lg:w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-4 p-8">
          <div className="flex flex-col  items-center justify-center w-80 lg:w-[412px] h-36 lg:h-60 bg-gradient-to-b from-azul-escuro to-azul-profundo rounded-xl p-4">
            <span className="h-17 font-urbanist font-bold text-4xl lg:text-6xl text-gradiente-custom">
              Organize
            </span>
            <span className="font-urbanist font-bold text-2xl lg:text-4xl text-gradiente-custom ">
              seus objetivos
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-80 lg:w-[412px] h-36 lg:h-60 bg-gradient-to-b from-azul-escuro to-azul-profundo rounded-xl p-4">
            <span className="font-urbanist font-bold text-4xl lg:text-6xl text-gradiente-custom">
              Execute
            </span>
            <span className="flex-col font-urbanist font-bold text-2xl lg:text-4xl text-gradiente-custom">
              suas tarefas
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-80 lg:w-[412px] h-36 lg:h-60 bg-gradient-to-b from-azul-escuro to-azul-profundo rounded-xl p-4">
            <span className="font-urbanist font-bold text-4xl lg:text-6xl text-gradiente-custom">
              Evolua
            </span>
            <span className="font-urbanist font-bold text-2xl lg:text-4xl text-gradiente-custom">
              atingindo-os 100%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
