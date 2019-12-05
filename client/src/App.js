import React, { Component } from 'react';
import Header from "./components/Header"
import Input from './components/Input'
import Plot  from './components/Plot2'
import { Row,Col } from 'react-bootstrap';
import Login from './components/Login';
import Table from './components/Table';
import Chart from './components/Chart';
// import Test_Plot from './Test_Plot';
// import Test_Plot_Dates from './Test_Plot_Dates';
import 'bootstrap/dist/css/bootstrap.min.css';
import { appConfig } from './config.js';
import './styles/plot.css'


// function calculateMean(array) {
//   return (array.reduce((acc, c) => acc + c[1], 0)/array.length).toFixed(2)
// }
let dimensions = appConfig.dimensions;
let ranges = appConfig.ranges_dates;

const MA_Day_5 = "5 Day MA";
const LOWER_BAND = "Lower Band";
const UPPER_BAND = "Upper Band";



class App extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        repos: [],
        title: "before",
        username: "user",
        keywords: [],
        authenticated: true,
        displayResults: false,
        region_state: "US",
        data: [],
        futureData: [],
        selected_time_frame: "today 5-y",
        dataRanges: [],
        futureDataRanges: [],
        rankRates: [],
        growthRates: [],
        options: {
          title: "Trends Forecast",
          x_label: "Date",
          y_label: "Search interest (%)",
          dimensions: dimensions,
        },
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
    
    render() {

        if (this.state.authenticated) {
        return (
            <div className="main_results">
                <div>
                    <Header username={this.state.username} />
                    <Input callbackFromParent={this.handleSearch2}/>

                    <div className="intro">

                    </div>
                </div>
            </div>
            );
        } else{
        return (
        <div>
            <Login callbackFromLogin={this.toLoginCallback}/>
        </div>);      
        }
	}
  }
  
  
  export default App;
