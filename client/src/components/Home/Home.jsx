import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../action/index";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import Encabezado from "../Encabezado/Encabezado";
import { useState } from "react";
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css';
import './Home.css' 
import Caroucel from "../Caroucel/Caroucel.jsx";
import images from "../icons/images";


export default function Home(){

            /* CÓDIGO PARA LAS CARTAS - SE USARÁ DESPUÉS.
                
            <div className="container pb-10 bg-gray-300 mx-auto grid grid-cols-1 gap-3 pr-4 pl-4 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5"> {
                allProducts?.map(e => {
                return (
                    <div>
                        <Link to={'/cards/' + e.id}>
                        <Cards name={e.name} amount={e.amount} brand={e.brand} price={e.price} description={e.description} type={e.type} img={e.img} />
                        </Link>
                    </div>
                    )})}
                    </div>
            */


    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.allproducts)
    const [permisos, setPermisos] = useState(false)

    useEffect(() =>{

        if(window.localStorage.getItem("permisos")){
            setPermisos(true)
        }
        
        dispatch(getProducts());
      },[])

      const handleOK = (e) => {
        window.localStorage.setItem("permisos", false);
        setPermisos(true);
      }

    return(

        <div className="contenedor_general bg-gray-300">

            {
                permisos == false &&

                
                <div className="bg-gray-800 opacity-90 fixed inset-0 z-10">
                <div className="flex h-screen justify-center items-center">
                    <div className="flex-col justify-center bg-gray-100 border-2 border-black-400 rounded-xl w-1/3">
                        <div className="flex text-lg text-zinc-600 mb-5 px-20 justify-center">
                            <img src={images.img11} alt="img" className="h-40 w-40" />
                        </div>

                        <div className="flex text-2xl text-black font-normal  px-16 text-center justify-center">
                            <p>
                            Al ingresar a este sitio usted declara tener la edad legal necesaria para consumir bebidas alcohólicas en su país.
                            </p>
                        </div>

                        <div className="flex px-5 justify-center pt-5 pb-2">
                        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleOK}>
                            Aceptar Términos
                        </button>
                        </div>
                    </div>
                </div>
            </div> 
            
            }

            <div className="conte_encabezado">
                <Encabezado />
            </div>               
              
            <div className="flex justify-center h-full w-full">
                <Caroucel />
            </div>            
            

            {/* CONTENIDO PARA EL FOOTER */}

            <div className="container-footer">
                <Footer />
            </div>
        
        </div>
    )
}