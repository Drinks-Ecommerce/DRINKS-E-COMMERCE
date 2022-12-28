import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

import './NavBar.css';
import './Home.css'


export default function Home(){

    return(
        <div className="contenedor_general">

            <div className="conte_encabezado">
                <div>LOGO</div>
                <div className="logo">
                    SEARCHBAR
                </div>
                <div>LOGIN</div>
                <div>LOGOCARRITO</div>
            </div>

          

            <div className="nav">
                <NavBar/>
            </div>

            <div className="vinos">
                <Link to={"/cards"}>
                    <h1>Vinos</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                         elit. Deserunt porro neque aliquam ex, voluptatem illo debitis inventore quo perspiciatis reiciendis quasi excepturi qui iusto, 
                        eveniet tempore iure dolorem totam veritatis? 
                        Lorem, ipsum dolor sit amet consectetur adipisicing 
                        elit. Perspiciatis officiis voluptates consequatur
                         ex dignissimos sint, consequuntur ullam laborum 
                         culpa voluptas necessitatibus magni, minus
                          obcaecati placeat animi, sapiente doloribus
                           consectetur aspernatur! Lorem, ipsum dolor 
                           sit amet consectetur adipisicing elit. Ab qui
                            in, labore quos est obcaecati quam quod suscipit 
                            tenetur, repudiandae incidunt dolor ullam ipsa,
                             deserunt magnam laborum. Deleniti, distinctio 
                             dolor. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Modi et recusandae aliquam, deserunt
                       expedita repellat unde suscipit rerum, explicabo 
                       dolorum neque accusantium libero quae consectetur
                        impedit ipsum ipsa officia beatae.
                    </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Dignissimos quod illo tempora reprehenderit 
                         iusto cum, atque facere, sed alias excepturi vero 
                         beatae exercitationem quaerat aspernatur deserunt 
                         iure necessitatibus inventore placeat.</p>

                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Dignissimos quod illo tempora reprehenderit 
                         iusto cum, atque facere, sed alias excepturi vero 
                         beatae exercitationem quaerat aspernatur deserunt 
                         iure necessitatibus inventore placeat.</p>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Dignissimos quod illo tempora reprehenderit 
                         iusto cum, atque facere, sed alias excepturi vero 
                         beatae exercitationem quaerat aspernatur deserunt 
                         iure necessitatibus inventore placeat.</p>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Dignissimos quod illo tempora reprehenderit 
                         iusto cum, atque facere, sed alias excepturi vero 
                         beatae exercitationem quaerat aspernatur deserunt 
                         iure necessitatibus inventore placeat.</p>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Dignissimos quod illo tempora reprehenderit 
                         iusto cum, atque facere, sed alias excepturi vero 
                         beatae exercitationem quaerat aspernatur deserunt 
                         iure necessitatibus inventore placeat.</p>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Dignissimos quod illo tempora reprehenderit 
                         iusto cum, atque facere, sed alias excepturi vero 
                         beatae exercitationem quaerat aspernatur deserunt 
                         iure necessitatibus inventore placeat.</p>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Dignissimos quod illo tempora reprehenderit 
                         iusto cum, atque facere, sed alias excepturi vero 
                         beatae exercitationem quaerat aspernatur deserunt 
                         iure necessitatibus inventore placeat.</p>
                </Link>
            </div>
            
            <div className="footer">
                <Footer />
            </div>
            
        </div>
    )
}