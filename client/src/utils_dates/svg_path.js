
const svgPath = (points, command, color) => {
  // build the d attributes by looping over the points
  const d = points.reduce((acc, point, i, a) => i === 0
    ? `M ${point[0]},${point[2]}`
    : `${acc} ${command(point, i, a)}`
  , '')

  return `<path d="${d}" fill="none" stroke=${color} stroke-width=2 data-z-index="0" pointer-events="none" />`
}

const lineCommand = point => `L ${point[0]} ${point[2]}`

export function svg_path(data, color){
    return svgPath(data, lineCommand, color)
}