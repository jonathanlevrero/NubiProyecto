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
          <img className={styles.cruz} src={cruz} alt="cruz" />
        </div>
        <ul>
          <li>Home</li>
          <li>Recargas</li>
          <li>Retiros</li>
          <li>Calculadora</li>
          <li>Blog</li>
          <li>Nosotros</li>
          <a title="ayuda" href="https://soporte.tunubi.com/hc/es"><li>Ayuda</li> </a>
          <li>Prensa</li>
          <li>Empresas</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
