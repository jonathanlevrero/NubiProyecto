import React from 'react';
import styles from './styles.module.scss';
import Form from './form';

function Blog() {
  return (
    <div className={styles.contenedorGeneral}>
      <div className={styles.contenedor}>
        <h1 className={styles.titulo}>¡Sumate a nuestro Blog!</h1>
        <p className={styles.texto}>Enterate de todas las novedades de Nubi</p>
        <p className={styles.texto}>suscribiendote a nuestro Blog</p>
        <Form />
        <button className={styles.botonVer}>Ver blog</button>
      </div>
    </div>
  );
}

export default Blog;
