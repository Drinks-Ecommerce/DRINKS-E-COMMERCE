import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteUser } from "../../action";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


export default function Alert(){

   const dispatch = useDispatch()
   const navigate = useNavigate()
   
	// const DeleteUSER = () => {

 //    console.log("sesion cerrada")
 //    dispatch(DeleteUser());
 //    // alert("Usuario baneado")
 //    // navigate('/')
    
 //  };

  useEffect(() =>{
     navigate("/")
  },[dispatch])

	return(

    <div>
         
       { 
        swal({
            title: "Tu cuenta a sido Baneada",
            text: "Contact al correo: vinario.drinks@gmail.com",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "yes",
            confirmButtonClass: "btn-warning",
            cancelButtonText: "No",
            cancelButtonClass: "btn-danger"
          }).then(function(){
          	   dispatch(DeleteUser())
               window.location = "http://127.0.0.1:5173/"
          })
        }
 
    </div>
		)
}