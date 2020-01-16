import React from 'react';

export class Static_Line extends React.PureComponent {	

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <g>
        { get_static_line(this.props.dimensions, this.props.ranges) }
      </g>
    )
  }
}

export default Static_Line

function get_static_line(dimensions, ranges) {
  let x_frame = dimensions.width/(ranges.max_x - 1);
  let x = x_frame * (dimensions.historical_data_length - 1);

  return (
    <path fill="none" className="plot_pointer_line" d={`M ${x} 0 L ${x} ${dimensions.height}`} strokeDasharray="6" data-z-index="0"></path>
  )
}

