import React from "react";
import { useDispatch } from "react-redux";
import { filterByTypes, getProducts, filterByPriceOrder, getAllBrands } from "../../action";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import images from "../icons/images"
import '../SearchBar/SearchBar.jsx'

export default function Encabezado(){

	const [open, setOpen] = useState(false);
	const [carrito, setCarrito] = useState(JSON.parse(window.localStorage.getItem("productos-carrito")));
	const [suma, setSuma] = useState(0);

	const dispatch = useDispatch()

	const SUMA = () => {

		let suma = 0;

		carrito?.map(e => {
			suma = suma + Number(e.price);
		})

		setSuma(suma);
	}

	
	useEffect(() => {
		SUMA();
	},[])
	

  	return(

    <header className= "bg-gray-800 text-gray-100">

		<div className="flex justify-between h-16 mx-5">

        <div className="flex">
            <img src={images.img4} className="w-25 h-25" alt="" />
        </div>

		<div className="flex items-center md:space-x-4">
				<SearchBar/>
				{/* <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-700 text-gray-100 focus:bg-gray-900" /> */}
		</div>

        <div className="flex items-center md:space-x-2 mx-0">

		<button type="button" className="hidden px-6 py-2 font-semibold rounded md:block bg-teal-400 text-gray-600">Registrar</button>
        <button type="button" className="hidden px-6 py-2 font-semibold rounded md:block bg-teal-400 text-gray-600">Ingresar</button>

         <img src={images.img9} className="hidden md:block w-10 h-10 cursor-pointer" alt="img" onClick={() => setOpen(!open)} />
		    <button title="Open menu" type="button" className="p-4 md:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
				    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			    </svg>
			</button>

        </div>

		</div>
			<div className={`${!open && "hidden"} bg-gray-500/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-10`}></div>

		<div className={`${open ? "w-1/4" : "w-0"} fixed right-0  h-screen top-0 text-3xl bg-gray-100 shadow-md z-40`}>


			<button className="ml-2 mt-3 bg-black" onClick={() => setOpen(!open)}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<div className="ml-5 mt-3 text-black">
				<h1>Carrito</h1>
			</div>
			
			<div className='h-3/5 mt-5 bg-white overflow-scroll overflow-x-hidden shadow-xl'>
				
				{
					
					!window.localStorage.getItem("productos-carrito") ? 
								<div className='text-white'>
									<h1>¡NO HAY STOCK!</h1>
								</div>
							 : 
					
					carrito?.map(e => {
						

						return(
							<div className='flex pl-1 flex-row mt-3 text-white text-left shadow-xl'>

								<img src={e.img} alt="" className="h-20 w-20"/>

								<div className="flex flex-col">

									<div className='mt-1'>
										<h1 className="text-xl text-black">{e.brand}</h1>
										<h1 className='text-xl text-black'>{e.name}</h1>
									</div>

									<div className='mt-5 mb-1'>
										<h1 className="text-3xl text-black">$ {e.price}</h1>
									</div>
								</div>

							</div>
						)})
				}
			</div>

			<h1 className="ml-3 mt-10 text-black">TOTAL: $ {suma}</h1>
		</div>


	<div class="flex justify-center bg-black pb-3 pt-3 mt-2">
           
	<ul class="flex">

  		<li class="mr-6">
		  	<Link to={'/vino'}>
    			<option  className="text-white text-lg font-bold hover:text-blue-500 cursor-pointer">VINOS</option>
			</Link>
  		</li>

  		<li class="mr-6">
		  	<Link to={'/whisky'}>
    			<option className="text-white text-lg font-bold hover:text-blue-500 cursor-pointer">WHISKYS</option>
			</Link>
  		</li>

  		<li class="mr-6">
			<Link to={'/ron'}>
   				<option className="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">RONES</option>
			</Link>
  		</li>

  		<li class="mr-6">
			<Link to={'/cerveza'}>
    			<option value='cerveza' class="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">CERVEZAS</option>
			</Link>
  		</li>

  		<li class="mr-6">
			<Link to={'/espumante'}>
    			<option className="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">ESPUMANTES</option>
			</Link>
  		</li>

  		<li class="mr-6">
			<Link to={'/gin'}>
    			<option className="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">GINS</option>
			</Link>
  		</li>

  		<li class="mr-6">
			<Link to={'/vermouth'}>
    			<option className="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">VERMÚS</option>
			</Link>
  		</li>

  		<li class="mr-6">
			<Link to={'/cristaleria'}>
    			<option value='cristaleria' className="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">CRISTALERÍA</option>
			</Link>
 		</li>

  		<li class="">
			<Link to={'/delicatessen'}>
    			<option value='delicatessen' class="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">DELICATESSEN</option>
			</Link>
  		</li>
	</ul>   
	</div>
	</header>
  	)
}