import React from 'react';
import { area_path } from "../utils_dates/area_path";

class Area_Path extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    render() {
      if(this.props.style === "dash"){
        return (
          <g dangerouslySetInnerHTML={{ __html: area_path(this.props.data, this.props.color, 4) }} />
        );
      } else {
        return (
          <g dangerouslySetInnerHTML={{ __html: area_path(this.props.data, this.props.color) }} />
        );
      }

    }
  }

  export default Area_Path;