import React, { useState } from 'react';
import './components/Main.js'

function NumberSum() {
  const [inputValue, setInputValue] = useState('');
  const [sum, setSum] = useState(0);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const numbersArray = inputValue.split(',').map(Number);
    const sum = numbersArray.reduce((acc, num) => acc + num, 0);
    setSum(sum);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter numbers separated by commas:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Calculate Sum</button>
      </form>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default Main;