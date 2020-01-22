import React from 'react';
import { prepare_legend } from "../utils_dates/graphics"

class Legend extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <g>
            <g dangerouslySetInnerHTML={{ __html: prepare_legend(this.props.dimensions, this.props.colors, this.props.keywords) }} /> 
        </g>
      );
    }
  }

  export default Legend ;