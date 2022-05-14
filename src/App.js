import React from 'react'
import Counter from './components/Counter'

const App=()=> {
  return (
    <div className="ui container" style={{ marginTop:'20px' }}>
      <div>Count App</div>
      <Counter />
    </div>
  )
}

export default App;