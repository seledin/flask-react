import { capitalizeString } from "./functions";


function make_line (point, width) {

    let line = `M 0 ${point} H ${width}`;
    return `<path d="${line}" fill="none" class="plot_line" data-z-index="0" />`
}

function make_yy_tick(x, y) {

    let line = `M ${x-10} ${y} L ${x} ${y}`;
    // return `<path class="plot_xmark" d="${line}" data-z-index="0" />`
    return `<path d="${line}" fill="none" class="plot_line" data-z-index="0" />`
}

export function get_lines (width, height, lines_number) {

    let frame = height / lines_number;

    let result = [];

    for (let i=lines_number; i<=lines_number; i++){
        let point = frame * i;
        result.push(make_line(point,width))
    }

    return result;
}

export function get_y_ticks (height, lines_number) {
    let result = []

    let frame = height / lines_number;

    for (let i=0; i<=lines_number; i++){
        let point = frame * i;
        result.push(make_yy_tick(0,point))
    }

    return result
}


function make_x_tick(x, y) {

    let line = `M ${x} ${y} L ${x} ${y + 10}`;
    return `<path class="plot_xmark" d="${line}" data-z-index="0" />`
}

export function get_ticks(width, height, ticks_number){
    let result = [];

    let frame = width / (ticks_number - 1);

    for (let i=0; i<ticks_number; i++){
        let point = frame * i;
        result.push(make_x_tick(point, height))
    }

    // let frame = width / (length - 1)
    // for(let i=0; i<ticks_number; i++){
    //     // result.push(`<text x="${frame*i}" class="plot_xtick" text-anchor="middle" y="${height + 30}">${formatDate_monthly(data_mock[data_frame*i][1])}</text>`)
    //     result.push(`<text x="${frame*i}" class="plot_xtick" text-anchor="middle" y="${height + 30}">${formatDate_monthly(data_mock[i][1])}</text>`)
    // }

    return result;
}

function make_y_tick(x, y, value) {
    return `<text x="${x}" textAnchor="end" class="plot_ytick" y="${y}">${value}</text>`
}

export function get_y_axis(x, y, height, lines_number) {
    let result = [];

    let frame = height / lines_number;

    for(let i=0; i<=lines_number; i++){
        result.push(make_y_tick(-40, height - frame*(i),i * lines_number));
    }

    let line = `M ${x} ${y} L ${x} ${y + height}`;
    result.push(`<path d="${line}" fill="none" class="plot_line" data-z-index="0" />`)

    return result;
}

export function prepare_title(title, width, height, x_trans, y_trans){
    return `<text x="${width/2}" class="plot_title" text-anchor="middle" y="${-y_trans/3}">${title}</text>`
}



export function prepare_x_axis(width, height, ticks_number, data_mock){
    let result = []

    let length = Object.keys(data_mock).length;
    let data_frame = Math.floor(length/(ticks_number-1));

    let frame = width / (ticks_number - 1)
    for(let i=0; i<ticks_number; i++){
        // result.push(`<text x="${frame*i}" class="plot_xtick" text-anchor="middle" y="${height + 30}">${formatDate_monthly(data_mock[data_frame*i][1])}</text>`)
        result.push(`<text x="${frame*i}" class="plot_xtick" text-anchor="middle" y="${height + 30}">${formatDate_monthly(data_mock[data_frame*i][1])}</text>`)
    }

    return result 

}

export function get_x_axis(title, width, height, x_trans, y_trans){
    let result = []
    let line = `M 0 ${height} H ${width}`;

    result.push(`<text x="${width/2}" text-anchor="middle" class="plot_xaxis_title" y="${height + y_trans/2}"><tspan>${title}</tspan></text>`)
    result.push(`<path d="${line}" fill="none" class="plot_line" data-z-index="0" />`)
    return result
}

export function get_y_axis_label(title, height, x_trans){
    return `<text x="${x_trans}" text-anchor="middle" transform="translate(0,0) rotate(270 25.140625 309.5)" class="plot_yaxis_title" y="${(height + x_trans)/2 - 0.1*x_trans}"><tspan>${title}</tspan></text>`
}

export function get_red_line(dimensions, ranges_dates){

    let x_frame = dimensions.width/(ranges_dates.max_x-1)

    // console.log("%%%%")
    // console.log(dimensions)
    // console.log(ranges_dates)

    // let x = x_frame * 256;
    let x = x_frame * (dimensions.historical_data_length - 1);


    return `<g>
        <path fill="none" class="plot_pointer_line" d="M ${x} 0 L ${x} ${dimensions.height}" stroke-dasharray="6" data-z-index="0"></path>
    </g>`
}

export function get_mark_line(mark_line, height){
    return `<g transform="translate(${mark_line.pos}, 0)">
        <path fill="none" data-z-index="0" class="plot_mark_line" d="M 0 0 L 0 ${height}" visibility="${mark_line.visibility}" />         
    </g>`
}

// export function get_info_box2(info_box, box_width, box_height){ 

//     let y_data = [];
//     // console.log(info_box.value_y)
    
//     if(info_box !== undefined && info_box.value_y !== undefined) {
//         for(let i=0; i<info_box.colors.length; i++){
//             y_data.push(`<path fill="none" d="M 5 ${(i + 1)*25 + 22} L 20 ${(i + 1)*25 + 22}" stroke="${info_box.colors[i]}" strokeWidth="2" opacity="1"></path>
//             <text stroke="#343640" opacity="1" x=25 y=${(i + 1)*25 + 25}>Series ${i + 1} value y: ${info_box.value_y[2][i]}</text>`)
//         }
//     }

//     let date = formatDate(info_box.value_x)
    
//     return `<g transform="translate(${info_box.pos_x}, ${info_box.pos_y})" data-z-index="1" class="plot_info_box" visibility=${info_box.visibility}>
//         <rect x="0" y="0" width=${box_width} height=${box_height}  />   
//         <text x=5 y="25" class="plot_info_box_header">Date: ${date}</text>
//         ${y_data}
//     </g>`
// }

// export function get_y_axis(x, y, height){
//     let line = `M ${x} ${y} L ${x} ${y + height}`;
//     return `<path d="${line}" fill="none" class="plot_line" data-z-index="0" />`
// }

export function get_info_box(info_box, box_width, box_height, keywords){ 

    let y_data = [];
    
    if(info_box !== undefined && info_box.value_y !== undefined) {
        for(let i=0; i<info_box.colors.length; i++){
            y_data.push(`<path fill="none" d="M 5 ${(i + 1)*25 + 22} L 20 ${(i + 1)*25 + 22}" stroke="${info_box.colors[i]}" strokeWidth="2" opacity="1"></path>
             <text x=25 y=${(i + 1)*25 + 25}>${capitalizeString(keywords[i])} ${info_box.value_y[2][i].toFixed(1)} (min: ${info_box.value_y[3][i].toFixed(1)} | max: ${info_box.value_y[2][i].toFixed(1)})</text>`)
        }
    }

    let date = formatDate(info_box.value_x)
    
    return `<g transform="translate(${info_box.pos_x}, ${info_box.pos_y})" data-z-index="1" class="plot_info_box" visibility=${info_box.visibility}>
        <rect x="0" y="0" width=${box_width} height=${box_height}  />   
        <g class="plot_info_box_header">
        <text x=5 y="25">Date: ${date}</text>
        </g>
        ${y_data}
    </g>`
}

export function prepare_legend(dimensions, colors, keywords){

    // this.props.dimensions.width)/2 - this.props.dimensions.x_trans, this.props.dimensions.height + this.props.dimensions.y_trans/2

    let legend = [];
    let keyword_sizes = []

    console.log(dimensions)
    
    // for(let i=0; i<colors.length; i++){
    //     let l = calculate_translate_for_legend(keywords[i].length);
        

    //     let translation = keyword_sizes.reduce((a, b) => a + b, 0);

    //     legend.push(`
    //         <g data-z-index="1" transform="translate(${translation},3)">
    //             <path fill="none" d="M 0 11 L 30 11" stroke=${colors[i]} stroke-width="0"></path>
    //             <text x="35" textAnchor="start" data-z-index="0" y="15" font-size="1.1em" stroke="#6c757d" stroke-width="0">${capitalizeString(keywords[i])}</text>
    //         </g>
    //     `);
    //     keyword_sizes.push(l);
    // }

    if (dimensions.width>600){
        for(let i=0; i<colors.length; i++){
            let l = calculate_translate_for_legend(keywords[i].length);
            
    
            let translation = keyword_sizes.reduce((a, b) => a + b, 0);
    
            legend.push(`
                <g data-z-index="1" transform="translate(${translation},3)">
                    <path fill="none" d="M 0 11 L 30 11" stroke=${colors[i]} stroke-width="0"></path>
                    <text x="35" textAnchor="start" data-z-index="0" y="15" font-size="1.1em" stroke="#6c757d" stroke-width="0">${capitalizeString(keywords[i])}</text>
                </g>
            `);
            keyword_sizes.push(l);
        }

        let translation = keyword_sizes.reduce((a, b) => a + b, 0);
        let width_trans = (dimensions.width2)/2 - translation/2 - dimensions.x_trans;
        let height_trans = dimensions.height + dimensions.y_trans/2;
    
        return `
            <g transform="translate(${width_trans}, ${height_trans})" class="plot_legend" >
                ${legend}
            </g>`
        
    } else {
        for(let i=0; i<colors.length; i++){
            let l = calculate_translate_for_legend(keywords[i].length);
            console.log("len: " + l)
            
    
            // let translation = keyword_sizes.reduce((a, b) => a + b, 0);
    
            legend.push(`
                <g data-z-index="1" transform="translate(${(dimensions.width)/2 - l/2}, ${i*7+3})">
                    <path fill="none" d="M 0 11 L 30 11" stroke=${colors[i]} stroke-width="0"></path>
                    <text x="35" textAnchor="start" data-z-index="0" y="15" font-size="1.1em" stroke="#6c757d" stroke-width="0">${capitalizeString(keywords[i])}</text>
                </g>
            `);
            // keyword_sizes.push(l);
        }

        // let translation = keyword_sizes.reduce((a, b) => a + b, 0);
        // let width_trans = (dimensions.width2)/2 - translation/2 - dimensions.x_trans;
        let height_trans = dimensions.height + dimensions.y_trans/2;
    
        return `
            <g transform="translate(${0}, ${height_trans})" class="plot_legend" >
                ${legend}
            </g>`
    }
}

function calculate_translate_for_legend(keyword_length){
    return (6,5)*keyword_length + 55;
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

// function capitalizeString(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
