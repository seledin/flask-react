import React from 'react';
import { get_info_box } from "../utils_dates/graphics"

class Info_Box extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
      return (
        <g>
            <g dangerouslySetInnerHTML={{ __html: get_info_box(this.props.info_box, this.props.width, this.props.height, this.props.keywords ) }} /> 
        </g>
      );
    }
  }

  export default Info_Box ;