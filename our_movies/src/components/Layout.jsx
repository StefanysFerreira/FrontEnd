import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { Footer } from "./Footer"
import './Layout.css'
import './Navbar.css'

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}