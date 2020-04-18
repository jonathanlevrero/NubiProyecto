import React from 'react';
import Home from "./components/home/home";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
/*import Calculadora from "./components/calculadora/calculadora";
import Recargas from "./components/recargas/recargas";
import Retiros from "./components/retiros/retiros";
import Registrarse from "./components/registrarse/registrarse";
import Beneficios from "./components/beneficios/beneficios";
import Blog from "./components/blog/blog";*/


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Main />
      {/*<Calculadora />
      <Recargas />
      <Retiros />
      <Beneficios />
      <Blog />
      <Registrarse />*/}
      <Footer />
    </div>
  );
}
export default App;
