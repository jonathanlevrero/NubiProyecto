import React from "react";
import "./App.css";
import Home from "./components/home/home";
import Calculadora from "./components/calculadora/calculadora";
import Recargas from "./components/recargas/recargas";
import Retiros from "./components/retiros/retiros";
import Registrarse from "./components/registrarse/registrarse";
import Beneficios from "./components/beneficios/beneficios";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Calculadora />
      <Recargas />
      <Retiros />
      <Beneficios />
      <Registrarse />
      <Footer />
    </div>
  );
}
export default App;
