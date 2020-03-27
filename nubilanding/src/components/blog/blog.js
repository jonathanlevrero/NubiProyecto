import React from 'react';
import styles from './styles.module.scss';
import Form from './form';
class Blog extends React.Component{
    render(){
        return(
            <div className={styles.contenedorGeneral}>
                <div className={styles.contenedor}>
                    <h1 className={styles.titulo}>¡Sumate a nuestro Blog!</h1>
                    <p className={styles.texto}>Enterate de todas las novedades de Nubi<br></br> suscribiendote a nuestro Blog</p>
                    <Form />
                     <botton className={styles.ver}>Ver blog</botton>
                    
                </div>
            </div>
        )
    }
}

export default Blog;