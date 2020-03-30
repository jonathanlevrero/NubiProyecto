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
          <div className={styles.seccionValor}>
            <input type="text" placeholder="0" name="monto" id="monto" />
            <label>Indicá el monto en Dólares</label>
            <label className={styles.inputRadio} htmlFor="recarga">RECARGA
              <input type="radio" checked="checked" id="recarga" name="tipodeoperacion" value="recarga"/>
              <span className={styles.marcado}></span>
            </label>
            <label className={styles.inputRadio} htmlFor="retiro">RETIRO
              <input type="radio" id="retiro" name="tipodeoperacion" value="retiro"/>
              <span className={styles.marcado}></span>
            </label>
          </div>
          <div className={styles.flecha}>
            <img src={Flecha} alt="Boton para Calcular" />
          </div>
          <div className={styles.seccionValor}>
            <input type="text" placeholder="0" name="resultado" id="resultado"/>
            <label>Monto estimado (Tarifa incluída)</label>
            <label className={styles.inputRadio} htmlFor="pesos">ARS
              <input type="radio" checked="checked" id="pesos" name="tipodemoneda" value="pesos"/>
              <span className={styles.marcado}></span>
            </label>
            <label className={styles.inputRadio} htmlFor="dolares">U$S
              <input type="radio" id="dolares" name="tipodemoneda" value="dolares"/>
              <span className={styles.marcado}></span>
            </label>
          </div>
        </form>
        <button className={styles.boton}>Registrate Gratis</button>
      </div>
    );
  }
}

export default Calculadora;
