import React from 'react';
import Home from "./components/home/home";
import Calculadora from "./components/calculadora/calculadora";
import Recargas from "./components/recargas/recargas";
import Retiros from "./components/retiros/retiros";
import Registrarse from "./components/registrarse/registrarse";
import Beneficios from "./components/beneficios/beneficios";
import Footer from "./components/footer/footer";
import Blog from "./components/blog/blog";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Calculadora />
      <Recargas />
      <Retiros />
      <Beneficios />
      <Blog />
      <Registrarse />
      <Footer />
    </div>
  );
}
export default App;
