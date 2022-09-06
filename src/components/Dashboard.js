import React from 'react'
import Agregar from '../components/Agregar'

const Dashboard = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="btn btn-dark me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand me-auto" href="#!">Navbar</a>
                </div>
            </nav>


            <div className="offcanvas offcanvas-start sildebar-nav bg-dark text-white" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Panel de Control</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <nav className="navbar-dark">
                        <ul className="navbar-nav">
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3">
                                    Home
                                </div>
                            </li>
                            <li>
                                <a href="#!" className="nav-link px3 active">
                                    <span className="me-2"><i className="bi bi-easel"></i></span>
                                    <span>Gestor de Inicio</span>
                                </a>
                            </li>
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3">
                                    Propiedades
                                </div>
                            </li>
                            <li>
                                <a href="#!" className="nav-link px3 active">
                                    <span className="me-2"> <i className="bi bi-house-fill"></i></span>
                                    <span>Gestor de Propiedades</span>
                                </a>
                            </li>
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3">
                                    Agenda
                                </div>
                            </li>
                            <li>
                                <a href="localhost:3000/agregar" className="nav-link px3 active">
                                    <span className="me-2"> <i className="bi bi-calendar-date"></i></span>
                                    <span>Calendario</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="container">
                <section>
                    <div className="row">
                        <Agregar></Agregar>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Dashboard
