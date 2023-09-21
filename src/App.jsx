import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import ScoreKeeper from './boxxss';
import TicTacTo from './tictacBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* < ScoreKeeper /> */}
    < TicTacTo />
    </>
  )
}

export default App
