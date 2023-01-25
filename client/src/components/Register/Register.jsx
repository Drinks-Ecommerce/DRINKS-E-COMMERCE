import React from 'react'
import Encabezado from '../Encabezado/Encabezado'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { postSignUp,getUsers } from '../../action/index.js'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

export default function Registrar(){
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alluser = useSelector((state)=> state.userr)
    const [errors, setErrors] = useState({})
  
    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch])


    const [input, setInput] = useState({
        name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        img: '',
        adult:true,
    });

   const allemail = alluser.map(e=> e.email) 
   console.log(allemail)
    function validate(input) {
        let errors = {}
        if(input.name===""){
            errors.name= "Obligatory field name"
        }
        if(input.username === ""){
            errors.username= "Obligatory field username"
        }
        if(input.last_name === ""){
            errors.last_name= "Obligatory field last name"
        }
       
        if(allemail.includes(input.email)){
            errors.email= "email already exists"
        }else if(input.email === ""){
            errors.email= "Obligatory field email"
        }
        if(input.password.length < 8){
            errors.password= "min eight digits"
            
        }
        return errors
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput({...input, 
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    
    console.log(input)
    const onSubmit = e =>{
        console.log(e)
        dispatch(postSignUp(input));
        alert("Usuario creado exitosamente")
        setInput({
            name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            adult:""
        })
        navigate('/')
    }

   

   

    return (

        <div className="flex flex-col bg-gray-400 h-screen">

            <div>
                <Encabezado />
            </div>

            <div className="mx-auto mt-4 mb-4 flex flex-col max-w-3xl w-4/5 p-6 rounded-md sm:p-6 bg-gray-900 text-gray-100 ">

	            <div className="mb-4 text-center">
		            <h1 className="my-3 text-4xl font-bold underline">Registrarse</h1>
	            </div>

	            <form  onSubmit={ onSubmit } className="space-y-5 ng-untouched ng-pristine ng-valid">

                    <div className='flex flex-row justify-between mx-8'>


                    <div className='flex flex-col'>

				    <div className="space-y-1 mb-4">
					        <label className="block mb-1 text-sm ml-1">Nombre</label>
				            <input type="text" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 
                             text-gray-100" value={input.name} name ="name" onChange={(e)=>handleChange(e)}
                             />
                              <span>{errors.name && (<p className='error'>{errors.name}</p>)}</span>
				    </div>
                    
                    <div className="space-y-1 mb-4">
					    <label className="block mb-1 text-sm ml-1">Apellido</label>
				        <input type="text" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100"  value={input.last_name}  name ="last_name" onChange={(e)=>handleChange(e)} />
                          <span>{errors.last_name && (<p className='error'>{errors.last_name}</p>)}</span>
				    </div>
                   
                    <div className="space-y-1 mb-2">
					    <label className="block mb-1 text-sm ml-1">Nombre de usuario</label>
				        <input type="text" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" value = {input.username} name="username"  onChange={ (e) => handleChange(e) }
                         />
                          <span>{errors.username && (<p className='error'>{errors.username}</p>)}</span>
				    </div>
                </div>

                <div className='flex flex-col'>

                    <div className="space-y-1 mb-4">
				            <label className="block mb-1 text-sm ml-1">Correo electrónico</label>
				            <input type="email" placeholder="pasarelpf@example.com" className="w-full px-3 py-2 border rounded-md border-gray-700
                             bg-gray-900 text-gray-100" value= {input.email}  name="email" onChange={ (e) => handleChange(e) }
                            />
                             <span>{errors.email && (<p className='error'>{errors.email}</p>)}</span>
			        </div>
                
                    <div className="space-y-1">
					    <label className="block mb-1 text-sm ml-1">Contraseña</label>
				        <input type="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" value={ input.password} name="password" onChange={ (e) => handleChange(e) }
                         />
                          <span>{errors.password && (<p className='error'>{errors.password}</p>)}</span>
				    </div>
                        	
                    </div>
                    </div>

		            <div className="space-y-1">
			            <div>
				            <button className="flex px-8 py-3 mb-3 font-semibold rounded-md bg-teal-400 text-gray-900 mx-auto"
                                disabled={errors.name || errors.email || errors.last_name || errors.username  || errors.password|| input.name === ''? true : false }>
                                Registrarse
                            </button>
			            </div>

                       
		            </div>
	            </form>
                <p className="px-2 mr-1 text-sm text-center text-gray-400">¿Ya tienes una cuenta?
                            <Link to='/login'>
				                <a rel="noopener noreferrer" href="#" className="hover:underline text-indigo-400"> Inicia sesión</a>.
                            </Link>
			            </p>
            </div>

            <div className="container-footer mt-auto">
                <Footer />
            </div>
    </div>
  )
 }