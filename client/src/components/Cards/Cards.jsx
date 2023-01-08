export default function Cards({name, amount, price, description, img, type}){

    return(
        <div className="flex flex-col mt-5 items-center rounded-lg shadow-md mx-auto bg-white w-60 h-full">
            <img src={img} alt="img not found" className="h-52 w-52" />
            <h1 className=" flex text-black p-1 mt-3 mb-2 ">{name}</h1>
            
            <div class="flex  flex-col justify-between gap-y-2">
                <span className="text-xl font-bold text-gray-600">$ {price}</span>
                <a href="#" className="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">AÑADIR AL CARRITO</a>
            </div>

            <h3>{type.map(e => e)}</h3>
        </div>

    )
}