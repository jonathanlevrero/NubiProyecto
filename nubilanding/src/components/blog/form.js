import React from 'react';
import styles from './styles.module.scss';

class Form extends React.Component {
  state = { email: '' };
  constructor(args) {
    super(args)
    this.state = {

    }
  }

  onChange(e) {
    this.setState({
      [e.target.email]: e.target.value
    })
  }
  render() {
    return (
      <form className={styles.formContenedor}>
        <input
          type="email"
          name="email"
          placeholder="Dejanos tu email"
          value={this.state.email}
          onChange={this.onChange.bind(this)}
          className={styles.input}></input>
        <botton type="submit" name="boton" className={styles.enviar}></botton>
      </form>
    );
  }
}

export default Form;