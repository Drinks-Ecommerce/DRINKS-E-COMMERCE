import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../action';
import { useSelector } from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { useForm } from "react-hook-form";


import Encabezado from '../Encabezado/Encabezado';
import Footer from '../Footer/Footer';

export default function Login(){

    //validations
    const { register, handleSubmit ,formState: { errors } } = useForm();
    console.log("register",register)
    console.log("errors",errors)
    
    const User = useSelector((state) => state.user)
    console.log(User)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const onSubmit = evento =>{
        console.log(evento)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
          })
    }

    const handleChange2 = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        console.log(errors.email)
        if(errors.email || errors.password ){
            alert("Contraseña invalida, consulte los requerimientos minimos");
        }else{
            dispatch(LoginUser(input));
            navigate('/')
        }
    }

    return(

        <div className="flex flex-col bg-gray-400 h-screen">

            <div>
                <Encabezado />
            </div>

             <div className="mx-auto mt-4 mb-4 flex flex-col max-w-lg w-96 p-6 rounded-md sm:p-6 bg-gray-900 text-gray-100">

	        <div className="mb-4 text-center">
		        <h1 className="my-3 text-4xl font-bold underline">Iniciar Sesión</h1>
	        </div>

	        <form onFocus={handleSubmit(onSubmit)}  action="" className="space-y-12 ng-untouched ng-pristine ng-valid">

		        <div className="space-y-4">

			        <div>
				        <label for="email" className="block mb-2 text-sm">Correo electrónico</label>
				        <input type="email" name="email" id="email" placeholder="quieropasarelpf@example.com" 
                        {
                            ...register("email", {
                                pattern: {
                                        value: /^[A-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[A-Z]{2,4}$/i,
                                        message: "El formato no es correcto"
                                },
                                required: {
                                        value: true,
                                        message: "Complete primero su Email"
                                }
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" onSelect={(e) => handleChange(e)} required/>
			        </div>
                            { errors.email && <span><br/>{errors.email.message} </span>}
			        <div>
				        <div className="flex justify-between mb-2">
					        <label for="password" className="text-sm">Contraseña</label>
					       
				        </div>

				        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700
                            bg-gray-900 text-gray-100" 
                            {
                                ...register("password", {
                                    minLength: {
                                        value: 5,
                                        message: "La contraseña tiene que tener al menos 5 caracteres"
                                    },
                                    required: {
                                            value: true
                                    }
                                })
                            }
                            onSelect={(e) => handleChange2(e)}
                            />
			        </div>
                            {
                                errors.password && <span>{errors.password.message}</span>
                            }
		        </div>

		        <div className="space-y-4">
			        <div>
				        <button type="button" className="w-full px-2 py-2 font-semibold rounded-md bg-teal-400 text-gray-900" 
                        onClick={(e) => handleSubmit2(e)}>Iniciar</button>
			        </div>
                    <p className="px-2 mr-1 text-sm text-center text-gray-400">¿No tienes una cuenta todavía?
                        <Link to='/register'>
				            <a rel="noopener noreferrer" href="#" className="hover:underline text-indigo-400"> Registrarse</a>.
                        </Link>
			        </p>
		        </div>
	        </form>

        </div>
            <div className='mt-auto'>
                <Footer />
            </div>
        </div>
  )
}
