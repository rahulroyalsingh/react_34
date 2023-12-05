import React, { useState, useMemo } from 'react'
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(5);

const multiCountMemo=useMemo(
  function multicount()
{
  console.warn("multiCount")
  return count *6
},[count]
)
  return (
    <div className="App">
      <h1>useMemo React hook</h1>
      <h2>Count :{count}</h2>
      <h2>Item :{item}</h2>
      <h2>{multiCountMemo}</h2>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 5)}>Update Item</button>
    </div>

  );
}

export default App;
