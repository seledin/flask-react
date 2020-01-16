import React from 'react';
import './App.css';
import { get_random_colors, get_box_height, get_data_mocks_area_DATES, scale_data_mocks, get_data_map_area_DATES, get_min_value, get_max_value } from './utils/functions'
import { appConfig } from './utils/config.js';

import AxisX from './parts/AxisX';
import AxisY from './parts/AxisY';
import Legend from './parts/Legend';
import Static_Line from './parts/Static_Line';
import Pointer_Line from './parts/Pointer_Line';
import Info_Box from './parts/Info_Box';
import Area_Path from './parts/Area_Path';
import Plot from './parts/Plot';
import './css/plot.css';


let dimensions = appConfig.dimensions;
let array_length_dates = appConfig.array_length_dates + appConfig.array_length_dates_forecast;

export class KeywordPlot extends React.PureComponent {	

  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    let x_trans_left = 85;
    let y_trans_up = 85;
    let y_trans_bottom = 85;

    let width = window.innerWidth*(0.6) - 2*x_trans_left;
    let height = this.props.plot_settings.height - y_trans_up - y_trans_bottom;

    this.divRef = React.createRef();

    let min_y = get_min_value(this.props.data.historical_data);
    let max_y = get_max_value(this.props.data.historical_data);

    this.state = {
      title: this.props.plot_settings.title,
      x_label: this.props.plot_settings.x_label,
      y_label: this.props.plot_settings.y_label,

      mark_line: {
        pos: 0,
        visibility: "hidden"
      },

      info_box: {
        pos_x: 0,
        pos_y: 0,
        visibility: "hidden",
        colors: get_random_colors(this.props.plot_settings.number_of_series),
      },

      scaled_data: this.scale_data_mocks(this.props.data, this.props.plot_settings.ranges, width, height, this.props.plot_settings.number_of_series),
      data_map_area_DATES: this.get_data_map_area_DATES(this.props.data.historical_data, this.props.data.forecasted_data, array_length_dates, this.props.plot_settings.number_of_series),

      colors: this.get_random_colors(this.props.plot_settings.number_of_series),
      info_box_height: this.get_box_height(this.props.plot_settings.number_of_series),

      dimensions: {
        svg_width: width,
        width: width/1.1,
        height: height,
        x_trans: x_trans_left,
        y_trans: y_trans_up,
        y_trans_bottom: y_trans_bottom,
        historical_data_length: appConfig.array_length_dates,
        forecasted_data_length: appConfig.array_length_dates_forecast,
      },
      min_y: get_min_value(this.props.data.historical_data),
      max_y: get_max_value(this.props.data.historical_data), 
      ticks: 12
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
    let svg_width = this.divRef.current.clientWidth;

    let x_trans_left = this.props.plot_settings.x_trans_left;
    let y_trans_up = this.props.plot_settings.y_trans_up;
    let x_trans_right = this.props.plot_settings.x_trans_right;
    let y_trans_bottom = this.props.plot_settings.y_trans_bottom;

    let plot_width = svg_width - x_trans_left - x_trans_right;
    let plot_height = this.props.plot_settings.height - y_trans_up - y_trans_bottom;

    this.setState({
      dimensions: {
        svg_width: svg_width,
        width: plot_width,
        height: plot_height,
        x_trans: x_trans_left,
        y_trans: y_trans_up,
        x_trans_right: x_trans_right,
        y_trans_bottom: y_trans_bottom,
        historical_data_length: appConfig.array_length_dates,
        forecasted_data_length: appConfig.array_length_dates_forecast,
       },
       scaled_data: this.scale_data_mocks(this.props.data, this.props.plot_settings.ranges, plot_width, plot_height, this.props.plot_settings.number_of_series),
    });
  }

  scale_data_mocks(data, ranges, width, height, number_of_series){
    return scale_data_mocks(data, ranges, width, height, number_of_series)
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

    if(x >= 0 && y >= 0 && x <= this.state.dimensions.width && y <= this.state.dimensions.height){

      let x_diff = this.props.plot_settings.ranges.max_x - this.props.plot_settings.ranges.min_x;  
      let x_frame = this.state.dimensions.width/x_diff;
      let key = Math.round((x)/x_frame);

      if (this.state.data_map_area_DATES[key] !== undefined){

        let left_index = Math.round((this.props.plot_settings.ranges.max_x - this.props.plot_settings.ranges.min_x)/2) - 1;
        let right_index = Math.round((this.props.plot_settings.ranges.max_x - this.props.plot_settings.ranges.min_x)/2) + 1;

        //keys left
        for(let i=this.props.plot_settings.ranges.min_x; i<=key; i++){
          if(this.state.data_map_area_DATES[i] !== undefined){
            left_index = i
          }
        }

        //keys right
        for(let i=key; i<=this.props.plot_settings.ranges.max_x; i++){
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
            colors: get_random_colors(this.props.plot_settings.number_of_series)
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
        for (let i=key; i<=this.props.plot_settings.ranges.max_x; i++) {
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
                colors: get_random_colors(this.props.plot_settings.number_of_series)
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
                colors: get_random_colors(this.props.plot_settings.number_of_series)
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
          colors: get_random_colors(this.props.plot_settings.number_of_series)
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
        colors: get_random_colors(this.props.plot_settings.number_of_series)
      }
    })
  }

  render() {

  let area_paths = this.state.scaled_data[0].map(( entity, index ) => {
      return (
        <Area_Path key={index} data={entity} color={this.state.colors[index]} style={"none"} slice={4}/>
      );
    });

    let area_paths_future = this.state.scaled_data[1].map(( entity, index ) => {
      return (
        <Area_Path key={index} data={entity} color={this.state.colors[index]} style={"dash"} />
      );
    });

    let v_b = "0 0 " + this.state.dimensions.svg_width + " " + this.props.plot_settings.height;
    let v_trans = "translate(" + this.state.dimensions.x_trans + "," + this.state.dimensions.y_trans + ")";

    const aa = this.state.max_y;
    const bb = this.state.min_y;

    let lower_bound = (Math.ceil(((bb)+1) / 10)-1) * 10
    let upper_bound = Math.ceil((Math.abs(aa)+1) / 10) * 10
    let calc_y_number = (upper_bound - lower_bound)/10;

    return (
      <div ref={this.divRef}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" onMouseMove={this.handleMouseMove} onMouseLeave={this.handleHoverOff} className="test_plot" width={this.state.dimensions.svg_width} height={this.props.plot_settings.height} viewBox={v_b}>
            <g>
              <g transform={v_trans}>

                { area_paths }

                { area_paths_future }
                
                <Plot dimensions={this.state.dimensions} y_number={this.state.y_number} title={this.state.title} />

                <AxisY dimensions={this.state.dimensions} y_number={calc_y_number} y_label={this.state.y_label} lower_bound={lower_bound} upper_bound={upper_bound} />

                <AxisX dimensions={this.state.dimensions} x_label={this.state.x_label} ticks={this.state.ticks} dates={this.state.data_map_area_DATES} />
                
                <Legend dimensions={this.state.dimensions} colors={this.state.colors} keywords={this.props.plot_settings.keywords} />

                <Static_Line dimensions={this.state.dimensions} ranges={this.props.plot_settings.ranges} />

                <Pointer_Line mark_line={this.state.mark_line} height={this.state.dimensions.height} />

                <Info_Box info_box={this.state.info_box} width={dimensions.box_width} height={this.state.info_box_height} keywords={this.props.plot_settings.keywords}  />
                
              </g>
            </g>
        </svg>
      </div>
    );
  }
}

export default KeywordPlot;
