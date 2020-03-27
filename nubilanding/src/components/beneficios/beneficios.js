import React from 'react';
import styles from './styles.module.scss';
 
function  Beneficios() {
    return(
            <div className= {styles.contenedorGeneral}>
                <div className={styles.contenedorBeneficios}>
                    <div className={styles.contenedorParrafos}>
                        <h2 className={styles.titulo}>Rápido.</h2>
                        <p className={styles.guion}>-</p>  
                        <p className={styles.texto}>Realizá tu recarga o retiro de tu cuenta PayPal con solo unos clicks.</p>
                    </div>
                    <div className={styles.subContenedor}>
                        <h2 className={styles.titulo}>Simple.</h2>
                        <p className={styles.guion}>-</p>
                        <p className={styles.texto}>Olvidate de los papeleos inagotables. Con Nubi hacé todo en 4 simples pasos desde donde quieras.</p>
                    </div>
                    <div className={styles.subContenedor}>
                        <h2 className={styles.titulo}>Seguro.</h2>
                        <p className={styles.guion}>-</p>
                        <p className={styles.texto}>Contamos con monitoreo de fraudes 24/7 y cubrimos 100% de las transacciones no autorizadas verificadas.</p>
                    </div>
                    <div className={styles.subContenedor}>
                        <h2 className={styles.titulo}>Transparente.</h2>
                        <p className={styles.guion}>-</p>
                        <p className={styles.texto}>Conocé dónde está tu dinero en todo momento.
                        <br></br> Sin comisiones ocultas.</p>
                    </div>
                </div>{/* contenedorBeneficios */} 
                <botton className={styles.boton}>Registrate Gratis</botton>

            </div>/*contnedorGeneral */
        );
}

export default Beneficios;
