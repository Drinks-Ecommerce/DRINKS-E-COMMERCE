


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
 


 //este estado es cambiar el renderizado del componente
  let [updateState, setUpdateState] = useState(false);

  let [idState, setIdState] = useState(null);//lo cree nuevo ahora prueba

  //aca creo el estado que me va a guardar los input del update Form
  const [ input, setInput ] = useState({
    name: "",
    username: "",
    email: "",
    img: "",  
    

     
})

//cuando se renderiza el componente disparo la accion para que actualice el state
useEffect(() =>{
   dispatch(getUsers()) 
 
}, [])


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

  dispatch(getUsersById(e)).then(data => {// para asignar los valores de los inputs debes hacerlo dentro del callback de getUsersById
    setInput({
    name: data.name,
    username: data.username,
    email: data.email,
    img: data.img,
  });
});
}; 


function handledeleteUser(e){
     
  dispatch(deleteUser(e))
   dispatch(getUsers()); 

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
      <div>
     {
      !updateState && (
        
        <div class="container grid grid-cols-1   my-16 mx-16  items-center justify-center">
          <div><button className="px-6 py-2.5 bg-purple-600 text-white" onClick={()=>{handleClick()}}>ALLUSER</button></div>
          <div class="items-center justify-center text-center"><SearchBaruser/></div>
          <div class="buscador grid-area-buscador"><h1 class="items-center justify-center text-center">buscador</h1></div>
          <div class="usuarios grid-area-usuarios"><h1 class="items-center justify-center text-center  my-8">Usuario</h1></div>
          <div class="datos-usuarios grid grid-cols-6 grid-area-datos-usuarios my-8  items-center justify-center text-center">
          <div class="nombre grid-area-nombre">Name</div>
          <div class="apellido grid-area-apellido">Username</div>
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
                           <h2>{e.name}</h2> 
                            <h2>{e.username}</h2> 
                            <h2>{e.email}</h2> 
                            <button onClick={() => handledeleteUser(e.id)}>delete</button>
                             <button onClick={()=>handleOpenUpdateForm(e.id)}>editar</button>
                             
                            <img class="my-8  items-center justify-center " src={e.img} alt=''width='30px' height='40px'/>
            
            
            
             
                        </div>
                        
                    )
                })
            }


            </div>

 
                  <Link to="/paneladmin">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                           Panel Admin
                      </button>
                  </Link>
      </div>


      )} {/* TERMINO EL updateState  */}



      </div>


      {updateState && (

          <div>


              <form  onSubmit={(e)=>handleSubmit(e)}>


                  <div class="grid gap-5 mb- md:grid-cols-2 ">{/* grid gap-x-8 gap-y-4    */    }

 
        
                    <Link to="/paneladmin">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                            Panel Admin
                        </button>
                    </Link>



      <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">NAME</label>
          <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" 
          type="text"
          value={input.name}
          name="name"
          onChange={(e)=>handleInputChange(e)}
          
          > 
          </input>
      
      </div>




      <div>
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">USERNAME</label>
          <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" 
          type="text"
          value={input.username}
          name="username"
          onChange={(e)=>handleInputChange(e)}
          
           > 
          </input>
      
      </div>




      <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">EMAIL</label>
          <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" noValidate
          type="text"
          value={input.email}
          name="email"
          onChange={(e)=>handleInputChange(e)}
          
          > 
          </input>
      
      </div>
      



      <div>
          <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">IMAGEN</label>
          <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="img" 
            type="text"
           value={input.img}
          name="img"
          onChange={(e)=> handleInputChange(e)}
      > 
      </input>
     
      </div> 




 


      <button  type="submit">
        actualizar
      </button>

      

    </div>

</form>

</div>

      )}



      </div>
  )
}
