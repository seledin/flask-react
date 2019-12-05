import React from 'react';
import './App.css';

class App extends React.Component {	

  constructor(props) {
    super(props);

    this.state = {
      title: "before"
    };
  }
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){

    fetch(`${process.env.REACT_APP_USERS_SERVICE_URL}/users/ping`, {
      method: 'GET',
      // headers: {
      //   'Content-type': 'application/json',
      // },
      // body: JSON.stringify({
      //   }),
    }).then(res => res.json())
      .then(
      (result) => {
        console.log('SUCCESS', result)
        this.state = {
          title: result.message
        };
      },
    )
  }

  render() {

    return (
      <div >
        <h2>hello: {this.state.title}</h2>
      </div>
    );
  }

}

export default App;
