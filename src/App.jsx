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

  return (
    <>
      <div>
        <ul className='flex gap-5'>
          <li>
            <a href="#top">about</a>
            </li>
          <li>projects</li>
          <li>bombaCLat</li>
        </ul>
      </div>
    </>
  )
}

export default App
