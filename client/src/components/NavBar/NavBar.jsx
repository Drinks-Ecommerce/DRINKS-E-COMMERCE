import React from "react";





export default function NavBar({
    handlefilterbyvinos,
    handelfilterbycerveza,
    handlewhiskys,
    handlerones
}

){

    

    return(
        <div className="conte_filtros">
           

             <div>
                <select className="filter_vinos" onChange={(e)=>handlefilterbyvinos(e)}>
                    <option disabled selected>VINOS</option>
                    <option value='tinto'>TINTO</option>
                    <option value='blanco'>BLANCO</option>
                    <option value='rosado'>ROSADO</option>
                    <option value='espumoso'>ESPUMOSO</option>
                    <option value='dulce'>DULCE</option>
                </select>
            </div>

            <div>
                <select className="filter_cerveza" onChange={(e)=>handelfilterbycerveza(e)} >
                    <option disabled selected>CERVEZA</option>
                    <option value='comercial'>COMERCIAL</option>
                    <option value='artesanal'>ARTESANAL</option>
                </select>
            </div>

            <div>
                <select className="filter_WHISKYS" onChange={(e)=>handlewhiskys(e)}>
                    <option disabled selected>WHISKYS</option>
                    <option value='escoces'>ESCOCES</option>
                    <option value='irlandes'>IRLANDES</option>
                    <option value='americano'>AMERICANO</option>
                    <option value='japones'>JAPONES</option>
                </select>
            </div>

            <div>
                <select className="filter_rones" onChange={(e)=>handlerones(e)}>
                    <option disabled selected>RONES</option>
                    <option value='rubio'>RUBIO</option>
                    <option value='blanco'>BLANCO</option>
                </select>
            </div>



        </div>
    )

}


