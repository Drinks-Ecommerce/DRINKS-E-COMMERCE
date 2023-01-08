import React from "react";
import { useDispatch } from "react-redux";
import { filterByTypes, getProducts } from "../../action";

export default function NavBar(){

   const dispatch = useDispatch()
  

    function handleFilterByType(e){
        e.preventDefault()
        dispatch(filterByTypes(e.target.value))
       
      }

    function handleclick(e){
        e.preventDefault();
        dispatch(getProducts())
    }

    //className="filter_vinos"

    return(
        <div class="grid grid-cols-5 gap-4 bg-black py-3 pb-3 mt-20 fixed top-0 left-0 right-0 drop-shadow-lg flex">
           
             <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 cursor-pointer text-center "  onChange={(e)=>handleFilterByType(e)}>
                    <option disabled selected>VINOS</option>
                    <option value='vino'>TODOS LOS VINOS</option>
                </select>
            </div>

            <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 text-center cursor-pointer" onChange={(e)=>handleFilterByType(e)} >
                    <option disabled selected>CERVEZA</option>
                    <option value='cerveza'>TODAS LAS CERVEZAS</option>
                </select>
            </div>

            <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 text-center cursor-pointer" onChange={(e)=>handleFilterByType(e)}>
                    <option disabled selected>WHISKYS</option>
                    <option value='whisky'>TODOS LOS WHISKYS</option>
                </select>
            </div>

            <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 text-center cursor-pointer" onChange={(e)=>handleFilterByType(e)}>
                    <option disabled selected>RONES</option>
                    <option value='ron'>TODOS LOS RONES</option>
                </select>
            </div>

            <div>
               <button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block bg-teal-400 text-gray-600  text-center"  onClick={(e)=>{handleclick(e)}}>Cargar</button>
            </div>    



        </div>
    )

}




