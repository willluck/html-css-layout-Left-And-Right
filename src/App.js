import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>方法一：左侧div浮动 右侧元素设置margin-left自适应</h1>
          <div className="mainContent main-1">
            <div className="left-1 leftDivCommon">This is left</div>
            <div className="right-1 rightDivCommon">This is right</div>
          </div>
        </div>
        <div>
          <h1>方法二：左侧div浮动，右侧元素创建BFC</h1>
          <div className="mainContent main-1">
            <div className="left-2 leftDivCommon">This is left</div>
            <div className="right-2 rightDivCommon">This is right</div>
          </div>
        </div>
        <div>
          <h1>方法三：左侧div采用绝对布局，右侧元素设置margin-left自适应</h1>
          <div className="mainContent-3 main-1">
            <div className="left-3 leftDivCommon">This is left</div>
            <div className="right-3 rightDivCommon">This is right</div>
          </div>
        </div>
        <div>
          <h1>方法四：外层父级元素使用table布局，子元素使用table-cell</h1>
          <div className="mainContent-4">
            <div className="left-4 leftDivCommon">This is left</div>
            <div className="right-4 rightDivCommon">This is right</div>
          </div>
        </div>
        <div>
          <h1>方法五：双float + calc计算宽度</h1>
          <div className="mainContent main-1">
            <div className="left-5 leftDivCommon">This is left</div>
            <div className="right-5 rightDivCommon">This is right</div>
          </div>
        </div>
        <div>
          <h1>方法六：flex布局</h1>
          <div className="mainContent-6 main-1">
            <div className="left-6 leftDivCommon">This is left</div>
            <div className="right-6 rightDivCommon">This is right</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
