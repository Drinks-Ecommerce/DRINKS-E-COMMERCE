import React from "react";





export default function NavBar({
    handlefilterbyvinos,
    handelfilterbycerveza,
    handlewhiskys,
    handlerones
}

){

    //className="filter_vinos"

    return(
        <div class="grid grid-cols-4 gap-4 bg-black py-3 pb-3 mt-20 fixed top-0 left-0 right-0 drop-shadow-lg flex">
           
           

             <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 cursor-pointer text-center "  onChange={(e)=>handlefilterbyvinos(e)}>
                    <option disabled selected>VINOS</option>
                    <option value='tinto'>TINTO</option>
                    <option value='blanco'>BLANCO</option>
                    <option value='rosado'>ROSADO</option>
                    <option value='espumoso'>ESPUMOSO</option>
                    <option value='dulce'>DULCE</option>
                </select>
            </div>

            <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 text-center cursor-pointer" onChange={(e)=>handelfilterbycerveza(e)} >
                    <option disabled selected>CERVEZA</option>
                    <option value='comercial'>COMERCIAL</option>
                    <option value='artesanal'>ARTESANAL</option>
                </select>
            </div>

            <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 text-center cursor-pointer" onChange={(e)=>handlewhiskys(e)}>
                    <option disabled selected>WHISKYS</option>
                    <option value='escoces'>ESCOCES</option>
                    <option value='irlandes'>IRLANDES</option>
                    <option value='americano'>AMERICANO</option>
                    <option value='japones'>JAPONES</option>
                </select>
            </div>

            <div>
                <select class="bg-wh-100 rounded-[12px] text-lg text-red-700 text-center cursor-pointer" onChange={(e)=>handlerones(e)}>
                    <option disabled selected>RONES</option>
                    <option value='rubio'>RUBIO</option>
                    <option value='blanco'>BLANCO</option>
                </select>
            </div>



        </div>
    )

}


