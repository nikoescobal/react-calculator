import React from 'react';
import '../index';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operators: '+-x%÷',
      numbers: '0123456789',
      total: '',
      next: '',
      operation: '',
      completed: false,
      finalObject: {},
    };
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      previousState.total !== this.state.total
      || previousState.next !== this.state.next
      || previousState.operation !== this.state.operation
    ) {
      const object = {
        total: this.state.total,
        next: this.state.next,
        operation: this.state.operation,
      };

      console.log(object);

      if (object.total && object.next && object.operation) {
        this.passObject(object);
      }
    }
  }

  passObject = (param) => {
    this.setState({ finalObject: param });
    this.setState({ completed: true });
  };

  handleButtonEvent = (event) => {
    if (this.state.operators.includes(event.target.name)) {
      console.log('yes');
      this.setState({ operation: event.target.name });
    }

    if (this.state.numbers.includes(event.target.name)) {
      if (this.state.total === '') {
        this.setState({ total: event.target.name });
      } else {
        this.setState({ next: event.target.name });
      }
    }

    if (event.target.name === '=') {
      if (this.state.completed) {
        const result = calculate(this.state.finalObject, '=');
        console.log(result);
      }
    }
  };

  render() {
    return (
      <div className="grid grid-cols-4 h-screen bg-blue-50 gap-1 p-4 mx-auto w-full">
        <div className="bg-blue-500 rounded font-nunito text-2xl col-span-4 px-6 text-white items-center text-center align-middle flex justify-end">
          0
        </div>
        <>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="AC"
            className="btn-green"
          >
            AC
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="+/-"
            className="btn-green"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="%"
            className="btn-green"
          >
            %
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="÷"
            className="btn-yellow"
          >
            ÷
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="7"
            className="btn-green"
          >
            7
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="8"
            className="btn-green"
          >
            8
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="9"
            className="btn-green"
          >
            9
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="x"
            className="btn-yellow"
          >
            x
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="4"
            className="btn-green"
          >
            4
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="5"
            className="btn-green"
          >
            5
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="6"
            className="btn-green"
          >
            6
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="-"
            className="btn-yellow"
          >
            -
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="1"
            className="btn-green"
          >
            1
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="2"
            className="btn-green"
          >
            2
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="3"
            className="btn-green"
          >
            3
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="+"
            className="btn-yellow"
          >
            +
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="0"
            className="btn-green col-span-2"
          >
            0
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="."
            className="btn-green"
          >
            .
          </button>
          <button
            type="button"
            onClick={this.handleButtonEvent}
            name="="
            className="btn-yellow"
          >
            =
          </button>
        </>
      </div>
    );
  }
}

export default Calculator;
