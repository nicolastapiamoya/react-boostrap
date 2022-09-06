import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Agregar = () => {

    const [posts, setPosts] = useState({ valores: [] })

    let base64 = "";

    const handleInputChange = (event) => {
        console.log(posts)
        setPosts({
            ...posts,
            [event.target.name]: event.target.value
        });
    }

    const uploadImage = async (event) => {
        //console.log(event.target.files)
        const file = event.target.files[0]
        base64 = await convertBase64(file);
        console.log(base64)
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error)
            };
        })
    };

    const handleSubmit = async () => {

        if (posts.title !== '' && posts.descripcion !== '') {
            const res = await fetch(
                'http://localhost:4000/tasks',
                {
                    method: 'POST',
                    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        {
                            title: posts.title,
                            descripcion: posts.descripcion,
                            image: base64
                        })
                });
            console.log(res.json())
            return await res.json();
        }

    }

    useEffect(() => {

        const getPropiedades = async () => {
            const { data } = await axios('http://localhost:4000/tasks');
            setPosts({ valores: data })
            console.log(data)
        }

        getPropiedades()
    }, [setPosts])


    return (
        <div className="container justify-content-center align-items-center h-100">
            <h1>Agregar</h1>
            <section>
                <div className="row">
                    <div className="col-md-3">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Titulo</label>
                                <input className="form-control" name="title" type="text" placeholder="Escribe el titulo" onChange={handleInputChange}></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Descripción</label>
                                <textarea className="form-control" name="descripcion" type="text" row="4" placeholder="Escribe la descripción" onChange={handleInputChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Imagen</label>
                                <input className="form-control" name="image" type="file" placeholder="Imagen URL" onChange={uploadImage}></input>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </div>

                        </form>
                    </div>

                </div>

                <div className="row">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.valores.map(card => (
                                    <tr key={card.id}>
                                        <th scope="row">{card.id}</th>
                                        <td>{card.title}</td>
                                        <td>{card.descripcion}</td>
                                        <td><img height="100" width="100" src={card.image} alt=""/></td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Agregar
