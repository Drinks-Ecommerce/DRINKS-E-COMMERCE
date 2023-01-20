import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { /*payment*/ } from '../../action/index.js';
import Encabezado from '../Encabezado/Encabezado.jsx';

export default function Payment() {
const dispatch = useDispatch();

const { register, handleSubmit, formState: { errors } } = useForm();

const [input, setInput] = useState({
	name: '',
	lastname: '',
	dni: '',
	phone: '',
	postalcode: '',
	city: '',
	address: '',
	number: '',
	flat: '',
	method: ''
});

function handleChange(e) {
	setInput({
		...input,
		[e.target.name]: e.target.value
	});
};

const onSubmit = (e) => {
	console.log(e);
	// e.preventDefault();
	// dispatch(payment(input));
	alert('Payment made successfully');
	setInput({
		name: '',
		lastname: '',
		dni: '',
		phone: '',
		postalcode: '',
		city: '',
		address: '',
		number: '',
		flat: '',
		method: ''
	});
};

	return(
		<div>
			<Encabezado />
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Personal information</h1>

					<div>
						<label>Name</label>
						<input type='text' {...register('name', {
							required: true,
							value: input.name 
						})} maxlength='20' onChange={e => handleChange(e)} />
						{errors.name?.type === 'required' && <p>This field is required</p>}
					</div>

					<div>
						<label>Lastname</label>
						<input type='text' {...register('lastname', {
							required: true,
							value: input.lastname
						})} maxlength='20' onChange={e => handleChange(e)} />
						{errors.lastname?.type === 'required' && <p>This field is required</p>}
					</div>

					<div>
						<label>Dni</label>
						<input type='text' {...register('dni', {
							required: true,
							value: input.dni
						})} maxlength='10' onChange={e => handleChange(e)} />
						{errors.dni?.type === 'required' && <p>This field is required</p>}
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
						<input type='text' {...register('postalcode', {
							required: true,
							value: input.postalcode
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
						<label>Address</label>
						<input type='text' {...register('address', {
							required: true,
							value: input.address
						})} maxlength='100' onChange={e => handleChange(e)} />
						{errors.address?.type === 'required' && <p>This field is required</p>}
					</div>

					<div>
						<label>Number</label>
						<input type='text' {...register('number', {
							required: true,
							value: input.number
						})} maxlength='6' onChange={e => handleChange(e)} />
						{errors.number?.type === 'required' && <p>This field is required</p>}
					</div>

					<div>
						<label>Flat/Departament</label>
						<input type='text' {...register('flat', {
							required: true,
							value: input.flat
						})} maxlength='5' onChange={e => handleChange(e)} />
						{errors.flat?.type === 'required' && <p>This field is required</p>}
					</div>

					<h1>Payment method</h1>
					
					<div>
						<label>Method</label>
						<input type='text' {...register('method', {
							required: true,
							value: input.method
						})} maxlength='20' onChange={e => handleChange(e)} />
						{errors.method?.type === 'required' && <p>This field is required</p>}
					</div>

					<button>Pay now</button>
				</form>	
			</div>
		</div>
		)
};