// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>You are here to </h1>
      <Link to="/addplaces" type="button" class="btn btn-outline-primary">Give a place</Link>
      <Link to="/getstate" type="button" class="btn btn-outline-primary">Search a place</Link>
    </>
  )
}

export default App
