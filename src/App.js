import React from 'react'
import Cards from './components/Cards'
import Contacto from './components/Contacto'
import Agregar from './components/Agregar'
import Inicio from './components/Inicio'
import Propiedad from './components/Propiedad'
import Dashboard from './components/Dashboard'
import Calendario from './components/Calendario'
import Login from './components/Login'
import Registro from './components/Registro'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ImagenLogo from '../src/assets/logo.png'



function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"><img className="card-img-top" src={ImagenLogo} alt="" /></Link>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active marginButtonNav" to="/">INICIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active marginButtonNav" to="/propiedades">QUIENES SOMOS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active marginButtonNav" to="/agregar">CARACTERISTICAS</Link>
              </li>
              <li className="nav-itemv">
                <Link className="nav-link active marginButtonNav" to="/contacto">CLIENTES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active marginButtonNav" to="/dashboard">PLANES</Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 text-center">
              <Link className="nav-link active marginButtonLoginNav text-center" to="/login">ACCESO</Link>
            </form>

          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/calendario">
          <Calendario />
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/propiedades/:id">
          <Propiedad></Propiedad>
        </Route>
        <Route path="/propiedades">
          <Cards />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/agregar">
          <Agregar />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>

    </Router>



  )
}

export default App
