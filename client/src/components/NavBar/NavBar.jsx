import React from "react";
import { useDispatch } from 'react-redux';
import { filterByTypes } from '../../action/index.js';

export default function NavBar(){

const dispatch = useDispatch();

function handleFilterByVino(e) {
    dispatch(filterByTypes(e.target.value));
}

    return(
        <div class="grid grid-cols-4 gap-4 bg-black py-3 pb-3 mt-20 fixed top-0 left-0 right-0 drop-shadow-lg flex">
           
             <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 cursor-pointer text-center "  onChange={(e)=>handleFilterByVino(e)}>
                    <option disabled selected>VINOS</option>
                    <option value='vino'>TODOS LOS VINOS</option>
                </select>
            </div>

            <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 text-center cursor-pointer" onChange={(e)=>handelfilterbycerveza(e)} >
                    <option disabled selected>CERVEZA</option>
                    <option value='cervezas'>TODAS LAS CERVEZAS</option>
                </select>
            </div>

            <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 text-center cursor-pointer" onChange={(e)=>handlewhiskys(e)}>
                    <option disabled selected>WHISKYS</option>
                    <option value='wiskys'>TODOS LOS WHISKYS</option>
                </select>
            </div>

            <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 text-center cursor-pointer" onChange={(e)=>handlerones(e)}>
                    <option disabled selected>RONES</option>
                    <option value='rones'>TODOS LOS RONES</option>
                </select>
            </div>



        </div>
    )

}




