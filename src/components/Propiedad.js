import { useParams } from 'react-router-dom'
import axios from 'axios'
import React from 'react'
import '../components/Propiedad.css'

const Propiedad = () => {

    console.log(useParams())

    const { id } = useParams()

    const [propiedad, setPropiedad] = React.useState({ valores: [] })

    React.useEffect(() => {
        const getCasas = async () => {
            const { data } = await axios(`http://localhost:4000/tasks/${id}`);
            setPropiedad({ valores: data })
        }
        getCasas()
    }, [id])
    let url = ''
    propiedad.valores.map(prop => (
        url = 'https://api.whatsapp.com/send?phone=+56989536189&text=🏠 Hola,%20me%20interesa%20una%20propiedad:%0AID: ' + prop.id +'%0ATitulo: '+prop.title
    ))

    

    return (
        <div>
            <div className="colorRow">
                {
                    propiedad.valores.map(prop => (
                        <div key={prop.id}>
                            <h1 className="text-center">{prop.title}</h1>
                        </div>
                    ))
                }
            </div>
            <br />
            <div className="container justify-content-center align-items-center h-100">
                <div className="row">

                    <div className="col-md-6">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                {
                                    propiedad.valores.map(prop => (
                                        <div className="carousel-item active" key={prop.id}>
                                            <div className="card">
                                                <img className="img-responsive image" src={prop.image} alt="" />
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>

                        </div>


                    </div>

                    <div className="col-md-6">
                        {
                            
                            propiedad.valores.map(prop => (
                                <div key={prop.id}>
                                    <div className="card">
                                        <h2>DESCRIPCIÓN DE LA PROPIEDAD</h2>
                                        <text>{prop.title}</text><br />
                                        <p>{prop.descripcion}</p>
                                        <text>🤝🏼 Contactanos</text><br />
                                        <text>📲 +56 9 7265 3209</text><br />
                                        <text>📩 montevallepropiedades@gmail.com</text><br /><br />
                                        <h2>DETALLES</h2>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <text>Tipo Propiedad</text><br />
                                                <text>Casa</text><br />
                                            </div>
                                            <div className="col-md-3">
                                                <text>Habitaciones</text><br />
                                                <text>3</text><br />
                                            </div>
                                            <div className="col-md-3">
                                                <text> Baños</text><br />
                                                <text>3</text><br />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col">
                                                <a className="btn btn-lg btn-success redondo" href={url}  ><i className="bi bi-whatsapp"></i> WHATSAPP</a>
                                            
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>


                </div>
                <br />
                <div className="row">
                    <h2>UBICACIÓN (CIUDAD):</h2>

                    <iframe title="x" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26805.674050860795!2d-71.254016!3d-32.8794112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1636994808894!5m2!1ses-419!2scl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <br />
        </div>

    )
}

export default Propiedad
