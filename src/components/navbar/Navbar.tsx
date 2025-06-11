import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [menuAberto, setMenuAberto] = useState(false);

  function logout() {
    handleLogout();
    alert("Usuário desconectado com sucesso!");
    navigate("/");
    setMenuAberto(false);
  }

  return (
    <div className="absolute top-0 left-0 flex items-center justify-between bg-transparent h-20 w-full border-b border-azul-stroke px-4 lg:px-8">
      <Link to="/">
        <img src="/src/assets/logo-container.png" alt="Logo" />
      </Link>

      {usuario.token === "" ? (
        <Link to="/login">
          <button className="bg-branco text-preto hover:bg-azul-destaque hover:text-branco w-16 h-8 lg:w-20 lg:h-10 rounded-3xl transition-colors">
            Login
          </button>
        </Link>
      ) : (
        <>
          {/* Menu Desktop */}
          <div className="hidden md:flex items-baseline gap-6">
            <Link
              to="/home"
              className="text-branco hover:text-azul-destaque transition-colors"
            >
              Início
            </Link>
            <Link
              to="/perfil"
              className="text-branco hover:text-azul-destaque transition-colors"
            >
              Perfil
            </Link>
            <button
              onClick={logout}
              className="bg-branco text-preto hover:bg-azul-destaque hover:text-branco w-16 h-8 lg:w-20 lg:h-10 rounded-3xl transition-colors"
            >
              Sair
            </button>
          </div>

          {/* Botão Hamburguer Mobile */}
          <button
            onClick={() => setMenuAberto(true)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-azul-escuro to-azul-profundo/22"
          >
            <div className="w-5 h-0.5 bg-branco mb-1"></div>
            <div className="w-5 h-0.5 bg-branco mb-1"></div>
            <div className="w-5 h-0.5 bg-branco"></div>
          </button>

          {/* Modal Mobile */}
          {menuAberto && (
            <div className="fixed inset-0 bg-preto z-50 flex flex-col items-center justify-center">
              <button
                onClick={() => setMenuAberto(false)}
                className="absolute top-6 right-6 text-branco text-4xl"
              >
                &times;
              </button>

              <div className="flex flex-col gap-10 text-2xl">
                <Link
                  to="/home"
                  onClick={() => setMenuAberto(false)}
                  className="text-branco hover:text-azul-claro transition-colors"
                >
                  Início
                </Link>
                <Link
                  to="/perfil"
                  onClick={() => setMenuAberto(false)}
                  className="text-branco hover:text-azul-claro transition-colors"
                >
                  Perfil
                </Link>
                <button
                  onClick={logout}
                  className="bg-branco text-preto hover:bg-azul-claro hover:text-branco px-10 py-3 rounded-3xl transition-colors"
                >
                  Sair
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
