import React from "react";
import { getTypes, creatProducts, updateProduct, getDetail } from "../../action";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate  } from "react-router-dom";
import images from "../icons/images";
import swal from 'sweetalert';

 
 const validate = (input) => {

  

    let errors = {};
      if(!input.name) {
        errors.name = 'El nombre es requerido'; //valido con expresiones regulares
      }else if(input.name.length > 50){
        errors.name = "El nombre es demasiado largo";
      }
      

      if(!input.img)
      {
        errors.img='Es requerido una imagen';
      };
      if(!input.origin){
        errors.origin='Es requerido el origen';
      };
      if(!input.alcohol){
        errors.alcohol='Es requerido el grado de Alcohol';
      };
      if(!input.stock){
        errors.stock ='Es requerido la cantindad de Productos'
      }
      if(!input.brand){
        errors.brand ='Es requerido el nombre de la Marca'
      }
      if(!input.price){
        errors.price ='Es requerido el Precio'
      }
      if(!input.calification){
        errors.calification ='Es requerido la Califacación'
      } 
      if(!input.discount){
        errors.discount ='Es requerido el Descuento'
      } 
      if(!input.types){
        errors.types ='Es requerido el Tipo ej: Vino, Wiskhy'
      }        
      if(!input.description) {
        errors.description = 'La descripcion es requerida';
      } else if (input.description.length > 800) {
        errors.description = 'La descripcion es muy larga. (Max = 800 caracteres)';
      };

      return errors
      
}  



export default function ProductsEdit(){
  
  const dispatch = useDispatch();
  const { id } = useParams();
  const allTypes = useSelector((state) => state.typesproducto)
  const allProducts = useSelector((state) => state.allproducts)
  const getProductsId = useSelector((state) => state.details)
  const [ errors, setErrors ] = useState({})
  const navigate = useNavigate()
  const [ input, setInput ] = useState({
       name: "",
       stock: "",
       price: "",
       description: "",
       brand: "",
       discount: "",
       origin: "",
       alcohol: "",
       img: "",
       types: ""
  })

  useEffect(()=>{
    dispatch(getDetail(id))
    dispatch(getTypes())
  }, [id])



  useEffect(() =>{
    setInput({
       name: getProductsId?.map(e=> e.name).toString(),
       stock: getProductsId?.map(e=> e.stock).toString(),
       price: getProductsId?.map(e => e.price).toString(),
       description: getProductsId?.map(e => e.description).toString(),
       brand: getProductsId?.map(e => e.brand).toString(),
       discount: getProductsId?.map(e => e.discount).toString(),
       origin: getProductsId?.map(e => e.origin).toString(),
       alcohol: getProductsId?.map(e => e.alcohol).toString(),
       img: getProductsId?.map(e => e.img).toString(),
       types: getProductsId?.map(e => e.type).toString()
    })
  },[getProductsId])
     
   
  
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

  const handleSubmit= async (event)=>{
    event.preventDefault()
    if(input.name === "" || input.stock === "" || input.img === "" || input.brand === '' || input.alcohol === '' || input.description === "" || input.discount === "" || input.origin === ""){ 
      swal("Falta completar el formulario") 
    }else{
    dispatch(updateProduct(id, input));
    swal("Producto Editado Exitosamente")
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
     navigate("/paneladmin")
  }
 }    
////className="form_container"
  return (
     <div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-3 bg-gray-800">
    <div class="md:col-span-1">
      <div class="px-5 sm:px-0 ">
      <div class="flex justify-center w-full">
        <img src={images.img4}/>
      </div>
        <div class="flex justify-center">
          <img src={images.img11} />
        </div>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-1">
      <form onSubmit={handleSubmit}>
        <div class="overflow-hidden shadow sm:rounded-md ">
          <div class="bg-white px-7 py-9 sm:p-6 bg-gray-400 ">
            <div class="grid grid-cols-5 gap-6 ">
              <div class="col-span-4 sm:col-span-3">
                <label class="block text-sm font-bold text-black-700">NAME</label>
                <input type="text" value={input.name} name="name" class="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(event) => handleChange(event)} required></input>
                {errors.name && <p>{errors.name}</p>}
              </div>

              <div class="col-span-4 sm:col-span-3">
                <label class="block text-sm font-bold text-black-700">Types</label>
                <select  value={input.types} name="types" class="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(event) => handleChange(event)} required>
                  {
                    allTypes?.map(t =>{
                      return(
                      <option>{t}</option>
                      )
                    })
                  }
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label class="block text-sm font-bold text-black-700">BRAND</label>
                <input type="text" value={input.brand} name="brand" class="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(event) => handleChange(event)} required></input>
                {errors.brand && <p>{errors.brand}</p>}
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label class="block text-sm font-bold text-black-700">DESCRIPTON</label>
                <textarea type="text" value={input.description} name="description" class="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(event) => handleChange(event)} required></textarea>
                {errors.description && <p>{errors.description}</p>}
              </div>
               
               

              <div class="col-span-6 sm:col-span-3">
                <label class="block text-sm font-bold text-black-700">ORIGIN</label>
        
                    <input value={input.origin} name="origin" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" onChange={(event) => handleChange(event)} required ></input>
                    {errors.origin && <p>{errors.origin}</p>}
              </div>

              <div class="col-span-6">
                <label class="block text-sm font-bold text-black-700">PRICE</label>
                <input type="number" value={input.price}  min="1" name="price" class="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(event) => handleChange(event)} required></input>
                {errors.price && <p>{errors.price}</p>}
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label class="block text-sm font-bold text-black-700">ALCOHOL</label>
                <input type="text" name="alcohol" value={input.alcohol} class="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(event) => handleChange(event)} required></input>
                {errors.alcohol && <p>{errors.alcohol}</p>}
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label class="block text-sm font-bold text-black-700">IMAGE</label>
                <input type="text" name="img" value={input.img}  class="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(event) => handleChange(event)} required></input>
                {  errors.img && <p>{errors.img}</p>}  
              </div>
              
              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label class="block text-sm font-bold text-black-700">DISCOUNT</label>
                <input type="text" name="discount" value={input.discount} class="mt-3 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(event) => handleChange(event)} required></input>
                {errors.discount && <p>{errors.discount}</p>}
                </div> 

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label class="block text-sm font-bold text-black-700">STOCK</label>
                <input type="text" value={input.stock} name="stock" class="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(event) => handleChange(event)} required></input>
                {errors.stock && <p>{errors.stock}</p>}
              </div>
            </div>
          </div>
          <div class="px-4 py-3 text-right sm:px-6 bg-gray-400">
            <button type="submit"  class="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">EDITAR PRODUCTO</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};