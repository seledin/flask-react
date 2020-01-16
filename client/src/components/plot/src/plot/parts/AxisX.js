import React from 'react';

export class AxisX extends React.PureComponent {	

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <g>
        { prepare_x_axis(this.props.dimensions.width, this.props.dimensions.height, this.props.ticks, this.props.dates, this.props.x_label, this.props.dimensions.y_trans_bottom) }
      </g>
    )
  }
}

export default AxisX



function make_x_tick(x, y) {
  let line = `M ${x} ${y} L ${x} ${y + 10}`;
  return <path key={x} className="plot_xmark" d={line} data-z-index="0" />
}

function prepare_x_axis(width, height, ticks, data_mock, title, y_trans){
  let result = []

  let ticks_number = ticks + 1;
    
  if(width<=700) {
    ticks_number = 6 + 1;
  }

  let length = Object.keys(data_mock).length;
  let data_frame = Math.floor(length/(ticks_number-1));

  let frame = width / (ticks_number - 1)

  for (let i=0; i<ticks_number; i++){
    let point = frame * i;
    result.push(make_x_tick(point, height))
  }

  if(width<=700){
    for(let i=0; i<ticks_number; i++){
      result.push(<text key={i} x={frame*i} className="plot_xtick" textAnchor="middle" y={height + 25}>{formatDate_monthly(data_mock[data_frame*i][1])}</text>)
    }
  } else {
    for(let i=0; i<ticks_number; i++){
      result.push(<text key={i} x={frame*i} className="plot_xtick" textAnchor="middle" y={height + 25}>{formatDate(data_mock[data_frame*i][1])}</text>)
    }
  }

  let line = `M 0 ${height} H ${width}`;
  let height_trans = y_trans

  if(width>700) {
    result.push(<text x={width/2} key={9911141} textAnchor="middle" className="plot_xaxis_title" y={height + height_trans - 30}><tspan>{title}</tspan></text>)
  } else {
    result.push(<text x={width/2} key={2} textAnchor="middle" className="plot_xaxis_title" y={height +40}><tspan>{title}</tspan></text>)
  }

  result.push(<path key={height} d={line} fill="none" className="plot_line" data-z-index="0" />)

  return result 
}



function formatDate(d)
 {
  let date = new Date(d)
  var dd = date.getDate(); 
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  if(mm<10){mm='0'+mm};
  return d = dd+'-'+mm+'-'+yyyy
}

function formatDate_monthly(d)
 {
  let date = new Date(d)
  var dd = date.getDate(); 
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  if(mm<10){mm='0'+mm};
  return d = mm+'-'+yyyy
}