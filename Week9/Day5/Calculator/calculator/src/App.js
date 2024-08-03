import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let res;
    switch (operation) {
      case 'add':
        res = number1 + number2;
        break;
      case 'subtract':
        res = number1 - number2;
        break;
      case 'multiply':
        res = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          res = 'Cannot divide by zero';
        } else {
          res = number1 / number2;
        }
        break;
      default:
        res = 'Invalid operation';
    }
    setResult(res);
  };

  return (
    <div className="container mt-5">
      <h1>Calculator</h1>
      <div className="form-group">
        <label htmlFor="num1">Number 1:</label>
        <input
          type="number"
          id="num1"
          className="form-control"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="num2">Number 2:</label>
        <input
          type="number"
          id="num2"
          className="form-control"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="operation">Operation:</label>
        <select
          id="operation"
          className="form-control"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </div>
      <button onClick={handleCalculate} className="btn btn-primary">
        Calculate
      </button>
      {result !== null && (
        <div className="mt-3">
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default App;