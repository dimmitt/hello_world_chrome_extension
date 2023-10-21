import './App.css'
import { lazy } from 'react';
const MeetupDetails = false ? lazy(() => import('./pages/MeetupDetails')) : () => undefined;

function App() {
  
  return (
    <section style={{
      minHeight: 'calc(100vh - 40px)',
      width: 'calc(100vw - 40px)'
  }}>
      <MeetupDetails/>
    </section>
  )
}

export default App
