import { useDispatch, useSelector } from 'react-redux'
import { CounterState } from '../redux/types.ts'
import { increment, decrement } from '../redux/actions.ts' 

const Counter = () => {
  const count = useSelector((state: CounterState) => state.count)
  const dispatch = useDispatch()
    return (
      <div className='counter'>
        <h1 className='count'>Count: {count}</h1>
        <button className='increment' onClick={() => dispatch(increment())}>increment</button>
        <button className='decrement' onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    )
}
  
export default Counter