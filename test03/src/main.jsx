import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*
// 자주 사용되는 코드1
  constructor() {
    super()
    this.state = {}
  }

// 자주 사용되는 코드2
<button onClick

*/