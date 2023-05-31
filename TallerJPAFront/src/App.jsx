import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter} from 'react-router-dom'
import {FrontRouter} from './routes/Routes'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <FrontRouter/>
    </BrowserRouter>
  )
}

export default App
