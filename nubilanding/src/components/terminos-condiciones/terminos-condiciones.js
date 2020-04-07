import React from "react";
import styles from "./styles.module.scss";

function TerminosCondiciones() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorTitulo}>
        <h1>Términos y Condiciones</h1>
      </div>
      <div className={styles.contenedorTituloSecundario}>
        <h2>
          Los presentes términos y condiciones regulan tu relación con Nubi
          respecto de las operaciones de retiro y recarga de tus fondos en tu
          cuenta PayPal. Por favor lee bien las mismas antes de operar.
        </h2>
      </div>
      <div className={styles.contenedorInformacion}>
        <h2 className={styles.tituloSeccion}>1) ¿Quiénes somos?</h2>
        <p className={styles.texto}></p>
      </div>
    </div>
  );
}

export default TerminosCondiciones;
