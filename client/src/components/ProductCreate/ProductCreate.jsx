import { NavLink, useHistory } from "react-router-dom";
import React from "react";
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
      if(!input.imagen.length || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(input.background_image)
      ){
        errors.imagen='invalid URL, debe ser una imagen(png, jpg, gif)';
      };


      if(!input.description) {
        errors.description = 'La descripcion es requerida';
      } else if (input.description.length > 800) {
        errors.description = 'La descripcion es muy larga. (Max = 800 caracteres)';
      };

      
      
}




export default function ProductCreate(){
          
  return (
    <div className="contenedorgeneral" >


      <form className="forms" onSubmit={ (event ) => handleSubmit(event)}>

      <h1 className="form_title">CREAR UN PRODUCTO</h1>
              
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
                  errors.name && (
                    <p>{errors.name}</p>
                  )
                }
            </div>



          <div   className="form_group">
              
              <input 
              className="form_input"
              type="text"
              placeholder=" "
              value={input.amount}
              name="amount"
              onChange={(event) => handleChange(event)}
              /> 
              <label className="form_label">AMOUNT:</label>
              <span className="form_line"></span> 
              {
                errors.amount && (
                <p>{errors.amount}</p>
                  )
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
                  errors.price && (
                  <p>{errors.price}</p>
                  )
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
                errors.description && (
                <p>{errors.description}</p>
                )   
            }
        </div>



        <div className="form_group">
            
            <input 
            className="form_input"
            type="text"
            placeholder=" "
            value={input.imagen}
            name="imagen"
            onChange={(event) => handleChange(event)}
            ></input>
            <label className="form_label">IMAGEN:</label>
            <span className="form_line"></span>
            {
                errors.imagen && (
                <p>{errors.imagen}</p>
               )
            }
        </div>


        <div className="form_group">
            
            <input 
            className="form_input"
            type="text"
            placeholder=" "
            value={input.tipo}
            name="tipo"
            onChange={(event) => handleChange(event)}
            ></input>
            <label className="form_label">CREAR TIPO:</label>
            <span className="form_line"></span>
            {
                errors.tipo && (
                <p>{errors.tipo}</p>
               )
            }
        </div>



        
        

          </div>


      </form>
      
     
    </div>
  );
};



/* https://www.pcworld.es/cmsdata/features/3799767/star_wars_thumb1200_16-9.jpg */