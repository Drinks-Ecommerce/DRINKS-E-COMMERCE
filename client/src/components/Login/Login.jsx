import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../action';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';


import Encabezado from '../Encabezado/Encabezado';
import Footer from '../Footer/Footer';

export default function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: '',
        password: ''
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginUser(input));
        navigate('/')
    }

    return(

        <div className="flex flex-col bg-gray-400 h-screen">

            <div>
                <Encabezado />
            </div>

             <div className="mx-auto mt-4 mb-4 flex flex-col max-w-lg w-96 p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">

	        <div className="mb-8 text-center">
		        <h1 className="my-3 text-4xl font-bold">Iniciar Sesión</h1>
		        <p className="text-sm dark:text-gray-400">Inicia para acceder a tu cuenta</p>
	        </div>

	        <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">

		        <div className="space-y-4">

			        <div>
				        <label for="email" className="block mb-2 text-sm">Correo electrónico</label>
				        <input type="email" name="email" id="email" placeholder="quieropasarelpf@example.com" 
                        className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" onChange={(e) => handleChange(e)}/>
			        </div>
                    
			        <div>
				        <div className="flex justify-between mb-2">
					        <label for="password" className="text-sm">Contraseña</label>
					       
				        </div>

				        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700
                            bg-gray-900 text-gray-100" onChange={(e) => handleChange2(e)}/>
			        </div>
		        </div>

		        <div className="space-y-2">
			        <div>
				        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-teal-400 text-gray-900" onClick={(e) => handleSubmit(e)}>Iniciar</button>
			        </div>
		        </div>
	        </form>

        </div>
            <div className='mt-auto'>
                <Footer />
            </div>
        </div>
  )
}
