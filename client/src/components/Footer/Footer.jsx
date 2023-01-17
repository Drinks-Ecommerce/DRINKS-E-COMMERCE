import images from "../icons/images"
import './Footer.css';

export default function Footer() {
  return (
    <footer className=" bg-gray-200 text-gray-100 mt-full">

	    <div className="container grid mx-auto gap-x-3 gap-y-8 md:grid-cols-4 xl:grid-cols-4">

			<div className="flex flex-col mr-7 space-y-4 sm:hidden md:flex">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-23 h-23 rounded-full dark:bg-violet-400">
						<img src={images.img4} />
					</div>
				</a>
			</div>

		    <div className="pt-6 flex flex-col space-y-4">
			    <h2 className="text-gray-900 font-bold">INSTITUCIONAL</h2>
			    <div className="flex flex-col space-y-2 text-md text-gray-600">
				  <a rel="noopener noreferrer" href="#">¿Quiénes somos?</a>
				  <a rel="noopener noreferrer" href="#">Desarrolladores</a>
				  <a rel="noopener noreferrer" href="#">Términos y Condiciones</a>
			  </div>
		  </div>

			<div className="pt-6 flex flex-col space-y-4">
			<h2 className="text-gray-900 font-bold">PRODUCTOS</h2>
			<div className="flex flex-col space-y-2 text-md text-gray-600">
				<a rel="noopener noreferrer" href="#">Vinos</a>
				<a rel="noopener noreferrer" href="#">Cervezas</a>
				<a rel="noopener noreferrer" href="#">Whiskys</a>
				<a rel="noopener noreferrer" href="#">Rones</a>
				
			</div>
		</div>

		<div className="pt-6 flex flex-col space-y-4">
			<h2 className="text-gray-900 font-bold">CONTACTO</h2>
			<div className="flex flex-col space-y-2 text-md text-gray-600">
				<div className="flex flex-row w-7 h-7 gap-2">
					<img src={images.img5} alt="WhatsApp" />
					<img src={images.img6} alt="Instagram" />
					<img src={images.img7} alt="Facebook" />
					<img src={images.img8} alt="Gmail" />
				</div>
			</div>
		</div>

	</div>
	<div className="flex items-center justify-center px-6 pt-8 pb-4 text-sm">
		<span className="text-gray-400">© Copyright 2023. Todos los Derechos Reservados.</span>
	</div>
</footer>
  )
}


