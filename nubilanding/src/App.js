import React from 'react';
import './App.css';
import Home from './components/home/home';
import Recargas from './components/recargas/recargas';
import Retiros from './components/retiros/retiros';

function App() {
  return (
    <div className="App">
      <Home />
      <Recargas />
      <Retiros />
    </div>
  );
}
export default App;
