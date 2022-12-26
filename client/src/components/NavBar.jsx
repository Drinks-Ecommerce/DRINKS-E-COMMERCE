import React from "react";
import { Link } from "react-router-dom";



export default function NavBar(){

    

    return(
        <div className="conte_filtros">
           

             <div>
                <select className="filter_vinos" >
                
                    <option value='tinto'>TINTO</option>
                    <option value='blanco'>BLANCO</option>
                    <option value='rosado'>ROSADO</option>
                    <option value='espumoso'>ESPUMOSO</option>
                    <option value='dulce'>DULCE</option>
                </select>
            </div>

            <div>
                <select className="filter_cerveza" >
                    <option value='comercial'>COMERCIAL</option>
                    <option value='artesanal'>ARTESANAL</option>
                </select>
            </div>

            <div>
                <select className="filter_WHISKYS" >
                    <option value='escoces'>ESCOCES</option>
                    <option value='irlandes'>IRLANDES</option>
                    <option value='americano'>AMERICANO</option>
                    <option value='japones'>JAPONES</option>
                </select>
            </div>

            <div>
                <select className="filter_rones" >
                    <option value='rubio'>RUBIO</option>
                    <option value='blanco'>BLANCO</option>
                </select>
            </div>



        </div>
    )

}


