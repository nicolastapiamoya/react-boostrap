import React from 'react'
import { useHistory } from 'react-router-dom'


const Login = () => {
    let history = useHistory();


    return (
        <div>
            <div className="container">
                <div className="card">

                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-3">
                            <h1>Login</h1>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Email"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input type="password" className="form-control" placeholder="Contraseña"></input>
                                <a href="#!" onClick={() => { history.push('/registro') }}>Registrate aquí!</a>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary" onClick={() => { history.push('/dashboard') }}>Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
