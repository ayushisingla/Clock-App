import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval( 
      () => this.tick(),1000
    );
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      
      <div style={{ color: "black",
      backgroundColor: "lightgrey",
      padding: "40px",border: '2px solid black'}}>
        <h1>Hello World</h1>
        <h2>The time is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

}

export default Clock;
