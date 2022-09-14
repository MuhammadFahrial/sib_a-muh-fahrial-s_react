import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick(), 1000;
    });
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
