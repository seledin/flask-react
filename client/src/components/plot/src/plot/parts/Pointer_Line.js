import React from 'react';

export class Pointer_Line extends React.PureComponent {	

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <g transform={`translate(${this.props.mark_line.pos}, 0)`}>
        <path fill="none" data-z-index="0" class="plot_mark_line" d={`M 0 0 L 0 ${this.props.height}`} visibility={`mark_line.visibility`} />         
      </g>
    )
  }

}

export default Pointer_Line