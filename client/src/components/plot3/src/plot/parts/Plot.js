import React from 'react';

export const Plot = props => {
    return (
        <g>
            <text x={props.dimensions.width/2} class="plot_title" text-anchor="middle" y={-props.dimensions.y_trans/3}>{props.title}</text>
        </g>
    )
};

export default Plot;
