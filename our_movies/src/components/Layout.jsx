import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
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
    </>
  )
}