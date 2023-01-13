import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Register.css'

import React from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,50}$/;
//VALIDACION USUARIO
//debe empezar con una letra minuscula o mayucula, y puede seguir con la cantidad de
//caracteres que quiera entre 3 y 50,y estos pueden ser  letras en minusculas o mayus, digitos, guiones
// o guiones bajos.

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//VALIDACION PASSWORD
//requiere como minimo 1 minuscula, 1 mayuscula, 1 digito y 1 caracter especial, y tiene un rango
//entre 8 a 24
const REGISTER_URL = '/register';

function Register() {
    const userRef = useRef();//user input nos permite establecer el foco en la entrada del usuario cuando se cargue el componente
    const errRef = useRef();//es por si tenemos un error y necesitamos poner el foco ahi para que se pueda mostrar en pantalla.
  
    const [ user, setUser ] = useState('');
    const [ validName, setValidName ] = useState(false);
    const [ userFocus, setUserFocus ] = useState(false);//para saber si tenemos foco en ese input o no
    
      //matching password
    const [ matchPwd, setMatchPwd ] = useState('');
    const [ validMatch, setValidMatch ] = useState(false);
    const [ matchFocus, setMatchFocus ] = useState(false);
    //password
    const [ pwd, setPwd ] = useState('');
    const [ validPwd, setValidPwd ] = useState(false);
    const [ PwdFocus, setPwdFocus ] = useState(false);
    

    const [ errMsg, setErrMsg ] = useState('');
    const [ success, setSucces ] = useState(false)

    useEffect( () => {
        userRef.current.focus();
    }, [])

    useEffect( () => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    // useEffect( () => { //validate username. cada vez que
    //     //este useEffect sera aplicado al UserName y aca se valida el nombre
    //     //ahora el state User esta en el arreglo de dependencia, entonces cada vez que cambie 
    //     //chequeará la validacion
    //     const result = USER_REGEX.test(user);
    //     console.log(result);
    //     console.log(user);
    //     setValidName(result);
    // }, [user])

    // useEffect( () => {
    //     const result = PWD_REGEX.test(pwd);
    //     console.log(result);
    //     console.log(pwd);
    //     setValidPwd(result);
    //     const match = pwd === matchPwd;
    //     setValidMatch(match);
    // }, [pwd, matchPwd])
    useEffect( () => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])


    useEffect( () => { //cuandio ambie la info, se borra el msj de error
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" :
        "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form>
            <label htmlFor="username">
                Usuario:
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input 
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={ (e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                De 3 a 50 caracteres. <br />
                Debe empezar con una letra. <br />
                Se permiten letras, numeros, guiones y guiones bajos.
            </p>

        </form>
        </section>
    )
}

export default Register;
