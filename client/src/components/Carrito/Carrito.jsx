import { useState } from "react";
import { useEffect } from "react";

export default function Carrito({set, open2}){

  const [carrito, setCarrito] = useState(JSON.parse(window.localStorage.getItem("productos-carrito")));
  const [suma, setSuma] = useState(0);
  const [open, setOpen] = useState({open2});

  return (

    <div className={`${open ? "w-1/4" : "w-0"} fixed right-0  h-screen top-0 text-3xl bg-gray-100 shadow-md z-40`}>
      

   <button className="ml-2 mt-3 bg-black" onClick={() => set(!open)}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
       </svg>
     </button>
    <div className="ml-5 mt-3 text-black">
     <h1>Carrito</h1>
   </div>


   <div className="h-3/5 mt-5 bg-white overflow-scroll overflow-x-hidden shadow-xl">

     {!window.localStorage.getItem("productos-carrito") ? (

       <div className="text-white">
           <h1>¡NO HAY STOCK!</h1>
       </div>
       ) : 
       
       (carrito?.map((e) => {
             return (
               <div className="flex pl-1 flex-row mt-3 text-white text-left shadow-xl">
                   <img src={e.img} alt="" className="h-20 w-20" />

                   <div className="flex flex-col">
                     <div className="mt-1">
                         <h1 className="text-xl text-black">{e.brand}</h1>
                         <h1 className="text-xl text-black">{e.name}</h1>
                     </div>

                     <div className="mt-5 mb-1">
                         <h1 className="text-3xl text-black">$ {e.price}</h1>
                     </div>
                     
         </div>
               </div>
           );
           })
     )}
   </div>

         <h1 className="ml-3 mt-10 text-black">TOTAL: $ {suma}</h1>
</div>
  )
}
    

