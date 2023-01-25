import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Encabezado from '../Encabezado/Encabezado.jsx';
import { getWishlist, /*postInCart*/ } from '../../action/index.js';
import CardWishlist from './CardWishlist.jsx';
import images from '../icons/images.js';


export default function Wishlist() {
	const dispatch = useDispatch();

	const user = useSelector(state => state.user);
	const favorites = useSelector(state => state.wishlist);
	const [loading, setLoading] = useState(true);

	console.log(user, 'User');
	console.log(favorites, 'wishlist');

	setTimeout(() => {
		setLoading(false)
	}, 1000);

	useEffect(() => {
		dispatch(getWishlist(user.id));
	}, [dispatch, user.id]);

	return(
		<div className='bg-gray-300'>
			<Encabezado />
			<div className='bg-gray-300'>
				{
					loading ? <p>Cargando...</p> : 
					<div className="container pb-5 bg-gray-300 mx-auto grid grid-cols-1 gap-3 pr-4 pl-4 md:grid-cols-3 my-5  lg:grid-cols-4 xl:grid-cols-4">
						{
							favorites?.map(e =>
								<CardWishlist
									key={e.id}
									id={e.id}
									name={e.name}
									price={e.price}
									img={e.img}
									brand={e.brand}
								 />)
						}
					</div>
				}
			</div>
		</div>
		)
};