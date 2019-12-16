import React from 'react';
import './App.css';
import { get_random_colors, get_box_height, get_data_mocks_area_DATES, scale_data_mocks, get_data_map_area_DATES, get_historical_dates, get_forecasted_dates, get_random_mock_area_array_dates} from './utils_dates/functions'
import { appConfig } from './utils_dates/config.js';

import AxisX from './components/AxisX';
import AxisY from './components/AxisY';
import Legend from './components/Legend';
import Static_Line from './components/Static_Line';
import Pointer_Line from './components/Pointer_Line';
import Info_Box from './components/Info_Box';
import Area_Path from './components/Area_Path';
import Plot from './components/Plot';


let dimensions = appConfig.dimensions;
let ranges = appConfig.ranges_dates;
let number_of_plots = appConfig.number_of_plots;
let array_length_dates = appConfig.array_length_dates + appConfig.array_length_dates_forecast;

// dimensions.box_height = get_box_height(number_of_plots);

let historical_mock1 = get_random_mock_area_array_dates(get_historical_dates(),10,30)
let historical_mock2 = get_random_mock_area_array_dates(get_historical_dates(),40,80)

let forecasted_mock1 = get_random_mock_area_array_dates(get_forecasted_dates(),10,30)
let forecasted_mock2 = get_random_mock_area_array_dates(get_forecasted_dates(),40,80)

let historical_data_mock = [historical_mock1, historical_mock2]
let forecasted_data_mock = [forecasted_mock1, forecasted_mock2]

for(let i=0;i<historical_data_mock.length; i++){
  forecasted_data_mock[i].unshift(historical_data_mock[i][historical_data_mock[i].length - 1])
}

class Test_Plot_Dates extends React.Component {	

  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    let x_trans = 85;
    let y_trans = 85;
    let width = window.innerWidth*(0.6) - 2*x_trans;
    let height = this.props.height - 2*y_trans;

    console.log('plot height')
    console.log(this.props.height)

    this.divRef = React.createRef();

    this.state = {
        title: this.props.options.title,
        y_number: 10,
        ticks_number: array_length_dates,
        x_label: this.props.options.x_label,
        y_label: this.props.options.y_label,
        mark_line: {
          pos: 0,
          visibility: "hidden"
        },
        info_box: {
          pos_x: 0,
          pos_y: 0,
          visibility: "hidden",
          colors: get_random_colors(this.props.number_of_series),
        },
       scaled_historical_data: this.scale_data_mocks(this.props.historical_data, this.props.forecasted_data, ranges, width, height, this.props.number_of_series)[0],
       scaled_forecasted_data: this.scale_data_mocks(this.props.historical_data, this.props.forecasted_data, ranges, width, height, this.props.number_of_series)[1],

      //  scaled_historical_data: this.scale_data_mocks(historical_data_mock, forecasted_data_mock, ranges, width, height, 2)[0],
      //  scaled_forecasted_data: this.scale_data_mocks(historical_data_mock, forecasted_data_mock, ranges, width, height, 2)[1],

       data_map_area_DATES: this.get_data_map_area_DATES(this.props.historical_data, this.props.forecasted_data, array_length_dates, this.props.number_of_series),
      //  data_map_area_DATES: this.get_data_map_area_DATES(historical_data_mock, forecasted_data_mock, array_length_dates, 2),

       colors: this.get_random_colors(this.props.number_of_series),
       info_box_height: this.get_box_height(this.props.number_of_series),
       number: this.props.number_of_series,
       dimensions: {
        width2: width,
        width: width/1.1,
        height: height,
        x_trans: x_trans,
        y_trans: y_trans,
        historical_data_length: appConfig.array_length_dates,
        forecasted_data_length: appConfig.array_length_dates_forecast,
       }
    };
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.divRef.current.focus();
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  scaling(){

  }
  
  updateWindowDimensions() {
    
    let div_width2 = this.divRef.current.clientWidth;
    let div_width = div_width2 - 2*85;
    let height = this.props.height - 2*85;

    this.setState({
      dimensions: {
        width2: div_width2,
        width: div_width,
        height: this.props.height - 2*85,
        x_trans: 85,
        y_trans: 85,
        historical_data_length: appConfig.array_length_dates,
        forecasted_data_length: appConfig.array_length_dates_forecast,
       },
       scaled_historical_data: this.scale_data_mocks(this.props.historical_data, this.props.forecasted_data, ranges, div_width, height, this.props.number_of_series)[0],
       scaled_forecasted_data: this.scale_data_mocks(this.props.historical_data, this.props.forecasted_data, ranges, div_width, height, this.props.number_of_series)[1],

      //  scaled_historical_data: this.scale_data_mocks(historical_data_mock, forecasted_data_mock, ranges, div_width, height, 2)[0],
      //  scaled_forecasted_data: this.scale_data_mocks(historical_data_mock, forecasted_data_mock, ranges, div_width, height, 2)[1],
       
    });
  }

  scale_data_mocks(data, forecasted_data, ranges, width, height , number_of_series){
    return scale_data_mocks(data, forecasted_data, ranges, width, height , number_of_series)
  }

  get_data_map_area_DATES(data, forecasted_data, array_length_dates, number_of_series){
    return get_data_map_area_DATES(get_data_mocks_area_DATES(data, forecasted_data, number_of_series), array_length_dates, number_of_series)
  }

  get_random_colors(number_of_series){
    return get_random_colors(number_of_series)
  }

  get_box_height(number_of_series){
    return get_box_height(number_of_series)
  }


  handleMouseMove(event) {
    var e = event.target;
    var dim = e.getBoundingClientRect();
    var x = event.clientX - dim.left - this.state.dimensions.x_trans;
    var y = event.clientY - dim.top - this.state.dimensions.y_trans;

    // console.log(x)
    // console.log(this.state.dimensions)


    if(x >= 0 && y >= 0 && x <= this.state.dimensions.width && y <= this.state.dimensions.height){

      let x_diff = ranges.max_x - ranges.min_x;  
      let x_frame = this.state.dimensions.width/x_diff;
      let key = Math.round((x)/x_frame);

      if (this.state.data_map_area_DATES[key] !== undefined){

        let left_index = Math.round((ranges.max_x - ranges.min_x)/2) - 1;
        let right_index = Math.round((ranges.max_x - ranges.min_x)/2) + 1;

        //keys left
        for(let i=ranges.min_x; i<=key; i++){
          if(this.state.data_map_area_DATES[i] !== undefined){
            left_index = i
          }
        }

        //keys right
        for(let i=key; i<=ranges.max_x; i++){
          if(this.state.data_map_area_DATES[i] !== undefined){
            right_index = i
          }
        }
    
        //index difference
        this.setState({
          mark_line: {
            pos: x,  
          },
          info_box: {
            pos_x: x,
            pos_y: y,
            value_x: this.state.data_map_area_DATES[key][1],
            value_y: this.state.data_map_area_DATES[key],
            colors: get_random_colors(this.props.number_of_series)
          }
        })
        if (this.state.info_box.visibility === 'hidden' || this.state.info_box.visibility === undefined) {
          this.setState({
            mark_line: {
              pos: x
            }
          })
        }
      } else if (key !== undefined){
////////////////////////////

        let left_index = key - 1;
        let right_index = key + 1;
        
        //keys left
        for (let i=key; i>=0; i--) {
          if(this.state.data_map_area_DATES[i] !== undefined){
            left_index = i;
            break;
          }
        }

        //keys right
        for (let i=key; i<=ranges.max_x; i++) {
          if(this.state.data_map_area_DATES[i] !== undefined) {
            right_index = i;
            break;
          }
        }

        //index difference
        let left_diff = key - left_index;
        let right_diff = right_index - key;


        if((this.state.data_map_area_DATES[left_index] !== undefined) && (this.state.data_map_area_DATES[right_index] !== undefined)){
          if (left_diff<=right_diff ) {
            this.setState({
              mark_line: {
                pos: x,  
              },
              info_box: {
                pos_x: x,
                pos_y: y,
                value_x: this.state.data_map_area_DATES[key][1],
                value_y: this.state.data_map_area_DATES[key],
                colors: get_random_colors(this.props.number_of_series)
              }
            })
            if (this.state.info_box.visibility === 'hidden' || this.state.info_box.visibility === undefined) {
              this.setState({
                mark_line: {
                  pos: x
                }
              })
            }
          } else {
            this.setState({
              mark_line: {
                pos: x,  
              },
              info_box: {
                pos_x: x,
                pos_y: y,
                value_x: this.state.data_map_area_DATES[key][1],
                value_y: this.state.data_map_area_DATES[key],
                colors: get_random_colors(this.props.number_of_series)
              }
            })
            if (this.state.info_box.visibility === 'hidden' || this.state.info_box.visibility === undefined) {
              this.setState({
                mark_line: {
                  pos: x
                }
              })
            }
          }

        }
/////////////////

      }
    } else if (x > this.state.dimensions.width || y > this.state.dimensions.height || x < this.state.dimensions.x_trans || y < this.state.dimensions.y_trans){
      this.setState({
        mark_line: {
          visibility: "hidden",
          pos: 9999
        },
        info_box: {
          visibility: "hidden",
          pos_x: 9999,
          pos_y: 9999,
          colors: get_random_colors(this.props.number_of_series)
        }
      })
    }
  }
  

  handleHoverOff(event) {
    this.setState({
      mark_line:{
          pos: 0,
          visibility: "hidden"
      },
      info_box: {
        pos_x: 0,
        pos_y: 0,
        visibility: "hidden",
        colors: get_random_colors(this.props.number_of_series)
      }
    })
  }

  render() {

    // console.log(this.props.keywords)
    // console.log("$$$$$")
    // console.log(this.state.scaled_historical_data)
    // console.log(this.state.scaled_forecasted_data)

    let area_paths = this.state.scaled_historical_data.map(( entity, index ) => {
      return (
        <Area_Path key={index} data={entity} color={this.state.colors[index]} style={"none"} />
      );
    });

    let area_paths_future = this.state.scaled_forecasted_data.map(( entity, index ) => {
      return (
        <Area_Path key={index} data={entity} color={this.state.colors[index]} style={"dash"} />
      );
    });

    let v_b = "0 0 " + this.state.dimensions.width2 + " " + this.props.height;
    let v_trans = "translate(" + this.state.dimensions.x_trans + "," + this.state.dimensions.y_trans + ")";

    return (
      <div ref={this.divRef}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" onMouseMove={this.handleMouseMove} onMouseLeave={this.handleHoverOff} className="test_plot" width={this.state.dimensions.width2} height={this.props.height} viewBox={v_b}>
          {/* <rect fill="#ffffff" className="" x="0" y="0" width={dimensions.width} height={dimensions.height} rx="0" ry="0"></rect>  */}
            <g>
              <g transform={v_trans}>

                { area_paths }

                { area_paths_future }
                
                <Plot dimensions={this.state.dimensions} y_number={this.state.y_number} title={this.state.title} />

                <AxisY dimensions={this.state.dimensions} y_number={this.state.y_number} y_label={this.state.y_label} />

                <AxisX dimensions={this.state.dimensions} x_label={this.state.x_label} ticks={10} dates={this.state.data_map_area_DATES} />
                
                <Legend dimensions={this.state.dimensions} colors={this.state.colors} keywords={this.props.keywords} />

                <Static_Line dimensions={this.state.dimensions} ranges={ranges} />

                <Pointer_Line mark_line={this.state.mark_line} height={this.state.dimensions.height} />

                <Info_Box info_box={this.state.info_box} width={dimensions.box_width} height={this.state.info_box_height} keywords={this.props.keywords}  />
                
              </g>
            </g>
        </svg>
      </div>
    );
  }
}

export default Test_Plot_Dates;
