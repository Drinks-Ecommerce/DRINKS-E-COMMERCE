


import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getUsers, deleteUser, updateUser, getUsersById } from "../../action/index";
import { Link, useParams } from "react-router-dom";
import SearchBaruser from '../SearchBaruser/SearchBaruser';







export default function User() {

  const dispatch = useDispatch()
  const { id } = useParams();
  const alluser = useSelector((state) => state.userr) 
  const alluserId = useSelector((state) => state.userrr)
  console.log(alluserId)
  
  
 


 //este estado es cambiar el renderizado del componente
  let [updateState, setUpdateState] = useState(false);

  let [idState, setIdState] = useState(null);//lo cree nuevo ahora prueba

  //aca creo el estado que me va a guardar los input del update Form
  const [ input, setInput ] = useState({
    name: "",
    username: "",
    email: "",
    img: "",  
    is_banned: "",
    last_name: "",
     
})

console.log(idState)

//cuando se renderiza el componente disparo la accion para que actualice el state
useEffect(() =>{
   dispatch(getUsersById(id))
   dispatch(getUsers())    
}, [id])

useEffect(() =>{
  setInput({
    name: alluserId?.map(e => e.name).toString(),
    username: alluserId?.map(e => e.username).toString(),
    email: alluserId?.map(e => e.email).toString(),
    is_banned: alluserId?.map(e => e.is_banned).toString(),
  })
},[alluserId])


function handleClick(){
     
  
  dispatch(getUsers());

}



//cuando presiono el boton de editar me muestra el formulario y el user espicifico que quiero editar 
 let handleOpenUpdateForm = (e) => {
  setUpdateState(true);

  setIdState(e);// actualizo el id en el estado guardo el id

  /* dispatch(getUsersById(e))/////////////////////////////////////////////
  
  setInput({
    
    name: alluser.name,
    username: alluser.username,
    email: alluser.email,
    img: alluser.img,
    
  }); */
//     dispatch(getUsersById(e)).then(data => {// para asignar los valores de los inputs debes hacerlo dentro del callback de getUsersById
//     setInput({
//     name: data.name,
//     username: data.username,
//     email: data.email,
//     is_banned: data.is_banned,
//   });
// });
 }; 


 async function handledeleteUser(e){
   if(window.confirm("¿Esta segur?")){   
  await dispatch(deleteUser(e))
  await dispatch(getUsers());
  }

}


//lo conecto con el onChange para capturar los datos de los input
let handleInputChange = (e) => {
  e.preventDefault()///////////////////////////////esto agregue
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
};


let handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(updateUser(idState, input)); // utilizo el id del estado

  
    setInput({/////agregue
    name: "",
    username: "",
    email: "",
    img: "", 
    
    }); 

    setTimeout(() => {
      
      setUpdateState(false)

      setIdState(null); // reseteo el id del estado 

      dispatch(getUsers());

    }, 3000);


 
};
  


  return (
    
  
      <div>
     {
      !updateState && (
        
        <div class="container grid grid-cols-1   my-16 mx-16  items-center justify-center">
          <div> <Link to="/paneladmin"><button className="px-6 py-2.5 bg-gray-800 text-white">PANEL ADMIN</button></Link></div>
          <div class="items-center justify-center text-center"><SearchBaruser/></div>
          <div class="datos-usuarios grid grid-cols-6 grid-area-datos-usuarios my-8  items-center justify-center text-center">
          <div class="nombre grid-area-nombre text-3xl">Name</div>
          <div class="apellido grid-area-apellido text-3xl">Username</div>
          <div class="email grid-area-email text-3xl">Email</div>
          <div class="editar grid-area-editar text-3xl">Eleminar</div>
          <div class="eliminar grid-area-eliminar text-3xl">Editar</div>
          <div class="image grid-area-image text-3xl">Image</div>
  </div>

            <div>


             {
                alluser?.map(e => {
                    return (
 
                        <div className="text-black grid-cols-6 grid my-8  items-center justify-center text-center border-2 border-black rounded-3xl bg-gray-500">
                           <h2 className="text-white text-2xl border-2 border-green rounded-3xl">{e.name}</h2> 
                            <h2 className="bg-gray-500 text-white text-2xl">{e.username}</h2> 
                            <h2 className="bg-gray-500 text-white text-2xl">{e.email}</h2>

                            <button onClick={() => handledeleteUser(e.id)} className="text-white text-2xl hover:text-black">delete</button>
                             <Link to={`/users/id/${e.id}`}>
                             <button className=" text-white text-2xl rounded-3xl hover:text-black">editar</button>
                             </Link>
                             {/* aqui agregue al openupdate el e.id */}
                            <img class="my-8  items-center justify-center w-[150px]" src={e.img} alt='' />
            
            
            
             
                        </div>
                        
                    )
                })
            }


            </div>
      </div>


      )} 



      </div> 

)}
