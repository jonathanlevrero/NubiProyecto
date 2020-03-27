import React from 'react';
import styles from '../calculadora/styles.module.scss';
import Flecha from '../../assets/ic_calculator_arrow.svg'

class Calculadora extends React.Component {
    render () {
        return(
            <div className= {styles.contenedor}>
                <div>
                    <h2 className= {styles.titulo}>Calculá tu retiro o recarga</h2>
                </div> 
                
                <div className= {styles.calculadora}>
                    <div className= {styles.seccion}>
                        <input type='text' value= '0'/>
                        <div className= {styles.selectores}>
                            <p>Indicá el monto dólares</p>
                            <input type="radio" id="recarga" value="recarga"/>
                            <label htmlFor="recarga">Recarga</label>
                            <input type="radio" id="retiro" name="gender" value="retiro"/>
                            <label htmlFor="retiro">Retiro</label>
                        </div>
                    </div> 
                    <div className= {styles.flecha}>
                        <img src= {Flecha} />
                    </div>
                    <div className= {styles.seccion}>
                        <input type='text' value= '0'/>
                        <div className= {styles.selectores}></div>
                            <p>Monto estimado (Tarifa incluída)</p>
                            <input type="radio" id="pesos" value="pesos"/>
                            <label htmlFor="pesos">ARS</label>
                            <input type="radio" id="dolares" name="gender" value="dolares"/>
                            <label htmlFor="dolares">U$S</label>
                        </div>
                    </div>  
            </div>
        )
    }
}

export default Calculadora;
