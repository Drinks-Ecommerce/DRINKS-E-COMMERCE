import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { getByName, getByBrand } from "../../action/index.js"

export default function SearchBar(){
    const dispatch = useDispatch();
    const [ name, setName ] = useState("");
/*     const [ brand, setBrand ] = useState(""); */

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
/*         setBrand(e.target.value); */
    }
    const handleClick = (event) => {
        event.preventDefault();
        //name seria el estado local
        dispatch(getByName(name));
/*         dispatch(getByBrand(brand)) */
        setName('')
/*         setBrand('') */
    };
    return (
    <form onSubmit={(event) => handleClick(event)}>
    <div >
        <input type="text" placeholder="BUSCAR PRODUCTO" onChange={(e) => handleInputChange(e)}/>
        <button type="submit" >BUSCAR 🔎</button>
    </div>
    </form>
    );

}

