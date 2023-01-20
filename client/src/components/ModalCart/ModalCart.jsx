import React from 'react';
import images from '../icons/images';
import './ModalCart.css'
import { postInCart } from '../../action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ModalCart = ({ open, onClose, idProduct, idUser, name, amount, price, img, type, brand}) => {

  if (!open) return null;

    let [number, setNumber] = useState(3);
    const User = useSelector((state) => state.user);

    const dispatch = useDispatch();
    
    const handleInput = (event) => {
        const name = event.target.name
        setNumber((event.target.value))
    }

    const handleClick = () => {
        
        if(Object.entries(User).length === 0){
                
            const obj = {
                name: name,
                amount: amount,
                price: price,
                img: img,
                type: type,
                brand: brand
            }
                
            if(!localStorage.getItem("productos-carrito")){
                let carrito = [];
                carrito.push(obj);
                let transaccion = JSON.stringify(carrito);
                localStorage.setItem("productos-carrito", transaccion);
            }
        
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

            console.log(obj)

                dispatch(postInCart(obj));
        }
            
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