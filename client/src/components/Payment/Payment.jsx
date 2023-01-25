import React, { useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { payment } from '../../action/index.js';
import Encabezado from '../Encabezado/Encabezado.jsx';
import { Link } from 'react-router-dom';
import style from './Payment.module.css' 
import Footer from '../Footer/Footer.jsx';

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
		<div className={style.container}>

			<div className="conte_encabezado">
                <Encabezado />
            </div>      

            {/* CONTENEDOR PARA EL CARRUCEL SUPERIOR. */}         
              
           
			<section class="p-6 bg-gray-400 text-gray-50">
		<form  onSubmit={HandleSubmit}   novalidate="" action="" class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid" >
		<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			
			<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">


				
				<div class="col-span-full sm:col-span-3">
					<label for="firstname" className={style.text_sm}>Email</label>
					<input id="firstname" type="text" value={input.emailUser} name= "emailUser" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} 
					 	class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
					/>
					<span>{errors.emailUser && (<p className='error'>{errors.emailUser}</p>)}</span>
				</div>


				<div class="col-span-full sm:col-span-3">
					<label for="lastname"className={style.text_sm} >Phone</label>
					<input id="lastname" type="text" value={input.phone} name= "phone" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"}
						class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
					/>
					<span>{errors.phone && (<p className='error'>{errors.phone}</p>)}</span>
				</div>


				<div class="col-span-full sm:col-span-3">
					<label for="email"className={style.text_sm} >Number Address</label>
					<input id="email" placeholder="Number Address" 
					 	type="text" value={input.numberAddress} name= "numberAddress" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"}
						class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
					/>
					<span>{errors.numberAddress && (<p className='error'>{errors.numberAddress}</p>)}</span>
				</div>
				
				<div class="col-span-full">
					<label for="address" className={style.text_sm}>Address</label>
					<input id="address" type="text" placeholder="" 
						value={input.address} name= "address" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} 
						class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"/>
						<span>{errors.address && (<p className='error'>{errors.address}</p>)}</span>
				</div>


				<div class="col-span-full sm:col-span-2">
					<label for="city" className={style.text_sm}>City</label>
					<input id="city" type="text" placeholder="" 
					 value={input.city} name= "city" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} 
						class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"/>
					<span>{errors.city && (<p className='error'>{errors.city}</p>)}</span>
				</div>



				<div class="col-span-full sm:col-span-2">
					<label for="state" className={style.text_sm}> Province / Province</label>
					<input id="state" type="text" placeholder="" 
						 value={input.province} name= "province" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"}
						class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
						/>
						<span >{errors.province && (<p className='error'>{errors.province}</p>)}</span>
				</div>


				<div class="col-span-full sm:col-span-2">
					<label for="zip" className={style.text_sm}>ZIP / Postal</label>
					<input id="zip" type="text" placeholder="" 
						 value={input.postalCode} name= "postalCode" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} 
						class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"/>
					<span>{errors.postalCode && (<p className='error'>{errors.postalCode}</p>)}</span>
				</div>
			</div>

		</fieldset>

		<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			
			<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

				<div class="col-span-full sm:col-span-3">
					<label for="username" className={style.text_sm}>Payment Method</label>
					<input id="username" type="text" placeholder="Username" 
						value={input.paymentMethod} name= "paymentMethod" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"} 
						class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
						/>
					<span>{errors.paymentMethod && (<p className='error'>{errors.paymentMethod}</p>)}</span>
				</div>


				<div class="col-span-full sm:col-span-3">
					<label for="website" className={style.text_sm}>Shipping Method</label>
					<input id="website" type="text" placeholder="shippingMethod" 
					 value={input.shippingMethod} name= "shippingMethod" 
						onChange={(e)=>handleChange(e)} autoComplete={"off"}
						
					class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"/>
					<span>{errors.shippingMethod && (<p className='error'>{errors.shippingMethod}</p>)}</span>
				</div>
				
			</div>
		</fieldset>

		<button type='submit' disabled={errors.emailUser || errors.phone || errors.postalCode ||
					 errors.city  || errors.province || errors.address || errors.numberAddress || errors.paymentMethod || errors.shippingMethod
					 || errors.emailUser === ''? true : false }> Pay Now
					 </button>
		</form>
		{
					url?.data?(<div>
						<a href={url.data} target="_blank">
							<button>
								mercado pago
							</button>
						</a>
						</div>) : null
					}
		</section>           
            

            {/* CONTENIDO PARA EL PIE DE PAGINA */}

            <div className="container-footer mt-auto">
                <Footer />
            </div>
			
	</div>

)}
