import { useDispatch, useSelector } from "react-redux";
import { postInCart, postWishlist } from "../../action";
import { Link } from 'react-router-dom';
import { useState } from "react";
import images from '../icons/images.js';
import toast, { Toaster } from 'react-hot-toast';


export default function Cards({id, name, stock, amount, price, description, img, type, brand, calification}){

	const dispatch = useDispatch();
	const User = useSelector((state) => state.user);
	

	const renderToast = (data) => {

		if(data === "Product uploaded successfully")
			return toast.success(data, {
				duration: 600,
				position: 'top-left',
				style: {
					border: '1px solid #007132',
					padding: '10px',
					color: '#007132',
					fontSize: "20px"
				},
		});

		if(data === "Product already exists in the cart"){
			return toast.error(data, {
				duration: 600,
				position: 'top-left',
				style: {
					border: '1px solid #d72e22',
					padding: '10px',
					color: '#d72e22',
					fontSize: "20px"
				}
			})
		}


	}

	function handleChange(e) {
		e.preventDefault();
		if(Object.entries(User).length === 0) {
		 	return toast.error("It's not registered", {
				duration: 600,
				position: 'top-left',
				style: {
					border: '1px solid #d72e22',
					padding: '10px',
					color: '#d72e22',
					fontSize: "20px"
				}
			})
		} else {
			const obj = {
				userId: User.id,
				productId: id
			}
			dispatch(postWishlist(obj));
			return toast.success("Product added successfully", {
				duration: 600,
				position: 'top-left',
				style: {
					border: '1px solid #d72e22',
					padding: '10px',
					color: '#d72e22',
					fontSize: "20px"
				}
			})
		};
	};

	const handleClick = (e) => {

		e.preventDefault();

		if(Object.entries(User).length === 0){
                
            const obj = {
                name: name,                       	// Nombre del Producto.
                quantity: 1,                		 // Cantidad de productos.
				totalValue: price,					// Precio total dependiendo la
                priceProduct: price,              	// Precio del producto.
                img: img,                         	// Imagen del producto.
                type: type,                       // Tipo del producto.
                brand: brand,                     // Marca del producto.
            }

            if(!localStorage.getItem("productos-carrito")){
              let carrito = [];
              carrito.push(obj);
              let transaccion = JSON.stringify(carrito);
              localStorage.setItem("productos-carrito", transaccion);
              return renderToast("Product uploaded successfully");
            }

          // Si el 'Local Storage' del carrito ya tiene al menos un producto, solo se agrega uno nuevo.
      
          else{
              const carrito = JSON.parse(localStorage.getItem("productos-carrito"));

              for(let i=0; i<carrito.length; i++){
                if(carrito[i].name === name){
					return renderToast("Product already exists in the cart");
                }
              }

              carrito.push(obj);
              let transaccion = JSON.stringify(carrito);
              localStorage.setItem("productos-carrito", transaccion);        
              return renderToast("Product uploaded successfully")          
          }
        }
    
        else{
            const obj = {
                productId: id,
                userId: User.id,
            }
            
            dispatch(postInCart(obj)).then(response => renderToast(response.data))
            
          }       
          
    }


    return(
		<div class="mx-auto mt-2">
			<div className=" bg-white flex flex-col justify-between shadow-md rounded-lg w-[250px] h-[500px] border-gray-700">
				<Link to={`/cards/${id}`}>
					<img class="rounded-t-lg p-8 h-[300px] bg-cover" src={img} alt="product image" />
        		</Link>
				<div class="px-5 pb-5">
					<a href="#">
                    	<h3 class="text-orange-300 font-semibold text-xl tracking-tight">{brand}</h3>
						<h3 class="text-gray-900 font-semibold text-xl tracking-tight">{name}</h3>
					</a>
					<div class="flex items-center mt-2.5 mb-5">
						<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
							</path>
						</svg>
						<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
							</path>
						</svg>
						<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
							</path>
						</svg>
						<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
							</path>
						</svg>
						<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
							</path>
						</svg>
						<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{calification}</span>
						<button onClick={e => handleChange(e)}>
							<img src={images.img21} className='h-5 w-5' />
						</button>
					</div>
					<div class="flex items-center justify-between ">
						<span class="text-3xl font-bold text-gray-900">${price}</span>
						<button onClick={(e) => handleClick(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</button>
					</div>
				</div>
			</div>
			<Toaster />
		</div>
	)
}