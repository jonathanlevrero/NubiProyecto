import React from 'react';
import styles from './styles.module.scss';
import fondo from '../../assets/bg_main_about_us.png';
import logoNacion from '../../assets/la_nacion_logo.jpg';

function Prensa() {
  return (
    <div>
        <img src={fondo} alt="pintura abstracta" className={styles.fondoPrensa}/>
        <h1>Prensa</h1>
        <botton>Press kit</botton>
        <h2>Esto dicen de nosotros.</h2>
        <p>En caso de querer contactarnos, estaríamos más que contentos en hablar con ustedes. Solo nos tienen que escribir a prensa@tunubi.com!</p>
        <div className={styles.imagenesParrafos}>
        <img src={logoNacion} alt="pintura abstracta" className={styles.fondoPrensa}/>
        <p>PayPal y Nubi presentan un servicio para recarga de saldo desde cualquier banco local</p>
        </div>
    </div>
  );
}

export default Prensa;