import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { // 初期値
      count: 0,
      index: 0,
      label0: "0",
      label1: "*",
      label2: "*"
    };
  }

  updateLabel(){
    var count = this.state.count + 1;
    var l_index = count % 3;
    var state = this.state;

    state['count'] = count;
    state['index'] = l_index;

    for(var i=0; i<3; i++){
      if(i === l_index){
        state["label" + i] = count;
      }
      else{
        state["label"+ i] = "*";
      }
    }

    this.setState(state); // 改めてstateを適応
  }

  componentDidMount(){
    this.timerID = setInterval(() => {
      this.updateLabel();
    }, 1000);
  }

  setCSS(div_index, state_index){
    if(div_index === state_index){
      return {
        background: "#808000"
      };
    }
    return {
      background: "#008000"
    };
  }

  render(){
    return (
      <div className="App">
        <div className = "App-div-timer">
          <span class="App-div-text">{this.state.count}</span>
        </div>
        <div className = "App-div-main" style = {this.setCSS(0, this.state.index)}>
          <span class = "App-div-text">{this.state.label0}</span>
        </div>
        <div className = "App-div-main" style = {this.setCSS(1, this.state.index)} >
          <span class = "App-div-text">{this.state.label1}</span>
        </div>
        <div className = "App-div-main" style = {this.setCSS(2, this.state.index)}>
          < span class = "App-div-text">{this.state.label2}</span>
        </div>
      </div>
    );
  }
}
