import React from "react";
import { useDispatch } from "react-redux";
import { filterByTypes, getProducts, filterByPriceOrder } from "../../action";
import SearchBar from "../SearchBar/SearchBar";
import { useScrollPosition } from "../hooks/useScrollPosition";

import images from "../icons/images"
import '../SearchBar/SearchBar.jsx'

export default function Encabezado(){

	function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	}

	const scrollPosition = useScrollPosition()
	const dispatch = useDispatch()
  
    function handleFilterByType(e){
        e.preventDefault()
        dispatch(filterByTypes(e.target.value))   
    }
    
	function handleFilterByPrice(e){
		e.preventDefault()
		dispatch(filterByPriceOrder(e.target.value))
	}

    function handleclick(e){
        e.preventDefault();
        dispatch(getProducts())
    }

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
        <img src={images.img9} className="hidden md:block w-10 h-10" alt="img" />

		    <button title="Open menu" type="button" className="p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
				    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			    </svg>
		</button>

        </div>
	</div>

	<div class="flex justify-center bg-black pb-3 pt-3 mt-2">
           
	<ul class="flex">

  		<li class="mr-4">
    		<option value='vino' className="text-white text-lg font-bold hover:text-blue-500 cursor-pointer" onClick={(e)=>handleFilterByType(e)}>VINOS</option>
  		</li>

  		<li class="mr-4">
    		<option value='whisky' class="text-white text-lg font-bold hover:text-blue-500 cursor-pointer" onClick={(e)=>handleFilterByType(e)}>WHISKYS</option>
  		</li>

  		<li class="mr-4">
   			 <option value='ron' class="text-white text-lg font-bold hover:text-blue-800 cursor-pointer" onClick={(e)=>handleFilterByType(e)}>RONES</option>
  		</li>

  		<li class="mr-4">
    		<option value='cerveza' class="text-white text-lg font-bold hover:text-blue-800 cursor-pointer" onClick={(e)=>handleFilterByType(e)}>CERVEZAS</option>
  		</li>

  		<li class="mr-4">
    		<option value='espumante' class="text-white text-lg font-bold hover:text-blue-800" onClick={(e)=>handleFilterByType(e)}>ESPUMANTES</option>
  		</li>

  		<li class="mr-4">
    		<option value='gin' class="text-white text-lg font-bold hover:text-blue-800" href="#" onClick={(e) => handleFilterByType(e)}>GINS</option>
  		</li>

  		<li class="mr-4">
    		<option value='vermouth' class="text-white text-lg font-bold hover:text-blue-800" href="#" onClick={(e) => handleFilterByType(e)}>VERMÚS</option>
  		</li>

  		<li class="mr-4">
    		<option value='cristaleria' class="text-white text-lg font-bold hover:text-blue-800" href="#" onClick={(e) => handleFilterByType(e)}>CRISTALERÍA</option>
 		</li>

  		<li class="mr-4">
    		<option value='delicatessen' class="text-white text-lg font-bold hover:text-blue-800" href="#" onClick={(e) => handleFilterByType(e)}>DELICATESSEN</option>
  		</li>

		<li class="mr-4">
			<option value="min" className="text-white text-lg font-bold hover:text-blue-500 cursor-pointer" onClick={(e)=>handleFilterByPrice(e)}>MAX</option>
		</li>

		<li class="mr-4">
    		<option value="max" className="text-white text-lg font-bold hover:text-blue-500 cursor-pointer" onClick={(e)=>handleFilterByPrice(e)}>MIN</option>
		</li>

  		<li class="">
    		<section class="text-white text-lg font-bold hover:text-blue-800 cursor-pp" onClick={(e)=>{handleclick(e)}}>TODOS</section>
  		</li>
	</ul>   
	</div>
	</header>
  	)
}