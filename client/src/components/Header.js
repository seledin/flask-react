import React, { Component } from 'react';
import { Button,Form } from 'react-bootstrap';

class Header extends Component {	

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };
  }

  render() {
    return (
      <div className="myheader">
        <Form>
          <b>Hello, {this.props.username}&nbsp;</b>
          <Button variant="light" className="btn-white" type="submit">
              Logout
          </Button>
        </Form>
      </div>
		);
  }
}

export default Header