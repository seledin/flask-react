import React from 'react';

export class Area_Path extends React.PureComponent {	

  constructor(props) {
    super(props);
  }

  render(){
    console.log("path")
    if(this.props.style === "dash"){
      return (
        <g>{area_path(this.props.data, this.props.color, 4)}</g>
      );
    } else {
      return (
        <g>{area_path(this.props.data, this.props.color, 0, this.props.slice)}</g>
      );
    }
  }
}

export default Area_Path



////////////////

const svgPath = (points, command, color, dash) => {

  const d = points.reduce((acc, point, i, a) => i === 0
  ? `M ${point[0]},${point[2]}`
  : `${acc} ${bezierCommand(point, i, a)}`
  , '')

  return <path d={d} fill="none" key={color} stroke={color} strokeWidth="2" data-z-index="0" strokeDasharray={dash} pointerEvents="none" />
}

const areaPath = (points, command, color) => {

  let d1 = points.reduce((acc, point, i, a) => i === 0
  ? `M ${point[0]},${point[4]}`
  : `${acc} ${bezierCommand_upper(point, i, a)}`
  , '');



  d1 += ` L ${points[points.length - 1][0]} ${points[points.length - 1][3]}  `;

  let d3 = points.reverse().reduce((acc, point, i, a) => i === 0
  ? `L ${point[0]},${point[3]}`
  : `${acc} ${bezierCommand_lower(point, i, a)}`
  , '');


  d3 += ` L ${points[points.length - 1][0]} ${points[points.length - 1][4]}  `;

  let d = d1 + d3;
//////////////////////////////////////////

  return <path d={d} fill={color} stroke={color} strokeWidth="2" data-z-index="0" pointerEvents="none" opacity="0.35" />
}



const lineCommand = point => `L ${point[0]} ${point[2]}`

    
export function area_path(data, color, dash=0, slice=0){


    let result = [];
    result.push(svgPath(data, lineCommand, color, dash));
    result.push(areaPath(data.slice(slice), bezierCommand, color));

    return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The smoothing ratio
const smoothing = 0.2


// Properties of a line 
// I:  - pointA (array) [x,y]: coordinates
//     - pointB (array) [x,y]: coordinates
// O:  - (object) { length: l, angle: a }: properties of the line
const line = (pointA, pointB) => {
  const lengthX = pointB[0] - pointA[0]
  const lengthY = pointB[2] - pointA[2]
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  }
}

// Position of a control point 
// I:  - current (array) [x, y]: current point coordinates
//     - previous (array) [x, y]: previous point coordinates
//     - next (array) [x, y]: next point coordinates
//     - reverse (boolean, optional): sets the direction
// O:  - (array) [x,y]: a tuple of coordinates
const controlPoint = (current, previous, next, reverse) => {

  // When 'current' is the first or last point of the array
  // 'previous' or 'next' don't exist.
  // Replace with 'current'
  const p = previous || current
  const n = next || current

  // Properties of the opposed-line
  const o = line(p, n)

  // If is end-control-point, add PI to the angle to go backward
  const angle = o.angle + (reverse ? Math.PI : 0)
  const length = o.length * smoothing

  // The control point position is relative to the current point
  const x = current[0] + Math.cos(angle) * length
  const y = current[2] + Math.sin(angle) * length
  return [x, y]
}

// Create the bezier curve command 
// I:  - point (array) [x,y]: current point coordinates
//     - i (integer): index of 'point' in the array 'a'
//     - a (array): complete array of points coordinates
// O:  - (string) 'C x2,y2 x1,y1 x,y': SVG cubic bezier C command
const bezierCommand = (point, i, a) => {

  // start control point
  const cps = controlPoint(a[i - 1], a[i - 2], point)

  // end control point
  const cpe = controlPoint(point, a[i - 1], a[i + 1], true)
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[2]}`
}


const bezierCommand_upper = (point, i, a) => {

  // start control point
  const cps = controlPoint_upper(a[i - 1], a[i - 2], point)

  // if(point[4]<0){
  //   console.log(point[0]+ ": " +point[1] + " : " + point[4])
  // }
  // end control point
  const cpe = controlPoint_upper(point, a[i - 1], a[i + 1], true)
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[4]}`
}

const bezierCommand_lower = (point, i, a) => {

  // start control point
  const cps = controlPoint_lower(a[i - 1], a[i - 2], point)

  // end control point
  const cpe = controlPoint_lower(point, a[i - 1], a[i + 1], true)
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[3]}`
}


const line_lower = (pointA, pointB) => {
  const lengthX = pointB[0] - pointA[0]
  const lengthY = pointB[3] - pointA[3]
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  }
}

const line_upper = (pointA, pointB) => {
  const lengthX = pointB[0] - pointA[0]
  const lengthY = pointB[4] - pointA[4]
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  }
}













const controlPoint_lower = (current, previous, next, reverse) => {

  // When 'current' is the first or last point of the array
  // 'previous' or 'next' don't exist.
  // Replace with 'current'
  const p = previous || current
  const n = next || current

  // Properties of the opposed-line
  const o = line_lower(p, n)

  // If is end-control-point, add PI to the angle to go backward
  const angle = o.angle + (reverse ? Math.PI : 0)
  const length = o.length * smoothing

  // The control point position is relative to the current point
  const x = current[0] + Math.cos(angle) * length
  const y = current[3] + Math.sin(angle) * length
  return [x, y]
}

const controlPoint_upper = (current, previous, next, reverse) => {

  // When 'current' is the first or last point of the array
  // 'previous' or 'next' don't exist.
  // Replace with 'current'
  const p = previous || current
  const n = next || current

  // Properties of the opposed-line
  const o = line_upper(p, n)

  // If is end-control-point, add PI to the angle to go backward
  const angle = o.angle + (reverse ? Math.PI : 0)
  const length = o.length * smoothing

  // The control point position is relative to the current point
  const x = current[0] + Math.cos(angle) * length
  const y = current[4] + Math.sin(angle) * length
  return [x, y]
}