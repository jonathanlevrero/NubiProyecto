import React from 'react';
import styles from '../retiros/styles.module.scss'

class Retiros extends React.Component {
    render () {
        return (
            <div className={styles.contenedorGeneral}> 
                <div className={styles.contenedorRetira}>
                    <h2 className={styles.titulos}>Retirá de tu cuenta PayPal</h2>
                    <p className={styles.textoRetiros}>
                        Vendé en todo el mundo con PayPal y retirá tu plata con Nubi en 3 días hábiles a cuanquier banco en Argentina.
                    </p>
            
                    <p className={styles.textoRetiros}>
                        Podés elegir como destino una cuenta bancaria en pesos o en dólares. Te mostramos las tarifas en el siguente cuadro:
                    </p>
                </div>

                <div className= {styles.contenedorTabla}>
                    <table className= {styles.tabla}>
                        <tr>
                            <th>Monto del retiro</th>
                            <th>A tu cuenta en pesos</th> 
                            <th>Retiros en U$S</th>
                        </tr>
                        <tr>
                            <td>U$S 20 - 1.999</td>
                            <td>U$S 10</td>
                            <td>U$S 15 + 1%</td>
                        </tr>
                        <tr>
                            <td>U$S 2000 - 10.000</td>
                            <td>0.5%</td>
                            <td>2,5%</td>
                        </tr>
                    </table>
                    <p className={styles.textoTabla}>
                        Recordá que a las tarifas mencionadas hay que adicionarle el IVA (21%) correspondiente. El monto mínimo para retirar es U$S 20 el máximo U$S 10.000 por operación.
                        <br></br>
                        <br></br>
                        El plazo de 3 días hábiles no es aplicable para tu primer retiro superior a 2000 dólares. En ese caso, Nubi deberá validar tus fondos y, en esa primera operación, tu retiro demorará 5 días hábiles.
                    </p>
                </div>
                <button className={styles.boton}>Registrate Gratis</button>
            </div>
        ) ;
    };
};

export default Retiros;