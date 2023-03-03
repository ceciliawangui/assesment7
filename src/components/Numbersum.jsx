import React, { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState('');
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    const numbersArray = numbers.split(',');
    let total = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      total += Number(numbersArray[i]);
    }
    setSum(total);
  }

  return (
    <div>
      <label htmlFor="numbers">Enter numbers separated by commas:</label>
      <input type="text" id="numbers" value={numbers} onChange={e => setNumbers(e.target.value)} />
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>The sum of {numbers} is: {sum}</p>
    </div>
  );
}

export default App;