import React from 'react';
import Header from "./components/Header"
import Input from './components/Input'
import { Row, Col } from 'react-bootstrap';
import Login from './components/Login';
import Table from './components/Table';
import Chart from './components/Chart';
import Test_Plot_Dates from './Test_Plot_Dates';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/plot.css'

import { appConfig } from './config.js';

let dimensions = appConfig.dimensions;

const MA_Day_5 = "5 Day MA for ";
const LOWER_BAND = "Lower Band for ";
const UPPER_BAND = "Upper Band for ";



class App extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        title: "before",
        username: "user",
        keywords: [],
        authenticated: true,
        displayResults: false,
        region_state: "US",
        data: [],
        futureData: [],
        selected_time_frame: "today 5-y",
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

    fetchCallback = (data) => {
        this.setState({
            displayResults: false,
        });
  
        this.fetchData(data.keywords, data.selected_state_name, data.selected_time_frame)
    }

    fetchData(keywords, state, selected_time_frame){

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
                this.setState({
                    data: this.dataMapping2(keywords, result),
                    futureData: this.futureData2(keywords, result),
                    keywords: keywords,
                    displayResults: true,
                    region_state: state,
                    selected_time_frame: selected_time_frame,
                    displayResults: true,
                    rankRates: this.getRateTableData(result.growth_rate_result),
                    growthRates: this.getGrowthTableData(result.projected_growth_result)
                });
            })
    }
    
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
                      <Test_Plot_Dates options={this.state.options} data={this.state.data} futureData={this.state.futureData} number_of_series={this.state.futureData.length} keywords={this.state.keywords} />
                    </div>
                  </Col>
              </Row> 
              </div>
              <div className="tables">
                <Row>
                  <Col sm={6}>
                    <span className="center"><h3>Growth Rate</h3></span>
                    <Table tableData={this.state.rankRates} />
                  </Col>
                  <Col sm={6}>
                    <span className="center"><h3>Projected growth</h3></span>
                    <Table tableData={this.state.growthRates}  />
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
    
        return result;
      }
    
      getRateTableData(data){
        let headers = ["Growth_Rate_0_1", "Growth_Rate_0_2", "Growth_Rate_0_3", "Growth_Rate_1_2", "Growth_Rate_2_3"]
    
        let arr = Object.keys(data["Keyword"]).map(
          function(key){
            return [data["Keyword"][key], data[headers[0]][key], data[headers[1]][key], data[headers[2]][key], data[headers[3]][key], data[headers[4]][key]]
          }
        );
    
        let result = {
          data: arr,
          headers: headers
        }
    
        return result;
      }


      dataMapping2(keywords, result){
        let data = []
    
        for (let keyword in keywords) {  
            let index = 0;
            let k_w = keywords[keyword]
            let arr = Object.keys(result[k_w][MA_Day_5+k_w]).slice(4,260).map(
            function(key){
              return [index++, Date.UTC(key.substring(0,4), key.substring(5,7), key.substring(8,10)), result[k_w][MA_Day_5+k_w][key], result[k_w][LOWER_BAND+k_w][key], result[k_w][UPPER_BAND+k_w][key]]
            }
          );
          data.push(arr)
        }
    
        return data;
      }
    
    
      futureData2(keywords, result){
    
        let data = []
    
        for (let keyword in keywords) {  
          let index = 0;
          let k_w = keywords[keyword]
          let arr = Object.keys(result[keywords[keyword] + "F"][keywords[keyword]]).map(
            function(key){
              return [index++, Date.UTC(key.substring(0,4), key.substring(5,7), key.substring(8,10)), result[keywords[keyword] + "F"][MA_Day_5+k_w][key], result[keywords[keyword] + "F"][LOWER_BAND+k_w][key], result[keywords[keyword] + "F"][UPPER_BAND+k_w][key]]
            }
          );
          data.push(arr)
        }
    
        return data;
      }
  }
  
  
  export default App;
