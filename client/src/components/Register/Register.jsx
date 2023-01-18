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

    const handleChange = (e) => {
        setInput({...input, 
            [e.target.name]: [e.target.value]
        })
    }

    // const handleLastName = (e) => {
    //     console.log(input.last_name)
    // }

    // const handleUsername = (e) => {
    //     console.log(input.username)
    // }

    // const handleEmail = (e) => {
    //     console.log(input.email)
    // }

    // const handlePassword = (e) => {
    //     console.log(input.password)
    // }


    return (

        <div className="flex flex-col bg-gray-400 h-screen">

            <div>
                <Encabezado />
            </div>

            <div className="mx-auto mt-4 mb-4 flex flex-col max-w-3xl w-4/5 p-6 rounded-md sm:p-6 bg-gray-900 text-gray-100 ">

	            <div className="mb-4 text-center">
		            <h1 className="my-3 text-4xl font-bold underline">Registrarse</h1>
	            </div>

	            <form  onFocus={handleSubmit(onSubmit)}  action="" className="space-y-5 ng-untouched ng-pristine ng-valid">

                    <div className='flex flex-row justify-between mx-8'>


                    <div className='flex flex-col'>

				    <div className="space-y-1 mb-4">
					        <label for="name" className="block mb-1 text-sm ml-1">Nombre</label>
				            <input type="text" name="name"  placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 
                             text-gray-100" 
                             onChange={(e) => handleChange(e)}
                             {...register("name", {
                                required: true,
                                value: input.name })}
                             />
				    </div>
                    {
                                errors.name?.type === 'required' && <p>Este campo es obligatorio</p>
                    }

                    <div className="space-y-1 mb-4">
					    <label for="text" className="block mb-1 text-sm ml-1">Apellido</label>
				        <input type="text" name="last_name" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" 
                         onChange={(e) => handleChange(e)}
                         {
                            ...register("last_name", {
                                required: {
                                    value: true,
                                    message: "Es obligatorio ingresar apellido"
                                },
                                minLength: {
                                    value: 3,
                                    message: "3 caracteres minimo"
                                }
                            })
                         }/>
				    </div>
                    {
                                errors.last_name && <span>{errors.last_name.message}</span>
                    }

                    <div className="space-y-1 mb-2">
					    <label for="text" className="block mb-1 text-sm ml-1">Nombre de usuario</label>
				        <input type="text" name="username"  placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" 
                         onChange={(e) => handleChange(e)}
                         {
                            ...register("username", {
                                required: {
                                    value: true,
                                    message: "Es obligatorio ingresar un nombre de usuario"
                                },
                                minLength: {
                                    value: 5,
                                    message: "5 caracteres minimo"
                                }
                            })
                         }
                         />
				    </div>
                    {
                                errors.username && <span>{errors.username.message}</span>
                    }
                </div>

                <div className='flex flex-col'>

                    <div className="space-y-1 mb-4">
				            <label for="email" className="block mb-1 text-sm ml-1">Correo electrónico</label>
				            <input type="email" name="email"  placeholder="pasarelpf@example.com" className="w-full px-3 py-2 border rounded-md border-gray-700
                             bg-gray-900 text-gray-100" 
                             onChange={(e) => handleChange(e)}
                             {
                                ...register("email", {
                                    pattern: {
                                            value: /^[A-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[A-Z]{2,4}$/i,
                                            message: "El formato no es correcto"
                                    },
                                    required: {
                                            value: true,
                                            message: "Ingrese su Email"
                                    }
                                })
                            }/>
			        </div>
                    {
                                errors.email && <span>{errors.email.message}</span>
                    }

                    <div className="space-y-1">
					    <label for="password" className="block mb-1 text-sm ml-1">Contraseña</label>
				        <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" 
                         onChange={(e) => handleChange(e)}
                         {
                            ...register("password", {
                                minLength: {
                                    value: 5,
                                    message: "La contraseña tiene que tener al menos 5 caracteres"
                                },
                                required: {
                                        value: true,
                                        message: "Contraseña obligatoria"
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
