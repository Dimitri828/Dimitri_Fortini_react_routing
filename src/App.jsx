import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import router from './routing/router'
import { RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    
      <RouterProvider router={router} />,
    
    
      
    </>
  )
}

export default App
