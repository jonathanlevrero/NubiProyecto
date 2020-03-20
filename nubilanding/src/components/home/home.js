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
                <div className={styles.ContenedorCelular}>
                    <img className={styles.Celular} src={Celular} alt="Celular" />

                </div>

            </div>
        
        
        <div className={styles.contenedorespequeños}>
            <div className={styles.contenedor2}>
                <h2 className={styles.paypal}>
                    Retiros Paypal
                    </h2>
                <p1 className={styles.textopaypal}>
                    Vendé con Paypal, retirá tu plata con Nubi
                    </p1>
                <button className={styles.miraelvideo}>
                    Mirá el video
                    </button>
                <button className={styles.vermas}>
                    Ver más
                    </button>
            </div>
            <div>
                <div className={styles.contenedor3}>
                    <h2 className={styles.paypal}>
                        Recargas Paypal
                    </h2>
                    <p1 className={styles.textopaypal}>
                        Recargá plata con Nubi, comprá con Paypal
                    </p1>
                    <button className={styles.miraelvideo}>
                        Mirá el video
                    </button>
                    <button className={styles.vermas}>
                        Ver más
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}














export default Home;
