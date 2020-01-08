import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts";

// import Highcharts from 'highcharts' //core
import HC_more from 'highcharts/highcharts-more' //module
HC_more(Highcharts) //init module

// require("highcharts/highcharts-more")(Highcharts);

class PlotComponent extends Component {	

	constructor(props) {
		super(props);

		this.state = {
			keywords: [],
			hoverData: null
		};
	}

	prepareData(keywords, data, futureData, dataRange, futureDataRange){
		let result = []

		for(let keyword in keywords){
			result.push({
				name: keywords[keyword],
				data: data[keyword],
				color: Highcharts.getOptions().colors[keyword]
			})

			result.push({
				name: keywords[keyword] + " forecast",
				data: futureData[keyword],
				dashStyle: 'shortdot',
				color: Highcharts.getOptions().colors[keyword],
				showInLegend: false,          
			})

			result.push({
				name: keywords[keyword] + " range",
				data: dataRange[keyword],
				type: 'arearange',
				color: Highcharts.getOptions().colors[keyword],
				fillOpacity: 0.3,
				showInLegend: false,  
				zIndex: 1,
				lineWidth: 0,  
				marker: {
					enabled: false
		 		}
			})	
				
			result.push({
				name: keywords[keyword] + " range forecast",
				data: futureDataRange[keyword],
				type: 'arearange',
				color: Highcharts.getOptions().colors[keyword],
				fillOpacity: 0.3,
				showInLegend: false,  
				zIndex: 1,  
				lineWidth: 0,
				marker: {
					enabled: false
		 		}
			})	

		}

		// console.log(JSON.stringify(result[0].data))

		return result;
	}

	setHoverData = (e) => { 
		// The chart is not updated because `chartOptions` has not changed.
		this.setState({ hoverData: e.target.category })
	}
	
	updateSeries = () => {
		// The chart is updated only with new options.
		this.setState({ 
		  chartOptions: {
			series: [

			]
		  }
		});
	}

	getLine(data){
		var last_element = data[0][data[0].length - 1];
		return last_element[0]
	}

    render() {

		let chartOptions = {

			title: {
				text: "Keywords trends"
			},
			
			xAxis: {
				title: {
					text: 'Date'
				},
				type: 'datetime',
				dateTimeLabelFormats: {
					day: '%e-%b-%y',
					format: '%e-%b-%y',
					month: '%b-%y',
					year: '%b-%y',
					step: 2000
				},
				plotLines: [{
					color: 'red', // Color value
					value: this.getLine(this.props.data), // Value of where the line will appear
					width: 2 // Width of the line    
				}]
			},
			
			yAxis: {
				min: 0,
				max: 100,
				title: {
					text: 'Search interest %'
				},

			},

			mapNavigation: {
				enableMouseWheelZoom: true
			},
			
			tooltip: {
				crosshairs: true,
				shared: true,
				valueSuffix: "%",
				headerFormat: '<b>Week: {point.key}</b><br>',
			},
			
			legend: {
				show: true,
				symbolHeight: 2,
				symbolWidth: 30,
				symbolRadius: 1
			},
			chart: {
				zoomType: 'xy',
				height: '45%',
			},
			series: this.prepareData(this.props.keywords, this.props.data, this.props.futureData, this.props.dataRanges, this.props.futureDataRanges),
			plotOptions: {
			  series: {
				point: {
				  events: {
					// mouseOver: this.setHoverData.bind(this)
				  }
				},
				states:{
					hover: {
						enabled: false
					}
				},
				marker: {
					enabled: false,
				}

			  }
			}
		}

		return (
			<div>
			  <HighchartsReact
				highcharts={Highcharts}
				options= {chartOptions}
			  />
			</div>
		  )
	}
}

export default PlotComponent