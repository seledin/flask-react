import React from 'react';
import { capitalizeString } from "./functions";

  export const Info_Box = props => {
    return (
      <g>
        {get_info_box(props.info_box, props.width, props.height, props.keywords)}
      </g>
    )
  };
  
  export default Info_Box



function get_info_box(info_box, box_width, box_height, keywords){ 

  let y_data = [];
  
  if(info_box !== undefined && info_box.value_y !== undefined) {
      for(let i=0; i<info_box.colors.length; i++){
          
          if(info_box.value_y[3][i] !== null && info_box.value_y[2][i] !== null){
              y_data.push(<g><path fill="none" d={`M 5 ${(i + 1)*25 + 22} L 20 ${(i + 1)*25 + 22}`} stroke={info_box.colors[i]} strokeWidth="2" opacity="1"></path>
              <text x="25" y={(i + 1)*25 + 25}>{capitalizeString(keywords[i])} {info_box.value_y[2][i].toFixed(1)} (min: {info_box.value_y[3][i].toFixed(1)} | max: {info_box.value_y[4][i].toFixed(1)})</text></g>)
          } else {
              y_data.push(<g><path fill="none" d={`M 5 ${(i + 1)*25 + 22} L 20 ${(i + 1)*25 + 22}`} stroke={info_box.colors[i]} strokeWidth="2" opacity="1"></path>
              
                <text x="25" y={(i + 1)*25 + 25}>{capitalizeString(keywords[i])} {info_box.value_y[2][i].toFixed(1)}</text></g>)
          }

          
      }
  }

  let date = formatDate(info_box.value_x)
  

  return (
  <g transform={`translate(${info_box.pos_x}, ${info_box.pos_y})`} data-z-index="1" class="plot_info_box" visibility={info_box.visibility}>
    <rect x="0" y="0" width={box_width} height={box_height}  />   
    <g class="plot_info_box_header">
      <text x="5" y="25">Date: {date}</text>
    </g>
    {y_data}
  </g>)
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