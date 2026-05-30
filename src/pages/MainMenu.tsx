import { useNavigate } from "react-router-dom";
import "./MainMenu.css";
import { Plus, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const MainMenu = () => {
  const navigate = useNavigate();

  const manejarCrearTorneo = () => {
    //futuro guardado de datos
    console.log("Guardando datos del torneo...")

    navigate("/juego")
  }

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
            <div className="w-6 h-6 rounded-full border border-border-success shadow-[0_0_5px_rgba(20,230,108,0.65)]"></div>
            <span>BILLAR 3 BANDAS</span>
          </div>
          <div className="text-right">
            <span className="text-meta-text">v1.0 · 2026</span>
          </div>
        </header>

        {/* RESTO DEL MENÚ (TÍTULO Y BOTONES) */}
        <main className="flex items-center justify-center flex-col text-center mt-24 text-title-highlight font-orbitron">
          <p className="uppercase text-xl tracking-[0.4em]">
            Sistema de gestión
          </p>
          <h1 className="uppercase tracking-tighter leading-none mb-2 text-6xl md:text-7xl font-bold bg-linear-to-b from-title-light from-60% to-title-dark bg-clip-text text-transparent">
            Torneo
          </h1>
          <h2 className="text-subtitle text-4xl uppercase font-semibold tracking-[0.2em] ml-4">
            3 Bandas
          </h2>
          <Dialog>
            <DialogTrigger>
              <button className="flex justify-center items-center gap-4 uppercase rounded-full bg-linear-to-r from-button-start to-button-end text-white py-3 px-10 my-5 font-semibold cursor-pointer hover:brightness-105 transition-all shadow-[0_0_25px_5px_rgba(25,171,79,0.5)]">
                <Plus
                  className="rounded-full bg-white"
                  color="var(--menu-button-start)"
                  size={16}
                />
                Nuevo torneo
              </button>
            </DialogTrigger>
            <DialogContent className="bg-dialog-bg" showCloseButton={false}>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold font-orbitron text-white">
                  Nuevo Torneo
                </DialogTitle>
                <DialogDescription>
                  Asigna un nombre para identificar este torneo
                </DialogDescription>
              </DialogHeader>
              <div>
                <Input
                  id="input-create-tournament"
                  placeholder="Ej: Torneo Primavera 2026"
                  className="border-input-border placeholder:text-input-placeholder bg-input-bg focus-visible:ring-0 focus-visible:ring-offset-0 p-5"></Input>
              </div>
              <DialogFooter className="flex items-center justify-center bg-dialog-bg border-none">
                <DialogClose className="flex-1">
                  <Button
                    className="cursor-pointer text-input-placeholder bg-input-bg border border-input-border hover:border-border-danger w-full h-10"
                    variant={"destructive"}>
                    Cerrar
                  </Button>
                </DialogClose>
                <Button
                  onClick={manejarCrearTorneo}
                  className="flex-1 bg-button-start-alpha text-white cursor-pointer hover:bg-[#19ab4f] p-4 h-10">
                  Crear & Abrir
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </div>
      <div>
        <div className="flex items-center flex-col py-12 relative z-20 gap-8">
          <div className="rounded-full bg-ring-bg border border-ring-border p-5">
            <Trophy size={24} color="var(--menu-ring-border)" />
          </div>
          <p className="text-meta-text">
            Aún no hay torneos. Crea el primero con el botón de arriba.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
