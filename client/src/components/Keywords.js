import USAMap from "react-usa-map";
import { Container } from 'react-bootstrap';

var React = require('react');
var Component = React.Component;


class KeywordComponent extends Component {	


    mapHandler = (event) => {
        alert(event.target.dataset.name);
      };
    
      statesFilling = () => {
        return {
          "NJ": {
            fill: "navy",
            clickHandler: () => alert("Custom callback for the NJ state")
          },
          "NY": {
            fill: "#CC0000"
          }
        };
      };



  render() {

    return (
		<div>
            <Container>

            {/* <InputComponent/> */}

            <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />


            </Container>


		</div>
		);

  }


}

export default KeywordComponent