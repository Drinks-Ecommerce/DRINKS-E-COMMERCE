import React from "react";
import { getProducts, creatProducts } from "../../action";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"

import './ProductCreate.css'


// const validate = (input) => {
//     let errors = {};
//       if(!input.name) {
//         errors.name = 'El nombre es requerido'; //valido con expresiones regulares
//       } else if(!/^[a-zA-Z0-9-() .]+$/.test(input.name)){
//         errors.name = 'Solo se aceptan letras, numeros, guiones medios y parentesis';
//       }
//       else if(input.name.length > 50){
//         errors.name = "El nombre es demasiado largo";
//       };

// // || !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.background_image)
//       if(!input.img.length || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(input.background_img)
//       ){
//         errors.img='invalid URL, debe ser una imagen(png, jpg, gif)';
//       };
      
//       if(input.stock !== Number){
//         errors.stock ='Stock tiene que ser un valor númerico'
//       }
//       if(input.brand !== String){
//         errors.stock ='Solo se permite letras'
//       }
          
//       if(!input.description) {
//         errors.description = 'La descripcion es requerida';
//       } else if (input.description.length > 800) {
//         errors.description = 'La descripcion es muy larga. (Max = 800 caracteres)';
//       };

//       return errors
      
//  }




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
////className="form_container"
  return (
     <div>


      <form  onSubmit={ (event) => handleSubmit(event)}>

      
          <div class="grid gap-5 mb- md:grid-cols-2 ">{/* grid gap-x-8 gap-y-4    */    }

          <h1>CREAR UN PRODUCTO</h1>
              
              <Link to="/">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                  Home
                </button>
              </Link>



        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NAME</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required
            type="text"
            value={input.name}
            name="name"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
                {
                  errors.name &&  <p>{errors.name}</p>
                  
                } 
        </div>




        <div>
            <label for="stock" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">STOCK</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text" 
            value={input.stock}
            name="stock"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
               {
                  errors.stock && (
                    <p>{errors.stock}</p>
                  )
                } 
        </div>




        <div>
            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BRAND</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text"
            value={input.brand}
            name="brand"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
               {
                  errors.brand && <p>{errors.brand}</p>   
               }
        </div>




        <div>
            <label for="calification" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CALIFICACION</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text"
            value={input.calification}
            name="calification"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
               {
                  errors.calification && (
                    <p>{errors.calification}</p>
                  )
                }
        </div>




        <div>
            <label for="origin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ORIGIN</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text"
            value={input.origin}
            name="origin"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
               {
                  errors.origin && <p>{errors.origin}</p>
                  
                }
        </div>




        <div>
            <label for="discount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DISCOUNT</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text"
            value={input.discount}
            name="discount"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
               {
                  errors.discount && 
                    <p>{errors.discount}</p>
                  
                }
        </div>




        <div>
            <label for="alcohol" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ALCOHOL</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text"
            value={input.alcohol}
            name="alcohol"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
               {
                  errors.alcohol && 
                    <p>{errors.alcohol}</p>
                  
                }
        </div>
           


        <div>
            <label for="comments" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">COMMENTS</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text"
            value={input.comments}
            name="comments"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
               {
                  errors.comments && 
                    <p>{errors.comments}</p>
                  
                }
        </div>





        <div>
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PRICE</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text"
            value={input.price}
            name="price"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
              {
                  errors.price && 
                  <p>{errors.price}</p>
                  
              }
        </div>




        <div>
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DESCRIPCION</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text"
            value={input.description}
            name="description"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
           {
                errors.description && 
                <p>{errors.description}</p>
                  
            }
        </div>


        <div>
            <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">IMAGEN</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text"
            value={input.img}
            name="img"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
            {
                errors.img && 
                <p>{errors.img}</p>
               
            }
        </div>



        <div>
            <label for="types" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CREAR TIPO</label>
            <input   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-3/5 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required
            type="text"
            value={input.tpyes}
            name="types"
            onChange={(event) => handleChange(event)}
            > 
            </input>
            <span className="form_line"></span>
            {
                errors.tipo && 
                <p>{errors.tipo}</p>
               
            }
        </div>




            <button  type="submit">
              Crear Producto
            </button>

            

          </div>

      </form>
    
    </div>
  );
};
