import React, { Component } from 'react';
import { Button,Form } from 'react-bootstrap';


class LoginComponent extends Component {	

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
        authenticated: true,
        username: "user",
        password: "user"
    };
  }

  handleClick(event){
    event.preventDefault();
    if(this.state.username === "user" && this.state.password === "user"){
      this.props.callbackFromLogin(this.state);
    }
  }

  handleChangeLogin(event) {
    this.setState({
        username: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
        password: event.target.value
    });
  }


  render() {

    return (
		<div className="loginform">
        <h2>Login page</h2>
        <br/>

        <h5>Username: user</h5>
        <h5>Password: user</h5>
        <br/>
            <Form onSubmit={this.handleClick}>
              <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" value={this.state.keywords} onChange={this.handleChangeLogin} className="input_username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={this.state.keywords} onChange={this.handleChangePassword} className="input_password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Login
              </Button>
            </Form>

		</div>
		);

  }


}

export default LoginComponent