import React from "react";
import styles from "./styles.module.scss";

class Form extends React.Component {

  state = { nombreApellido: "", urlEmpresa: "", telefono: "", email: "", gender: "" };

  render() {
    return (
      <div className={styles.contenedor}>
        <form>
          <label htmlFor="nombreApellido" >Nombre y Apellido:</label>
          <input type="text" id="nombreApellido" name="nombreApellido" value={this.state.nombreApellido} onChange={this.onChange}></input>
          <label htmlFor="urlEmpresa" >Web de la empresa:</label>
          <input type="text" id="urlEmpresa" name="urlEmpresa" value={this.state.urlEmpresa} onChange={this.onChange}></input>
          <div className={styles.contenedorInputs}>
            <div className={styles.subContenedorInput}>
              <label htmlFor="telefono" >Teléfono:</label>
              <input type="number" id="telefono" name="telefono" value={this.state.telefono} onChange={this.onChange} className={styles.anteUlTimos}></input>
            </div>
            <div className={styles.subContenedorInput}>
              <label htmlFor="email" >Mail:</label>
              <input type="email" id="email" name="email" value={this.state.email} onChange={this.onChange} className={styles.anteUlTimos}></input>
            </div>
          </div>

          <label className={styles.labelRadio} >¿Tenés cuenta en PayPal? </label>
          <div className={styles.segundoForm}>
            <input type="radio" id="Si" name="genero" value="Si" onChange={this.onChange} className={styles.ultimoInput} />
            <label htmlFor="Si" className={styles.ultimoLabel} >Si</label>
            <input type="radio" id="No" name="genero" value="No" onChange={this.onChange} className={styles.ultimoInput} />
            <label htmlFor="No" className={styles.ultimoLabel} >No</label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Form;
