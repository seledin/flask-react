import React from 'react';

export const AxisY = props => {

  let result = [];
  let upper_index = props.upper_bound/10;
  let lower_index = props.lower_bound/10;

  let lines_number = upper_index - lower_index;

  let frame = props.dimensions.height / lines_number;

  let x = 0;
  let y = 0;

  let difference = Math.abs(lower_index)

  for(let i=lower_index; i<=upper_index; i++){
    result.push(make_y_tick(-20, props.dimensions.height - frame*(i -lower_index),i * 10));
  }

  let line = `M ${x} ${y} L ${x} ${y + props.dimensions.height}`;

  return (
    <g>
      <g transform={`translate(${-(props.dimensions.x_trans/2 + 10)},${props.dimensions.height/2})`}><text x="0" text-anchor="middle" transform="rotate(-90 0,0)" class="plot_yaxis_title" y="0"><tspan>{props.y_label}</tspan></text></g>
      {get_y_ticks(props.dimensions.height, props.y_number)}
      {result}
      <path d={line} fill="none" class="plot_line" data-z-index="0" />
      
    </g>
  )

};

export default AxisY

function make_y_tick(x, y, value) {
  return <text x={x} text-anchor="end" class="plot_ytick" y={y}>{value}</text>
}

function make_yy_tick(x, y) {

  let line = `M ${x-10} ${y} L ${x} ${y}`;
  return <path d={line} fill="none" class="plot_line" data-z-index="0" />
}

function get_y_ticks (height, lines_number) {
  let result = []

  let frame = height / lines_number;

  for (let i=0; i<=lines_number; i++){
      let point = frame * i;
      result.push(make_yy_tick(0,point))
  }

  return result
}