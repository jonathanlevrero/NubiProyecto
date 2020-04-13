import React from "react";
import styles from "../calculadora/styles.module.scss";
import Flecha from "../../assets/ic_calculator_arrow.svg";

class Calculadora extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
    this.onChange = this.onChange.bind(this);
  }
 
  onChange(e) {
    const regExp = /^[0-9\b]+$/;
    if (e.target.value === "" || regExp.test(e.target.value)) {
      this.setState({ value: e.target.value });
    } else {
      alert("El campo solo acepta numeros");
    }
  }
  
  render() {
    return (
      <div className={styles.contenedor}>
        <h2 className={styles.titulo}>Calculá tu retiro o recarga</h2>
        <form className={styles.calculadora}>
          <div className={styles.seccionValor}>
            <input type="text" maxLength="6" value={this.state.value} onChange={this.onChange}  placeholder="0" name="monto" id="monto" />
            <label className={styles.textoMontoInput}>
              Indicá el monto en Dólares
            </label>
            <label className={styles.inputRadio} htmlFor="retiro">
              RETIRO
              <input className={styles.inputCheck} type="radio" id="retiro" name="tipodeoperacion" value="retiro"/>
              <span className={styles.marcado}/>
            </label>
            <label className={styles.inputRadio} htmlFor="recarga">
              RECARGA
              <input className={styles.inputCheck} type="radio" disabled="disabled" id="recarga" name="tipodeoperacion" value="recarga"/>
              <span className={styles.marcado}/>
            </label>
          </div>
          <div className={styles.flecha}>
            <img src={Flecha} alt="Boton para Calcular" />
          </div>
          <div className={styles.seccionValor}>
            <input className={styles.inhabilitado} type="text" maxLength="6" readOnly="readonly" placeholder="0" name="resultado" id="resultado"/>
            <label className={styles.textoMontoInput}>
              Monto estimado (Tarifa incluída)
            </label>
            <label className={styles.inputRadio} htmlFor="pesos">
              ARS
              <input className={styles.inputCheck} type="radio" id="pesos" name="tipodemoneda" value="pesos"/>
              <span className={styles.marcado}/>
            </label>
            <label className={styles.inputRadio} htmlFor="dolares">
              U$S
              <input className={styles.inputCheck} type="radio" disabled="disabled" id="dolares" name="tipodemoneda" value="dolares"/>
              <span className={styles.marcado}/>
            </label>
          </div>
        </form>
        <button className={styles.boton}>Registrate Gratis</button>
      </div>
    );
  }
}

export default Calculadora;
