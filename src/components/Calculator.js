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
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          AC
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          +/-
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          %
        </div>
        <div className="bg-yellow-500 hover:bg-yellow-300 opacity-100 hover:opacity-80 rounded font-bold text-white hover:text-yellow-700 items-center text-center align-middle flex justify-center cursor-pointer">
          ÷
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          7
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          8
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          9
        </div>
        <div className="bg-yellow-500 hover:bg-yellow-300 opacity-100 hover:opacity-80 rounded font-bold text-white hover:text-yellow-700 items-center text-center align-middle flex justify-center cursor-pointer">
          x
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          4
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          5
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          6
        </div>
        <div className="bg-yellow-500 hover:bg-yellow-300 opacity-100 hover:opacity-80 rounded font-bold text-white hover:text-yellow-700 items-center text-center align-middle flex justify-center cursor-pointer">
          -
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          1
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          2
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          3
        </div>
        <div className="bg-yellow-500 hover:bg-yellow-300 opacity-100 hover:opacity-80 rounded font-bold text-white hover:text-yellow-700 items-center text-center align-middle flex justify-center cursor-pointer">
          +
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold col-span-2 hover:text-green-700 text-white items-center text-center align-middle flex justify-center cursor-pointer">
          0
        </div>
        <div className="bg-green-500 opacity-100 hover:opacity-80 hover:bg-green-300 rounded font-bold text-white hover:text-green-700 items-center text-center align-middle flex justify-center cursor-pointer">
          .
        </div>
        <div className="bg-yellow-500 hover:bg-yellow-300 opacity-100 hover:opacity-80 rounded font-bold text-white hover:text-yellow-700 items-center text-center align-middle flex justify-center cursor-pointer">
          =
        </div>
      </div>
    );
  }
}

export default Calculator;
