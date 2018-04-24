import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identifiant: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.identifiant.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    alert('Identifiant: ' + this.state.identifiant);
    event.preventDefault();
  }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} >
          <FormGroup controlId="identifiant" bsSize="large">
            <ControlLabel>Identifiant</ControlLabel>
            <FormControl
              autoFocus
              type="input"
              value={this.state.identifiant}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Mot de passe</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
          Valider
          </Button>
        </form>
      </div>
    );
  }
}





ReactDOM.render(
  <Login />,
  document.getElementById('connexionform')
);