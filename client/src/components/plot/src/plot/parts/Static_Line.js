import React from 'react';

// export const Static_Line = props => {

//   let x_frame = props.dimensions.width/(props.ranges.max_x-1)
//   let x = x_frame * (props.dimensions.historical_data_length - 1);

//   return (
//     <g>
//         <path fill="none" class="plot_pointer_line" d={`M ${x} 0 L ${x} ${props.dimensions.height}`} stroke-dasharray="6" data-z-index="0"></path>
//     </g>
//   )
// };

export class Static_Line extends React.PureComponent {	

  constructor(props) {
    super(props);
  }

  render(){
    let x_frame = this.props.dimensions.width/(this.props.ranges.max_x-1);
    let x = x_frame * (this.props.dimensions.historical_data_length - 1);

    return (
      <g>
          <path fill="none" class="plot_pointer_line" d={`M ${x} 0 L ${x} ${this.props.dimensions.height}`} stroke-dasharray="6" data-z-index="0"></path>
      </g>
    )
  }

}

export default Static_Line