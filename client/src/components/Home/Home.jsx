import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, FillUser, getTypes } from "../../action/index";
import Footer from "../Footer/Footer.jsx";
import Encabezado from "../Encabezado/Encabezado";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import Alert from '../PanelAdmin/Alert'
import Caroucel from "../Caroucel/Caroucel.jsx";
import images from "../icons/images";
export default function Home(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [permissions, setPermissions] = useState(window.localStorage.getItem("permissions"));

    const User = useSelector((state) => state.user);
     
     const filter = Object.entries(User)
     
     console.log(filter)
       
    useEffect(() =>{
        dispatch(getTypes());
        dispatch(getProducts());
    },[dispatch]);

    const DeleteUSER = () => {

    console.log("sesion cerrada")
    dispatch(DeleteUser());
    navigate('/')
    
  };


    const renderPermissionConsent = () => (
        <div className="bg-gray-400 opacity-95 fixed inset-0 z-20">
            <div className="flex justify-center mt-36">

                <div className="flex-col justify-center bg-gray-900  border-2  rounded-xl w-1/3">
                    <div className="flex text-lg text-zinc-600 mb-5 mt-4 px-20 justify-center">
                        <img src={images.img11} alt="img" className="h-40 w-40" />
                    </div>

                    <div className="flex text-2xl text-white font-normal  px-16 text-center justify-center">
                        <p>Al ingresar a este sitio usted declara tener la edad legal necesaria para consumir bebidas alcohólicas en su país.</p>
                    </div>

                    <div className="flex px-5 justify-center pt-5 pb-2">
                        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleOK}>
                        Aceptar Términos</button>
                    </div>
                  
                </div>
            </div>
        </div> 
    )

    const handleOK = () => {
        window.localStorage.setItem("permissions", true);
        setPermissions(true);        
    }

    return(

        <div className="flex flex-col contenedor_general h-screen w-screem bg-gray-300">
            

            {/* CONDICIÓN PARA MOSTRAR EL MENSAJE DE CONSENTIMIENTO */}

            {(permissions === null) && renderPermissionConsent()}


            {/* CONTENEDOR PARA EL ENCABEZADO */}

            <div className="conte_encabezado">
                <Encabezado />
            </div>      

            {/* CONTENEDOR PARA EL CARRUCEL SUPERIOR. */}         
              
            <div className="flex justify-center w-full">
                <Caroucel />
            </div>            
            

            {/* CONTENIDO PARA EL PIE DE PAGINA */}

            <div className="container-footer mt-auto">
                <Footer />
            </div>
            {
                Object.entries(User).length > 0 && User.is_banned === true ? <Alert/> : <span></span>
            }

        </div>
    )
}