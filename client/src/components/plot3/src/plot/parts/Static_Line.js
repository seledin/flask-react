import React from 'react';
import { get_red_line } from "../utils_dates/graphics"

class Static_Line extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <g>
            <g dangerouslySetInnerHTML={{ __html: get_red_line(this.props.dimensions, this.props.ranges) }} /> 
        </g>
      );
    }
  }

  export default Static_Line ;