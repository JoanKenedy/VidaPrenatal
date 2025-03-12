import tailwindcss from "tailwindcss";

export default {
  plugins: [
    tailwindcss(),
    require("autoprefixer"), // Si también usas autoprefixer
  ],
};
