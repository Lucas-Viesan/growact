import type Objetivo from "../../models/Objetivo";

interface ModalParabensProps {
  objetivo: Objetivo;
  fecharModal: () => void;
}

export function ModalParabens({ objetivo, fecharModal }: ModalParabensProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
  <div className="bg-gradient-to-b from-preto to-azul-denso p-8 rounded-xl w-[90%] max-w-lg flex flex-col items-center text-center">
    <h2 className="text-5xl font-bold text-white mb-4">Parabéns!</h2>
    <p className="text-white text-xl mb-6">
      Você concluiu o objetivo: <strong>{objetivo.titulo}</strong>
    </p>
    <img 
      src="/assets/trofeu.png" 
      className="w-[150px] h-[150px] mb-6"
    />
    <button
      onClick={fecharModal}
      className="bg-azul-oceano h-10 font-inter font-semibold text-sm lg:text-base text-white tracking-wide px-6 py-2 rounded-md"
    >
      Fechar
    </button>
  </div>
</div>

  );
}
