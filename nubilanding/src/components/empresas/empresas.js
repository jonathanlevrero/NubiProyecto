import React from "react";
import styles from "./styles.module.css";
import Logos from "../../assets/paypal-nubi-logos.svg";
import GloboTerraquio from "../../assets/reputacion.png";
import Chanchito from "../../assets/acreditacion.png";
import Escudo from "../../assets/seguridad.png";
import Billetera from "../../assets/financiamiento.png";
import Mano from "../../assets/retiros.png";
import Form from "./form";

function Empresas() {
	return (
		<div className={styles.contenedorGeneral}>
			<div className={styles.contenedorTitulo}>
				<img src={Logos} alt="Logos de PayPal y Nubi" className={styles.logos} />
				<h1>Ofrece <em>PayPal</em> y facilita el pago a tus <br />clientes extranjeros
				<br /><span>y retira con <em>Nubi</em> a tu banco en Argentina.</span></h1>
			</div >
			<div className={styles.contenedorTexto}>
				<p>Abrí una cuenta para ofrecer a tus clientes <strong>opciones de pago seguras</strong> y vendé más con
				<br /><strong>PayPal</strong>. Accedé a nuestras <strong>tarifas preferenciales</strong> y comenza a <strong>hacer crecer tu negocio</strong>.</p>
			</div>
			<div className={styles.imagenesParrafos}>
				<div className={styles.imgP}>
					<img src={GloboTerraquio} alt="GloboTerraquio" />
					<p><b>Reputación</b> <br />internacional</p>
				</div>
				<div className={styles.imgP}>
					<img src={Chanchito} alt="Alcancia de chanchito" />
					<p><b>Acreditación</b><br />inmediata</p>
				</div>
				<div className={styles.imgP}>
					<img src={Escudo} alt="Escudo de seguridad" />
					<p><b>Seguridad</b> detección <br />de fraude</p>
				</div>
				<div className={styles.imgP}>
					<img src={Billetera} alt="Billetera" />
					<p><b>Financiamiento</b> <br />gratuito</p>
				</div>
				<div className={styles.imgP}>
					<img src={Mano} alt="Icono de dinero sobre una mano" />
					<p><b>Retiros</b> a cuenta <br />bancaria</p>
				</div>
			</div>
				<Form />
		</div>
	);
}

export default Empresas;
