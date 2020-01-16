import React from 'react';
import Header from "./components/Header"
import Input from './components/Input'
import Login from './components/Login';
import Table from './components/Table';
import Chart from './components/Chart';
import KeywordPlot from './components/plot';
import { get_min_value, get_max_value} from './components/plot/src/plot/parts/functions';
import { appConfig } from './config.js';
import { capitalizeString } from './components/plot/src/plot/parts/functions';

import Loader from "react-loader-spinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

let dimensions = appConfig.dimensions;

const MA_Day_5 = "5 Day MA for ";
const LOWER_BAND = "Lower Band for ";
const UPPER_BAND = "Upper Band for ";

const HEADERS_GROWTH_RATES = ["Growth_Rate_0_1", "Growth_Rate_0_2", "Growth_Rate_0_3", "Growth_Rate_1_2", "Growth_Rate_2_3"];
const HEADERS_PROJECTED_GROWTH = ["Projected growth in 5 weeks for US (for all keywords) [%]", "Projected growth in 5 weeks for US (for one keyword) [%]"];
const ratio = 4.5;

class App extends React.PureComponent {
  
    constructor(props){
      super(props);
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

      this.state = {
        username: "user",
        authenticated: false,
        displayResults: false,
        region_state: "US",
        selected_time_frame: "today 5-y",
        keywords: [],
        options: {
          // title: "Trends Forecast",
          // x_label: "Date",
          // y_label: "Search interest (%)",
          dimensions: dimensions,
        },
        data: [],
        rate_table_data: [],
        growth_table_data: [],
        x_trans: 85,
        y_trans: 85,
        fetching_results: false,
      };

      this.myRef = React.createRef();
    }

    fetchCallback = (keywords, selected_state_name, selected_time_frame) => {
        this.setState({
            displayResults: false,
        });
  
        this.fetchData(keywords, selected_state_name, selected_time_frame)
    }

    mapCallback = (state) => {
      console.log("state " + state)

      this.setState({
        displayResults: false,
      });

      this.fetchData(this.state.keywords, state, this.state.selected_time_frame)
    }

    fetchData(keywords, state, selected_time_frame){

      // let url = appConfig.KEYWORDS_NEW;
      let url = "/api"

      this.setState({
        fetching_results: true,
        keywords: keywords
      })

      // console.log("state " + state)
      
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type':'application/json',
        },
        body: JSON.stringify({
          keywords: keywords, region_state: state, time_frame: selected_time_frame
        }),
      }).then(res => res.json())
          .then(
          (result) => {
            let width = this.myRef.current.offsetWidth;
            let sizes = this.get_dimensions(width);
      
            this.setState({
              keywords: keywords,
              displayResults: true,
              region_state: state,
              selected_time_frame: selected_time_frame,
              displayResults: true,
              data: this.get_data(keywords, result),
              rate_table_data: this.getRateTableData(result.growth_rate_result),
              growth_table_data: this.getGrowthTableData(result.projected_growth_result),
              div_height: sizes.height,
              x_trans: sizes.x_trans_left,
              y_trans: sizes.y_trans_up,
              x_trans_right: sizes.x_trans_right,
              y_trans_bottom: sizes.y_trans_bottom,
              fetching_results: false
            });
          }).catch(function(error) {
          
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
      let sizes = this.get_dimensions(width);

      this.setState({
        div_height: sizes.height,
        x_trans: sizes.x_trans_left,
        y_trans: sizes.y_trans_up,
        x_trans_right: sizes.x_trans_right,
        y_trans_bottom: sizes.y_trans_bottom,
      });
    }

    toLoginCallback =() => {
      this.setState({
        authenticated: true,
      });
    }

    render() {

      let ranges =  {
        max_x: (261 + 52 + 0),
        min_x: 0,
        max_y: 120,
        min_y: -10,
      }

      let plot_settings = {
        title: "Trends Forecast",
        x_label: "Date",
        y_label: "Search interest (%)",
        // number_of_series: this.state.data.forecasted_data.length,
        number_of_series: this.state.keywords.length,
        keywords: this.state.keywords,

        height: this.state.div_height,
        x_trans_left: this.state.x_trans,
        y_trans_up: this.state.y_trans,
        x_trans_right: this.state.x_trans_right,
        y_trans_bottom: this.state.y_trans_bottom,

        ranges: ranges
      }

      if(this.state.displayResults) {
        let min_y = get_min_value(this.state.data.historical_data);
        let max_y = get_max_value(this.state.data.historical_data);

        let lower_bound = (Math.ceil(((min_y)+1) / 10)-1) * 10
        let upper_bound = Math.ceil((Math.abs(max_y)+1) / 10) * 10

        ranges = {
          max_x: (this.state.data.historical_data[0].length + this.state.data.forecasted_data[0].length),
          min_x: 0,
          max_y: upper_bound,
          min_y: lower_bound,
        }

        plot_settings.ranges = {
          max_x: (this.state.data.historical_data[0].length + this.state.data.forecasted_data[0].length),
          min_x: 0,
          max_y: upper_bound,
          min_y: lower_bound,
        }
      }

      if (this.state.authenticated) {
        return (
          <div ref={this.myRef}>
            <div className="main_results">

            {/* {this.state.keywords.length<=5 ? (<div>

              

            </div>) : (<div>Too many keywords</div>)
              
            } */}

            { (this.state.displayResults) ? (
            
            <div>
              <Header username={this.state.username} />

              <Input callbackFromParent={this.fetchCallback}/>

              <div className="results_div">
                <div className="map_div">
                  <Chart callbackFromApp={this.mapCallback} height={this.state.div_height} />
                </div>
                <div id="plot_div"> 
                  <KeywordPlot plot_settings={plot_settings} data={this.state.data} />
                </div>
              </div>
              <div className="tables">
                <div className="row">
                  <div className="table-responsive result_table">
                    <Table tableData={this.state.rate_table_data} title={"Growth Rate"}/>
                  </div>
                  <div className="table-responsive result_table">
                    <Table tableData={this.state.growth_table_data} title={"Projected growth"} />
                  </div>
                </div>
                <div className="row">
                  {/* <Row> */}
                    {/* <KeywordPlot height={500} width={500} radius={50} color={"red"} /> */}
                    {/* <KeywordPlot options={this.state.options} ranges={ranges} historical_data={this.state.historical_data} forecasted_data={this.state.forecasted_data} number_of_series={this.state.forecasted_data.length} keywords={this.state.keywords} height={this.state.div_height} x_trans={this.state.x_trans} y_trans={this.state.y_trans} x_trans2={this.state.x_trans2} y_trans2={this.state.y_trans2} /> */}
                  {/* </Row> */}
                </div>
              </div>
            </div>  ) : (
            
            <div>
              <Header username={this.state.username} />
              <Input callbackFromParent={this.fetchCallback} />

              <div className="intro">

              </div>

              {this.state.fetching_results ? (    
                <div className="spinner">
                  <Loader type="Oval" color="#007bff" height={200} width={200} timeout={30000} />
                </div>   
                ) : (<div></div>) }
            </div>
            )
          }
          </div>
        </div>
      );
      } else {
        return (
          <div ref={this.myRef}>
            <Login callbackFromLogin={this.toLoginCallback} />
          </div>
        );      
      }
    }
    
    getGrowthTableData(data) {
      let headers = HEADERS_PROJECTED_GROWTH;
      
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
    
    getRateTableData(data) {
      let headers = HEADERS_GROWTH_RATES;
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

    get_data(keywords, result) {
      let historical_data = []
      let forecasted_data = []

      for (let keyword in keywords) {  
        let index = 0;
        let k_w = keywords[keyword]

        let arr = Object.keys(result[k_w][MA_Day_5+k_w]).map(
          function(key){
            if(index<4) {
              return [index++, new Date(key).valueOf(), result[k_w][k_w][key], result[k_w][LOWER_BAND+k_w][key], result[k_w][UPPER_BAND+k_w][key]]
            } else {
              return [index++, new Date(key).valueOf(), result[k_w][MA_Day_5+k_w][key], result[k_w][LOWER_BAND+k_w][key], result[k_w][UPPER_BAND+k_w][key]]
            }
          }
        );

        historical_data.push(arr)

        arr = Object.keys(result[keywords[keyword] + "F"][keywords[keyword]]).map(
          function(key){
            if(index<4) {
              return [index++, new Date(key).valueOf(), result[keywords[keyword] + "F"][k_w][key], result[keywords[keyword] + "F"][LOWER_BAND+k_w][key], result[keywords[keyword] + "F"][UPPER_BAND+k_w][key]]            
            } else {
              return [index++, new Date(key).valueOf(), result[keywords[keyword] + "F"][MA_Day_5+k_w][key], result[keywords[keyword] + "F"][LOWER_BAND+k_w][key], result[keywords[keyword] + "F"][UPPER_BAND+k_w][key]]
            }
          }
        );
        forecasted_data.push(arr)
      }

      return {
        historical_data: historical_data,
        forecasted_data: forecasted_data
      }
    }

  get_dimensions(width) {
    let height = width/(ratio);
    let x_trans_left = this.state.x_trans;
    let y_trans_up = this.state.y_trans;
    let x_trans_right = this.state.x_trans;
    let y_trans_bottom = this.state.y_trans;

    if(width>1800) {
      height = height;
      x_trans_left = 80;
      y_trans_up = 80;
      x_trans_right = 50;
      y_trans_bottom = 80;
    }

    if(width<=1800) {
      height = (1.2)*width/(ratio);
      x_trans_left = 80;
      y_trans_up = 80;
      x_trans_right = 50;
      y_trans_bottom = 80;
    }

    if(width<=1600) {
      height = (1.4)*width/(ratio);
      x_trans_left = 80;
      y_trans_up = 80;
      x_trans_right = 50;
      y_trans_bottom = 80;
    }
    
    if(width<=1400) {
      height = (1.6)*width/(ratio);
      x_trans_left = 70;
      y_trans_up = 70;
      x_trans_right = 50;
      y_trans_bottom = 70;
    }

    if(width<=1200) {
      height = (1.8)*width/(ratio);
      x_trans_left = 60;
      y_trans_up = 60;
      x_trans_right = 50;
      y_trans_bottom = 70;
    }

    // if(width<=800){
    //   height = (2.2)*width/(ratio);
    //   x_trans = 60;
    //   y_trans = 20;
    //   x_trans2 = 20;
    //   y_trans2 = 60;
    // }

    if(width<=700) {
      height = (4)*width/(ratio);
      x_trans_left = 60;
      y_trans_up = 20;
      x_trans_right = 50;
      y_trans_bottom = this.state.keywords.length*14 + 80;
    }

    let sizes = {
      height: height,
      x_trans_left: x_trans_left,
      y_trans_up: y_trans_up,
      x_trans_right: x_trans_right,
      y_trans_bottom: y_trans_bottom
    }

    return sizes;
  }
}
  
  
export default App;
