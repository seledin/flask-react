import React from 'react';
import { get_y_axis, get_y_axis_label } from "../utils_dates/graphics"

class AxisY extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <g>
            <g dangerouslySetInnerHTML={{ __html: get_y_axis(0, 0, this.props.dimensions.height, this.props.y_number) }} />
            <g dangerouslySetInnerHTML={{ __html: get_y_axis_label(this.props.y_label, this.props.dimensions.height, this.props.dimensions.x_trans) }} />
        </g>
      );
    }
  }

  export default AxisY;