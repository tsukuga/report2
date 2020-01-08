import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import key from 'keymaster'
import NewBox from './app.js'
import styles from './App.css'
import LeftButton from './bottun.js'
import "./bootstrap/css/bootstrap.min.css";
import "./bootstrap/js/bootstrap.min.js";
import "./jquery/jquery.min.js"
import "./jquery/script.min.js"

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 200,
      height: 200,
      x: 120,
      y: 120,
      counter: 0,
      text: "Rnd",
      xloc: 0
    };
  }

  click_ = (event) => {
    let x = event.pageX ;
    console.log(x);
    key('a', function() {alert('you pushed a')})
  };

  click = (event) =>{
    let x = event.pageX ;
    console.log(x)
  }

  addBox = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  renderNewBoxs = () => {
    const boxs = [];
    const counter = this.state.counter;

    for (let i = 0; i < counter; ++i) {
      boxs.push(<NewBox key={`box-id-${i}`}/>);
    }
    return boxs;
  }

  handleText = (e) =>{
    this.setState({text:e.target.value})
  }

  render() {
    return (
      <div>
      <h1>TODO</h1>
      <li>コンポーネント削除</li>
      <li>作成ボタン複数</li>
      <li>メニューバー作成</li>
      <li>コード変換アルゴリズム実装</li>
      <s><li>右クリック</li></s>
      <s><li>Bootstrap導入</li></s>
      <s><li>Opacity</li></s>
      <li>余白管理</li>
      
      <button type="button" onClick={() => this.addBox()}>新規作成ボタン</button>
      <div className="BigBox">
      {this.renderNewBoxs()}
      <Rnd
        className="box"
        style={style}
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => {
          this.setState({ x: d.x, y: d.y });
        }}
        resizeGrid={[10, 10]}
        dragGrid={[10, 10]}
        onResizeStop={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
        bounds="parent"
      >
        <input className="textbox" tyep="text" value={this.state.text} onKeyDown={(e)=>{this.click(e)}} onChange={(e)=>{this.handleText(e)}}/>
      </Rnd>
   
      </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("container"));
