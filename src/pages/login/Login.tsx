import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen h-auto bg-gradient-to-b from-preto to-azul-base pt-24">
        <div className="w-[330px] lg:w-[480px] h-auto bg-gradient-to-b from-azul-escuro to-azul-profundo rounded-3xl pt-7 px-4 lg:px-6 lg:mb-4">
          <div className="flex flex-col items-center ">
            <img src="/assets/logo-container.png" />
          </div>
          <h5 className="font-notosans font-bold text-branco pt-8">
            Bem vindo!{" "}
          </h5>
          <p className="font-notosans text-sm text-azul-gelo pt-4">
            Digite seu e-mail abaixo para acessar o Growact e transformar sua
            organização pessoal em evolução real!
          </p>
          <form
            className="flex flex-col justify-center items-center w-[298px] lg:w-[432px]"
            onSubmit={login}
          >
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
                value={usuarioLogin.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
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
                type="password"
                id="senha"
                name="senha"
                placeholder="senha"
                className="bg-transparent border-2 border-azul-agua rounded-lg text-branco focus:border-branco focus:outline-none p-2 mt-2"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <button
              type="submit"
              className="w-[298px] lg:w-[432px] h-14 bg-azul-oceano rounded-xl mt-8 font-notosans font-bold text-base text-azul-gelo flex justify-center items-center"
            >
              {" "}
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Entrar</span>
              )}
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
