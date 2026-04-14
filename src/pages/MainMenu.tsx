import "./MainMenu.css";
import { Plus } from "lucide-react";

const MainMenu = () => {
  return (
    <div className="game-layout-container">
      {/* CAPA VISUAL DE FONDO (LAS LUCES) */}
      <div className="background-orbs">
        <div className="orb orb-top-right"></div>
        <div className="orb orb-bottom-left"></div>
        <div className="orb orb-bottom-right"></div>
      </div>

      {/* CONTENIDO DE LA PÁGINA (Encima de la rejilla y luces) */}
      <div className="content-wrapper relative z-20">
        <header className="relative z-10 flex items-center justify-between px-10 py-5 text-xs uppercase tracking-[2px]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-[#14e66c] shadow-[0_0_5px_rgba(20,230,108,0.65)]"></div>
            <span>BILLAR 3 BANDAS</span>
          </div>
          <div className="text-right">
            <span>v1.0 · 2026</span>
          </div>
        </header>

        {/* AQUÍ IRÍA EL RESTO DEL MENÚ (TÍTULO Y BOTONES) */}
        <main className="flex items-center justify-center flex-col text-center mt-24 text-[#0fa54d] font-orbitron">
          <p className="uppercase text-xl tracking-[0.4em]">
            Sistema de gestión
          </p>
          <h1 className="uppercase tracking-tighter leading-none mb-2 text-6xl md:text-7xl font-bold bg-linear-to-b from-[#e6e6e6] from-60% to-[#2c2e2f] bg-clip-text text-transparent">
            Torneo
          </h1>
          <h2 className="text-[#13ce61] text-4xl uppercase font-semibold tracking-[0.2em] ml-4">
            3 Bandas
          </h2>
          <button className="flex justify-center items-center gap-4 uppercase rounded-full bg-linear-to-r from-[#19ab4f] to-[#21c15b] text-white py-3 px-10 my-5 font-semibold cursor-pointer hover:brightness-105 transition-all shadow-[0_0_25px_5px_rgba(25,171,79,0.5)]">
            <Plus className="rounded-full bg-white" color="#19ab4f" size={16} />
            Nuevo torneo
          </button>
        </main>
      </div>
    </div>
  );
};

export default MainMenu;
