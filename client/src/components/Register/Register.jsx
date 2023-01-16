import React from 'react'
import Encabezado from '../Encabezado/Encabezado'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Register(){

    const [input, setInput] = useState({
        name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    });

    const handleName = (e) => {
        input.name([e.input.name] =[e.target.value])
    }

    const handleLastName = (e) => {
        console.log(input.last_name)
    }

    const handleUsername = (e) => {
        console.log(input.username)
    }

    const handleEmail = (e) => {
        console.log(input.email)
    }

    const handlePassword = (e) => {
        console.log(input.password)
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

	            <form novalidate="" action="" className="space-y-5 ng-untouched ng-pristine ng-valid">

                    <div className='flex flex-row justify-between mx-8'>


                <div className='flex flex-col'>

				    <div className="space-y-1 mb-4">
					        <label for="name" className="block mb-1 text-sm ml-1">Nombre</label>
				            <input type="text" name="text" id="text" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                             text-gray-100" onChange={(e) => handleName(e)} />
				    </div>

                    <div className="space-y-1 mb-4">
					    <label for="text" className="block mb-1 text-sm ml-1">Apellido</label>
				        <input type="text" name="text" id="password" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" onChange={(e) => handleLastName(e)} />
				    </div>

                    <div className="space-y-1 mb-2">
					    <label for="text" className="block mb-1 text-sm ml-1">Nombre de usuario</label>
				        <input type="text" name="text" id="password" placeholder="" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" onChange={(e) => handleUsername(e)} />
				    </div>
                </div>

                <div className='flex flex-col'>

                    <div className="space-y-1 mb-4">
				            <label for="email" className="block mb-1 text-sm ml-1">Correo electrónico</label>
				            <input type="email" name="email" id="email" placeholder="pasarelpf@example.com" className="w-full px-3 py-2 border rounded-md border-gray-700
                             bg-gray-900 text-gray-100" onChange={(e) => handleEmail(e)} />
			        </div>

                    <div className="space-y-1">
					    <label for="password" className="block mb-1 text-sm ml-1">Contraseña</label>
				        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900
                         text-gray-100" onChange={(e) => handlePassword(e)} />
				    </div>
		
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
