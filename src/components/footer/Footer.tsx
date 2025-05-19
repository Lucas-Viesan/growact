import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-preto to-azul-denso h-40 w-full lg:bg-gradient-to-r from-preto to-azul-denso lg:h-24 w-full px-4 lg:px-8">
      <img src="/src/assets/logo-container.png" />
      <div className="text-azul-acinzentado flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <a>Termo de Uso</a>
        <a>Politica de Privacidade</a>
        <a>Enviar Feedback</a>
      </div>
    </div>
  );
}

export default Footer;
