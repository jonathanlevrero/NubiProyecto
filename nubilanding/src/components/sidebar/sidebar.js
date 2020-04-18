import React from 'react';
import styles from './styles.module.scss';
import cruz from '../../assets/ic_menu_close.svg'
import { Link } from 'react-router-dom';

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
          <li><Link to="/home">Home</Link></li>
          <li>Recargas</li>
          <li>Retiros</li>duda
          <li>Calculadora</li>
          <li>Blog</li> 
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li>Ayuda</li>
          <li><Link to="/prensa">Prensa</Link></li>
          <li><Link to="/empresas">Empresas</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
