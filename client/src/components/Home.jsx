import { Link } from "react-router-dom";


export default function Home(){

    return(
        <div>
            <Link to={"/cards"}>
            <h1>Vinos</h1>
            </Link>
        </div>
    )
}