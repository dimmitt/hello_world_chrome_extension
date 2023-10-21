import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import MeetupDetails from './pages/MeetupDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MeetupDetails/>
    </div>
  )
}

export default App
