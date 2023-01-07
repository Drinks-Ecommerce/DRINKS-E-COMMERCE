import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../action/index.js';
import Nav from '../NavBar/NavBar.jsx';
import Foot from '../Footer/Footer.jsx';

export default function Detail() {

const { id } = useParams();
const dispatch = useDispatch();

const details = useSelector(state => state.details);


useEffect(() => {
	dispatch(getDetail(id));
},[dispatch]);


	return(
		<div>
{/*			<Nav />*/}
			<div>
				{
					details.length ? 
					<div>
						<h1>{details[0].name}</h1>
						<h3>{details[0].comments}</h3>
						<p>{details[0].price}</p>
						<p>{details[0].stock > 0 ? 'Stock Disponible' : 'Sin stock'}</p>
						<p>Cantidad: <select><option>{details[0].stock}</option></select></p>
						<img src={details[0].img} />

						<div>
							<h2>Descripción</h2>
							<p>{details[0].description}</p>
						</div>
						<button>Comprar</button>

					</div> : <p>Loading...</p>
				}

			</div>
			<Foot />
		</div>
		)
};