import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../action/index.js';

import Encabezado from '../Encabezado/Encabezado.jsx';
import Footer from '../Footer/Footer.jsx';

export default function Detail() {

	const { id } = useParams();
	const dispatch = useDispatch();
	const details = useSelector(state => state.details);

	useEffect(() => {
		dispatch(getDetail(id));
	},[dispatch]);

	return(
<<<<<<< HEAD
		<div className='bg-gray'>

			<Encabezado />

			{details?.length &&
				
					<div className='bg-gray-500'>
						<img src={details[0].img} />
						<h3>{details[0].comments}</h3>
						<p>{details[0].price}</p>
						<p>{details[0].stock > 0 ? 'Stock Disponible' : 'Sin stock'}</p>
=======
		<div>
{/*			<Nav />*/}
			<div>
				{
					details.length ? 
					<div>
						
						<h1>Name:{details[0].name}</h1>
						<h3>Comentarios:{details[0].comments}</h3>
						<p>Precio:{details[0].price}</p>
						<p>Marca:{details[0].brand}</p>
						<p>Descuento:{details[0].discount}</p>
						<p>Origen:{details[0].origin}</p>
						<p>Grado de Alcohol:{details[0].alcohol}</p>
						<p>Calificacion:{details[0].calification}</p>
						<p>Stock:{details[0].stock > 0 ? 'Stock Disponible' : 'Sin stock'}</p>
>>>>>>> 633654bd21cc7f2c30af31ee8238c1398c3da8ea
						<p>Cantidad: <select><option>{details[0].stock}</option></select></p>

						<div>
							<h2>Descripción: </h2>
							 <p>{details[0].description}</p> 
						</div>
						<div>
						<button>Agregar al carrito</button>
<<<<<<< HEAD
				
						</div>
}
			<Footer />
=======
						 </div>
						 
						 
					</div> : <p>Loading...</p>
				}

			</div>
			<Foot />
>>>>>>> 633654bd21cc7f2c30af31ee8238c1398c3da8ea
		</div>
	)
}