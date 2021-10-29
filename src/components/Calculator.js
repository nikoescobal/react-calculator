import React from 'react';
import '../index';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="grid grid-cols-4 h-screen bg-blue-50 gap-1 p-4 mx-auto w-full">
        <div className="bg-blue-500 rounded font-nunito text-2xl col-span-4 px-6 text-white items-center text-center align-middle flex justify-end">
          0
        </div>
        <div className="btn-green">AC</div>
        <div className="btn-green">+/-</div>
        <div className="btn-green">%</div>
        <div className="btn-yellow">÷</div>
        <div className="btn-green">7</div>
        <div className="btn-green">8</div>
        <div className="btn-green">9</div>
        <div className="btn-yellow">x</div>
        <div className="btn-green">4</div>
        <div className="btn-green">5</div>
        <div className="btn-green">6</div>
        <div className="btn-yellow">-</div>
        <div className="btn-green">1</div>
        <div className="btn-green">2</div>
        <div className="btn-green">3</div>
        <div className="btn-yellow">+</div>
        <div className="btn-green col-span-2">0</div>
        <div className="btn-green">.</div>
        <div className="btn-yellow">=</div>
      </div>
    );
  }
}

export default Calculator;
