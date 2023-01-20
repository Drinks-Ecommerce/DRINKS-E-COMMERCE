import React from 'react'
import Encabezado from '../Encabezado/Encabezado'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { postSignUp } from '../../action/index.js'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'



export default function Registrar(){
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit ,formState: { errors } } = useForm();
    

    const [input, setInput] = useState({
        name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        img: '',
        adult: '',
    });
    


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
        })
        navigate('/')
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput({...input, 
            [e.target.name]: [e.target.value]
        })
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

	            <form  onSubmit={ handleSubmit(onSubmit) } className="space-y-5 ng-untouched ng-pristine ng-valid">

                    <div className='flex flex-row justify-between mx-8'>


                    <div className='flex flex-col'>

				    <div className="space-y-1 mb-4">
					        <label className="block mb-1 text-sm ml-1">Nombre</label>
				            <input type="text" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 
                             text-gray-100" 
                             {...register("name", {
                                required: true,
                                value: input.name ,
                                minLength: 3})}
                             onChange={ (e) => handleChange(e) }
                             />
				    </div>
                    { errors.name?.type === 'required' && <p>Este campo es obligatorio</p> }
                    { errors.name?.type === 'minLength' && <p>Debe tener al menos 3 caracteres</p> }
                    <div className="space-y-1 mb-4">
					    <label className="block mb-1 text-sm ml-1">Apellido</label>
				        <input type="text" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" 
                         
                         {
                            ...register("last_name", {
                                required: true,
                                value: input.last_name,
                                minLength: 3
                            })
                         }
                         onChange={ (e) => handleChange(e) }
                         />
				    </div>
                    { errors.last_name?.type === 'required' && <p>Este campo es obligatorio</p> }
                    { errors.last_name?.type === 'minLength' && <p>Debe tener al menos 3 caracteres</p> }

                    <div className="space-y-1 mb-2">
					    <label className="block mb-1 text-sm ml-1">Nombre de usuario</label>
				        <input type="text" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" 
                         {...register("username", {
                             required: true,
                            value: input.username,
                            maxLength: 30                            
                         })}
                         onChange={ (e) => handleChange(e) }
                         />
				    </div>
                    { errors.username?.type === 'required' && <p>Este campo es obligatorio</p> }
                    { errors.username?.type === 'maxLength' && <p>Debe tener maximo 30 caracteres</p> }
                </div>

                <div className='flex flex-col'>

                    <div className="space-y-1 mb-4">
				            <label className="block mb-1 text-sm ml-1">Correo electrónico</label>
				            <input type="email" placeholder="pasarelpf@example.com" className="w-full px-3 py-2 border rounded-md border-gray-700
                             bg-gray-900 text-gray-100" 
                             {
                                 ...register("email", {
                                     required: true,
                                     value: input.email,
                                     pattern: /^[A-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[A-Z]{2,4}$/i,
                                    })
                            }
                                onChange={ (e) => handleChange(e) }
                            />
			        </div>
                    { errors.email?.type === 'required' && <p>Este campo es obligatorio</p> }
                    { errors.email?.type === 'pattern' && <p>Debe tener formato de Email.</p> }

                    <div className="space-y-1">
					    <label className="block mb-1 text-sm ml-1">Contraseña</label>
				        <input type="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" 
                         {
                             ...register("password", {
                                 required: true,
                                 value: input.password,
                                 minLength: 5,
                                })
                            }
                            onChange={ (e) => handleChange(e) }
                         />
				    </div>
                        { errors.password?.type === 'required' && <p>Este campo es obligatorio</p> }
                        { errors.password?.type === 'minLength' && <p>Minimo se requieren 5 caracteres.</p> }		
                    </div>
                    </div>

		            <div className="space-y-1">
			            <div>
				            <button className="flex px-8 py-3 mb-3 font-semibold rounded-md bg-teal-400 text-gray-900 mx-auto">Registrarse</button>
			            </div>

                        <p className="px-2 mr-1 text-sm text-center text-gray-400">¿Ya tienes una cuenta?
                            <Link to='/login'>
				                <a rel="noopener noreferrer" href="#" className="hover:underline text-indigo-400"> Inicia sesión</a>.
                            </Link>
			            </p>
		            </div>
	            </form>
            </div>

            <div className="container-footer mt-auto">
                <Footer />
            </div>
    </div>
  )
 }
