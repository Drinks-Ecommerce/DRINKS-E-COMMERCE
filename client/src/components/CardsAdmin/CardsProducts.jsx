import React from 'react';
import { deleteProduct, getProducts } from "../../action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function CardsProducts({id, name, price, description, img, type, brand}){

    /*<p className="flex mx-3 mt-3 text-black text-md font-bold h-12">
    {description}
</p>*/
     const dispatch = useDispatch()

     const handleDelete = async () =>{
        if(window.confirm("¿Esta seguro?")){
            await dispatch(deleteProduct(id))
            await dispatch(getProducts())
        }
     }
    

       return(
        <div className="flex flex-col mt-5 items-center rounded-lg shadow-md mx-auto bg-white w-60 ">
            {/* <button onClick={handleDelete} class="bg-gray-400 font-bold radius">X</button> */}
            <img src={img} alt="img not found" className="h-60 w-full" />
            <h1 className="font-bold text-md p-1 mt-3 mb-2 bg-black text-white">{name}</h1>

            <div class="flex flex-col h-full w-full space-y-auto">

            <div className='flex flex-col mx-2 mt-5'>
                <span className="text-3xl font-bold text-gray-500">$ {price} </span>
                <Link to={`/products/edit/${id}`}>
                <a className="text-white mt-3 mb-2  bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">EDITAR</a>
                </Link>
                <a className="text-white mt-3 mb-2  bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleDelete} >ELIMINAR</a>
            </div>
            </div>
        </div>

    )

}