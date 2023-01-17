import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser } from "../../action";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import images from "../icons/images";
import Carrito from "../Carrito/Carrito";
import "../SearchBar/SearchBar.jsx";

export default function Encabezado(){

  const [open, setOpen] = useState(false); // Lógica para el carrito.
  const [open2, setOpen2] = useState(false); // Lógica para el perfil.

  const User = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const DeleteUSER = (e) => {
    dispatch(DeleteUser());
  };
		

  return (
    <header className="bg-gray-200 text-gray-100">
      <div className="flex justify-between h-16 mx-5">
        <div className="flex">
          <img src={images.img4} className="w-25  h-25" alt="" />
        </div>

        <div className="flex items-center md:space-x-4">
          <SearchBar />
          {/* <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-700 text-gray-100 focus:bg-gray-900" /> */}
        </div>

        <div className={`${!open && "hidden"} bg-gray-500/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-10`}></div>

        <div className="flex items-center md:space-x-2 mx-0">

			{
				open === false ? (
					<img src={images.img9} className="hidden md:block w-10 h-10 cursor-pointer mr-1" alt="img" onClick={() => setOpen(!open)} />
				) :
        <Carrito set={setOpen} open2={!open}  />
			}
			
          <button title="Open menu" type="button" className="mr-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10"
            ></svg>
          </button>

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
                      {User.data.userFound.username}
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
                      <h6 class="text-gray-400 font-semibold text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent">
                        Perfil
                      </h6>
                      <span class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300">
                        (???)
                      </span>

                      <li>
                        <hr class="h-0 my-2 border border-solid border-t-0 border-gray-300 opacity-25" />
                      </li>
                      <li>
                        <a
                          class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                          onClick={(e) => DeleteUSER()}
                        >
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
      </div>

      

		

      	<div class="flex justify-center bg-black pb-3 pt-3 mt-2">
        	<ul class="flex">
          		<li class="mr-6">
            <Link to={"/vino"}>
              <option className="text-white text-lg font-bold hover:text-blue-500 cursor-pointer">
                VINOS
              </option>
            </Link>
          </li>

          <li class="mr-6">
            <Link to={"/whisky"}>
              <option className="text-white text-lg font-bold hover:text-blue-500 cursor-pointer">
                WHISKYS
              </option>
            </Link>
          </li>

          <li class="mr-6">
            <Link to={"/ron"}>
              <option className="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">
                RONES
              </option>
            </Link>
          </li>

          <li class="mr-6">
            <Link to={"/cerveza"}>
              <option
                value="cerveza"
                class="text-white text-lg font-bold hover:text-blue-800 cursor-pointer"
              >
                CERVEZAS
              </option>
            </Link>
          </li>

          <li class="mr-6">
            <Link to={"/espumante"}>
              <option className="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">
                ESPUMANTES
              </option>
            </Link>
          </li>

          <li class="mr-6">
            <Link to={"/gin"}>
              <option className="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">
                GINS
              </option>
            </Link>
          </li>

          <li class="mr-6">
            <Link to={"/vermouth"}>
              <option className="text-white text-lg font-bold hover:text-blue-800 cursor-pointer">
                VERMÚS
              </option>
            </Link>
          </li>

          <li class="mr-6">
            <Link to={"/cristaleria"}>
              <option
                value="cristaleria"
                className="text-white text-lg font-bold hover:text-blue-800 cursor-pointer"
              >
                CRISTALERÍA
              </option>
            </Link>
          </li>

          <li class="">
            <Link to={"/delicatessen"}>
              <option
                value="delicatessen"
                class="text-white text-lg font-bold hover:text-blue-800 cursor-pointer"
              >
                DELICATESSEN
              </option>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
