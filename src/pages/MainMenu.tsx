import "./MainMenu.css";

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
      <div className="content-wrapper">
        {/* CABECERA (Header de la imagen) */}
        <header className="main-header">
          <div className="brand-section">
            <div className="brand-icon"></div>
            <span>BILLAR 3 BANDAS</span>
          </div>
          <div className="version-section">
            <span>v1.0 · 2026</span>
          </div>
        </header>

        {/* AQUÍ IRÍA EL RESTO DEL MENÚ (TÍTULO Y BOTONES) */}
        {/* (Eso lo vemos si quieres en la siguiente pregunta) */}
        <main className="text-white text-center mt-24">
          {/* Ejemplo temporal para el título central */}
          <h1 className="uppercase tracking-[2px] font-orbitron font-bold">
            Torneo
          </h1>
          <h2 className="text-[#0aff56] uppercase font-orbitron tracking-[4px]">
            3 Bandas
          </h2>
        </main>
      </div>
    </div>
  );
};

export default MainMenu;
