import React from 'react';

export class Pointer_Line extends React.PureComponent {	

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <g>{ get_pointer_line(this.props.height, this.props.mark_line) }</g>
    )
  }
}

export default Pointer_Line

function get_pointer_line(height, mark_line) {
  return (
    <g transform={`translate(${mark_line.pos}, 0)`}>
      <path fill="none" data-z-index="0" className="plot_mark_line" d={`M 0 0 L 0 ${height}`} visibility={`mark_line.visibility`} />         
    </g>
  )
}