import React from 'react';
import styles from './styles.module.scss';



function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <button className={styles.Registrate}>Registrate Gratis</button>
                    <button className={styles.Iniciarsesion}>Iniciar Sesión</button>
                    
                </ul>
            </nav>
        </header>
    )
}











export default Header;

































