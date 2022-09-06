import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import '../components/Cards.css'
import { Link } from 'react-router-dom'

const Cards = () => {

    const [posts, setPosts] = useState({ valores: [] })
    const [loading, setLoading] = useState(false)
    const [searchTitle, setSearchTitle] = useState("")

    //const [search, setSearch] = useState()



    useEffect(() => {

        const loadingPost = async () => {
            setLoading(true)
            const { data } = await axios('http://localhost:4000/tasks');
            setPosts({ valores: data })
            setLoading(false)
            console.log(data)
        }

        loadingPost()
    }, [setPosts])
    //console.log(posts)

    /*const handleSubmit = async () => {
        
        const res = await fetch(
            'http://localhost:4000/tasksSearch/' + posts.search,
            {
                method: 'GET',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
            });
        console.log(res.json())
        return await res.json();

    }*/



    return (
        <div>
            <div className="colorRow">
                <h1 className="text-center">Propiedades en Venta</h1>
            </div>
            <div className="container justify-content-center align-items-center h-100 pad">
                <section>
                    <form>
                        <div className="row">
                            <div className="col-md-8">
                                <input className="form-control" name="search" type="search" onChange={(event) => { setSearchTitle(event.target.value) }} placeholder="Search" /><br />
                            </div>
                            <div className="col-md-2">
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Casa</option>
                                    <option>Departamento</option>
                                    <option>Terreno</option>
                                    <option>Parcela</option>
                                    <option>Bodega</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Comprar</option>
                                    <option>Arrendar</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <br />
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-title text-center">
                                    Filtros
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>Ubicación</li>
                                        <li>Precio</li>
                                        <li>Dormitorios</li>
                                        <li>Baños</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {
                                    loading ? (
                                        <h1>Cargando ...</h1>
                                    ) : (
                                        posts.valores.filter((val) => {
                                            if (searchTitle === "") {
                                                return val;
                                            } else if (val.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                                                return val;
                                            }
                                        }).map(card => (
                                            <div className="col-md-6 justify-content-center align-items-center" key={card.id}>
                                                <Card title={card.title} imageSource={card.image}>
                                                </Card>
                                                <br/>
                                                <Link className="btn btn-outline-secondary justify-content-center align-items-center text-center" to={`/propiedades/${card.id}`}>
                                                    Ver Propiedades
                                                </Link>
                                                <hr />
                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Cards
