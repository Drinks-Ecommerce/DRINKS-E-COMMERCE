import React, { /*useEffect,*/ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Encabezado from '../../Encabezado/Encabezado.jsx';
// import { getProducts } from '../../../action/index.js';


export default function Wishlist() {
	const dispatch = useDispatch();

	const favorites = useSelector(state => state.wishlist);
	const products = useSelector(state => state.products);
	const [loading, setLoading] = useState(true);


	console.log(products);

	setTimeout(() => {
		setLoading(false)
	}, 1000);

	const addProduct = (id) => {
		let addProductList = products.find(e => e.id === id);
		// if(!addProductList) {
		// 	dispatch()
		// };
	};

	// useEffect(() => {
	// 	dispatch();
	// }, [dispatch]);

	return(
		<div>
			<Encabezado />
			<h1>MY FAVORITES</h1>
			<div>
				{
					loading ? <p>Cargando...</p> : 
					favorites.length > 0 ?
					<div>
						{
							favorites.map(e => {
								return <FavoriteProduct
									key={e[0].id}
									id={e[0].id}
									name={e[0].name}
									price={e[0].price}
									img={e[0].img}
									brand={e[0].brand}
									addProduct={addProduct}
								 />
							})
						} 
					</div> : <p>Not Found</p>
				} : <p>Not Found</p>
			</div>
		</div>
		)
};