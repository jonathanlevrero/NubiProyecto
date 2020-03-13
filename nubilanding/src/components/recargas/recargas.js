import React from 'react'
import styles from '../recargas/styles.module.scss'

class Recargas extends React.Component {
    render () {
        return (
            <div className={styles.contenedorGeneral}>  
                <div className={styles.contenedorRecarga}>
                    <h2 className={styles.titulos}>Recargá tu cuenta PayPal</h2>
                    <p className= {styles.textoRecargas}>
                        Con Nubi agregá dinero a tu cuenta PayPal desde tu banco y comprá en todo el mundo sin tajeta de crédito. ¡Si no tenés cuenta PayPal creátela desde Nubi en unos simples pasos! 
                    </p>
                    <p className= {styles.textoRecargas}>
                        El costo de la recarga es de 5% + IVA sobre la tarifa.
                    </p>
                    <button className={styles.boton}>Registrate Gratis</button>
                </div>
                <div className={styles.contenedorAhorra}>
                    <h2 className={styles.titulos}>Ahorrá en tus compras online</h2>
                    

                </div>
            </div>
        ) ;
    };
};

export default Recargas;