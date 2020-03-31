import React from "react";
import styles from "../footer/styles.module.scss";
import LogoNubi from "../../assets/img_logo_nubi_white.svg";
import LogoPaypal from "../../assets/secured_paypal.png";
import LogoInstagram from "../../assets/ic_footer_instagram.svg";
import LogoTwitter from "../../assets/ic_footer_twitter.svg";
import LogoFacebook from "../../assets/ic_footer_facebook.svg";
import LogoYoutube from "../../assets/ic_footer_youtube.svg";

function Footer() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorLogoNubi}>
        <img src={LogoNubi} alt="Logo Nubi" />
        <p>
          Copyright © 2017. <b>Nubi</b> S.A
        </p>
      </div>
      <div className={styles.contenedorLogoPaypal}>
        <img src={LogoPaypal} alt="Logo Paypal" />
      </div>
      <div className={styles.seguinos}>
        <h2>Seguinos!</h2>
        <div className={styles.logosRedes}>
          <button><img src={LogoInstagram} alt="Logo Instagram" /></button>
          <button><img src={LogoTwitter} alt="Logo Twitter" /></button>
          <button><img src={LogoFacebook} alt="Logo Facebook" /></button>
          <button><img src={LogoYoutube} alt="Logo Youtube" /></button>
        </div>
      </div>
      <div className={styles.contenedorBotones}>
        <button>Ayuda</button>
        <button>Términos y condiciones</button>
        <button>Nosotros</button>
        <button>Privacidad</button>
        <button>Nuestro blog</button>
        <button>Prensa</button>
      </div>
    </div>
  );
};

export default Footer;
