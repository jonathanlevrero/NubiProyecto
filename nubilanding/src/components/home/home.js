import React from 'react';
import styles from './styles.module.scss';
import NubiPaypal from '../../assets/nubi-paypal-logo.svg';
import Celular from '../../assets/img_main_section_phone@2x.png';
import Play from '../../assets/ic_play.svg';
import Main from "../main/main";
/*import Calculadora from "../calculadora/calculadora";
import Recargas from "../recargas/recargas";
import Retiros from "../retiros/retiros";
import Registrarse from "../registrarse/registrarse";
import Beneficios from "../beneficios/beneficios";
import Blog from "../blog/blog";*/

function Home() {
  return (
    <div>
      <div className={styles.contenedor}>
        <div className={styles.nubipresentacion}>
          <div className={styles.nubipaypal}>
            <img className={styles.NubiPaypallogo} src={NubiPaypal} alt="Nubi Logo Paypal" />
          </div>
          <div className={styles.titulo}>
            <h2 id="home" className={styles.textotitulo}>
              Cobrá con Paypal y retirá a tu banco
            </h2>
          </div>
          <button className={styles.boton}>
            Registrate Gratis
          </button>
        </div>
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
          <div className={styles.botonflex}>
            <button title="retiros" href="https://www.youtube.com/watch?v=Q9UQA4bCgZc" className={styles.miraelvideo}>
              <img className={styles.play} src={Play} alt="Boton Play" />

              <a title="retiros" href="https://www.youtube.com/watch?v=Q9UQA4bCgZc"><p1 className={styles.txtmiraelvideo}>Mirá el video</p1></a>
            </button>
            <button className={styles.vermas}>
              Ver más
            </button>
          </div>
        </div>
        <div>
          <div className={styles.contenedor3}>
            <h2 className={styles.paypal}>
              Recargas Paypal
            </h2>
            <p1 className={styles.textopaypal}>
              Recargá plata con Nubi, comprá con Paypal
            </p1>
            <div className={styles.botonflex}>
              <button className={styles.miraelvideo}>
                <img className={styles.play} src={Play} alt="Boton Play" />
                <a title="recargas" href="https://www.youtube.com/watch?v=5TJfwKvRke0"><p1 className={styles.txtmiraelvideo}>
                  Mirá el video
                </p1></a>
              </button>
              <button className={styles.vermas}>
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
      <Main />
    </div>
  );
}

export default Home;
