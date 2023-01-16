import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../../action/index";



export default function User() {

    const dispatch = useDispatch()
   const alluser = useSelector((state) => state.user)  
  /* const [permisos, setPermisos] = useState(false) */

   useEffect(() =>{

      dispatch(getUsers());
    },[])  





    function handledeleteUser(e){
      /* e.preventDefault(); */
      dispatch(deleteUser(e))
      dispatch(getUsers());

  }


    
   
  return (
    
  <div class="container grid grid-cols-1   my-16 mx-16  items-center justify-center">{/* flex items-center justify-center */}
  <div class="buscador grid-area-buscador"><h1 class="items-center justify-center text-center">buscador</h1></div>
  <div class="usuarios grid-area-usuarios"><h1 class="items-center justify-center text-center  my-8">Usuario</h1></div>
  <div class="datos-usuarios grid grid-cols-6 grid-area-datos-usuarios my-8  items-center justify-center text-center">
    <div class="nombre grid-area-nombre">Name</div>
    <div class="apellido grid-area-apellido">Lastname</div>
    <div class="email grid-area-email">Email</div>
    <div class="editar grid-area-editar">Eleminar</div>
    <div class="eliminar grid-area-eliminar">Editar</div>
    <div class="image grid-area-image">Image</div>
  </div>
  <div>
  {
                alluser?.map(e => {
                    return (

                        <div class="text-black grid-cols-6 grid my-8  items-center justify-center text-center">
                           <h2>{e.name}</h2>  <h2>{e.username}</h2> <h2>{e.email}</h2> <button onClick={() => handledeleteUser(e.id)}>delete</button> <button>editar</button>
                            <img class="my-8  items-center justify-center " src={e.img} alt=''width='30px' height='40px'/>
            
            
            
             
                        </div>
                        
                    )
                })
            }


  </div>

 {/*  <div class="footer grid-area-footer my-8">footer</div> */}
</div>

  )
}
