import React, { useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { payment } from '../../action/index.js';
import Encabezado from '../Encabezado/Encabezado.jsx';
import { Link } from 'react-router-dom';

export default function Payment() {
const dispatch = useDispatch();
const url = useSelector((state)=>state.urlPayment)
const User = useSelector((state) => state.user);
const [errors, setErrors] = useState({})

console.log(User)


const [input, setInput] = useState({
	emailUser:'',
	phone: '',
	postalCode: '',
	city: '',
	province:'',
	address: '',
	numberAddress: '',
	paymentMethod:'',
	shippingMethod:''
});



function handleChange(e) {
	setInput({
		...input,
		[e.target.name]: e.target.value
	}),
	setErrors(validate({
		...input,
		[e.target.name] : e.target.value
	}))
};


function validate(input) {
	let errors = {}
	if(input.emailUser===""){
		errors.emailUser= "Obligatory field Email"
	}
	if(input.emailUser !== User.email){
		errors.emailUser= "Email Inconrrecto"
	}
	if(input.phone === " " ){
		errors.phone= "Obligatory field Number Phone"
	}
	if(input.phone.length < 9){
		errors.phone= "Obligatory nine digits "
	}
	if(input.postalCode === ""){
		errors.postalCode = "required Postal Code"
	}
	if(input.city === ""){
		errors.city= "required City"
	}
	if(input.province === ""){
		errors.province= "required Province"
	}
	if(input.address === ""){
		errors.address= "required address"
	}
	if(input.numberAddress === ""){
		errors.numberAddress= "required number address"
	}
	if(input.paymentMethod === ""){
		errors.paymentMethod= "required payment Method"
	}
	if(input.shippingMethod === ""){
		errors.shippingMethod= "required shipping Method"
	}
	return errors
}


const HandleSubmit = (e) => {
	console.log(e);
	e.preventDefault();
	dispatch(payment(input));
	alert('Payment made successfully');
	setInput({
		emailUser:'',
		phone: '',
		postalCode: '',
		city: '',
		province:'',
		address: '',
		numberAddress: '',
		paymentMethod:'',
		shippingMethod:''
	});
};
	return(
		<div>
			<Encabezado />
			<div>
				<form onSubmit={HandleSubmit}>
					<h1>Personal information</h1>

					<div>
						<label>Email: </label>
						<input  type="text" value={input.emailUser} name= "emailUser" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} />
						<span>{errors.emailUser && (<p className='error'>{errors.emailUser}</p>)}</span>
						
					</div>

					<div>
						<label>Phone: </label>
						<input  type="text" value={input.phone} name= "phone" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} />
						<span>{errors.phone && (<p className='error'>{errors.phone}</p>)}</span>
					</div>
						
					<h1>Method of delivery</h1>

					<div>
						<label>Postal code</label>
						<input  type="text" value={input.postalCode} name= "postalCode" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} />
						<span>{errors.postalCode && (<p className='error'>{errors.postalCode}</p>)}</span>
					</div>

					<div>
						<label>City</label>
						<input  type="text" value={input.city} name= "city" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} />
						<span>{errors.city && (<p className='error'>{errors.city}</p>)}</span>
					</div>

					<div>
						<label>province</label>
						<input  type="text" value={input.province} name= "province" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} />
						<span >{errors.province && (<p className='error'>{errors.province}</p>)}</span>
					</div>

					<div>
						<label>Address</label>
						<input  type="text" value={input.address} name= "address" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} />
						<span>{errors.address && (<p className='error'>{errors.address}</p>)}</span>
					</div>

					<div>
						<label>Number Address</label>
						<input  type="text" value={input.numberAddress} name= "numberAddress" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} />
						<span>{errors.numberAddress && (<p className='error'>{errors.numberAddress}</p>)}</span>
					</div>


					<h1>Payment method</h1>
					
					<div>
						<label>Method Payment</label>
						<input  type="text" value={input.paymentMethod} name= "paymentMethod" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} />
						<span>{errors.paymentMethod && (<p className='error'>{errors.paymentMethod}</p>)}</span>
					</div>

					<div>
						<label>Shipping Method</label>
						<input  type="text" value={input.shippingMethod} name= "shippingMethod" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} />
						<span>{errors.shippingMethod && (<p className='error'>{errors.shippingMethod}</p>)}</span>
					</div>

					<button type='submit' disabled={errors.emailUser || errors.phone || errors.postalCode ||
					 errors.city  || errors.province || errors.address || errors.numberAddress || errors.paymentMethod || errors.shippingMethod
					 || errors.emailUser === ''? true : false }> Pay Now
					 </button>
					 
				</form>	
				{
					url.data?(<div>
						<a href={url.data} target="_blank">
							<button>
								mercado pago
							</button>
						</a>
						</div>) : null
					}
			</div>
		</div>
		)
};