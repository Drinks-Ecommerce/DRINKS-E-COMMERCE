import React from "react";
import { useDispatch } from "react-redux";
import { filterByTypes, getProducts } from "../../action";
import SearchBar from "../SearchBar/SearchBar";

import images from "../icons/images"
import SearchBar from "../SearchBar/SearchBar"

export default function Encabezado(){

	const dispatch = useDispatch()
  
    function handleFilterByType(e){
        e.preventDefault()
        dispatch(filterByTypes(e.target.value))   
    }

    function handleclick(e){
        e.preventDefault();
        dispatch(getProducts())
    }

  	return(

    <header className=" bg-gray-800 text-gray-100">

		<div className="flex justify-between h-16 mx-5">

        <div className="flex">
            <img src={images.img4} className="w-25 h-25" alt="" />
        </div>

		<div className="flex items-center md:space-x-4">
			<div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
						<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-100">
							<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
						</svg>
					</button>
				</span>
				<SearchBar/>
			</div>
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

  		<li class="mr-8">
    		<option value='delicatessen' class="text-white text-lg font-bold hover:text-blue-800" href="#" onClick={(e) => handleFilterByType(e)}>DELICATESSEN</option>
  		</li>

  		<li class="">
    		<section class="text-white text-lg font-bold hover:text-blue-800 cursor-pp" onClick={(e)=>{handleclick(e)}}>TODOS</section>
  		</li>
	</ul>   
	</div>
	</header>
  	)
}
