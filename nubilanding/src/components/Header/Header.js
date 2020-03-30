import React from 'react';
import styles from './styles.module.scss';



function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <button className={styles.Registrate}>Registrate Gratis</button>
                    <button className={styles.Iniciarsesion}>Iniciar Sesión</button>
                    <button className={styles.Navicon}>
                        &#9776;
                    </button>

                </ul>
            </nav>
        </header>
    )
}











export default Header;

































