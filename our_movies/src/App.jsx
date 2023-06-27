import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import UserContext from './components/UserContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Movie from './pages/Movie'
import Search from './pages/Search'
import CadastroForm from './pages/cadastroForm'
import Perfil from './pages/Perfil'
import './App.css'
import './components/Navbar.css'
import "./index.css";
import "./pages/EstiloLogin.css"
import Erro404 from './pages/Erro404'

export default function App() {
  const { logado } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>
        {logado ?
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path='/search' element={<Search />} />
            <Route path='/perfil' element={<Perfil />} />
            
          </Route>
          : <Route index element={<Login />} />}
          <Route path="/cadastrar" element={<CadastroForm />} />
          <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}
