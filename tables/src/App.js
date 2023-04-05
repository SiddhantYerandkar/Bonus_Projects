import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1)

  return (

    <div>
      <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {inputValue && (
        <table>
          <tbody>
            <tr>
              {numbers.map((numbers) => (
                <ul>
                  {inputValue} x {numbers}={numbers * inputValue}

                </ul>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
