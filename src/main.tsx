// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ProducktDescription from './components/productDescription/ProducktDescription'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// import UserPage from './components/userPage/UserPage.tsx'
// import Carshop from './components/Carshop/Carshop.tsx'
// import Counter from './components/counter/Counter.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>

  
    // <UserPage />
    // {/* <Counter /> */}
    // {/* <Carshop /> */}
  // {/* </StrictMode>, */}
  // <ProducktDescription />
)
