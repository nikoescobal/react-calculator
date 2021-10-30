import React, { useState, useEffect } from 'react';
import '../index';
import calculate from '../logic/calculate';

const Calculator = () => {
  const operators = '+-x%÷';
  const numbers = '0123456789';
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');
  const [expression, setExpression] = useState('0');
  const [completed, setCompleted] = useState(false);
  const [finalObject, setFinalObject] = useState({});

  const passObject = (param) => {
    setFinalObject(param);
    setCompleted(true);
  };

  useEffect((previousProps, previousState) => {
    if (
      previousState !== total
      || previousState !== next
      || previousState !== operation
    ) {
      const object = {
        total,
        next,
        operation,
      };

      if (object.total && object.next && object.operation) {
        passObject(object);
      }
    }
  });

  const handleButtonEvent = (event) => {
    if (operators.includes(event.target.name)) {
      setOperation(event.target.name);
      setExpression(event.target.name);
    }

    if (numbers.includes(event.target.name)) {
      if (total === '') {
        setTotal(event.target.name);
        setExpression(event.target.name);
      } else {
        setNext(event.target.name);
        // const exp = expression;
        setExpression(event.target.name);
      }
    }

    if (event.target.name === '=') {
      if (completed) {
        const result = calculate(finalObject, '=');
        if (result) {
          setTotal(result.total);
          setNext(result.next);
          setOperation(result.operation);
        }
      }
    }
    if (event.target.name === 'AC') {
      setTotal('');
      setNext('');
      setOperation('');
      setExpression('0');
    }
  };

  return (
    <div className="grid grid-cols-4 h-screen bg-blue-50 gap-1 p-4 mx-auto w-full">
      <div className="bg-blue-500 rounded font-nunito text-2xl col-span-4 px-6 text-white items-center text-center align-middle flex justify-end">
        {completed ? total : expression}
      </div>
      <>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="AC"
          className="btn-green"
        >
          AC
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="+/-"
          className="btn-green"
        >
          +/-
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="%"
          className="btn-green"
        >
          %
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="÷"
          className="btn-yellow"
        >
          ÷
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="7"
          className="btn-green"
        >
          7
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="8"
          className="btn-green"
        >
          8
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="9"
          className="btn-green"
        >
          9
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="x"
          className="btn-yellow"
        >
          x
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="4"
          className="btn-green"
        >
          4
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="5"
          className="btn-green"
        >
          5
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="6"
          className="btn-green"
        >
          6
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="-"
          className="btn-yellow"
        >
          -
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="1"
          className="btn-green"
        >
          1
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="2"
          className="btn-green"
        >
          2
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="3"
          className="btn-green"
        >
          3
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="+"
          className="btn-yellow"
        >
          +
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="0"
          className="btn-green col-span-2"
        >
          0
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="."
          className="btn-green"
        >
          .
        </button>
        <button
          type="button"
          onClick={handleButtonEvent}
          name="="
          className="btn-yellow"
        >
          =
        </button>
      </>
    </div>
  );
};

export default Calculator;
