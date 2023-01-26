import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getUsers, deleteUser, updateUser, getUsersById } from "../../action/index";
import { Link, useParams } from "react-router-dom";
import swal from 'sweetalert';


export default function userBan(){
       
     const dispatch = useDispatch();
     const { id } = useParams();
     const userId = useSelector((state) => state.userrr)
     const [ input, setInput ] = useState({
     	name: "",
     	username: "",
     	email: "",
     	is_banned: "",
      password: "",
      role: "",
      img: "",
      last_name: "",
     })

 console.log(input)

     useEffect(() =>{
        dispatch(getUsersById(id))
     },[id])

     useEffect(() =>{
     	setInput({
        name: userId?.map(e => e.name).toString(),
        username: userId?.map(e => e.username).toString(),
        email: userId?.map(e => e.email).toString(),
        is_banned: userId?.map(e => e.is_banned).toString(),
        password: userId.map(e => e.password).toString(),
        role: userId.map(e => e.role).toString(),
        img: userId.map(e => e.img).toString(),
        last_name: userId.map(e => e.last_name).toString()
     	})
     },[userId])
 

   function handleInputChange(e){
   	e.preventDefault()
   	setInput({
   		...input,
   		[e.target.name] : e.target.value
   	})
   }

   function handleSubmit(e){
   	e.preventDefault()
   	dispatch(updateUser(id, input))
    swal("Propiedad Ban actualizada")
   	setInput({
     	is_banned: ""
   	})
   }

 

	return(
      <div className="block bg-gray-300 bg-cover border-2 justify-center items-center">
        <h1 className="text-3xl font-bold text-black ml-[500px]">Actualizar Estado de Ban</h1>
        <form className="w-full max-w-lg " onSubmit={(e) => handleSubmit(e)}>
  <div className="flex flex-wrap -mx-3  mt-20 ">
    <div className="w-full md:w-1/2 px-3 md:mb-0">
      <label className="block uppercase tracking-wide text-black text-xs font-bold  ml-[400px] mt-[15px]" for="grid-first-name">
         Name
      </label> 
      <input  value={input.name} name="name" class="appearance-none block w-full bg-gray-200 text-black border border-black-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ml-[400px]"  type="text"     onChange={(e)=>handleInputChange(e)} /> 
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-black text-xs font-bold ml-[400px] mt-[15px]" for="grid-last-name">
        Username
      </label>
      <input value={input.username} name="username" class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ml-[400px]" id="grid-last-name" type="text" placeholder="Doe" readOnly   onChange={(e)=>handleInputChange(e)} />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6 mt-20">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2 ml-[400px]" for="grid-password">
        Email
      </label>
      <input value={input.email} name="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ml-[400px]" id="grid-password" type="text"  readOnly    onChange={(e)=>handleInputChange(e)}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2  mt-20">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2 ml-[400px] mt-[15px]" for="grid-state">
        Ban
      </label>

      <div className="relative">
        <select value={input.is_banned} name="is_banned" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ml-[400px] mt-[15px]"    onChange={(e)=>handleInputChange(e)}>
          <option>true</option>
          <option>false</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z ml-[500px]" /></svg>
        </div>

       </div>

    </div>
    </div>
       <button type="submit" className="flex-wrap p-[20px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-[600px]" >Actualizar</button>
</form>
      </div>

		)
}
