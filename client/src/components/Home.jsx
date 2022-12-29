import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

import './NavBar.css';
import './Home.css'

export default function Home(){

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
            </div>

            {/* CONTENIDO PARA EL FOOTER */}

            <div className="container-footer">
                <Footer />
            </div>
            
        </div>
    )
}
