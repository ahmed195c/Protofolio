import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function smoothScrollTo(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  }
}

smoothScrollTo('#top')

function App() {
  const [count, setCount] = useState(0)
  const [labs , setRuns ] = useState(0);

  return (
    <>
      <div>
        <button onclick={ () => setRuns( labs + 1 ) } >button</button>
      </div>
      <div>
        <ul className='flex gap-5'>
          <li>
            <a href="#top">about</a>
            </li>
          <li>{labs}</li>
          <li>bombaCLat</li>
        </ul>
      </div>
    </>
  )
}

export default App
