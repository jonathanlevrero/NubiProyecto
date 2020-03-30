import React from 'react';
import styles from './styles.module.scss';


class Form extends React.Component{
    render(){
        return(
            <form   className={styles.formContenedor}>
                        {/*<label htmlFor="email">Dejanos tu email</label>*/}
                        <input type="email" placeholder="Dejanos tu email" className={styles.input}></input>
                        <botton type="submit" className={styles.enviar}></botton>
            </form>
        )
    }
}







export default Form;