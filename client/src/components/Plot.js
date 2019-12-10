import React from 'react';
import { get_lines, prepare_title, get_y_ticks, get_y_axis } from "../utils_dates/graphics";

class Plot extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <g>
                {/* <g dangerouslySetInnerHTML={{ __html: get_y_axis(0,0, this.props.dimensions.height) }} /> */}
                {/* <g dangerouslySetInnerHTML={{ __html: get_lines(this.props.dimensions.width, this.props.dimensions.height, this.props.y_number) }} /> */}
                <g dangerouslySetInnerHTML={{ __html: get_y_ticks(this.props.dimensions.height, this.props.y_number) }} />
                <g dangerouslySetInnerHTML={{ __html: prepare_title(this.props.title, this.props.dimensions.width, this.props.dimensions.height, this.props.dimensions.x_trans, this.props.dimensions.y_trans) }} />
            </g>
        );
    }
  }

  export default Plot;