import React from 'react';
import styles from './styles.module.scss';
import Escritorio from '../../assets/bg_blog.png';
import Icono from '../../assets/ic_send2_blue.svg';
class Blog extends React.Component{
    render(){
        return(
            <div className={styles.contenedorGeneral}>
                <h1 className={styles.titulo}>¡Sumate a nuestro Blog!</h1>
                {/*<div className={styles.contenedor}>*/}
                {/*pienso poner contenedores */}
                <p className={styles.texto}>Enterate de todas las novedades de Nubi<br></br> suscribiendote a nuestro Blog</p>
                <form className={styles.form}>
        {/*<label>dejanos tu email</label>*/}  
                    <input className={styles.input}></input>
                    <botton className={styles.enviar}>si</botton>
                </form>
                <botton className={styles.ver}>Ver blog</botton>
            <img  className={styles.Escritorio} src= {Escritorio} alt="escritorio"/>
            <img  className={styles.Icono} src= {Icono} alt="escritorio"/>
                {/*</div>*/}
            </div>
        );
    }
}

export default Blog;