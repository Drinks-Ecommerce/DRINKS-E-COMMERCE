import React from 'react'
import Encabezado from '../Encabezado/Encabezado'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Register(){


    //validations
    const { register, handleSubmit ,formState: { errors } } = useForm();

    const [input, setInput] = useState({
        name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    });

    const onSubmit = evento =>{
        console.log(evento)
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

	            <form  onClick={handleSubmit(onSubmit)}  action="" className="space-y-5 ng-untouched ng-pristine ng-valid">

                    <div className='flex flex-row justify-between mx-8'>


                <div className='flex flex-col'>

				    <div className="space-y-1 mb-4">
					        <label for="text" className="block mb-1 text-sm ml-1">Nombre</label>
				            <input type="text" name="text" id="text" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                             text-gray-100" 
                             {
                                ...register("name", {
                                    required: {
                                        value: true,
                                        message: "Nombre obligatorio"
                                    },
                                })
                            }/>
				    </div>
                    {
                                errors.name && <span>{errors.name.message}</span>
                    }

                    <div className="space-y-1 mb-4">
					    <label for="text" className="block mb-1 text-sm ml-1">Apellido</label>
				        <input type="text" name="text" id="password" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" 
                         {
                            ...register("lastname", {
                                required: {
                                    value: true,
                                    message: "Apellido obligatorio"
                                },
                            })
                        }
                         />
				    </div>
                    {
                                errors.lastname && <span>{errors.lastname.message}</span>
                    }

                    <div className="space-y-1 mb-2">
					    <label for="text" className="block mb-1 text-sm ml-1">Nombre de usuario</label>
				        <input type="text" name="text" id="password" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" 
                         {
                            ...register("username", {
                                required: {
                                    value: true,
                                    message: "Nombre de usuario obligatorio"
                                },
                                minLength: {
                                    value: 3,
                                    message: "La contraseña tiene que tener al menos 3 caracteres"
                                },
                                maxLength: {
                                    value: 50,
                                }
                            })
                        }/>
				    </div>
                    {
                                errors.username && <span>{errors.username.message}</span>
                    }
                </div>

                <div className='flex flex-col'>

                    <div className="space-y-1 mb-4">
				            <label for="email" className="block mb-1 text-sm ml-1">Correo electrónico</label>
				            <input type="email" name="email" id="email" placeholder="pasarelpf@example.com" className="w-full px-3 py-2 border rounded-md border-gray-700
                             bg-gray-900 text-gray-100"
                             {
                                ...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email obligatorio"
                                    },
                                    pattern: {
                                            value: /^[A-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[A-Z]{2,4}$/i,
                                            message: "El formato no es correcto"
                                    }
                                })
                            }/>
			        </div>
                    {
                                errors.email && <span>{errors.email.message}</span>
                    }

                    <div className="space-y-1">
					    <label for="password" className="block mb-1 text-sm ml-1">Contraseña</label>
				        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100"
                         {
                            ...register("password", {
                                required: {
                                    value: true,
                                    message: "Contraseña obligatoria"
                                },
                                minLength: {
                                    value: 5,
                                    message: "La contraseña tiene que tener al menos 5 caracteres"
                                }
                            })
                        }
                         />
				    </div>
                    {
                                errors.password && <span>{errors.password.message}</span>
                    }
		
                </div>
                    </div>

		            <div className="space-y-1">
			            <div>
				            <button type="button" className="flex px-8 py-3 mb-3 font-semibold rounded-md bg-teal-400 text-gray-900 mx-auto">Registrarse</button>
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
