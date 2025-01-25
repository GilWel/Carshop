import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Carshop from './components/Carshop/Carshop.tsx'
// import Counter from './components/counter/Counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Counter /> */}
    <Carshop />
  </StrictMode>,
)
