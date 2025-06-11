// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azul: {
          // Tons da 1ª página
          base: "#0F293C",
          intenso: "#0C0D46",
          escuro: "#0C1E2B",
          profundo: "#0A3858",
          claro: "#4CE0C3",
          gelo: "#B7F2E6",
          acinzentado: "#7EA4D7",
          denso: "#062032",
          stroke: "#0C0D46",

          // Tons da 2ª página
          destaque: "#2C85FC",
          escuro2: "#12486E",
          profundo2: "#0D284C",
          vivo: "#004EF6",
          forte: "#2D70FF",
          noite: "#062361",

          // Tons da 3ª página
          base3: "#0F293C", // mesmo que da página 1
          escuro3: "#0C1E2B", // mesmo que da página 1
          profundo3: "#0A3858", // mesmo que da página 1
          agua: "#06BEE1",
          oceano: "#1C879B",
        },

        // Cores adicionais
        preto: "#03070C",
        preto2: "#07111C",
        cinza: "#705F5F",
        acinzentado: "#27272A",
        branco: "#ffffff",
        lilas: "#B805FF",
        bege: "#574C10",
        vermelho: "#661818",
      },

      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
        urbanist: ["Urbanist", ...fontFamily.sans],
        notosans: ["Noto Sans", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradiente-custom": {
          backgroundImage: "linear-gradient(to right, #4CE0C3 0%, #B805FF 58%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      });
    },
  ],
};
