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
          <a title="instagram" href="https://www.instagram.com/nubiok/?hl=es-la"><img className={styles.logoInstagram} src={LogoInstagram} alt="Logo Instagram" /></a>
          <a title="twitter" href="https://twitter.com/nubiok"><img className={styles.logoTwitter} src={LogoTwitter} alt="Logo Twitter" /></a>
          <a title="facebook" href="https://www.facebook.com/nubiok/"><img className={styles.logoFacebook} src={LogoFacebook} alt="Logo Facebook" /></a>
          <a title="youtube" href="https://www.youtube.com/channel/UCOtlyKb29AGGAyxpBoL1YNQ"><img className={styles.logoYoutube} src={LogoYoutube} alt="Logo Youtube" /></a>
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
}

export default Footer;
