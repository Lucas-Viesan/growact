import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function Register() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    email: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {}

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario);
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      } catch {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

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
          <form
            className="flex flex-col justify-center items-center w-[298px] lg:w-[432px]"
            onSubmit={cadastrarNovoUsuario}
          >
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
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
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
                value={usuario.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
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
                value={usuario.foto}
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
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
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
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="confirmar senha"
                className="bg-transparent border-2 border-azul-agua rounded-lg text-branco focus:border-branco focus:outline-none p-2 mt-2"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
              />
            </div>
            <button
              type="submit"
              className="w-[298px] lg:w-[432px] h-14 bg-azul-oceano rounded-xl mt-8 font-notosans font-bold text-base text-azul-gelo"
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
                <span>Cadastrar</span>
              )}
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
