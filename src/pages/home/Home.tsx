import { CardObjetivo } from "../../components/objetivo/CardObjetivo";

export function Home() {
  return (
    <>
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
              <button className="w-32 h-16 lg:w-44 bg-gradient-to-r from-azul-escuro to-azul-profundo rounded-xl mt-4">
                <span className="font-urbanist font-bold text-gradiente-custom text-base lg:text-xl">
                  Criar objetivo
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center py-8 lg:p-8">
          <CardObjetivo />
        </div>
      </div>
    </>
  );
}
