import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import './NavBar.css';
import './Home.css'

export default function Home(){

    return(
        <div className="contenedor_general">

            <div className="conte_encabezado"> <div>LOGO</div><div className="logo">SEARCHBAR</div>
            <div>LOGIN</div> <div>LOGOCARRITO</div>
            </div>
            <div className="nav"><NavBar/></div>
                
            

            <div className="vinos"><Link to={"/cards"}><h1>Vinos</h1></Link></div>
                
            <div className="footer">
                <Footer />
            </div>      
                
            
            



            
            
        </div>
    )
}