import React from 'react';
import images from '../icons/images';
import './ModalCart.css'
import { postInCart } from '../../action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const ModalCart = ({ open, onClose, idProduct, idUser, name, amount, price, img, type, brand}) => {

  if (!open) return null;

    let [number, setNumber] = useState(null);
    const User = useSelector((state) => state.user);
    const MSG = useSelector((state) => state.msg);

    const dispatch = useDispatch();
    
    const handleInput = (event) => {
        const name = event.target.name
        setNumber((event.target.value))
    }


    const handleClick = () => {
        
        if(Object.entries(User).length === 0){
                
            const obj = {
                name: name,                       // Nombre del Producto.
                totalValue: price * number,           // Precio de todo/s dependiendo la cantidad.
                quantity: number,                 // Cantidad de productos.
                priceProduct: price,              // Precio del producto.
                img: img,                         // Imagen del producto.
                type: type,                       // Tipo del producto.
                brand: brand,                     // Marca del producto.
            }
                
            // Si el 'Local Storage' del carrito está vacío, se crea la variable y se almacena el primer producto.
            if(!localStorage.getItem("productos-carrito")){
                let carrito = [];
                carrito.push(obj);
                let transaccion = JSON.stringify(carrito);
                localStorage.setItem("productos-carrito", transaccion);
            }

            // Si el 'Local Storage' del carrito ya tiene al menos un producto, solo se agrega uno nuevo.
        
            else{
                const carrito = JSON.parse(localStorage.getItem("productos-carrito"));
                carrito.push(obj);
                let transaccion = JSON.stringify(carrito);
                localStorage.setItem("productos-carrito", transaccion);        
            }
        }
    
        else{
            const obj = {
                productId: idProduct,
                userId: idUser,
                quantity: Number(number)
            }
            
            dispatch(postInCart(obj));
        }

        onClose(!open)

    }

  return(

    <div onClick={onClose} className='overlay'>

      <div onClick={(e) => { e.stopPropagation()}} className='modalContainer' >
        <img src={images.img11} alt='/' className='w-40 h-40' />

        <div className='modalRight'>

          <p className='closeBtn cursor-pointer' onClick={onClose}>X</p>

          <div className='content'>
           <h1 className='text-xl font-bold'>Por favor, elija la cantidad:</h1>
           <label for="tentacles">Number of products:</label>

           <input type="text" value={number} onChange={handleInput}></input>
          <button>
            <button onClick={handleClick}>Aceptar</button>
          </button>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default ModalCart;