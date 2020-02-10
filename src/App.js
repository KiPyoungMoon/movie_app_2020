import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {

  state = {
    count: 0
  }
  add = () => {
    //  console.log("plus");
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    // console.log("minus");
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
// function FunctionName() {}은 각각 하나의 component이다.
// map() : array의 각각의 아이템에 대해 넘겨받은 함수를 각각 실행하고 해당 결과를 반환해준다.
// 동적으로 변하는 데이터를 사용하기 위해 function이 아닌, status를 가지고 있는 class를 사용한다.
