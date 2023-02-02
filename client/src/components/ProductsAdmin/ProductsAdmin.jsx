import Reac from 'react';

import { useEffect } from "react";
import { useParams } from "react-router"
import { useDispatch } from "react-redux";
import {  getProducts, deleteProduct } from "../../action";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardsProducts from "../CardsAdmin/CardsProducts";
import Encabezado from "../Encabezado/Encabezado";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import swal from 'sweetalert';

export default function ProductsAdmin(){


    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.allproducts)
  
  

    useEffect(() =>{
        dispatch(getProducts());
      },[dispatch])

    

    return (

        <div >
            <Link to="/paneladmin" className=" border-2 rounded-xl font-bold"><button>Panel admin</button></Link>
             <div>
             <SearchBar/>
             </div>
             <Link to="/productsadmin">
            </Link>
       
            <div className="container  pb-10 bg-gray-300  mx-auto grid grid-cols-1 gap-3 pr-4 pl-4 md:grid-cols-3 my-5  lg:grid-cols-4 xl:grid-cols-4"> 

            {allProducts.length > 0 ?

                allProducts.map(e => {
                    
                    return (
                        
                        <div className=''>
                          
                                <CardsProducts id={e.id} name={e.name} amount={e.amount} brand={e.brand} price={e.price} description={e.description} type={e.type} img={e.img} />
                          
                        </div>)})

                 :
                     <h1 class="text-3xl w-[300px] ml-">Producto no Encontrado</h1>
            } 
                   
            </div>

       </div>

     )  
                
}
