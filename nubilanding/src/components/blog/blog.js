import React from 'react';
import styles from './styles.module.css';



class Blog extends React.Component{
    render(){
        return(
            <div>
                <h1>¡Sumate a nuestro Blog!</h1>
                <p className={styles.texto}>Enterate de todas las novedades de Nubi suscribiendote a nuestro Blog</p>
                <form>
                    <label>dejanos tu email</label>  
                    <input></input> 
                </form>
                <botton>Ver blog</botton>
            </div>
        )
    }
}

export default Blog;