import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, postReviews } from '../../action/index.js';

import Encabezado from '../Encabezado/Encabezado.jsx';
import Footer from '../Footer/Footer.jsx';
import images from '../icons/images.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";



export default function Detail() {

	const { id } = useParams();
	const dispatch = useDispatch();
	const details = useSelector(state => state.details);
	
	const user = useSelector(state => state.user);
	
	const isAuthenticated = useSelector(state => state.isAuthenticated);

			let ids;
			if(details.length) {
    		ids = details[0].id;
				}
  
	/* 
			let userIdS;
			if(user && user.data && user.data.userFound) {
			userIdS = user.data.userFound.id;
				} */

			 	/* let userIdS;
			if(user.length) {  
			userIdS = user.id;
				  }   */
 
		console.log(user.id)
	

	  		const [rating, setRating] = useState(0);
  
  

   
			const handleClick = (selectedRating) => {
			setRating(selectedRating);
	 		};


    		const [input, setInput] = useState({

				userId:user.id, 
				productId:ids,
				calification:rating,
				comment:'' 

   			});

	 console.log(input) 
	 
	
	useEffect(() => {
		dispatch(getDetail(id));
	},[]);


		/* ************************************handles***************** */
		

		  const handlecoment = (e) => {
			
			setInput({
			  ...input,
			  calification: rating,  
			  [e.target.name]: e.target.value, 
			    
			});
		  };
		  

		/* ***************************************************************** */

		
	
	  	const handleSubmit = (e) => {//hoy 12.26
			
    		e.preventDefault();
			console.log(input)
		
    	 	 dispatch(postReviews(input)); 
			  setInput({
				userId:'',
				productId:'',
				calification:'',
				comment:''
			 }) 
	 		 }; 

	

	return(

		<div className='bg-gray-200'>

			<Encabezado />
			
			{
				details.length &&

				<div className='grid container grid-cols-1 gap-5 md:grid-cols-2 my-8 mx-auto bg-gray-300'>

					<div className='flex'>
						<img src={details[0].img} alt="photo" className="aspect-[16/12]" />
					</div>

					<div className='flex flex-col justify-between mt-3'>

						<div className='flex flex-col w-full xl:text-xl'>
							<div className='flex justify-between text-white w-full text-center'>
								<div className='p-0 bg-black text-white w-44 h-8'>
									{details[0].brand}
								</div>

								<div className='mr-3'>
									<img src={images.img10} alt='' className='h-10 w-10' />
								</div>
							</div>

							<h1 className='mt-8 mb-8 text-3xl underline'>
								{details[0].name}
							</h1>
						</div>

						<div>
							<h1 className='text-xl mb-44 mr-1'>
								{details[0].description}
							</h1>
						</div>

						<div className='flex justify-between mx-2'>
							<div className='text-5xl mt-1 mr-4'>
								<h1>$ {details[0].price}</h1>
							</div>

							<div className='mb-2 mr-2'>
								<button type="button" className="px-6 py-3 mb-2 text-xl font-semibold border rounded bg-black border-gray-100 text-gray-100">AÑADIR AL CARRITO</button>
							</div>
						</div>


						
					</div>
				</div>
			}
					
					
		<div class="accordion col-span-2 mx-3 mb-5" id="accordionExample">

  			<div class="accordion-item bg-white border border-gray-200">
    			<h2 class="accordion-header mb-0" id="headingOne">
      			<button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none
        		transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        		Especificaciones
      			</button>
    			</h2>

				{

					details.length &&

    			<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"> 


      				<div class="accordion-body py-4 px-5">
						<h1 className="underline text-xl">
							DESCRIPCIÓN DEL PRODUCTO
						</h1> 
						
						<br />

						<h1>
							<strong>Nombre:</strong> {details[0].name}
						</h1>

						<h1>
							<strong>Marca:</strong> {details[0].brand}
						</h1>

						<h1>
							<strong>Origen:</strong> {details[0].origin}
						</h1>

						<h1>
							<strong>Descripción:</strong> {details[0].description}
						</h1>

						<h1>
							<strong>Precio:</strong> $ {details[0].price}
						</h1>

						<h1>
							<strong>Descuento:</strong> $ {details[0].discount}
						</h1>

						<h1>
							<strong>Alcohol:</strong> {details[0].alcohol} %
						</h1>

						<h1>
							<strong>Calification:</strong> {details[0].calification}
						</h1>


					</div>

        			
    			</div>
				}
  			</div>

  			<div class="accordion-item bg-white border border-gray-200">
    			<h2 class="accordion-header mb-0" id="headingTwo">
      			<button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0
        		rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        			Reseñas
      			</button>
    			</h2>
    		<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      			<div class="accordion-body py-4 px-5">

        		<strong>This is the second item's accordion body.</strong> It is hidden by default,
        		until the collapse plugin adds the appropriate classes that we use to style each
        		element. These classes control the overall appearance, as well as the showing and
        		hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        		our default variables. It's also worth noting that just about any HTML can go within
        		the <code>.accordion-body</code>, though the transition does limit overflow.
      			</div>
    		</div>

			

<div>
      {isAuthenticated ? (
		
        <div>
           <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
		
          {[1, 2, 3, 4, 5].map((star) => (
           <FontAwesomeIcon icon={faStar} 
              key={star}
              color={star <= rating ? '#ffc107' : '#e4e5e9'} //#ffc107=>AMARILLO #e4e5e9=>GRIS
              onClick={() => handleClick(star)}
            />
          ))}
		  
        </div>


		<br></br>
		<br></br>

       

		<br></br>
		<br></br>



					<div>
        				<textarea class="w-1/2  border border-solid border-gray-400 border border-solid border-gray-400 rounded p-2 text-base font-sans " 
						type="text"
          				placeholder="Escribe aquí tu comentario"
						  name="comment"
          				value={input.comment}
          				onChange={(e)=>handlecoment(e)}
        				/>
					</div>

  		<br></br>
		<br></br>

		<button class="px-4 py-2 bg-purple-300 hover:bg-purple-400 border   mb-3 rounded p-2 text-base font-sans mr-2"
		 type="submit">
       		 ENVIAR
       	</button>


      	</form>


    </div>

      ) : (

        <div>
			<Link to="/login">
                <h1 class="text-red-500 text-lg font-medium">Por favor inicia sesión para dejar una review</h1>  
            </Link>
			
		</div>
      )}
    </div>


  		</div>
		  
  
	</div>		

		

	<Footer />
	</div>
	)
}

