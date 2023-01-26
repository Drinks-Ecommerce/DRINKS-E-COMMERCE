import React from "react";
import Footer from "../Footer/Footer.jsx";
import ProductCreate from "../ProductCreate/ProductCreate";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { DeleteUser } from "../../action";
import images from "../icons/images";
import swal from 'sweetalert';



export default function Home(){

const dispatch = useDispatch()
const User = useSelector((state) => state.user)
const navigate = useNavigate()


  const DeleteUSER = () => {

    console.log("sesion cerrada")
    dispatch(DeleteUser());
    navigate('/')
    
  };

    return(
        <div className=" flex sm:flex-row  mt-16 p-5 my-0 justify-around  rounded-3xl border-2 border-greey">
         <h1 class="text-6xl font-bold text-black">Panel Admin</h1>
         <Link to="/vinos" ><button class=" mr-8 h-12 rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Home</button></Link>
      <div
        class="mt-16 flex justify-between py-6 px-4 bg-white/30 rounded-lg shadow-lg shadow-black-500/40 hover:shadow-x1 hover:shadow-black-500/40"
      >
      
        <div class="flex items-center space-x-4 px-12 rounded-3xl border-2 hover:border-black">

          <div class="flex flex-col my-16 space-y-1">
          <Link to="/user">
            <span class=" text-3xl font-bold text-blue"
              >Usuarios 
            </span>
          </Link>  
          </div>
        </div>
      </div>
      <div
        class="mt-16 flex justify-between py-6 px-4 bg-white/30 rounded-lg shadow-lg shadow-black-500/40 hover:shadow-xl hover:shadow-black-500/40"
      >
        <div class="flex items-center space-x-4 px-12 rounded-3xl border-2 hover:border-black " >
          <div class="flex flex-col my-16 space-y-1">
          <Link to="/productsadmin">
            <span class=" text-3xl font-bold"
              >Productos Admin
            </span>
         </Link>   
          </div>
        </div>
      </div>
      <div
        class="mt-16 flex justify-between py-6 px-4 bg-white/30 rounded-lg shadow-lg shadow-black-500/40 hover:shadow-xl hover:shadow-black-500/40"
      >
        <div class="flex items-center space-x-4 px-12 rounded-3xl border-2 hover:border-black">
          <div class="flex flex-col my-16 space-y-1">
          <Link to="/createProducts">
            <span class=" text-3xl font-bold "
              >Crear Productos
            </span>
          </Link>  
          </div>
        </div>
      </div>

      {Object.entries(User).length === 0 ? (
            <Link to="/login">
              <div>
                <img src={images.img20} className="w-10 h-10 cursor-pointer" />
              </div>
            </Link>
          ) : (
            <div className="flex row gap-5">
              <div class="flex justify-center">
                <div>
                  <div class="dropdown relative">
                    <button
                      class="dropdown-toggle  px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {User.username}
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        class="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      class="dropdown-menu min-w-max absolute hidden text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none bg-gray-800"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <Link to={`/profile`}>
                        <h6 class="text-gray-400 font-semibold text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent">Perfil</h6>
                      </Link> 
                                            
                      <li>
                        <hr class="h-0 my-2 border border-solid border-t-0 border-gray-300 opacity-25" />
                      </li>
                      <li>
                        <a
                          class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                          onClick={(e) => DeleteUSER(e)}>
                          Cerrar sesión
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
    </div>

  )      
}