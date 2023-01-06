// import { React  } from "react";
// import { useDispatch } from "react-redux";

// export default function SearchBar(){
//     const dispatch = useDispatch();
//     const [ name, setName ] = useState("");

//     function handleInputChange(e){
//         e.preventDefault();
//         setName(e.target.value);
//     }
//     const handleClick = (event) => {
//         event.preventDefault();
//         //name seria el estado local
//         dispatch(getByName(name));
//         setName('')
//     };
//     <form onSubmit={(event) => handleClick(event)}>
//     <div >
//         <input type="text" placeholder="BUSCAR PAIS..." onChange={(e) => handleInputChange(e)}/>
//         <button type="submit" >BUSCAR 🔎</button>
//     </div>
//     </form>
// }
