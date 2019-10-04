import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { // 初期値
      count: 0,
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

  render(){
    return (
      <div className="App">
        <div className = "App-div-timer" id="app-div-timer">
          <span class="App-div-text" id="app-div-timer-text">{this.state.count}</span>
        </div>
        <div className = "App-div-main" id = "app-div-main-0">
          <span class = "App-div-text" id = "app-div-text-0">{this.state.label0}</span>
        </div>
        <div className = "App-div-main" id = "app-div-main-1" >
          <span class = "App-div-text" id = "app-div-text-1">{this.state.label1}</span>
        </div>
        <div className = "App-div-main" id = "app-div-main-2" >
          < span class = "App-div-text" id = "app-div-text-2">{this.state.label2}</span>
        </div>
      </div>
    );
  }
}
