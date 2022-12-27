import { Link } from "react-router-dom";

import NavBar from "./NavBar";

import './NavBar.css';
import './Home.css'


export default function Home(){

    return(
        <div className="contenedor_general">
            <div className="nav"><NavBar/></div>
            
            <Link to={"/cards"}>
            <h1>Vinos</h1>
            </Link>
        </div>
    )
}