export default function Cards({name, amount, price, description, img, type, brand}){

    /*<p className="flex mx-3 mt-3 text-black text-md font-bold h-12">
    {description}
</p>*/

    
    return(
        <div className="flex flex-col mt-5 items-center rounded-lg shadow-md mx-auto bg-white w-60 ">
            
            <img src={img} alt="img not found" className="h-60 w-full" />
            <h1 className="font-bold text-md p-1 mt-3 mb-2 bg-black text-white">{brand}</h1>

            <div class="flex flex-col h-full w-full space-y-auto">

            <div className='flex flex-col mx-2 mt-5'>
                <span className="text-3xl font-bold text-gray-500">$ {price}</span>
                <a href="#" className="text-white mt-3 mb-2  bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">AÑADIR AL CARRITO</a>
            </div>
            </div>
        </div>

    )
}