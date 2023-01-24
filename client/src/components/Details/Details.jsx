import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, postReviews } from '../../action/index.js';

import Encabezado from '../Encabezado/Encabezado.jsx';
import Footer from '../Footer/Footer.jsx';
import images from '../icons/images.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//////hoy 12.26
import { faStar } from '@fortawesome/free-solid-svg-icons'//////hoy 12.26
import { Link } from "react-router-dom";/////hoy 23/1 17:2



export default function Detail() {

	const { id } = useParams();
	const dispatch = useDispatch();
	const details = useSelector(state => state.details);

	const user = useSelector(state => state.user);///////////////////////hoy 12.26
	
	
	

	const isAuthenticated = useSelector(state => state.isAuthenticated);


	 const [rating, setRating] = useState(0);///hoy 12.26
    const [comment, setComment] = useState('');///hoy 12.26
	const [inputValue, setInputValue] = useState('');//23/1/ => 18:45
	

	/* *********************** 23/1/23******************************************************************/
	const updateInputValue = () => {
		for(let [key, value] of Object.entries(user)) { //recorro el user para sacra el id
		  if(key === 'data'){//paso a entrar al valor
			for(let [subKey, subValue] of Object.entries(value)){
			  if(subKey === 'userfound'){//paso a recorrer su valor de userfound
				for(let [subsubKey, subsubValue] of Object.entries(subValue)){
				  if(subsubKey === 'id'){
					/* console.log(subsubValue); //imprime 1 */
					setInputValue(subsubValue);//guardo el id en es estado setinpuntvalue
				  }
				}
			  }
			}
		  }
		}
	  }
	/* *************************************************************************************** */



	useEffect(() => {
		dispatch(getDetail(id));
	},[dispatch]);

	useEffect(() => {
		updateInputValue();
	  }, []);

	
	
	
		const handleClick = (selectedRating) => {//////hoy 12.26
			setRating(selectedRating);
	 	};


	
	  	const handleCommentChange = (event) => {//hoy 12.26
			
			setComment(event.target.value);
			
	  	};


	
	  	const handleSubmit = (event) => {//hoy 12.26
			
		
    		/* const reviewData = { rating: rating, comment: comment }; */
    		event.preventDefault();
    		dispatch(postReviews(rating, comment));
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
           <form onSubmit={handleSubmit}>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
           <FontAwesomeIcon icon={faStar} 
              key={star}
              color={star <= rating ? '#ffc107' : '#e4e5e9'} //#ffc107=>AMARILLO #e4e5e9=>GRIS
              onClick={() => handleClick(star)}
            />
          ))}
		  
        </div>


		<div>
   				 <input
      				type="number"
      				value={rating}
      				onChange={handleCommentChange}
      				name="rating"
    			/>
	
 		 </div>

		<br></br>
		<br></br>

        <div>
  				{ details.map(e => {
    				return <input className="bg-gray-50 border border-gray-300"
     						type="text"
      						value={e.id}
      						onChange={handleCommentChange}
    						>
    						</input>
  							})}
		</div>

		<br></br>
		<br></br>

		<div>    
		
			{/* **************************************************************************** */}
			<input 
        		className="bg-gray-50 border border-gray-300"
        		type="text"
        		value={inputValue}//
        		onChange={handleCommentChange}
      />
				
			{/* **************************************************************************** */}




  				{/*  { Object.values(user).map(e => { 
					
    			return <input className="bg-gray-50 border border-gray-300"
      					type="text"
      					value={e.id}
      					onChange={handleCommentChange}
    					>
    					</input>
 						 })} */}
		</div>

		<br></br>
		<br></br>
					<div>
        				<textarea
						type="text"
          				placeholder="Escribe aquí tu comentario"
          				value={comment}
          				onChange={handleCommentChange}
        				/>
					</div>

  		<br></br>
		<br></br>

		<button  type="submit">
       		 ENVIAR
       	</button>


      	</form>


    </div>

      ) : (

        <div>
			<Link to="/login">
                <h1>Por favor inicia sesión para dejar una review</h1>  
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




 						 
	
	
	