import React from "react";
import styles from "../registrarse/styles.module.scss";

function Registrarse() {
  return (
    <div className={styles.contenedorGeneral}>
      <h1 className={styles.titulo}>Tu cuenta Nubi en sólo 2 minutos</h1>
      <button className={styles.boton}>Registrate Gratis</button>
    </div>
  );
}

export default Registrarse;
