import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center">

      <div className="flex items-center">

        <button onClick={decrement} className="px-2 pb-1.5 text-lg text-black font-bold bg-white hover:text-neutral-700">-</button>
        <span className="h-full w-8 text-lg text-white font-bold bg-neutral-800 rounded-lg flex items-center justify-center">{count}</span>
        <button onClick={increment} className="px-2 pb-1.5 text-lg text-black font-bold bg-white hover:text-neutral-700">+</button>

      </div>

    </div>
  );
}

export default Counter;
