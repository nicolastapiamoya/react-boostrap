import React from 'react'

const Contacto = () => {

    const handleInputChange = () => {

    } 

    const handleSubmit = () => {

    }
    return (
        <div className="container">
            <h1 className="text-center">Contacto</h1>
            <p className="text-center">COMPLETA EL SIGUIENTE FORMULARIO:</p>
            <section>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 ">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input className="form-control" name="nombre" type="text" placeholder="Escribe el titulo" onChange={handleInputChange}></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input className="form-control" name="email" type="email" placeholder="Escribe el titulo" onChange={handleInputChange}></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telefono</label>
                                <input className="form-control" name="telefono" type="number" placeholder="Escribe el titulo" onChange={handleInputChange}></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mensaje</label>
                                <textarea className="form-control" name="mesanje" type="text" row="5" placeholder="Escribe el titulo" onChange={handleInputChange}></textarea>
                            </div>
                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-secondary ">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Contacto
