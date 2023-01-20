import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Encabezado from '../Encabezado/Encabezado';

export default function Profile(){

    let User = useSelector((state) => state.user)

  return (
    <div className='profile'>

        <div>
            <Encabezado />
        </div>

        <h1>¡DATOS DEL USUARIO!</h1>

        <h1>{User.name}</h1>
        <h1>{User.last_name}</h1>
        <h1>{User.username}</h1>

    </div>
  )
}
