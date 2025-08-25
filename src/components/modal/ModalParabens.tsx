import type Objetivo from "../../models/Objetivo";

interface ModalParabensProps {
  objetivo: Objetivo;
  fecharModal: () => void;
}

export function ModalParabens({ objetivo, fecharModal }: ModalParabensProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-preto to-azul-denso p-8 rounded-xl w-[90%] max-w-lg text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Parabéns!</h2>
        <p className="text-white mb-6">
          Você concluiu o objetivo <strong>{objetivo.titulo}</strong> 🎉
        </p>
        <button
          onClick={fecharModal}
          className="bg-verde px-6 py-2 rounded-md text-white font-bold"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
