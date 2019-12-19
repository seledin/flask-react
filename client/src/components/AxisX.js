import React from 'react';
import { get_ticks, get_x_axis, prepare_x_axis } from "../utils_dates/graphics"

class AxisX extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {

      let ticks = this.props.ticks + 1;
      
      if(this.props.dimensions.width<=800){
        ticks = 6 + 1;
      }

      return (
        <g>
            {/* <g dangerouslySetInnerHTML={{ __html: get_x_axis(this.props.x_label, this.props.dimensions.width, this.props.dimensions.height, this.props.dimensions.x_trans, this.props.dimensions.y_trans) }} />  */}
            <g dangerouslySetInnerHTML={{ __html: get_ticks(this.props.dimensions.width, this.props.dimensions.height, ticks) }} />
            <g dangerouslySetInnerHTML={{ __html: prepare_x_axis(this.props.dimensions.width, this.props.dimensions.height, ticks, this.props.dates, this.props.x_label, this.props.dimensions.y_trans2) }} /> 
        </g>
      );
    }
  }

  export default AxisX;