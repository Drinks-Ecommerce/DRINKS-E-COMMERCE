import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

import './NavBar.css';
import './Home.css'


export default function Home(){

    return(
        <div className="contenedor_general">

            <div className="container-navbar">
                <NavBar/>
            <Link to={"/cards"}>
            <h1>Vinos</h1>
            </Link>
            </div>

            <div className="container-footer">
                <Footer />
            </div>
        </div>
    )
}