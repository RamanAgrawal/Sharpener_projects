import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { CounterAction } from '../store/CounterSlice';
const Counter = () => {
  const dispatch = useDispatch();
  const {increment,incrementby5,decremrent,decremrentby5}=CounterAction
  const counter = useSelector(state => state.counter.count);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decremrent());
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={()=>{dispatch(incrementby5())}}>incrementby5</button>
        <button onClick={()=>{dispatch(decremrentby5())}}>Decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;