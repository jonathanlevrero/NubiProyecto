import React from 'react';
import styles from './styles.module.scss';

class Form extends React.Component {
  state = { email: '' };
  
  onChange = event => this.setState ({email : event.target.value}) 

  render() {
    return (
      <form className={styles.formContenedor}>
        <input
          type="email"
          name="email"
          placeholder="Dejanos tu email"
          value={this.state.email}
          onChange={this.onChange}
          className={styles.input} />
        <button type="submit" name="boton-enviar" className={styles.botonEnviar} />
      </form>
    );
  }
}

export default Form;
