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

// const MA_Day_5 = "5 Day MA";
// const LOWER_BAND = "Lower Band";
// const UPPER_BAND = "Upper Band";

const MA_Day_5 = "5 Day MA for ";
const LOWER_BAND = "Lower Band for ";
const UPPER_BAND = "Upper Band for ";



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

    //   this.state = {
    //     username: "user",
    //     keywords: [],
    //     authenticated: true,
    //     displayResults: false,
    //     region_state: "US",
    //     data: [],
    //     futureData: [],
    //     selected_time_frame: "today 5-y",
    //     dataRanges: [],
    //     futureDataRanges: [],
    //     rankRates: [],
    //     growthRates: [],
    //     options: {
    //       title: "Trends Forecast",
    //       x_label: "Date",
    //       y_label: "Search interest (%)",
    //       dimensions: dimensions,
    //     },
    //   };
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

        // console.log(data.keywords)

        // this.handleSearch3();
        // this.setState({
        //     displayResults: true,
        // });
    // this.fetchData2(data.keywords, data.selected_state_name, data.selected_time_frame)

        this.setState({
            displayResults: false,
        });
  
        this.fetchData2(data.keywords, data.selected_state_name, data.selected_time_frame)
        // this.setState({
        //     displayResults: true,
        // });
  


    }

    fetchData2(keywords, state, selected_time_frame){

        // let url = appConfig.KEYWORDS_NEW;
        let url = "/new"
        
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            keywords: keywords, region_state: state, time_frame: selected_time_frame
          }),
        }).then(res => res.json())
              .then(
                (result) => {
    
            // console.log("$$$")        
            // console.log(result)
            var that = this;
    
            that.setState({
              data: this.dataMapping2(keywords, result),
              futureData: this.futureData2(keywords, result),
            //   dataRanges: this.dataMapping2(keywords, result)[1],
            //   futureDataRanges: this.futureData2(keywords, result)[1],
              keywords: keywords,
              displayResults: true,
              region_state: state,
              selected_time_frame: selected_time_frame,
              displayResults: true,
            //   rankRates: this.getRateTableData(result.rateranker),
              growthRates: this.getGrowthTableData(result.projected_growth_result)
            });
                })
          
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
                      {/* <Test_Plot_Dates options={this.state.options} number_of_series={5}/> */}
                      <Test_Plot_Dates options={this.state.options} data={this.state.data} futureData={this.state.futureData} number_of_series={this.state.futureData.length} keywords={this.state.keywords} />
                    </div>
                  </Col>
              </Row> 
              </div>
              <div className="tables">
                <Row>
                  <Col sm={6}>
                    <span className="center"><h3>Growth Rate</h3></span>
                    {/* <Table /> */}
                    {/* <Table tableData={this.state.rankRates} /> */}
                  </Col>
                  <Col sm={6}>
                    <span className="center"><h3>Projected growth</h3></span>
                    <Table tableData={this.state.growthRates}  />
                    {/* <Table /> */}
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
    

    // getRankRates(){
    //     fetch(appConfig.GROWTH_RANKER_URL, {
    //       method: 'POST',
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         keywords: this.state.keywords
    //       }),
    //     }).then(res => res.json())
    //       .then(
    //       (result) => {
    //         return this.getRateTableData(result)
    //       },
    //       )
    //   }
    
    //   getGrowthRates(){
    //     fetch(appConfig.GROWTH_RANKER_URL, {
    //       method: 'POST',
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         keywords: this.state.keywords
    //       }),
    //     }).then(res => res.json())
    //       .then(
    //       (result) => {
    //         return this.getGrowthRates(result)
    //       },
    //       )
    //   }


      getGrowthTableData(data){

        let headers = ["Projected growth in 5 weeks for US (for all keywords) [%]", "Projected growth in 5 weeks for US (for one keyword) [%]"]
        
        
        let arr = Object.keys(data["Keyword"]).map(
          function(key){
            return [data["Keyword"][key], data[headers[0]][key], data[headers[1]][key]]
          }
        );
    
        let result = {
          data: arr,
          headers: headers
        }

        console.log(result)
    
        return result;
      }
    
    //   getRateTableData(data){
    
    //     let headers = ["Growth_Rate_0_1", "Growth_Rate_0_2", "Growth_Rate_0_3", "Growth_Rate_1_2", "Growth_Rate_2_3"]
    
    //     let arr = Object.keys(data["Keyword"]).map(
    //       function(key){
    //         return [data["Keyword"][key], data[headers[0]][key], data[headers[1]][key], data[headers[2]][key], data[headers[3]][key], data[headers[4]][key]]
    //       }
    //     );
    
    //     let result = {
    //       data: arr,
    //       headers: headers
    //     }
    
    //     return result;
    //   }


      dataMapping2(keywords, result){
        let data = []
        // let dataRange = []
    
        // console.log("ss")
        // console.log(result)
    
        for (let keyword in keywords) {  
            // console.log("!!" + keyword)
            // console.log(result[keywords[keyword]][MA_Day_5])
            let index = 0;
            let k_w = keywords[keyword]
            let arr = Object.keys(result[k_w][MA_Day_5+k_w]).slice(4,260).map(
            function(key){
              // return [Date.UTC(key.substring(0,4), key.substring(5,7), key.substring(8,10)), result[keywords[keyword]][MA_Day_5][key]]
              return [index++, Date.UTC(key.substring(0,4), key.substring(5,7), key.substring(8,10)), result[k_w][MA_Day_5+k_w][key], result[k_w][LOWER_BAND+k_w][key], result[k_w][UPPER_BAND+k_w][key]]
            }
          );
          data.push(arr)
        }
    
        // for (let keyword in keywords) {  
        //   let arr = Object.keys(result[keywords[keyword]][LOWER_BAND]).slice(4,260).map(
        //     function(key){
        //       return [Date.UTC(key.substring(0,4), key.substring(5,7), key.substring(8,10)), result[keywords[keyword]][LOWER_BAND][key], result[keywords[keyword]][UPPER_BAND][key]]
        //     }
        //   );
        //   dataRange.push(arr)
        // }
    // .slice()
        // console.log(data)
        // console.log(JSON.stringify(data))
        // console.log(JSON.stringify(data.slice(4,254)))
    
        return data;
      }
    
    
      futureData2(keywords, result){
    
        let data = []
        // let dataRange = []
    
        for (let keyword in keywords) {  
          let index = 0;
          let k_w = keywords[keyword]
          let arr = Object.keys(result[keywords[keyword] + "F"][keywords[keyword]]).map(
            function(key){
              // return [Date.UTC(key.substring(0,4), key.substring(5,7), key.substring(8,10)), result[keywords[keyword] + "F"][keywords[keyword]][key]]
              return [index++, Date.UTC(key.substring(0,4), key.substring(5,7), key.substring(8,10)), result[keywords[keyword] + "F"][MA_Day_5+k_w][key], result[keywords[keyword] + "F"][LOWER_BAND+k_w][key], result[keywords[keyword] + "F"][UPPER_BAND+k_w][key]]
            }
          );
          data.push(arr)
        }
    
        // for (let keyword in keywords) {  
        //   let arr = Object.keys(result[keywords[keyword] + "F"][LOWER_BAND]).map(
        //     function(key){
        //       return [Date.UTC(key.substring(0,4), key.substring(5,7), key.substring(8,10)), result[keywords[keyword] + "F"][LOWER_BAND][key], result[keywords[keyword] + "F"][UPPER_BAND][key]]
        //     }
        //   );
        //   dataRange.push(arr)
        // }
    
        // console.log(data)
    
        // console.log(JSON.stringify(data.slice(4,52)))
        // console.log(JSON.stringify(data))
    
        return data;
      }
  }
  
  
  export default App;
