import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          items: [
            { text: "Learn JavaScript" },
          { text: "Learn React" },
          { text: "Play around in JSFiddle" },
          { text: "Build something awesome" }
        ]
      }
      
      this.myRef = React.createRef();
    }
    
    componentDidMount() {
        console.log(this.myRef.current.offsetWidth);
        console.log(this.myRef.current.offsetHeight);
    }
    
    render() {
      return (
        <div ref={this.myRef}>
          {/* {this.state.items.map((item, key) => (
            <div className="rootContainer" key={key}>
                <div className="item">{item.text}</div>
            </div>
          ))} */}
        </div>
      )
    }
  }

  export default TodoApp;