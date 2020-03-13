import React from 'react';
import styles from './styles.module.scss';

function Home() {
    return (
        <div>
            <div className={styles.contenedor}>

                <div className={styles.titulo}>
                    <h2 className={styles.textotitulo}> Cobrá con Paypal y retirá a tu banco</h2>
                    

                </div>
                <button className={styles.boton}>
                        Registrate gratis
                    </button>
            </div>
            <div>
                <div>un cuadradito</div>
                <div>el otro cuadradito</div>
            </div>
        </div>
    );
}














export default Home;
