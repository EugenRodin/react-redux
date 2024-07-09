import { configureStore } from "@reduxjs/toolkit"
import { Provider, useDispatch, useSelector } from "react-redux"

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const increment = () => ({
  type: INCREMENT
})
const decrement = () => ({
  type: DECREMENT
})

const counterReducer = (state: number = 0, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

const Counter = () => {
  const count = useSelector((state: { counter: number }) => state.counter)
  const dispatch = useDispatch()
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    )
  }
  const App = () => {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }

export default App