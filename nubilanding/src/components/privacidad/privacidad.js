import React from 'react';
import styles from '../privacidad/styles.module.scss';

class Privacidad extends React.Component {
    render () {
        return (
            <div className= {styles.contenedor}>
                <div className= {styles.contenedorTitulo}>
                    <h1>Política de privacidad Nubi</h1>
                </div>
                <div className= {styles.contenedorTituloSecundario}>
                    <h2>
                        Nubi respeta tu privacidad y por eso te contamos que hacemos con la 
                        información que compartís con nosotros ahora.
                    </h2>
                </div>
                <div className= {styles.contenedorInformacion}>
                    <div className= {styles.datos}>
                        <h2 className= {styles.tituloSeccion}>Recopilación y uso de datos.</h2>
                        <p>
                        Cuando ingreses a nuestra web <b>www.tunubi.com</b> y nos dejes tus datos, los mismos serán objeto de tratamiento automatizado e incorporada a la base de Nubi.
                        </p> 
                        <p>
                        La información que nos compartas la vamos a utilizar exclusivamente para mejorar tu experiencia con Nubi así como para informarte de productos y servicios que te puedan interesar. Con la información que tengamos vamos a:
                        </p>
                        <p>
                        A. Desarrollar estudios internos sobre tus intereses, comportamientos y demografía para comprender mejor tus necesidades e intereses y ofrecer mejores producto y/o servicios y mejorar la experiencia de usuario en nuestra web. Generar perfiles.
                        </p>
                        <p>
                        B. Comunicarnos con vos para contarte novedades de Nubi, de nuevos productos que tengamos y otro tipo de información publicitaria de Nubi o de alguno de sus socios comerciales.
                        </p>
                        <p>
                        C. Realizar acciones de marketing directo via email, telefónica o postal. 
                        </p>
                        <p>
                        D. Remitir parte de la información a nuestros proveedores de servicios o las empresas de "outsourcing" relacionadas con las operaciones que realices a través de nuestro sitio, como, sin limitarse a, servicios de transporte, medios de pago, seguros o intermediarios en la gestión de pagos, call centers o programas de fidelidad, entre otros. Nubi velará porque se cumplan ciertos estándares, mediante la firma de acuerdos o convenios cuyo objeto sea la privacidad de tus datos personales.
                        </p>
                    </div>
                    <div className= {styles.autorizacion}>
                        <h2 className= {styles.tituloSeccion}>Autorización.</h2>
                        <p>
                        Tené especial en cuenta que ingresando tu información personal en la web de Nubi, estarás autorizandonos a:
                        </p>
                        <p>
                        A. Enviarte a tu e-mail información publicitaria de Nubi, o sus socios comerciales, relacionada a productos o noticias que pueden interesarte.
                        </p>
                        <p> 
                        B. Compartir tus datos con nuestras empresas vinculadas y/o nuestros socios comerciales, todo ello según lo previsto en la ley de Protección de Datos Personales.
                        </p>
                        <p> 
                        Recorda que en cualquier momento vos podrás solicitar el retiro o bloqueo de tu e-mail para dejar de recibir información publicitaria por ese medio. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Privacidad ;