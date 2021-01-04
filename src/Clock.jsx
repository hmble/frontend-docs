import React, { useState, useEffect } from "react";

export function HClock2() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("heyyyyyyyy");
    const timeID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // componentWillUnmount
    return () => {
      clearInterval(timeID);
    };
  }, [setDate]);
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    // this is mostly used for cleanup puprpose
    clearInterval(this.timeId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // Call tick function after every second.
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // remove timer after update
    clearInterval(this.timerID);
  }

  tick() {
    // set local state date.
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
