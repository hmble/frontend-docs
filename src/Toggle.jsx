import React from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
    // this.handlClick = this.handlClick.bind(this);
    // this.handleConsole = this.handleConsole.bind(this);
  }

  handlClick() {
    this.setState({ toggle: !this.state.toggle });
  }
  handleConsole(value) {
    // console.log(value);
    console.log("heyy");
  }
  render() {
    return (
      <>
        <button onClick={() => this.handlClick()}>
          {this.state.toggle ? "ON" : "OFF"}
        </button>
        <button onClick={() => this.handleConsole()}>Click me!!!</button>
      </>
    );
  }
}
