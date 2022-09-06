import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert2'


const Registro = () => {
    const [user, setUser] = useState()

    const history = useHistory();

    const handleInputChange = (event) => {
        console.log(user)
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (user === undefined) {
            swal.fire({
                title: 'Advertencia',
                text: 'Hay campos vacíos!',
                icon: 'info'
            })
        } else {
            if (user.email === undefined || user.password === undefined || user.email === '' || user.password === '') {
                swal.fire({
                    title: 'Advertencia',
                    text: 'Hay campos vacíos!',
                    icon: 'info'
                })
            } else {
                console.log(user)
                await fetch(
                    'http://localhost:4000/user',
                    {
                        method: 'POST',
                        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            {
                                email: user.email,
                                password: user.password,

                            })
                    }).then(function (response) {
                        response.json();
                    }).catch(function (error) {
                        error.json();
                    });

                swal.fire({
                    title: "Registro exitoso!",
                    icon: "success",
                    buttons: ["login"]

                }).then(response => {
                    if (response) {
                        history.push('/login')
                    }
                })
            }

        }

    }

    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-3">
                            <form onSubmit={handleSubmit}>
                                <h1>Registro de usuario</h1>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleInputChange}></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" name="password" placeholder="Contraseña" onChange={handleInputChange}></input>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary" type="submit">Registrate</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Registro
