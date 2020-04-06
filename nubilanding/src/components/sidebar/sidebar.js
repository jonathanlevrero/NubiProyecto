import React from 'react';
import styles from './styles.module.scss';
import cruz from '../../assets/ic_menu_close.svg'


function Sidebar() {
  return (
    <div className={styles.contenedor}>
    <div className={styles.sidebar}>
      <div className={styles.botones}>
      <button className={styles.registrate}>Registrate Gratis</button>
      <button className={styles.iniciarSesion}>Iniciar Sesión</button>
      <img className={styles.cruz} src={cruz} alt="cruz"/>
      </div>
<p>Home</p>
<p>Recargas</p>
<p>Retiros</p>
<p>Calculadora</p>
<p>Blog</p>
<p>Nosotros</p>
<p>Ayuda</p>
<p>Prensa</p>
<p>Empresas</p>
    </div>
    </div>
  )
}

export default Sidebar;
