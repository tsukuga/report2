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

class NewBox extends React.Component {
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
      
      <Rnd
        style={style}
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => {
          this.setState({ x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          }); 
        }}
        resizeGrid={[10, 10]}
        dragGrid={[1, 1]}
        onClick={()=>{this.aler()}}
        bounds="parent"
        className="box"
      >
        New Rnd
      </Rnd>
    );
  }
}

export default NewBox;