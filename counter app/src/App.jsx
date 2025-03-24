import React, { useState } from 'react';


export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="counter-wrapper">
        <h1 className="title">Counter</h1>
        <div className="counter-box">
          <button
            className="counter-button decrement"
            onClick={() => {
              if(count >0){
                setCount(count - 1)
              }
            }}
          >
            -
          </button>
          <div className="count-display">
            <p>{count}</p>
          </div>
          <button
            className="counter-button increment"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
