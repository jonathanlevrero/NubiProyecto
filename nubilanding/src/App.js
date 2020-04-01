import React from 'react';
import './App.css';
import Home from './components/home/home';
import Recargas from "./components/recargas/recargas";
import Retiros from "./components/retiros/retiros";
import Registrarse from "./components/registrarse/registrarse";

function App() {
  return (
    <div className="App">
      <Home />
      <Recargas />
      <Retiros />
      <Registrarse />
    </div>
  );
}
export default App;
