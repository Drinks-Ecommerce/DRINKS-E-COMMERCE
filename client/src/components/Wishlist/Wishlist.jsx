import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Encabezado from '../Encabezado/Encabezado.jsx';
import { getWishlist, /*postInCart*/ } from '../../action/index.js';
import Cards from '../Cards/Cards.jsx';


export default function Wishlist() {
	const dispatch = useDispatch();

	const user = useSelector(state => state.user);
	const favorites = useSelector(state => state.wishlist);
	const [loading, setLoading] = useState(true);
	// const [number, setNumber] = useState(null);

	// console.log(user, 'User');
	// console.log(favorites, 'wishlist');

	setTimeout(() => {
		setLoading(false)
	}, 1000);

	// function handleChange(e) {
	// 	e.preventDefault();
	// 	if(Object.entries(user).length === 0) {
	// 		return alert("It's not registered");
	// 	} else {
	// 		const obj = {
	// 			userId: user.id,
	// 			productId: favorites[0].id,
	// 			quantity: 
	// 		}
	// 		dispatch(postInCart(obj));
	// 	}
		
	// };

	useEffect(() => {
		dispatch(getWishlist(user.id));
	}, [dispatch, user.id]);

	return(
		<div>
			<Encabezado />
			<h1>MY FAVORITES</h1>
			<div>
				{
					loading ? <p>Cargando...</p> : 
					<div>
						{
							favorites?.map(e =>
									<Cards
										key={e.id}
										id={e.id}
										name={e.name}
										price={e.price}
										img={e.img}
										brand={e.brand}
								 	/>)}
					</div>
				}
			</div>
		</div>
		)
};