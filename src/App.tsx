import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainMenu from "@/pages/MainMenu";
import TorneoNuevo from "@/pages/TorneoNuevo";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/juego" element={<TorneoNuevo />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
