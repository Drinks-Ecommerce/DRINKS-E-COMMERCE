import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../action/index";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";

import '../NavBar/NavBar.css';
import './Home.css'

export default function Home(){
   
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.allproducts)

    useEffect(() =>{
        dispatch(getProducts())
      },[dispatch])

    return(
        <div className="contenedor_general">

            {/* CONTENIDO PARA EL ENCABEZADO */}

            <div className="conte_encabezado">

                <div>
                    LOGO
                </div>

                <div className="logo">
                    SEARCHBAR
                </div>

                <div>
                    LOGIN
                </div>

                <div>
                    LOGOCARRITO
                </div>


            </div>

        {/* CONTENIDO PARA EL NAVBAR */}

            <div className="nav">
                <NavBar/>
            </div>

        {/* CONTENIDO PARA EL CUALQUIER COMPONENTE */}
            <div className="vinos">
                <Link to={"/cards"}>
                    <h1>Vinos</h1>
                </Link>

                {
                allProducts?.map(e => {
                   return (
                    <div>
                        <Cards name={e.name} amount={e.amount} price={e.price} description={e.description} type={e.type} img={e.img} />
                    </div>
                   )
                })
            }
            </div>

            {/* CONTENIDO PARA EL FOOTER */}

            <div className="container-footer">
                <Footer />
            </div>
            
        </div>
    )
}
