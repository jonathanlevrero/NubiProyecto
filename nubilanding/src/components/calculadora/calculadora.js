import React from "react";
import styles from "../calculadora/styles.module.scss";
import Flecha from "../../assets/ic_calculator_arrow.svg";

class Calculadora extends React.Component {
  render() {
    return (
      <div className={styles.contenedor}>
        <div>
          <h2 className={styles.titulo}>Calculá tu retiro o recarga</h2>
        </div>
        <form className={styles.calculadora}>
          <div className= {styles.seccionValor}>
            <input type='text' value='0' name='valor' id='valor' />
            <label>Indicá el monto en Dólares</label>
            <input type='radio' id='recarga' name='tipooperacion' value='recarga' />
            <label htmlFor='recarga'>RECARGA</label>
            <input type='radio' id='retiro' name='tipooperacion' value='retiro' />
            <label htmlFor='retiro'>RETIRO</label>
          </div>
          <div className={styles.flecha}>
          <img src={Flecha} alt='Boton para Calcular' />
          </div>
          <div className={styles.seccionValor}> 
            <input type='text' value='0' name='resultado' id='resultado' />
            <label>Monto estimado (Tarifa incluída)</label>
            <input type='radio' name='tipomoneda' value='Pesos' />
            <label>ARS</label>
            <input type='radio' name='tipomoneda' value='Dolares' />
            <label>U$S</label>
          </div> 
        </form>
        <button className={styles.boton}>Registrate Gratis</button>
      </div>
    );
  }
}

export default Calculadora;
