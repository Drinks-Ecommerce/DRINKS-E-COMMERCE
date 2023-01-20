import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { getInCart } from "../../action";
import { useDispatch } from "react-redux";
import ScrollCart from "../ScrollCart/ScrollCart";

export default function Carrito({set, open2}){

  // Estado para manejar el carrito del 'Local Storage'.
  const [carrito, setCarrito] = useState(JSON.parse(window.localStorage.getItem("productos-carrito")));

  // Estado para manejar el carrito del user activo.
  const allProductsInCart = useSelector((state) => state.allProductsCart.productcarts);

  const [open, setOpen] = useState({open2});
  const User = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInCart(User.id));
  }, [])
  
  return (

    <div className={`${open ? "w-1/4" : "w-0"} fixed right-0  h-screen top-0 text-3xl bg-gray-900 shadow-md z-40`}>
      
      <button className="ml-2 mt-3" onClick={() => set(!open)}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
       </svg>
     </button>

      <div className="ml-3 mt-3 text-gray-100">
        <h1>Carrito</h1>
      </div>

       <div className="h-2/3 mt-2 bg-gray-900 overflow-scroll overflow-x-hidden shadow-xl px-1">

      {

        // Si no hay un usuario registrado.
        (Object.entries(User).length === 0) ? 

          // Si el carrito del 'local Storage' está vacío.
          (!window.localStorage.getItem("productos-carrito")) ? (

            <div className="text-white">
              <h1>¡NO HAY STOCK!</h1>
            </div>
            ) : 

            // El carrito del 'Local Storage' no está vacío, al menos tiene un producto.
            (<ScrollCart cart={carrito} />)
            
            :
            
            //El usuario tiene al menos un producto en su carrito. 
            (<ScrollCart cart={allProductsInCart}/>)
        }
        </div>

    
   
</div>
  )
}
    

