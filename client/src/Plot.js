import React from 'react';

import Test_Plot_Dates from './Test_Plot_Dates';

class Plot extends React.PureComponent {
    constructor(props) {
        super(props);
        // this.childRef = React.createRef();
        this.setRef = this.setRef.bind(this);
    }

    componentDidMount() {
      // Calling a function on the Child DOM element
      // this.setRef.focus();
    }

    setRef(input) {
        this.setRef = input;
    }
    
    render() {
      return (
        <div>
            <Test_Plot_Dates setRef={this.setRef} options={this.props.options} historical_data={this.props.historical_data} forecasted_data={this.props.forecasted_data} number_of_series={this.props.forecasted_data.length} keywords={this.props.keywords} />
        </div>
      );
    }
  }

  export default Plot;