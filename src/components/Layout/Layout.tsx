import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
// import styles from './Layout.module.css'
export default function Layout():JSX.Element{

  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        Footer
      </footer>

    </>
  )
}
