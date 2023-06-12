import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Login from "./pages/Login"
import CadastroForm from "./pages/cadastroForm";

import "./index.css";
import "./pages/EstiloLogin.css"
import { UserContextProvider } from "./components/UserContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
         
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<CadastroForm />} />
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);
