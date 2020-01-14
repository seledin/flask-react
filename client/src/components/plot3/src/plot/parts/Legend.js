import React from 'react';
import { capitalizeString } from "./functions";

export const Legend = props => {
  return (
    <g>{prepare_legend(props.dimensions, props.colors, props.keywords)}</g>
  )
};

export default Legend



   function prepare_legend(dimensions, colors, keywords){

    let legend = [];
    let keyword_sizes = []

    if (dimensions.width2>700){
        for(let i=0; i<colors.length; i++){
            let l = calculate_translate_for_legend(keywords[i].length);
            
    
            let translation = keyword_sizes.reduce((a, b) => a + b, 0);
    
            legend.push(
              <g key={i} data-z-index="1" transform={`translate(${translation},3)`}>
                  <path fill="none" d="M 0 11 L 30 11" stroke={colors[i]} stroke-width="0"></path>
                  <text x="35" textAnchor="start" data-z-index="0" y="15" fontSize="12px" stroke="#6c757d" stroke-width="0">{capitalizeString(keywords[i])}</text>
              </g>
        );

            keyword_sizes.push(l);
        }

        let translation = keyword_sizes.reduce((a, b) => a + b, 0);
        let width_trans = (dimensions.width2)/2 - translation/2 - dimensions.x_trans;
        let height_trans = dimensions.height + dimensions.y_trans/2;
        height_trans = dimensions.height + dimensions.y_trans - dimensions.y_trans2;
        height_trans = dimensions.height + dimensions.y_trans - 25;
    
        return (
            <g transform={`translate(${width_trans}, ${height_trans})`} class="plot_legend" >
                {legend}
            </g>)
        
    } else {
        for(let i=0; i<keywords.length; i++){
            let l = calculate_translate_for_legend(keywords[i].length);
            keyword_sizes.push(l);
        }

        for(let i=0; i<colors.length; i++){

            let trans = Math.max(...keyword_sizes);
    
            legend.push(
            <g data-z-index="1" transform={`translate(${(dimensions.width)/2 - trans/2}, ${i*18+10})`}>
                <path fill="none" d="M 0 11 L 30 11" stroke={colors[i]} stroke-width="0"></path>
                <text x="35" textAnchor="start" data-z-index="0" y="15" font-size="12px" stroke="#6c757d" stroke-width="0">{capitalizeString(keywords[i])}</text>
            </g>
        );
        }

        let height_trans = dimensions.height + 43;
    
        return (
            <g transform={`translate(${0}, ${height_trans})`} class="plot_legend" >
                {legend}
            </g>)
    }
}

function calculate_translate_for_legend(keyword_length){
    return (6,5)*keyword_length + 55;
}