import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

class LeftButton extends React.Component {
 constructor() {
    super();
    this.state = {
      width: 200,
      height: 200,
      x: 110,
      y: 110,
      counter: 0
    };
  }

  addBox = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  aler = () => {
    
  };

  renderNewBoxs = () => {
    const boxs = [];
    const counter = this.state.counter;

    for (let i = 0; i < counter; ++i) {
      boxs.push(<NewBox key={`box-id-${i}`}/>);
    }
    return boxs;
  }

  render() {
    return (
      <button type="button" onClick={() => this.addBox()}>新規作成ボタン</button>
    );
  }
}

export default LeftButton;