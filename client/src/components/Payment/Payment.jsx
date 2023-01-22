import React, { useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { payment } from '../../action/index.js';
import Encabezado from '../Encabezado/Encabezado.jsx';
import { Link } from 'react-router-dom';

export default function Payment() {
const dispatch = useDispatch();
const url = useSelector((state)=>state.urlPayment)

const { register, handleSubmit, formState: { errors } } = useForm();

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
	});
};

const onSubmit = (e) => {
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
				<form onSubmit={onSubmit}>
					<h1>Personal information</h1>
					<div>
						<label>email</label>
						<input type='text' {...register('emailUser', {
							required: true,
							value: input.emailUser 
						})} maxlength='50' onChange={e => handleChange(e)} />
						{errors.emailUser?.type === 'required' && <p>This field is required</p>}
					</div>

					<div>
						<label>Phone</label>
						<input type='text' {...register('phone', {
							required: true,
							value: input.phone
						})} maxlength='15' onChange={e => handleChange(e)} />
						{errors.phone?.type === 'required' && <p>This field is required</p>}
					</div>
						
					<h1>Method of delivery</h1>

					<div>
						<label>Postal code</label>
						<input type='text' {...register('postalCode', {
							required: true,
							value: input.postalCode
						})} maxlength='6' onChange={e => handleChange(e)} />
						{errors.postalcode?.type === 'required' && <p>This field is required</p>}
					</div>

					<div>
						<label>City</label>
						<input type='text' {...register('city', {
							required: true,
							value: input.city
						})} maxlength='100' onChange={e => handleChange(e)} />
						{errors.city?.type === 'required' && <p>This field is required</p>}
					</div>

					<div>
						<label>province</label>
						<input type='text' {...register('province', {
							required: true,
							value: input.province
						})} maxlength='100' onChange={e => handleChange(e)} />
						{errors.province?.type === 'required' && <p>This field is required</p>}
					</div>

					<div>
						<label>Address</label>
						<input type='text' {...register('address', {
							required: true,
							value: input.address
						})} maxlength='100' onChange={e => handleChange(e)} />
						{errors.address?.type === 'required' && <p>This field is required</p>}
					</div>

					<div>
						<label>Number</label>
						<input type='text' {...register('numberAddress', {
							required: true,
							value: input.numberAddress
						})} maxlength='6' onChange={e => handleChange(e)} />
						{errors.numberAddress?.type === 'required' && <p>This field is required</p>}
					</div>


					<h1>Payment method</h1>
					
					<div>
						<label>Method</label>
						<input type='text' {...register('paymentMethod', {
							required: true,
							value: input.paymentMethod
						})} maxlength='20' onChange={e => handleChange(e)} />
						{errors.paymentMethod?.type === 'required' && <p>This field is required</p>}
					</div>

					<div>
						<label>Method</label>
						<input type='text' {...register('shippingMethod', {
							required: true,
							value: input.shippingMethod
						})} maxlength='20' onChange={e => handleChange(e)} />
						{errors.shippingMethod?.type === 'required' && <p>This field is required</p>}
					</div>

					<button className='bg-purple-300'>Pay now</button>
				</form>	
				{
					url?.data?(<div>
						<a href={url.data} target="_blank">
							<button>
								mercado pago
							</button>
						</a>
						</div>) : <button disabled={true}>terminar</button>
					}
			</div>
		</div>
		)
};