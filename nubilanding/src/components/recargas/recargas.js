import React from "react";
import styles from "../recargas/styles.module.scss";
import LogoPlay from "../../assets/img_logo_playstation.png";
import LogoForever from "../../assets/img_logo_forever21.png";
import LogoTwitch from "../../assets/img_logo_twitch.png";
import LogoTripAdvisor from "../../assets/img_logo_tripadvisor.png";
import LogoAirbnb from "../../assets/img_logo_airbnb.png";
import LogoEbay from "../../assets/img_logo_ebay.png";
import LogoTiendaMia from "../../assets/img_logo_tiendamia.png";
import LogoCarters from "../../assets/img_logo_carters.png";
import LogoOrigin from "../../assets/img_logo_origin.png";

function Recargas() {
  return (
    <div className={styles.contenedorGeneral}>
      <div className={styles.contenedorRecarga}>
        <p id="recargas" className={styles.titulos}>Recargá tu cuenta PayPal</p>
        <p className={styles.textoRecargas}>
          Con Nubi agregá dinero a tu cuenta PayPal desde tu banco y comprá en
          todo el mundo sin tajeta de crédito. ¡Si no tenés cuenta PayPal
          creátela desde Nubi en unos simples pasos!
        </p>
        <p className={styles.textoRecargas}>
          El costo de la recarga es de 5% + IVA sobre la tarifa.
        </p>
        <button className={styles.boton}>Registrate Gratis</button>
      </div>
      <div className={styles.contenedorAhorra}>
        <h2 className={styles.titulos}>Ahorrá en tus compras online</h2>
        <div className={styles.contenedorLogos}>
          <img className={styles.logo} src={LogoPlay} alt="Logo Playstation Store"/>
          <img className={styles.logo} src={LogoForever} alt="Logo Forever 21"/>
          <img className={styles.logo} src={LogoTwitch} alt="Logo Twitch" />
          <img className={styles.logo} src={LogoTripAdvisor} alt="Logo Trip Advisor"/>
        </div>
        <div className={styles.contenedorLogos}>
          <img className={styles.logo} src={LogoAirbnb} alt="Logo Airbnb" />
          <img className={styles.logo} src={LogoEbay} alt="Logo Ebay" />
          <img className={styles.logo} src={LogoTiendaMia} alt="Logo Tienda Mia"/>
          <img className={styles.logo} src={LogoCarters} alt="Logo Carter's" />
          <img className={styles.logo} src={LogoOrigin} alt="Logo Origin" />
        </div>
      </div>
    </div>
  );
}

export default Recargas;
