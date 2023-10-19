import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/counter'

export function Counter() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  console.log(count);

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count.count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}