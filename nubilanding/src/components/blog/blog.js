import React from 'react';
import styles from './styles.module.scss';

class Blog extends React.Component{
    render(){
        return(
            <div className={styles.contenedorGeneral}>
                <div className={styles.contenedor}>
                    <h1 className={styles.titulo}>¡Sumate a nuestro Blog!</h1>
                    <p className={styles.texto}>Enterate de todas las novedades de Nubi<br></br> suscribiendote a nuestro Blog</p>
                    <form  className={styles.form}>
                        <input type="email" name="email"  value="Dejanos tu email" className={styles.input}></input>
                        <botton type="botton" className={styles.enviar}></botton>
                    </form><br></br>
                    <botton className={styles.ver}>Ver blog</botton>
                    
                </div>
            </div>
        )
    }
}

export default Blog;