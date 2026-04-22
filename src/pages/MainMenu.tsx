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
            <span className="text-[#524f37]">v1.0 · 2026</span>
          </div>
        </header>

        {/* RESTO DEL MENÚ (TÍTULO Y BOTONES) */}
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
          <Dialog>
            <DialogTrigger>
              <button className="flex justify-center items-center gap-4 uppercase rounded-full bg-linear-to-r from-[#19ab4f] to-[#21c15b] text-white py-3 px-10 my-5 font-semibold cursor-pointer hover:brightness-105 transition-all shadow-[0_0_25px_5px_rgba(25,171,79,0.5)]">
                <Plus
                  className="rounded-full bg-white"
                  color="#19ab4f"
                  size={16}
                />
                Nuevo torneo
              </button>
            </DialogTrigger>
            <DialogContent className="bg-[#0e1c10]" showCloseButton={false}>
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
                  className="border-[#1c4e2d] placeholder:text-[#9ca2ae] bg-[#1c271d] focus-visible:ring-0 focus-visible:ring-offset-0 p-5"></Input>
              </div>
              <DialogFooter className="flex items-center justify-center bg-[#0e1c10] border-none">
                <DialogClose className="flex-1">
                  <Button
                    className="cursor-pointer text-[#9ca2ae] bg-[#1c271d] border border-[#1c4e2d] hover:border-[#e7000b] w-full h-10"
                    variant={"destructive"}>
                    Cerrar
                  </Button>
                </DialogClose>
                <Button className="flex-1 bg-[#19ab4f5b] text-white cursor-pointer hover:bg-[#19ab4f] p-4 h-10">
                  Crear & Abrir
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </div>
      <div>
        <div className="flex items-center flex-col py-12 relative z-20 gap-8">
          <div className="rounded-full bg-[#09502770] border border-[#0a6831a6] p-5">
            <Trophy size={24} color="#0a6831a6" />
          </div>
          <p className="text-[#524f37]">
            Aún no hay torneos. Crea el primero con el botón de arriba.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
