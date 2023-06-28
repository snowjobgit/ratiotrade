import React from 'react'
import { useDispatch } from 'react-redux'
import { chartRequest } from '../store/stockchart/actions'

const App = () => {
  const dispatch = useDispatch()

  function checkClick() {
    dispatch(chartRequest({ symbol: "RTSI" }))
  }

  return (
    <div>
      <button onClick={() => checkClick()}>
        Check
      </button>
    </div>
  )
}

export default App