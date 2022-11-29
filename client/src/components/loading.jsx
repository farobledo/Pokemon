/* eslint-disable no-undef */
import React from 'react'
import loading from './loading.module.css'
import pikachuLoad from '../images/loading.gif'


const Loading = () => {
// vamos a crear un componente que se va a encargar de mostrar un gif de carga mientras se hace la petición a la API
return (
        <div className={loading.containImg}>
            <h1>Estoy Buscando </h1>
            <img src={pikachuLoad} alt='loading' />
            <img src={pikachuLoad} alt="Img not found" />
        </div>
    )
}

export default Loading;