import { useEffect } from "react";
import { createRoutesFromElements, useParams } from "react-router"
import { useDispatch } from "react-redux";
import { filterByTypes, getProducts, filterByPriceOrder, getByBrand, getAllBrands } from "../../action";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import Encabezado from "../Encabezado/Encabezado";
import Footer from "../Footer/Footer";
import { useState } from "react";

export default function Products(){

    let {id} = useParams();
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.allproducts)
    const allBrands = useSelector((state) => state.allBrands)

    useEffect(() =>{
            dispatch(filterByTypes(id))

            setTimeout(() => {
                dispatch(getAllBrands())
            }, 300);
    },[id])
    
      const handleBrands = (e) => {

        console.log(e.target.checked)
        dispatch(getByBrand(e.target.value));
      }

    return (

        <div className='products'>


        <div className="conte_encabezado">
                <Encabezado />
        </div>   

        <div className="flex flex-row mx-4">

            <div className="flex w-1/4 bg-gray-200 my-5  justify-center">
                <div className="filtros flex flex-col bg-black text-white  h-8 w-3/4 mx-auto mt-8 px-3">
                    <div className="w-full  text-center text-xl ">
                        Filtrar Búsqueda
                    </div>

                    <div>

                    <div class="accordion mt-3 w-full" id="accordionExample">

                        <div class="accordion-item bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="headingOne">
                                <button class="accordion-button collapsed relative flex items-center w-full py-4  px-5 text-base text-gray-800 text-left bg-white
                                               border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                               aria-expanded="false" aria-controls="collapseOne"> MARCAS
                                </button>
                            </h2>

                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body py-4 px-5 text-zinc-500">
            {
                allBrands?.map(e => {
                    return (
                        <div  className="text-black">
                             <label>
                                <input type="checkbox" value={e} className="mx-1.5" onClick={handleBrands} />
                                {e}
                            </label>
                        </div>
                    )
                })
            }
                                </div>
                            </div>
                        </div>
                    
                        <div class="accordion-item bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="headingThree"> 
                                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
                                               rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                               aria-expanded="false" aria-controls="collapseTwo"> ORIGEN
                                </button>
                            </h2>

                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body py-4 px-5">
                                </div>
                            </div>
        </div>
</div>
                    </div>
                </div>
            </div>
                           
            <div className="container  pb-10 bg-gray-300  mx-auto grid grid-cols-1 gap-3 pr-4 pl-4 md:grid-cols-3 my-5  lg:grid-cols-4 xl:grid-cols-4"> 

            {

                allProducts?.map(e => {
                    return (
                        
                        <div className=''>
                            <Link to={'/cards/' + e.id}>
                                <Cards name={e.name} amount={e.amount} brand={e.brand} price={e.price} description={e.description} type={e.type} img={e.img} />
                            </Link>
                        </div>)})}
            </div>
                



        </div>
                <Footer />
        </div>
    )
}
