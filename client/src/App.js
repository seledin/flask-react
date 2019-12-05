import React from 'react';
import './App.css';

class App extends React.Component {	

  constructor(props) {
    super(props);

    // this.fetchData = this.fetchData.bind(this);

    this.state = {
      title: "before"
    };
  }
  componentDidMount(){
    this.fetchData();
  }

  // componentDidUpdate(){
  //   this.fetchData();
  // }

  fetchData(){

    fetch(`/users/ping`, {
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

        console.log(result.message)
        var that = this
        
        that.setState = {
          title: "after"
        };
      },
    )

    // fetch(`/users/ping`,{
    //   method: 'GET',
    // })
    // .then(result => {
    //   // This now refers to your component
    //   // this.setState({data: data}); 
    //   console.log('SUCCESS', result)

    //     console.log(result.message)
    //     // var that = this
        
    //     this.setState = {
    //       title: "after"
    //     };

    // }).catch(function(error) {
    //   // error handling
    // })
  }

  render() {
    
    // let title = this.state.title
    // console.log(title)

    return (
      this.state.title === "after" ? 
       <div>
           <h3>after</h3>
       </div> 
      : 'Initializing'
   );
  }

}

export default App;
