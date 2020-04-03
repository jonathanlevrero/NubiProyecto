import React from "react";
import styles from "./styles.module.scss";
import LogoISO from "../../assets/Isologo.jpg";

function Privacidad() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorTitulo}>
        <h1>Política de privacidad Nubi</h1>
      </div>
      <div className={styles.contenedorTituloSecundario}>
        <h2>
          Nubi respeta tu privacidad y por eso te contamos que hacemos con la
          información que compartís con nosotros ahora.
        </h2>
      </div>
      <div className={styles.contenedorInformacion}>
        <div>
          <h2 className={styles.tituloSeccion}>Recopilación y uso de datos.</h2>
          <p className={styles.texto}>
            Cuando ingreses a nuestra web <b>www.tunubi.com</b> y nos dejes tus
            datos, los mismos serán objeto de tratamiento automatizado e
            incorporada a la base de Nubi.
          </p>
          <p className={styles.texto}>
            La información que nos compartas la vamos a utilizar exclusivamente
            para mejorar tu experiencia con Nubi así como para informarte de
            productos y servicios que te puedan interesar. Con la información
            que tengamos vamos a:
          </p>
          <p className={styles.texto}>
            A. Desarrollar estudios internos sobre tus intereses,
            comportamientos y demografía para comprender mejor tus necesidades e
            intereses y ofrecer mejores producto y/o servicios y mejorar la
            experiencia de usuario en nuestra web. Generar perfiles.
          </p>
          <p className={styles.texto}>
            B. Comunicarnos con vos para contarte novedades de Nubi, de nuevos
            productos que tengamos y otro tipo de información publicitaria de
            Nubi o de alguno de sus socios comerciales.
          </p>
          <p className={styles.texto}>
            C. Realizar acciones de marketing directo via email, telefónica o
            postal.
          </p>
          <p className={styles.texto}>
            D. Remitir parte de la información a nuestros proveedores de
            servicios o las empresas de "outsourcing" relacionadas con las
            operaciones que realices a través de nuestro sitio, como, sin
            limitarse a, servicios de transporte, medios de pago, seguros o
            intermediarios en la gestión de pagos, call centers o programas de
            fidelidad, entre otros. Nubi velará porque se cumplan ciertos
            estándares, mediante la firma de acuerdos o convenios cuyo objeto
            sea la privacidad de tus datos personales.
          </p>
        </div>
        <div>
          <h2 className={styles.tituloSeccion}>Autorización.</h2>
          <p className={styles.texto}>
            Tené especial en cuenta que ingresando tu información personal en la
            web de Nubi, estarás autorizandonos a:
          </p>
          <p className={styles.texto}>
            A. Enviarte a tu e-mail información publicitaria de Nubi, o sus
            socios comerciales, relacionada a productos o noticias que pueden
            interesarte.
          </p>
          <p className={styles.texto}>
            B. Compartir tus datos con nuestras empresas vinculadas y/o nuestros
            socios comerciales, todo ello según lo previsto en la ley de
            Protección de Datos Personales.
          </p>
          <p className={styles.texto}>
            Recorda que en cualquier momento vos podrás solicitar el retiro o
            bloqueo de tu e-mail para dejar de recibir información publicitaria
            por ese medio.
          </p>
        </div>
        <div>
          <h2 className={styles.tituloSeccion}>Cookies.</h2>
          <p className={styles.texto}>
            Cuando ingresas a Nubi podemos guardar alguna información en tu
            computadora o dispositivo bajo la forma de una "Cookie" o archivo
            similar que puede sernos útil para mejorar la experiencia de usuario
            en nuestra web y conocer tus intereses y preferencias analizando las
            páginas que hayas visitado y/o las búsquedas que realizaste, y así
            mejorar nuestras iniciativas comerciales y promocionales, mostrar
            publicidad o promociones, banners de interés, noticias sobre Nubi,
            perfeccionar los Servicios, etc. Podés borrar las Cookies de tu
            dispositivo cuando quieras utilizando la opción correspondiente a tu
            navegador y eso no afectará el uso de nuestro sitio.
          </p>
        </div>
        <div>
          <h2 className={styles.tituloSeccion}>Confidencialidad de la Información.</h2>
          <p className={styles.texto}>
            Nubi no venderá, alquilará o compartirá tu información excepto en las formas establecidas en estas políticas. 
          </p>
          <p className={styles.texto}>
            Sin perjuicio de ello deberemos entregar todo o parte de tu información si un juez o autoridad competente de acuerdo a las disposiciones legales vigentes así lo requiera, no siendo Nubi responsable por la información que sea revelada. 
          </p>
        </div>
        <div>
          <h2 className={styles.tituloSeccion}>Derechos de acceso, cancelación y rectificación de la información personal.</h2>
          <p className={styles.texto}>
            El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley N° 25.326.
          </p>
          <p className={styles.texto}>
            La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Organo de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
          </p>
          <p className={styles.texto}>
            Ante cualquier duda o rectificación que desees realizar, podés enviarnos un mail a info@tunubi.com .
          </p>
        </div>
        <div>
          <h2 className={styles.tituloSeccion}>Cambios en la política de privacidad.</h2>
          <p className={styles.texto}>
            Es posible que cambiemos estas políticas de tiempo en tiempo, por eso te pedimos que, independientemente de lo que te podamos informar, accedas a esta política regularmente. 
          </p>
        </div>
        <img className={styles.imagenIso}src={LogoISO} alt="Imagen ISO"/>
      </div>
    </div>
  );
}

export default Privacidad;