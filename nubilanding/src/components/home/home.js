import React from 'react';
import styles from './styles.module.scss';
import NubiPaypal from '../../assets/img_logo_nubi_paypal.svg';
import Celular from '../../assets/img_main_section_phone.png'
function Home() {
    return (
        <div>
            <div className={styles.contenedor}>
                <div className={styles.nubipaypal}>
                    <img className={styles.NubiPaypallogo} src={NubiPaypal} alt="Nubi Logo Paypal" />
                </div>

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
