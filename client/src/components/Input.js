import React, { Component } from 'react';
import { Col, Form, Button } from "react-bootstrap";
import { USA_STATES } from '../states.js';

const time_frames = [
    [0, "Past 5 years", "today 5-y"],
    [1, "Past 12 months", "today 12-m"],
    [2, "Past 1 month", "today 1-m"],
    [3, "Last 7 days", "now 7-d"],
]

class InputComponent extends Component {	

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectedState = this.selectedState.bind(this);
        this.selectedTimeFrame = this.selectedTimeFrame.bind(this);
        this.state = {
            keywords: [],
            selected_state_name: USA_STATES[0][0],
            selected_time_frame: time_frames[0][2]
        };
    }

    handleClick(event){
        event.preventDefault();

        let keywords = this.arrayTrim(this.state.keywords);
        let selectedState = this.state.selectedState;
        let selectedTimeFrame = this.state.selectedTimeFrame;

        this.props.callbackFromParent(keywords, selectedState, selectedTimeFrame);
    }

    selectedState(event){
        this.setState({
            selected_state_name: event.target.value.split(',')[0]
        });
    }

    selectedTimeFrame(event){
        this.setState({
            selected_time_frame: event.target.value.split(',')[2]
        });
    }

    handleChange(event) {

        let array = event.target.value.split(',')

        this.setState({
            keywords: array,
            username: "name",
        });
    }

    arrayTrim(array){
        let result = array.map(function (el) {
            return el.trim();
        });

        return result;
    }
    
    render() {
        let namesList = USA_STATES.map(function(state){
            return <option key={state[1]} value={state}>{state[2]}</option>;
        })

        let time_framesList = time_frames.map(function(time_frame){
            return <option key={time_frame[0]} value={time_frame}>{time_frame[1]}</option>;
        })

        return (
            <div className="input_bar input-bar-item width100">
                <Form onSubmit={this.handleClick}>
                    <Form.Group className="form-inline">
                        <div className="keyword_div"> 
                            <div className="input-group">
                                <div className="input_title">
                                    <Form.Label className="form-inline mr-1" htmlFor="keywords_input"><h5>Type your keywords:</h5></Form.Label>
                                </div>
                                <Form.Control className="width100 mr-1 input_keywords" type="text" placeholder="Enter keywords" value={this.state.keywords} onChange={this.handleChange} id="keywords_input" />
                            </div>
                        </div>
                        <div className="timeframe_div">
                            <div className="input-group">
                                <div className="input_title">
                                    <Form.Label className="form-inline mr-1" htmlFor="select_timeframe_input"><h5>Select time frame:</h5></Form.Label>
                                </div>
                                <Form.Control as="select" onChange={this.selectedTimeFrame}  id="select_timeframe_input" className="form-control width100 mr-1">
                                    {time_framesList}
                                </Form.Control>                                
                            </div>
                        </div>
                        <div className="state_select_div">
                            <div className="input-group">
                                <div className="input_title">
                                    <Form.Label className="form-inline mr-1" htmlFor="select_state_input"><h5>Select state:</h5></Form.Label>
                                </div>
                                <Form.Control as="select" onChange={this.selectedState}  id="select_state_input" className="form-control width100 mr-1">
                                    {namesList}
                                </Form.Control>                                
                                <div className="input_button">
                                    <Button variant="primary" type="submit">Submit</Button>
                                </div>
                            </div>
                        </div>
                    </Form.Group>
                </Form>
            </div>
		);
    }
}

export default InputComponent
