import React, { useState, useEffect } from 'react'
import './Calendario.css'
import { Calendar, momentLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
import moment from "moment"
import axios from 'axios'
import swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
require("moment/locale/es.js")



const locales = {
    "es": require("moment/locale/es.js")
}

const localizer = momentLocalizer(moment, {
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const Calendario = () => {

    const history = useHistory();

    const [allEvent, setAllEvent] = useState()
    const [posts, setPosts] = useState({ valores: [] })

    useEffect(() => {

        const getEvents = async () => {
            const { data } = await axios('http://localhost:4000/events');
            data.map((e) => {
                e.start = new Date(e.start);
                e.end = new Date(e.end);
                if (e.allDay === 1) {
                    e.allDay = true;
                }
            })
            setAllEvent(data)
            console.log(data)
        }

        getEvents()
    }, [setAllEvent])

    useEffect(() => {

        const loadingPost = async () => {

            const { data } = await axios('http://localhost:4000/tasks');
            setPosts({ valores: data })
            console.log(data)
        }

        loadingPost()
    }, [setPosts])


    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });


    const handleAddEvent = async (event) => {
        event.preventDefault();
        if (newEvent.title === undefined || newEvent.start === undefined || newEvent.title === '' || newEvent.start === '') {
            swal.fire({
                title: 'Advertencia',
                text: 'Hay campos vacíos!',
                icon: 'info'
            })
        }else{
            await fetch(
                'http://localhost:4000/events',
                {
                    method: 'POST',
                    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify(newEvent)
                }).then(function (response) {
                    response.json();
                }).catch(function (error) {
                    error.json();
                });

            swal.fire({
                title: "Evento añadido!",
                icon: "success",
                buttons: ["Ok"]

            }).then(response => {
                if (response) {
                    history.push('/calendario')
                }
            })
        }

        

    }




    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-3">
                        <h1>Calendario</h1>
                        <h2>Agenda tu retiro</h2>
                        <form onSubmit={handleAddEvent}>
                            <div className="mb-3">
                            <label for="exampleFormControlSelect1">Dirección</label>
                                <input className="form-control" type="text" placeholder="title" name="title" onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}></input>
                            </div>
                            <div className="mb-3">
                                <DatePicker className="form-control" selected={newEvent.start} name="start" dateFormat="yyyy-MM-dd" onChange={dateStart => setNewEvent({ ...newEvent, start: dateStart })} ></DatePicker>
                            </div>
                            <div className="mb-3">
                                <DatePicker className="form-control" selected={newEvent.end} name="end" dateFormat="yyyy-MM-dd" onChange={dateEnd => setNewEvent({ ...newEvent, end: dateEnd })} ></DatePicker>
                            </div>
                            <div className="mb-3">
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Selecciona un material</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        {
                                            posts.valores.map(prop => (
                                                <option key={prop.id}>{prop.title}</option>
                                            ))
                                        }
                                    </select>

                                </div>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary" type="submit" >Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>


                <Calendar
                    step={30}
                    localizer={localizer}
                    events={allEvent}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500, margin: "50px" }}
                    messages={{
                        next: "-->",
                        previous: "<--",
                        today: "Hoy",
                        month: "Mes",
                        week: "Semana",
                        day: "Día",
                    }}

                />
            </div>
        </div>
    )
}

export default Calendario
