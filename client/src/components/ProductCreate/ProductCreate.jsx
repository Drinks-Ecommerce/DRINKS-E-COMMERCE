import React from "react";
import { getProducts, creatProducts } from "../../action";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"

import './ProductCreate.css'


const validate = (input) => {
    let errors = {};
      if(!input.name) {
        errors.name = 'El nombre es requerido'; //valido con expresiones regulares
      } else if(!/^[a-zA-Z0-9-() .]+$/.test(input.name)){
        errors.name = 'Solo se aceptan letras, numeros, guiones medios y parentesis';
      }
      else if(input.name.length > 50){
        errors.name = "El nombre es demasiado largo";
      };

// || !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.background_image)
      if(!input.img.length || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(input.background_img)
      ){
        errors.img='invalid URL, debe ser una imagen(png, jpg, gif)';
      };
      
      if(input.stock !== Number){
        errors.stock ='Stock tiene que ser un valor númerico'
      }
      if(input.brand !== String){
        errors.stock ='Solo se permite letras'
      }
          
      if(!input.description) {
        errors.description = 'La descripcion es requerida';
      } else if (input.description.length > 800) {
        errors.description = 'La descripcion es muy larga. (Max = 800 caracteres)';
      };

      return errors
      
 }




export default function ProductCreate(){
  
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allproducts);
  const [ errors, setErrors ] = useState({})

  const [ input, setInput ] = useState({
       name: "",
       stock: "",
       price: "",
       description: "",
       brand: "",
       discount: "",
       origin: "",
       alcohol: "",
       comments: "",
       calification: "",
       img: "",
  })

  useEffect(() =>{
    dispatch(getProducts())
  }, [dispatch])

  function handleChange(event){
    event.preventDefault()
    setInput({
      ...input,
      [event.target.name] : event.target.value
    })
    setErrors(validate({
        ...input,
        [event.target.name] : event.target.value
    }))
  }

  function handleSubmit(event){
    event.preventDefault()
    dispatch(creatProducts(input));
    alert("Producto Creado")
     setInput({
       name: "",
       stock: "", //
       price: "",//
       description: "", //
       brand: "", //
       discount: "", //
       origin: "",//
       alcohol: "",//
       comments: "",
       calification: "",//
       img: "", //
       types: ""
     })
  }

  return (
     <div>


      <form className="forms" onSubmit={ (event) => handleSubmit(event)}>

      <h1>CREAR UN PRODUCTO</h1>
              
              <Link to="/home">
                <button className="button_home">
                  Home
                </button>
                 </Link>


          <div className="form_container">


            <div className="form_group">
                
                <input
                className="form_input"
                 type="text"
                 placeholder=" "
                value={input.name}
                name="name"
                onChange={(event) => handleChange(event)}
                ></input>
                <label className="form_label">NAME:</label>
                <span className="form_line"></span>
                {
                  errors.name &&  <p>{errors.name}</p>
                  
                } 
            </div>

            <div className="form_group">
                
                <input
                className="form_input"
                 type="text"
                 placeholder=" "
                value={input.stock}
                name="stock"
                onChange={(event) => handleChange(event)}
                ></input>
                <label className="form_label">STOCK:</label>
                <span className="form_line"></span>
               {
                  errors.stock && (
                    <p>{errors.stock}</p>
                  )
                } 
            </div>  

            <div className="form_group">
                
                <input
                className="form_input"
                 type="text"
                 placeholder=" "
                value={input.brand}
                name="brand"
                onChange={(event) => handleChange(event)}
                ></input>
                <label className="form_label">BRAND:</label>
                <span className="form_line"></span>
               {
                  errors.brand && <p>{errors.brand}</p>   
               }
            </div> 

            <div className="form_group">
                
                <input
                className="form_input"
                 type="text"
                 placeholder=" "
                value={input.calification}
                name="calification"
                onChange={(event) => handleChange(event)}
                ></input>
                <label className="form_label">CALIFICATION:</label>
                <span className="form_line"></span>
               {
                  errors.calification && (
                    <p>{errors.calification}</p>
                  )
                }
            </div> 

            <div className="form_group">
                
                <input
                className="form_input"
                 type="text"
                 placeholder=" "
                value={input.origin}
                name="origin"
                onChange={(event) => handleChange(event)}
                ></input>
                <label className="form_label">ORIGIN:</label>
                <span className="form_line"></span>
               {
                  errors.origin && <p>{errors.origin}</p>
                  
                }
            </div> 

            <div className="form_group">
                
                <input
                className="form_input"
                 type="text"
                 placeholder=" "
                value={input.discount}
                name="discount"
                onChange={(event) => handleChange(event)}
                ></input>
                <label className="form_label">DISCOUNT:</label>
                <span className="form_line"></span>
               {
                  errors.discount && 
                    <p>{errors.discount}</p>
                  
                }
            </div> 

            <div className="form_group">
                
                <input
                className="form_input"
                 type="text"
                 placeholder=" "
                value={input.alcohol}
                name="alcohol"
                onChange={(event) => handleChange(event)}
                ></input>
                <label className="form_label">ALCOHOL:</label>
                <span className="form_line"></span>
               {
                  errors.alcohol && 
                    <p>{errors.alcohol}</p>
                  
                }
            </div> 

            <div className="form_group">
                
                <input
                className="form_input"
                 type="text"
                 placeholder=" "
                value={input.comments}
                name="comments"
                onChange={(event) => handleChange(event)}
                ></input>
                <label className="form_label">COMMENTS:</label>
                <span className="form_line"></span>
               {
                  errors.comments && 
                    <p>{errors.comments}</p>
                  
                }
            </div> 

            




          <div className="form_group">
              
              <input
              className="form_input" 
              type="text"
              placeholder=" "
              value={input.price}
              name="price"
              onChange={(event) => handleChange(event)}
              ></input>
              <label className="form_label">PRECIO:</label>
              <span className="form_line"></span>
              {
                  errors.price && 
                  <p>{errors.price}</p>
                  
              }
          </div>




        <div className="form_group">
           
            <textarea
            className="form_input" 
            type="text"
            placeholder=" "
            value={input.description}
            name="description"
            onChange={(event) => handleChange(event)}
            ></textarea>
            <label className="form_label">DESCRIPCION:</label>
            <span className="form_line"></span>
           {
                errors.description && 
                <p>{errors.description}</p>
                  
            }
        </div>



        <div className="form_group">
            
            <input 
            className="form_input"
            type="text"
            placeholder=" "
            value={input.img}
            name="img"
            onChange={(event) => handleChange(event)}
            ></input>
            <label className="form_label">IMAGEN:</label>
            <span className="form_line"></span>
            {
                errors.img && 
                <p>{errors.img}</p>
               
            }
        </div>


        <div className="form_group">
            
            <input 
            className="form_input"
            type="text"
            placeholder=" "
            value={input.tpyes}
            name="types"
            onChange={(event) => handleChange(event)}
            ></input>
            <label className="form_label">CREAR TIPO:</label>
            <span className="form_line"></span>
            {
                errors.tipo && 
                <p>{errors.tipo}</p>
               
            }
        </div>



        
        

          </div>
   
       <button type="submit">Crear Producto</button>

      </form>
      
     
    </div>
  );
};
