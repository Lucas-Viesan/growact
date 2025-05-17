import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen h-auto bg-gradient-to-b from-preto to-azul-base pt-24">
        <div className="w-[330px] lg:w-[480px] h-auto bg-gradient-to-b from-azul-escuro to-azul-profundo rounded-3xl pt-7 px-4 lg:px-6">
          <div className="flex flex-col items-center ">
            <img src="/src/assets/logo-container.png" />
          </div>
          <h5 className="font-notosans font-bold text-branco pt-8">
            Bem vindo{" "}
          </h5>
          <p className="font-notosans text-sm text-azul-gelo pt-4">
            Digite seu e-mail abaixo para acessar o Growact e transformar sua
            organização pessoal em evolução real!
          </p>
          <form className="flex flex-col justify-center items-center w-[298px] lg:w-[432px]">
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
            <button
              type="submit"
              className="w-[298px] lg:w-[432px] h-14 bg-azul-oceano rounded-xl mt-8 font-notosans font-bold text-base text-azul-gelo"
            >
              Cadastrar
            </button>
            <Link
              to="/register"
              className="font-notosans font-semibold text-sm text-branco mt-8 mb-4"
            >
              Não tem uma conta? Faça seu cadastro aqui
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
