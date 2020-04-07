import React from 'react';
import styles from './styles.module.scss';
import btnDescarga from '../../assets/img_presskit_download.svg';
import logoNacion from '../../assets/la_nacion_logo.jpg';
import logoIprofesional from '../../assets/iprofesional.png';
import logoInfo from '../../assets/info_technology.png';
import logoCronista from '../../assets/el_cronista_logo.png';
import logoTrade from '../../assets/trade_logo.png';
import logoRs from '../../assets/rs_logo.jpg';
import logoApertura from '../../assets/apertura_logo.png';

function Prensa() {
  return (
    <div className={styles.contenedorGeneral}>
      <div className={styles.contenedorTitulo}>
        <h1>Prensa</h1>
      </div>
      <botton className={styles.boton}>
        <img src={btnDescarga} alt="boton descarga" className={styles.flecha} />
        <p className={styles.textoFlecha}>Press Kit</p>
      </botton>
      <div className={styles.contenedorDos}>
        <h2 className={styles.subtitulo}>Esto dicen de nosotros.</h2>
        <p className={styles.textoUno}>En caso de querer contactarnos, estaríamos más que contentos en hablar con ustedes. Solo nos tienen que escribir a</p>
        <p className={styles.textoDos}>prensa@tunubi.com!</p>
      </div>
      <div className={styles.imagenesParrafos}>
        <div className={styles.contenedorTres}>
          <img src={logoNacion} alt="logo La Nación" className={styles.logo} />
          <p className={styles.textoAzul}>La Nación</p>
          <p className={styles.texto}>PayPal y Nubi presentan un servicio para recarga de saldo desde cualquier banco local</p>
        </div>
        <div className={styles.contenedorTres}>
          <img src={logoIprofesional} alt="logo iProfesional" className={styles.logo} />
          <p className={styles.textoAzul}>iProfesional</p>
          <p className={styles.texto}>Nubi permitirá cargar crédito en PayPal desde cuentas bancarias argentinas</p>
        </div>
        <div className={styles.contenedorTres}>
          <img src={logoInfo} alt="logo Info Technology" className={styles.logo} />
          <p className={styles.textoAzul}>Info Technology</p>
          <p className={styles.texto}>Una empresa local se asoció con PayPal para facilitar los pagos al exterior</p>
        </div>
        <div className={styles.contenedorTres}>
          <img src={logoCronista} alt="logo El Cronista" className={styles.logo} />
          <p className={styles.textoAzul}>El Cronista</p>
          <p className={styles.texto}>Un banco y una fintech internacional permitirán hacer pagos al exterior</p>
        </div>
        <div className={styles.contenedorTres}>
          <img src={logoNacion} alt="logo La Nación" className={styles.logo} />
          <p className={styles.textoAzul}>La Nación</p>
          <p className={styles.texto}>Mello, Borchardt y Cerviño: "El mercado argentino es uno de los más emprendedores"</p>
        </div>
        <div className={styles.contenedorTres}>
          <img src={logoNacion} alt="logo La Nación" className={styles.logo} />
          <p className={styles.textoAzul}>La Nación</p>
          <p className={styles.texto}>Cash converter: herramientas para tener buenos números</p>
        </div>
        <div className={styles.contenedorTres}>
          <img src={logoTrade} alt="logo Trade Radio FM" className={styles.logo} />
          <p className={styles.textoAzul}>Trade Radio FM</p>
          <p className={styles.texto}>Martín Borchardt en Trade Radio</p>
        </div>
        <div className={styles.contenedorTres}>
          <img src={logoCronista} alt="logo El Cronista" className={styles.logo} />
          <p className={styles.textoAzul}>El Cronista</p>
          <p className={styles.texto}>PayPal desembarca en la Argentina de la mano del Comafi</p>
        </div>
        <div className={styles.contenedorTres}>
          <img src={logoCronista} alt="logo El Cronista" className={styles.logo} />
          <p className={styles.textoAzul}>El Cronista</p>
          <p className={styles.texto}>PayPal y Banco Comafi anunciaron alianza</p>
        </div>
      </div>
      <div className={styles.ultimosContenedores}>
        <div className={styles.contenedorCuatro}>
          <img src={logoRs} alt="logo Read Show" className={styles.logo} />
          <p className={styles.textoAzul}>Road Show</p>
          <p className={styles.texto}>Más competencia en el negocio de envío de dinero: llegó Paypal</p>
        </div>
        <div className={styles.contenedorCuatro}>
          <img src={logoApertura} alt="logo Apertura" className={styles.logo} />
          <p className={styles.textoAzul}>Apertura</p>
          <p className={styles.texto}>PayPal se alió con Banco Comafi y ya permite depositar pagos internacionales en cuentas locales</p>
        </div>
      </div>
    </div>
  );
}

export default Prensa;
