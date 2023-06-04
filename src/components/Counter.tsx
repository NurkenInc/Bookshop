import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((c: number) => c + 1)
  }

  const decrement = () => {
    setCount((c: number) => c - 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <div className={classes.btns}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}