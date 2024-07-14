import { useDispatch, useSelector } from 'react-redux'
import { CounterAction, CounterState } from '../redux/types.ts'
import { decrementAsync, incrementAsync } from '../redux/actions.ts'
import { selectCount } from '../redux/selectors.ts'
import { ThunkDispatch } from '@reduxjs/toolkit'

const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch<ThunkDispatch<CounterState, unknown, CounterAction>>()

  return (
    <div className="counter">
      <h1 className="count">Count: {count}</h1>
      <button className="increment" onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button className="decrement" onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}

export default Counter