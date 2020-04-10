import React from "react";
import styles from "./styles.module.scss";

function TerminosCondiciones() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorTitulo}>
        <h1>Términos y Condiciones</h1>
      </div>
      <h2 className={styles.tituloSecundario}>
        Los presentes términos y condiciones regulan tu relación con Nubi
        respecto de las operaciones de retiro y recarga de tus fondos en tu
        cuenta PayPal. Por favor lee bien las mismas antes de operar.
      </h2>
      <div className={styles.contenedorInformacion}>
        <h2>1) ¿Quiénes somos?</h2>
        <p>
          Nubi S.A. es (en adelante Nubi) una sociedad comercial argentina
          creada para ofrecerte productos y servicios financieros innovadores.
          Por eso nos hemos aliado con PayPal Pte. Ltd. (en adelante PayPal)
          para ofrecerte el presente Servicio de Retiros.
        </p>
        <p>
          Tené en cuenta que Nubi es una sociedad independiente de PayPal, no
          tiene relación societaria con ella, ni es una sucursal ni representa a
          la misma. Por eso, a excepción del Servicio de Retiros y Recargas, no
          vas a poder operar a través de Nubi tu cuenta PayPal, por lo que las
          operaciones de compra, transferencias de saldos a terceros, etc. tenés
          que seguir haciéndolas a través de la web de PayPal o de su
          aplicación. De igual manera cualquier consulta respecto de los
          movimientos de tu cuenta PayPal que no tengan relación directa con el
          Servicio de Retiros y/o Recargas, deberás hacerla directamente a
          PayPal por sus canales habituales.
        </p>
        <p>
          Nubi podrá ofrecerte una interfaz para registrarte en PayPal a través
          de nuestra web, sin embargo las condiciones de la cuenta PayPal las
          determina PayPal y deberás aceptarlas cuando te registres en dicha
          plataforma.
        </p>
        <p>
          Nubi no es un banco ni una entidad regulada por la ley de entidades
          financieras 21.526 ni es una casa de cambios por lo que las
          transferencias y operaciones de cambio se realizarán a través de
          entidades reguladas por la normativa vigente.
        </p>
        <h2>2)Definiciones</h2>
        <p>
          Para que sean más claros estos términos y condiciones, cuando aquí
          mencionemos las siguientes palabras tendrán el significado que acá se
          determina:
        </p>
        <p>
          A) &nbsp;&nbsp;&nbsp;<i>Servicio de Recargas:</i> es el servicio detallado en los
          presentes términos y condiciones, que se resumen en la cláusula 4.
        </p>
        <p>
          B) &nbsp;&nbsp;&nbsp;<i>Servicio de Retiros:</i> es el servicio detallado en los
          presentes términos y condiciones, que se resumen en la cláusula 3.
        </p>
        <p>
          C) &nbsp;&nbsp;&nbsp;<i>Cuenta PayPal:</i> se refiere a tu cuenta PayPal en donde operás
          habitualmente.
        </p>
        <p>
          D) &nbsp;&nbsp;&nbsp;<i>Cuenta Nubi:</i> es tu cuenta de registro en Nubi.
        </p>
        <p>
          E) &nbsp;&nbsp;&nbsp;<i>Cuenta Bancaria:</i> se refiere a la cuenta (caja de ahorros o
          cuenta corriente) de tu titularidad que tengas abierta en cualquier
          banco y que será la que reciba los fondos que quieras retirar.
        </p>
        <p>
          F) &nbsp;&nbsp;&nbsp;<i>Tipo de Cambio:</i> es el tipo de cambio utilizado para
          convertir, de ser necesario, los montos en dólares a pesos.
        </p>
        <h2>3)¿Qué es el Servicio de Retiros? </h2>
        <p>
          El Servicio de Retiros te da la posibilidad de recibir en tu Cuenta
          Bancaria todo o parte del saldo de tu Cuenta PayPal dentro de los 3
          días hábiles de solicitado el retiro, en la medida que tu banco tenga
          habilitadas las transferencias inmediatas. Tené en cuenta que se
          cuentan días hábiles de Argentina y Estados Unidos porque los fondos
          de tu cuenta PayPal están radicados en ese país.
        </p>
        <p>
          Como el saldo de la Cuenta PayPal es en dólares, si tu Cuenta Bancaria
          es en pesos vas a recibir el saldo en pesos al Tipo de Cambio vigente
          del día en el que se distribuyen los fondos.
        </p>
        <p>
          Tené en cuenta que por la normativa vigente sólo <b>podrás retirar fondos
          de tu Cuenta PayPal provenientes de operaciones de venta de bienes y/o
          servicios que hayas realizado con extranjeros.</b>
        </p>
      </div>
    </div>
  );
}

export default TerminosCondiciones;
