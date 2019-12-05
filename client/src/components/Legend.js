import React from 'react';
import { prepare_legend } from "../utils_dates/graphics"

class Legend extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <g>
            <g dangerouslySetInnerHTML={{ __html: prepare_legend((this.props.dimensions.width)/2 - this.props.dimensions.x_trans, this.props.dimensions.height + this.props.dimensions.y_trans/2, this.props.colors) }} /> 
        </g>
      );
    }
  }

  export default Legend ;