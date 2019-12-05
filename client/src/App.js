import React from 'react';
import './App.css';




class App extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        repos: [],
        title: "before"
      };
    }

    componentDidMount(){
        this.handleSearch2();
      }

      handleSearch2 = () =>{
        let url = '/users/ping';
     fetch(url).
      then(response => response.json()).then((data) => {
        console.log("this data")  
        console.log(data);
          this.setState({
            title: "after"
          });
        });
      };
    
//     handleSearch = (user) =>{
//       let url = 'https://api.github.com/users/'+user+'/repos';
//    fetch(url).
//     then(response => response.json()).then((repos) => {
//         console.log(repos);
//         console.log(repos.length);
//         this.setState({
//           repos: repos
//         });
//       });
//     };
    
    render(){
      return (
        <div className="app-container">
            <h3>{this.state.title}</h3>
        </div>
      )
    }
  }
  
  
  export default App;
