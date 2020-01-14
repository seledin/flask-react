import React from 'react';

export const Pointer_Line = props => {
  return (
    <g transform={`translate(${props.mark_line.pos}, 0)`}>
      <path fill="none" data-z-index="0" class="plot_mark_line" d={`M 0 0 L 0 ${props.height}`} visibility={`mark_line.visibility`} />         
    </g>
  )
};

export default Pointer_Line