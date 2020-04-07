import React from "react";
import styles from "./styles.module.scss";
import AlianzaNubiPaypal from "../../assets/img_nosotros_alianza.svg";

function Nosotros() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorTitulo}>
        <h1>Nosotros.</h1>
      </div>
      <div className={styles.contenedorInformacion}>
        <h2 className={styles.tituloSeccion}>¿Qué nos hace diferentes?</h2>
        <p className={styles.texto}>
          <b>
            Somos un grupo de personas trabajando todos los días para renovar la
            forma en la que ves y manejás tus finanzas.
          </b>{" "}
          Abrazamos los desafíos porque creemos que aplicando creatividad e
          innovación podemos lograr un cambion sustancial en la industria
          financiera tal cual la conocemos.
        </p>
        <p className={styles.texto}>
          Nubi es un startup que nació para <b>crear oportunidades,</b> para
          darle la posibilidad a todas las personas a que accedan a distintos
          productos financieros de manera{" "}
          <b>simple, segura, rápida y transparente.</b>
        </p>
        <p className={styles.texto}>
          Tenemos un <b>Equipo de Experiencia del Cliente</b> especializado para
          para resolver todas las consultas e inquietudes que tengas de manera{" "}
          <b>personal, cercana y efectiva.</b>
        </p>
        <p className={styles.texto}>
          Te entendemos, la experiencia bancaria tiene que cambiar. Te invitamos
          a que descubras y seas parte de Nubi.
        </p>
        <p className={styles.texto}>#ExperienciaNubi</p>
        <p className={styles.texto}>
          Si compartís nuestra misma visión y queres ser parte de nuestro
          equipo, mandanos tu CV a <b>sumate@tunubi.com</b>
        </p>
      </div>
      <div className={styles.contenedorInformacion}>
        <h2 className={styles.tituloSeccion}>Una alianza sin fronteras...</h2>
        <img className={styles.imagenAlianza} src={AlianzaNubiPaypal} alt="Logo Alianza Nubi Ṕaypal" />
        <p className={styles.texto}>
          <b>
            Formamos una alianza estratégica con PayPal, ofreciendo dos
            productos que facilitan la compraventa de bienes y servicios a
            muchísimas personas.
          </b>
        </p>
        <p className={styles.texto}>
          <b>-Con Retiros,</b> incentivamos a las PYMEs, freelancers y
          emprendedores a que abran sus puertas al resto del mundo, facilitando
          el cobro de sus ventas y retirando su saldo PayPal directamente a una
          cuenta bancaria local.
        </p>
        <p className={styles.texto}>
          <b>-Con Recargas,</b> ayudamos a quienes no tienen tarjeta de crédito
          internacional a que puedan comprar online transfiriendo directamente
          desde su cuenta bancaria para recargar saldo en PayPal.
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
