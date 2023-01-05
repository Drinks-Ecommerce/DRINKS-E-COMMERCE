// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDetail } from '../../action/index.js';
// import Nav from '../NavBar/NavBar.jsx';
// import Foot from '../Footer/Footer.jsx';

// export default function Detail() {

// const { id } = useParams();
// const dispatch = useDispatch();

// const details = useSelector(state => state.details);

// useEffect(() => {
// 	dispatch(getDetail(id));
// },[dispatch]);


// 	return(
// 		<div>
// 			<Nav />
// 			<div>
// 				<div>
// 					<h2>Nombre del Producto</h2>
// 					<img />
// 				</div>
// 				<p>Precio</p>
// 				<button>COMPRAR</button>
// 			</div>
// 			<div>
// 				<h2>Descripción</h2>
// 			</div>
// 			<Foot />
// 		</div>
// 		)
// };