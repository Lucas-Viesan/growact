import { Link } from "react-router-dom";
import BarraProgresso from "../progressBar/BarraProgresso";

export function CardObjetivo() {
  return (
    <>
      <div className="flex flex-col items-center w-[350px] lg:w-[410px] h-[477px] lg:h-[447px] bg-preto rounded-xl py-4">
        <div className="w-[331px] lg:w-[380px] h-[137px] lg:h-[122px] bg-cinza/10 rounded-xl lg:p-3 p-4">
          <div className="flex flex-row justify-between">
            <div className="flex items-center justify-center w-[76px] h-[27px] bg-azul-profundo2 rounded-md p-1">
              <p className="font-inter text-xs text-azul-destaque">OBJETIVO</p>
            </div>
            <div className="flex flex-row w-[72px] justify-between">
              <Link to="">
                <button className="flex items-center justify-center w-8 h-8 bg-bege rounded-md">
                  <img className="w-5 h-5" src="./src/assets/editar.png"></img>
                </button>
              </Link>
              <Link to="">
                <button className="flex items-center justify-center w-8 h-8 bg-vermelho rounded-md">
                  <img className="w-5 h-5" src="./src/assets/delete.png"></img>
                </button>
              </Link>
            </div>
          </div>
          <h4 className="font-noto-sans font-bold text-branco mt-4 lg:mt-2">
            Ser densenvolvedor full stack
          </h4>
          <BarraProgresso />
        </div>
        <div className="w-[331px] lg:w-[380px] h-[273px] bg-cinza/10 rounded-xl mt-4"></div>
      </div>
    </>
  );
}
