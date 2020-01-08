import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { Spinner } from "./loader";
import { Plot } from "./plot";

const componentNames = [
  // "Oval",
  // "Puff",
  "KeywordPlot",
];

function componentName() {
  // if (componentNames.includes(type)) {
  //   return Spinner[type];
  // }
  // return Spinner.Audio;
  return Plot.KeywordPlot;
}

/**
 * @return {null}
 */
export default function KeywordPlot(props) {
  const [display, setDisplay] = useState(true);

  // useEffect(() => {
  //   let timer;
  //   if (props.timeout && props.timeout > 0) {
  //     timer = setTimeout(() => {
  //       setDisplay(false);
  //     }, props.timeout);
  //   }

  //   return () => {
  //     if (timer) clearTimeout(timer);
  //   };
  // });

  // if (!props.visible || props.visible === "false") {
  //   return null;
  // }
  // return display ? (
  //   <div aria-busy="true" className={props.className} style={props.style}>
  //     {React.createElement(componentName(props.type), { ...props })}
  //   </div>
  // ) : null;
  return display ? (
    <div aria-busy="true" >
      {React.createElement(componentName(), { ...props })}
    </div>
  ) : null;
}

KeywordPlot.propTypes = {
  type: PropTypes.oneOf([...componentNames]),
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  timeout: PropTypes.number
};

KeywordPlot.defaultProps = {
  type: "Puff2",
  style: {},
  className: "",
  visible: true,
  timeout: 0
};
