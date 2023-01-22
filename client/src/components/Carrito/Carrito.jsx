import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { getInCart } from "../../action";
import { useDispatch } from "react-redux";
import ScrollCart from "../ScrollCart/ScrollCart";
import { render } from "react-dom";

export default function Carrito({set, open2}){

  // Estado para manejar el carrito del 'Local Storage'.
  const [carrito, setCarrito] = useState(JSON.parse(window.localStorage.getItem("productos-carrito")));

  // Estado para manejar el carrito del user activo.
  const allProductsInCart = useSelector((state) => state.allProductsCart);

  const [open, setOpen] = useState({open2});
  const User = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInCart(User.id));
  }, []);

  const SUMA = () => {

    let suma = 0;

    carrito?.map(e => {
      suma = suma + e.totalValue;
    })

    return suma;
  }
  
  const handleClick = (e) => {

    e.preventDefault();

    if(Object.entries(User).length === 0){
      alert("¡Entrada no permitida! Por favor, inicia sesión.");
    }

    if(Object.entries(User).length > 0 && Object.entries(allProductsInCart.productcarts).length === 0){
      alert("¡El carrito está vacío!");
    }

    else{
      alert("Loading... Payment");
    }

  }

  const renderBannerStock = () => {
    return (
    <section className="flex items-center h-full sm:p-16 bg-gray-900 text-gray-100">
	    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 text-gray-600">
			    <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
			    <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
			    <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
			    <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
		    </svg>
	    	<p className="text-2xl">Carrito vacío</p>
	  </div>
  </section>
    )
  }

  return (

    <div className={`${open ? "w-1/4" : "w-0"} fixed right-0  h-screen top-0 text-3xl bg-gray-900 shadow-md z-40`}>
      
      <button className="ml-2 mt-3" onClick={() => set(!open)}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
       </svg>
     </button>

      <div className="ml-3 mt-2 text-gray-100 text-center">
        <h1>Carrito</h1>
      </div>

       <div className="h-2/3 mt-2 bg-gray-900 overflow-scroll overflow-x-hidden shadow-xl px-1">

      {
        
        (Object.entries(User).length === 0) ? (!window.localStorage.getItem("productos-carrito")) ? (renderBannerStock()) : (<ScrollCart cart={carrito} />)
  
        : 
          
       
        (Object.entries(allProductsInCart).length === 0) ? (renderBannerStock()) :(Object.entries(allProductsInCart.productcarts).length === 0) ? (renderBannerStock()) :
        (<ScrollCart cart={allProductsInCart.productcarts}/>)
      }

      </div>

        <div className="space-y-1 mr-3 mt-10 mb-3 text-right text-3xl">
		      Total: <span className="text-3xl font-semibold">
            {Object?.entries(User).length === 0 ? "$" + SUMA() : !(allProductsInCart.total) ? "$0" : "$" + (allProductsInCart.total)}
                 </span>
	      </div>

	    <div className="flex justify-end space-x-4">
		    <button type="button" className="px-2 mr-3 py-2 border rounded-md bg-indigo-400 text-gray-900 border-indigo-400" onClick={handleClick}>
			    <span className="sr-only sm:not-sr-only">Comprar</span>
		    </button>
	    </div>
  </div>
  )
}
    

