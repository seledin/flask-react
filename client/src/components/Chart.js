import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import mapDataIE from "@highcharts/map-collection/countries/us/us-all.geo.json";
highchartsMap(Highcharts); // Initialize the map module

// const data = [
//     ['us-ma', 0],
//     ['us-wa', 1],
//     ['us-ca', 2],
//     ['us-or', 3],
//     ['us-wi', 4],
//     ['us-me', 5],
//     ['us-mi', 6],
//     ['us-nv', 7],
//     ['us-nm', 8],
//     ['us-co', 9],
//     ['us-wy', 10],
//     ['us-ks', 11],
//     ['us-ne', 12],
//     ['us-ok', 13],
//     ['us-mo', 14],
//     ['us-il', 15],
//     ['us-in', 16],
//     ['us-vt', 17],
//     ['us-ar', 18],
//     ['us-tx', 19],
//     ['us-ri', 20],
//     ['us-al', 21],
//     ['us-ms', 22],
//     ['us-nc', 23],
//     ['us-va', 24],
//     ['us-ia', 25],
//     ['us-md', 26],
//     ['us-de', 27],
//     ['us-pa', 28],
//     ['us-nj', 29],
//     ['us-ny', 30],
//     ['us-id', 31],
//     ['us-sd', 32],
//     ['us-ct', 33],
//     ['us-nh', 34],
//     ['us-ky', 35],
//     ['us-oh', 36],
//     ['us-tn', 37],
//     ['us-wv', 38],
//     ['us-dc', 39],
//     ['us-la', 40],
//     ['us-fl', 41],
//     ['us-ga', 42],
//     ['us-sc', 43],
//     ['us-mn', 44],
//     ['us-mt', 45],
//     ['us-nd', 46],
//     ['us-az', 47],
//     ['us-ut', 48],
//     ['us-hi', 49],
//     ['us-ak', 50],
//     ['undefined', 51]
// ];

const western_states = [
  ['us-ca', "#20e012"],
  ['us-or', "#20e012"],
  ['us-id', "#20e012"],
  ['us-mt', "#20e012"],
  ['us-az', "#20e012"],
  ['us-nv', "#20e012"],
  ['us-wa', "#20e012"],
  ['us-ut', "#20e012"]
];

const central_states = [
  ['us-wy', "#BADA55"],
  ['us-nd', "#BADA55"],
  ['us-sd', "#BADA55"],
  ['us-co', "#BADA55"],
  ['us-ks', "#BADA55"],
  ['us-ky', "#BADA55"],
  ['us-in', "#BADA55"],
  ['us-wi', "#BADA55"],
  ['us-ne', "#BADA55"],
  ['us-ia', "#BADA55"],
  ['us-mi', "#BADA55"],
  ['us-mo', "#BADA55"],
  ['us-il', "#BADA55"],
  ['us-mn', "#BADA55"],
  ['undefined', "#BADA55"]
];

const eastern_states = [
  ['us-oh', "#003fed"],
  ['us-ny', "#003fed"],
  ['us-nc', "#003fed"],
  ['us-vt', "#003fed"],
  ['us-wv', "#003fed"],
  ['us-md', "#003fed"],
  ['us-de', "#003fed"],
  ['us-ri', "#003fed"],
  ['us-ma', "#003fed"],
  ['us-me', "#003fed"],
  ['us-nh', "#003fed"],
  ['us-sc', "#003fed"],
  ['us-va', "#003fed"],
  ['us-nj', "#003fed"],
  ['us-dc', "#003fed"],
  ['us-ct', "#003fed"],
  ['us-pa', "#003fed"]
];

const southern_states = [
  ['us-tx', "#e08a12"],
  ['us-nm', "#e08a12"],
  ['us-tn', "#e08a12"],
  ['us-ga', "#e08a12"],
  ['us-fl', "#e08a12"],
  ['us-ar', "#e08a12"],
  ['us-ok', "#e08a12"],
  ['us-la', "#e08a12"],
  ['us-al', "#e08a12"],
  ['us-hi', "#e08a12"],
  ['us-ak', "#e08a12"],
  ['us-ms', "#e08a12"]
];

class Chart extends React.Component {

  constructor(props) {
      super(props);
  
      this.state = {
          mapOptions:  {
              chart: {
                height: '64%',
                
                map: "countries/ie/ie-all",
                events: {
                    drilldown: function(e) {
                      console.log('from drillDown');
                    },
                    drillup: function() {
                      console.log('from drillUp');
                    }
                  }
              },
              tooltip: { enabled: true },
              legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "middle",
                enabled: false
              },
            
              title: {
                text: 'Keyword stats per State'
              },
            
              mapNavigation: {
                enabled: true,
                buttonOptions: {
                  verticalAlign: "bottom"
                }
              },
            
              plotOptions: {
                map: {
                  states: {

                    color: "#126c31",

                    hover: {
                      color: "#000000",
                      enabled: true,
                      brightness: 0.5
                    },
                    
                  }
                },
                series:{
                    point:{
                        events:{
                            click: this.setHoverData.bind(this)

                        }
                    }
                }
              },
            
              series: [
                // {
                //   data: data,
                //   mapData: mapDataIE,
                //   name: "USA",
                //   dataLabels: {
                //       enabled: true,
                //       format: "{point.properties.postal-code}"
                //   }
                // },

                {
                  data: western_states.concat(central_states).concat(eastern_states).concat(southern_states),
                  keys: ['hc-key', 'color'],
                  mapData: mapDataIE,
                  name: "Western US",
                  dataLabels: {
                      enabled: true,
                      format: "{point.properties.postal-code}"
                  }
                },

              ],
            
              drilldown: {
                activeDataLabelStyle: {
                  color: "#FFFFFF",
                  textDecoration: "none",
                  textOutline: "1px #000000"
                },
                drillUpButton: {
                  relativeTo: "spacingBox",
                  position: {
                    x: 0,
                    y: 60
                  }
                }
              }
            }
      };
    }

    setHoverData = (e) => {
      this.props.callbackFromApp(e.point["hc-key"])
    }
  
    render() {
        return (
            <div>
                <HighchartsReact
                    constructorType={"mapChart"}
                    highcharts={Highcharts}
                    options={this.state.mapOptions} 
                />
            </div>
        );
      }
  }

  export default Chart

