import React from 'react';
import styles from '../privacidad/styles.module.scss';

class Privacidad extends React.Component {
    render () {
        return (
            <div className= {styles.contenedor}>
                <div className= {styles.contenedorTitulo}>
                    <h1>Política de privacidad Nubi</h1>
                </div>
                <div className= {styles.contenedorTituloSecundario}>
                    <p>
                        Nubi respeta tu privacidad y por eso te contamos que hacemos con la 
                        información que compartís con nosotros ahora.
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Privacidad ;