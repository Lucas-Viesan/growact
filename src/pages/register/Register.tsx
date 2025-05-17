import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen h-auto bg-gradient-to-b from-preto to-azul-base pt-24 pb-4">
        <div className="w-[330px] lg:w-[480px] h-auto bg-gradient-to-b from-azul-escuro to-azul-profundo rounded-3xl pt-7 px-4 lg:px-6">
          <div className="flex flex-col items-center">
            <img src="/src/assets/logo-container.png" />
          </div>
          <h5 className="font-notosans font-bold text-branco pt-8">
            Novo Cadastro{" "}
          </h5>
          <p className="font-notosans text-sm text-azul-gelo pt-4">
            Crie sua conta e comece a organizar suas tarefas, acompanhar seu
            progresso e alcançar seus objetivos com mais motivação!
          </p>
          <form className="flex flex-col justify-center items-center w-[298px] lg:w-[432px]">
            <div className="flex flex-col w-full mt-4">
              <label
                className="font-notosans font-normal text-sm text-branco"
                htmlFor="Nome"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Ex: José da Silva"
                className="bg-transparent border-2 border-azul-agua rounded-lg text-branco focus:border-branco focus:outline-none p-2 mt-2"
              />
            </div>
            <div className="flex flex-col w-full mt-4">
              <label
                className="font-notosans font-normal text-sm text-branco"
                htmlFor="Email"
              >
                E-mail
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email@exemplo.com"
                className="bg-transparent border-2 border-azul-agua rounded-lg text-branco focus:border-branco focus:outline-none p-2 mt-2"
              />
            </div>
            <div className="flex flex-col w-full mt-4">
              <label
                className="font-notosans font-normal text-sm text-branco"
                htmlFor="Foto"
              >
                Foto
              </label>
              <input
                type="text"
                id="Foto"
                name="foto"
                placeholder="https://minhasfotos.com/perfil.jpg"
                className="bg-transparent border-2 border-azul-agua rounded-lg text-branco focus:border-branco focus:outline-none p-2 mt-2"
              />
            </div>
            <div className="flex flex-col w-full mt-4">
              <label
                className="font-notosans font-normal text-sm text-branco"
                htmlFor="Senha"
              >
                Senha
              </label>
              <input
                type="text"
                id="senha"
                name="senha"
                placeholder="senha"
                className="bg-transparent border-2 border-azul-agua rounded-lg text-branco focus:border-branco focus:outline-none p-2 mt-2"
              />
            </div>
            <div className="flex flex-col w-full mt-4">
              <label
                className="font-notosans font-normal text-sm text-branco"
                htmlFor="Confirmar senha"
              >
                Confirmar Senha
              </label>
              <input
                type="text"
                id="confirmar senha"
                name="confirmar senha"
                placeholder="confirmar senha"
                className="bg-transparent border-2 border-azul-agua rounded-lg text-branco focus:border-branco focus:outline-none p-2 mt-2"
              />
            </div>
            <button
              type="submit"
              className="w-[298px] lg:w-[432px] h-14 bg-azul-oceano rounded-xl mt-8 font-notosans font-bold text-base text-azul-gelo"
            >
              Cadastrar
            </button>
            <Link
              to="/login"
              className="font-notosans font-semibold text-sm text-branco mt-8 mb-4"
            >
              Já possui uma conta? Faça seu login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
