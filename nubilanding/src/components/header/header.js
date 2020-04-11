import React from 'react';
import styles from './styles.module.scss';

function Header() {
    return (
    <header>
      <nav>
        <ul>
          <button className={styles.registrate}>Registrate Gratis</button>
          <button className={styles.iniciarSesion}>Iniciar Sesión</button>
          <button className={styles.navicon}>
            &#9776;
            </button>
        </ul>
      </nav>
    </header>);
  }


export default Header;
