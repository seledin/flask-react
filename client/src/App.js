import React, { Component } from 'react';
import Header from "./components/Header"
import Input from './components/Input'
import Plot  from './components/Plot2'
import { Row,Col } from 'react-bootstrap';
import Login from './components/Login';
import Table from './components/Table';
import Chart from './components/Chart';
// import Test_Plot from './Test_Plot';
import Test_Plot_Dates from './Test_Plot_Dates';
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
        // this.handleSearch2();
    }

    handleSearch2 = () => {
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

    fetchCallback = (data) => {
        
        // this.setState({
        //     displayResults: true,
        // });
        this.handleSearch2();

    // this.fetchData2(data.keywords, data.selected_state_name, data.selected_time_frame)


    }
    
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
            {this.state.displayResults ? (
            
            <div>
              <Header username={this.state.username} />

              <Input callbackFromParent={this.fetchCallback}/>

              <div className="results_div">
              <Row> 
                  <Col sm={5}>
                    <div>
                      <Chart />
                      {/* <Chart callbackFromApp={this.mapCallback}/> */}
                    </div>
                  </Col>
                  <Col sm={7}>
                    <div> 
                      {/* <Plot keywords={this.state.keywords} data={this.state.data} futureData={this.state.futureData} dataRanges={this.state.dataRanges} futureDataRanges={this.state.futureDataRanges}/>   */}
                      <Test_Plot_Dates options={this.state.options} number_of_series={5}/>
                    </div>
                  </Col>
              </Row> 
              </div>
              <div className="tables">
                <Row>
                  <Col sm={6}>
                    <span className="center"><h3>Growth Rate</h3></span>
                    <Table />
                    {/* <Table tableData={this.state.rankRates} /> */}
                  </Col>
                  <Col sm={6}>
                    <span className="center"><h3>Projected growth</h3></span>
                    {/* <Table tableData={this.state.growthRates}  /> */}
                    <Table />
                  </Col>
                </Row>
              </div>

            </div>  ) : (
            
            <div>
              <Header username={this.state.username} />
              <Input callbackFromParent={this.fetchCallback}/>

              <div className="intro">
              </div>
            </div>
            )
          }
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
