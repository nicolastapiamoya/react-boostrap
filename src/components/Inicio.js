import React from 'react'
import '../components/Inicio.css'
import Contacto from '../components/Contacto'
import Imagen1 from '../assets/image00081.png'
import Imagen2 from '../assets/8.svg'
import ImagenCaract1 from '../assets/image00007.png'
import ImagenCaract2 from '../assets/image00018.png'
import ImagenCaract3 from '../assets/image00055.png'
import ImagenCaract4 from '../assets/image00034.png'
import ImagenCompromiso1 from '../assets/image00112.png'
import ImagenProximamente1 from '../assets/mapa.PNG'
import ImagenProximamente2 from '../assets/flecha.PNG'

const Inicio = () => {
    return (
        <div>
            <section>
                <div class="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className=""></div>
                                    <div className="marginTexto"><h1 className="tamañoTexto">DESCUBRE EL</h1></div>
                                    <div className="marginTexto"><h1 className="tamañoTexto">NUEVO SISTEMA DE</h1></div>
                                    <div className="marginTexto"><h1 className="tamañoTexto">GESTIÓN DE</h1></div>
                                    <div className="marginTexto"><h1 className="tamañoTexto">RESIDUOS DE CHILE</h1></div>
                                    <br></br>
                                    <div className="row marginTexto">
                                        <div className="col-md-5">
                                            <button className="button text-center">INGRESA AQUÍ</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <img className="card-img" src={Imagen1} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>
            <br />
            <section>
                <div class="container-fluid">
                    <div className="row colorRowQuienSomos">

                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-title">
                                    <div className="marginTexto">
                                        <h1 className="tamañoTituloTextoQuienSomos">Quienes somos?</h1>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="tamañoTextoQuienSomos">
                                        Somos una empresa de la Quinta Región que llegó
                                        para facilitar el sistema de gestión de residuos tanto
                                        en la comuna como en el país
                                    </h3>
                                    <h3 className="tamañoTextoQuienSomos">
                                        Creemos que en Chile el sistema de recolección está
                                        obsoleto o es antiguo y que por las normativas
                                        vigentes existe una gran duda de como gestionar los
                                        residuos correctamente y de como declararlos.
                                    </h3>
                                    <h3 className="tamañoTextoQuienSomos">
                                        Es por eso que creamos CIRCULAR para unir a las
                                        empresas con gestores que puedan retirar sus
                                        residuos y que cumplan con las normativas y
                                        resoluciones que el gobierno solicita.
                                    </h3>
                                    <div className="row marginTexto">
                                        <div className="col-md-5">
                                            <button className="button text-center">INGRESA AQUÍ</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <img className="card card-img-top" src={Imagen2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section>
                <div class="container-fluid">
                    <div className="row colorRowCaracterisitcas">
                        <h2 className="text-center">Características</h2>
                        <div className="col-md-3">
                            <div className="card">

                                <img className="card-img-top" src={ImagenCaract1} alt="" />
                                <div className="card-title text-center">
                                    <h5> Utiliza el sistema de gestión desde cualquier lugar</h5>
                                </div>
                                <div className="card-body text-center">
                                    El sistema que llegó a faciiitar la
                                    gestion de residuos de tu
                                    empresa
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={ImagenCaract2} alt="" />

                                <div className="card-title text-center">
                                    <h5>Coordina tu retiro con gestores
                                        que estén cerca tuyo</h5>
                                </div>
                                <div className="card-body text-center">
                                    Si quieres coordinar un retiro,
                                    ingresa al sistema y conéctate
                                    con gestores de la zona para que
                                    retiren tus residuos   </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={ImagenCaract3} alt="" />

                                <div className="card-title text-center">
                                    <h5> Accede a métricas y
                                        ecoequivalencias</h5>
                                </div>
                                <div className="card-body text-center ">
                                    Con el fin de facilitar tus
                                    declaraciones y llevar el registro
                                    de lo que tu empresa a reciclado
                                    es que entregamos datos duros
                                    de como ha sido tu gestión
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={ImagenCaract4} alt="" />

                                <div className="card-title text-center">
                                    <h5>Empresa Ecofriendly</h5>
                                </div>
                                <div className="card-body text-center ">
                                    Queremos que tu empresa
                                    cumpla con el cuidado del
                                    medio ambiente es por eso que
                                    facilitamos este espacio para ti y
                                    tu red </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <br />
            <section>
                <div class="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img className="card-img" src={ImagenCompromiso1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="tamañoTexto">Compromiso con la sociedad, el medio ambiente y las personas</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>
            <br />
            <section>
                <div className="container-fluid">
                    <div className="row colorRowQuienSomos ">
                        <h1 className="text-center tamañoTexto">Planes</h1>
                        <div className="col-md-4">
                            <div className="card p-5 mb-4">
                                <div className="card-body cardColorPlanes">
                                    <div className="card-title">
                                        <h5>Basico</h5>
                                    </div>
                                    <ul>
                                        <li>1 Cuenta</li>
                                        <li>Acceso a los datos</li>
                                        <li>Acceso a manual de reciclaje</li>
                                    </ul>
                                    <button className="button text-center">SELECCIONAR PLAN</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-5 mb-4">
                                <div className="card-body cardColorPlanes">
                                    <div className="card-title">
                                        <h5>Avanzado</h5>
                                    </div>
                                    <ul>
                                        <li>Todo el plan Básico</li>
                                        <li>Cuenta de administrador</li>
                                        <li>Atención personalizada</li>
                                        <li>Feedback mensual</li>
                                        <li>Acceso a ecoequivalencias</li>
                                        <li>Acceso a cursos ambientales</li>
                                        <li>1 charla ambiental para colaboradores</li>
                                    </ul>
                                    <button className="button text-center">SELECCIONAR PLAN</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-5 mb-4">
                                <div className="card-body cardColorPlanes">
                                    <div className="card-title">
                                        <h5>Personalizado</h5>
                                    </div>
                                    <ul>
                                        <li>Todas las características de los
                                            planes anteriores además de
                                            las características
                                            personalizadas que necesites.</li>
                                        <li>Se realizará un presupuesto
                                            ajustado a las necesidades de
                                            tu negocio</li>
                                    </ul>
                                    <button className="button text-center">SELECCIONAR PLAN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div class="container-fluid">
                    <div class="row colorRoxProximamente">
                        <div class="col-sm-8">
                            <h1 className="text-center tamañoTexto">Disponible para Chile, próximamente para el mundo!</h1>
                        </div>
                    </div>
                    <br></br>
                    <div class="row colorRoxProximamente">
                        <div class="col-sm-3">
                            <h1 className="text-center tamañoTexto">Gestiona tu retiro</h1>
                        </div>
                        <div class="col col-sm-3">
                            <img className="card card-img" src={ImagenProximamente2} alt="" />
                        </div>
                        <div class="col col-sm-3">
                            <button className="button text-center">Ingesar aquí</button>
                        </div>
                        <div class="col col-sm-2">
                            <img className="card card-img" src={ImagenProximamente1} alt="" />
                        </div>
                    </div>


                </div>

            </section>




            <br></br>
            <Contacto></Contacto>
        </div>



    )
}

export default Inicio
