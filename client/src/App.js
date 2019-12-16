import React from 'react';
import Header from "./components/Header"
import Input from './components/Input'
import { Row, Col } from 'react-bootstrap';
import Login from './components/Login';
import Table from './components/Table';
import Chart from './components/Chart';
import Test_Plot_Dates from './Test_Plot_Dates';
import { capitalizeString } from "./utils_dates/functions";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/plot.css'

import { appConfig } from './config.js';

import TodoApp from './TodoApp'

let dimensions = appConfig.dimensions;

const MA_Day_5 = "5 Day MA for ";
const LOWER_BAND = "Lower Band for ";
const UPPER_BAND = "Upper Band for ";

const ratio = 4.5;



class App extends React.PureComponent {
  
    constructor(props){
      super(props);
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

      this.state = {
        username: "user",
        keywords: [],
        authenticated: true,
        displayResults: false,
        region_state: "US",
        selected_time_frame: "today 5-y",
        options: {
          title: "Trends Forecast",
          x_label: "Date",
          y_label: "Search interest (%)",
          dimensions: dimensions,
        },
        historical_data: [],
        forecasted_data: [],
        rate_table_data: [],
        growth_table_data: [],
      };

      this.myRef = React.createRef();

    }

    fetchCallback = (keywords, selected_state_name, selected_time_frame) => {
        this.setState({
            displayResults: false,
        });
  
        this.fetchData(keywords, selected_state_name, selected_time_frame)
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

              let width = this.myRef.current.offsetWidth;
              let height = width/(ratio);

              if(width<=1400){
                height = (1.6)*width/(ratio);
              }

              if(width<=1200){
                height = (1.5)*width/(ratio);
              }

              if(width<=800){
                height = (2.5)*width/(ratio);
              }

              this.setState({
                  keywords: keywords,
                  displayResults: true,
                  region_state: state,
                  selected_time_frame: selected_time_frame,
                  displayResults: true,
                  historical_data: this.get_historical_data(keywords, result),
                  forecasted_data: this.get_forecasted_data(keywords, result),
                  rate_table_data: this.getRateTableData(result.growth_rate_result),
                  growth_table_data: this.getGrowthTableData(result.projected_growth_result),
                  // div_height: this.myRef.current.offsetWidth/ratio,
                  div_height: height
              });
            })
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
      this.myRef.current.focus();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
      let width = this.myRef.current.offsetWidth;

      let height = width/(ratio);
      
      if(width<=1400){
        height = (1.6)*width/(ratio);
      }

      if(width<=1200){
        height = (1.5)*width/(ratio);
      }

      if(width<=800){
        height = (2.5)*width/(ratio);
      }

      this.setState({
        div_height: height
      });
    }

    render() {

        if (this.state.authenticated) {
        return (
          <div ref={this.myRef}>
            <div className="main_results">
            {this.state.displayResults ? (
            
            <div>
              <Header username={this.state.username} />

              <Input callbackFromParent={this.fetchCallback}/>

              <div className="results_div">
                <Row> 
                    <div className="map_div">
                      <Chart height={this.state.div_height} />
                      {/* <Chart callbackFromApp={this.mapCallback}/> */}
                    </div>
                    <div id="plot_div"> 
                        <Test_Plot_Dates options={this.state.options} historical_data={this.state.historical_data} forecasted_data={this.state.forecasted_data} number_of_series={this.state.forecasted_data.length} keywords={this.state.keywords} height={this.state.div_height} />
                        {/* <Plot options={this.state.options} historical_data={this.state.historical_data} forecasted_data={this.state.forecasted_data} number_of_series={this.state.forecasted_data.length} keywords={this.state.keywords} /> */}
                    </div>
                </Row> 
              </div>
              <div className="tables">
                <Row>
                    <div className="table-responsive result_table">
                        <Table tableData={this.state.rate_table_data} title={"Growth Rate"}/>
                    </div>
                    <div className="table-responsive result_table">
                        <Table tableData={this.state.growth_table_data} title={"Projected growth"} />
                    </div>
                </Row>
              </div>
            </div>  ) : (
            
            <div>
              <Header username={this.state.username} />
              <Input callbackFromParent={this.fetchCallback}/>
              <TodoApp />

              <div className="intro">
              </div>
            </div>
            )
          }
          </div>
        </div>
      );
        } else{
        return (
        <div ref={this.myRef}>
            <Login callbackFromLogin={this.toLoginCallback}/>
        </div>);      
        }
    }
    
      getGrowthTableData(data){
        let headers = ["Projected growth in 5 weeks for US (for all keywords) [%]", "Projected growth in 5 weeks for US (for one keyword) [%]"]
        
        
        let arr = Object.keys(data["Keyword"]).map(
          function(key){
            return [capitalizeString(data["Keyword"][key]), data[headers[0]][key], data[headers[1]][key]]
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
        let table_headers = ["Growth Rate 1", "Growth Rate 2", "Growth Rate 3", "Growth Rate 4", "Growth Rate 5"]
    
        let arr = Object.keys(data["Keyword"]).map(
          function(key){
            return [capitalizeString(data["Keyword"][key]), data[headers[0]][key], data[headers[1]][key], data[headers[2]][key], data[headers[3]][key], data[headers[4]][key]]
          }
        );
    
        let result = {
          data: arr,
          headers: table_headers
        }
    
        return result;
      }

      get_historical_data(keywords, result){
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
    
    get_forecasted_data(keywords, result){
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
