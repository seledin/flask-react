import React from 'react';

export const AxisX = props => {

  let ticks = props.ticks + 1;
    
  if(props.dimensions.width<=700){
    ticks = 6 + 1;
  }


  return (
    <g>
        {get_ticks(props.dimensions.width, props.dimensions.height, ticks)}
        {prepare_x_axis(props.dimensions.width, props.dimensions.height, ticks, props.dates, props.x_label, props.dimensions.y_trans2)}
    </g>
  )
};

export default AxisX



function make_x_tick(x, y) {

    let line = `M ${x} ${y} L ${x} ${y + 10}`;
    return <path key={x} class="plot_xmark" d={line} data-z-index="0" />
}

function get_ticks(width, height, ticks_number){
    let result = [];

    let frame = width / (ticks_number - 1);

    for (let i=0; i<ticks_number; i++){
        let point = frame * i;
        result.push(make_x_tick(point, height))
    }

    return result;
}


function prepare_x_axis(width, height, ticks_number, data_mock, title, y_trans){
  let result = []

  let length = Object.keys(data_mock).length;
  let data_frame = Math.floor(length/(ticks_number-1));

  let frame = width / (ticks_number - 1)

  if(width<=700){
      for(let i=0; i<ticks_number; i++){
          result.push(<text key={i} x={frame*i} class="plot_xtick" text-anchor="middle" y={height + 25}>{formatDate_monthly(data_mock[data_frame*i][1])}</text>)
      }
  }else{
      for(let i=0; i<ticks_number; i++){
          result.push(<text key={i} x={frame*i} class="plot_xtick" text-anchor="middle" y={height + 25}>{formatDate(data_mock[data_frame*i][1])}</text>)
      }
  }

  let line = `M 0 ${height} H ${width}`;

  let height_trans = y_trans

  if(width>700){
      result.push(<text key={height} x={width/2} text-anchor="middle" class="plot_xaxis_title" y={height + height_trans - 30}><tspan>{title}</tspan></text>)
  }else{
      result.push(<text key={height} x={width/2} text-anchor="middle" class="plot_xaxis_title" y={height +40}><tspan>{title}</tspan></text>)
  }
  result.push(<path key={height} d={line} fill="none" class="plot_line" data-z-index="0" />)

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