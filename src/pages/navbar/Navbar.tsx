import React from "react";

export function Navbar() {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-between bg-transparent h-20 w-full border-b border-azul-destaque px-4 lg:px-8 ">
      <img src="/src/assets/logo-container.png" />
      <button className="bg-branco w-16 h-8 lg:w-20 lg:h-10 rounded-3xl">
        login
      </button>
    </div>
  );
}
