import React from 'react';
import { get_mark_line } from "../utils_dates/graphics"

class Pointer_Line extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <g>
            <g dangerouslySetInnerHTML={{ __html: get_mark_line(this.props.mark_line, this.props.height) }} /> 
        </g>
      );
    }
  }

  export default Pointer_Line;