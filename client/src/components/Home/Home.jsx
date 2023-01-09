import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../action/index";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import Encabezado from "../Encabezado/Encabezado";
import { useState } from "react";

import '../NavBar/NavBar.css';
import './Home.css'
import Caroucel from "../Caroucel/Caroucel.jsx";


export default function Home(){   

    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.allproducts)

    console.log(allProducts)
    useEffect(() =>{
        dispatch(getProducts());
      },[dispatch])

    return(

        <div className="contenedor_general bg-gray-300">

            {/* CONTENIDO DEL ENCABEZADO */}
            
            <div className="conte_encabezado">
                <Encabezado />
            </div>                        

            <div className="flex justify-center h-full w-full">
                <Caroucel />
            </div>            

            <div className="container pb-10 bg-gray-300 mx-auto grid grid-cols-1 gap-3 pr-4 pl-4 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5"> {
                allProducts?.map(e => {
                   return (
                       <div>
                       <Cards name={e.name} amount={e.amount} brand={e.brand} price={e.price} description={e.description} type={e.type} img={e.img} />
                        </div>
                    )})}
            </div>

            {/* CONTENIDO PARA EL FOOTER */}

            <div className="container-footer">
                <Footer />
            </div>
            
        </div>
    )
}