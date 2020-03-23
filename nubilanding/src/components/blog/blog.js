import React from 'react';
import styles from './styles.module.scss';
//import bg_blog from './bg_blog.png';
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
        {/*<img src= {bg_blog} alt="escritorio"/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Blog;