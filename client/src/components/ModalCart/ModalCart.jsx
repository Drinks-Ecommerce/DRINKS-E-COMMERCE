import React from 'react';
import images from '../icons/images';
import './ModalCart.css'
import { postInCart, postInCartStorage } from '../../action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const ModalCart = ({ open, onClose, idProduct, idUser, name, amount, price, img, type, brand}) => {

  if (!open) return null;

    let [number, setNumber] = useState(null);
    let  [actualizar, setactualizar] = useState(0)
    const User = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      setNumber(0);
    }, [])
    
    const handleInput = (event) => {
        setNumber((event.target.value))
    }

    const renderToast = (data) => {
      return toast.success(data, {
        duration: 700,
        position: 'top-left',
        style: {
          border: '1px solid #007132',
          padding: '16px',
          color: '#007132',
          fontSize: "20px"
        },
      })
    }

    const handleClick = (e) => {

      e.preventDefault();

        
      if(Object.entries(User).length === 0){
                
        const obj = {
            name: name,                       // Nombre del Producto.
            totalValue: price * number,       // Precio de todo/s dependiendo la cantidad.
            quantity: number,                 // Cantidad de productos.
            priceProduct: price,              // Precio del producto.
            img: img,                         // Imagen del producto.
            type: type,                       // Tipo del producto.
            brand: brand,                     // Marca del producto.
        }

        if(!localStorage.getItem("productos-carrito")){
          let carrito = [];
          carrito.push(obj);
          let transaccion = JSON.stringify(carrito);
          localStorage.setItem("productos-carrito", transaccion);
          return toast.success('Se agregó al carrito con éxito.', {
            duration: 700,
            position: 'top-left',
            style: {
              border: '1px solid #007132',
              padding: '16px',
              color: '#007132',
              fontSize: "20px"
            },
          })
        }

      // Si el 'Local Storage' del carrito ya tiene al menos un producto, solo se agrega uno nuevo.
  
      else{
          const carrito = JSON.parse(localStorage.getItem("productos-carrito"));

          for(let i=0; i<carrito.length; i++){
            if(carrito[i].name === name){
              return toast.error('El producto ya está en su carrito.', {
                duration: 700,
                position: 'top-left',
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                  fontSize: "20px"
                },
              })                          
            }
          }

          carrito.push(obj);
          let transaccion = JSON.stringify(carrito);
          localStorage.setItem("productos-carrito", transaccion);        
          toast.success('Se agregó al carrito con éxito.', {
            duration: 700,
            position: 'top-left',
            style: {
              border: '1px solid #007132',
              padding: '16px',
              color: '#007132',
              fontSize: "20px"
            },
          })            
          
      }
    }

    else{
        const obj = {
            productId: idProduct,
            userId: idUser,
            quantity: Number(number)
        }
        
        dispatch(postInCart(obj)).then(response => renderToast(response.data));
        
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
            <button onClick={(e) => handleClick(e)}>Aceptar</button>
          </button>
          
        </div>
      </div>
    </div>

    <Toaster />
    </div>
  )
}

export default ModalCart;