import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List.jsx'



function App() {

  const frutes = [{ id: 1, name: "appel", calories: 95 },
  { id: 2, name: "bnana", calories: 62 },
  { id: 3, name: "ciio", calories: 35 },
  { id: 4, name: "smoker", calories: 44 },
  { id: 5, name: "dragon furte", calories: 195 },
  ];

  const vegitbale = [{id:1, name: "loka",calories:22},
                     {id:2, name: "foka", calories:45},
  ]

  return (
    <>
    <div className='flex gap-10'>
    <List items={vegitbale} category="vegeitabel"/>
    <List items={frutes} category="frute" />
    </div>
    </>

  )
}

export default App
