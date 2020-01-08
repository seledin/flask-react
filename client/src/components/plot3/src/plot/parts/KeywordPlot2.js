import React from "react";
import PropTypes from "prop-types";

export const KeywordPlot2 = props => (
    // <svg width="100" height="100">
    //     <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    //     Sorry, your browser does not support inline SVG.
    // </svg>

    <svg width={props.width} height={props.height}>
    <circle cx="50" cy="50" r={props.radius} stroke="green" stroke-width="4" fill={props.color} />
    Sorry, your browser does not support inline SVG.
    </svg>
);

// constructor(props) {
//     super(props);
// }

// Oval.propTypes = {
//   height: PropTypes.number,
//   width: PropTypes.number,
//   color: PropTypes.string,
//   label: PropTypes.string
// };

// Oval.defaultProps = {
//   height: 80,
//   width: 80,
//   color: "green",
//   label: "audio-loading"
// };

export default KeywordPlot2
