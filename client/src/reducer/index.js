const initialState = {
    allproducts: [],
    copyallproducts:[],
    typesproducto:[],
    details: [],
    allBrands: [],
    allOrigins: [],

    // product: [], ruta echa para que se la use en el componente del admin para que pueda borrar y modificar el producto.
    // user: [] ruta echa para el get y post del usuario

}

function rootReducer(state = initialState, action){

    switch (action.type){

//------------------------------- CASE PRODUCTS ------------------------------------

        case 'GET_PRODUCTS' :
            return{
                ...state,
                allproducts: action.payload,
                copyallproducts : action.payload
            }   

        case 'CREATE_PRODUCTS':
            return{
                ...state
            }

        // case 'DELETE_PRODUCT':
        //  return {
        //      ...state
        //  }

        // case 'UPDATE_PRODUCT':
        //  return {
        //      ...state
        //  }

        case 'GET_DETAIL':
            return {
                ...state,
                details: action.payload
            }

        case 'GET_BY_NAME':
            return {
                ...state,
                allproducts: action.payload
            }

        case 'GET_BY_BRAND':
            return{
                ...state,
                allproducts: action.payload
            }


//----------------------------------- CASE TYPES -----------------------------------

        case 'GET_TYPES' :
            return{
                ...state,
                typesproducto: action.payload
            }
        // case 'POST_TYPE':
        //     return {
        //         ...state
        //     }

        // case 'DELETE_TYPE':
        //     return {
        //         ...state,
        //         type: action.payload
        //     }



//---------------------------- CASE USER ROL -----------------------------------------

         // case 'GET_ROL':
        //     return {
        //         ...state,
        //         user: action.payload
        //     }

        // case 'CREATE_ROLE':
        //     return {
        //         ...state
        //     }


//------------------------------ CASE USER ------------------------------------------

        // case 'GET_USER':
        //     return {
        //         ...state,
        //         user:  action.payload
        //     }

        // case 'GET_USER_EMAIL':
        //     return {
        //         ...state,
        //         user: action.payload
        //     }

        // case 'GET_USER_NAME':
        //     return {
        //         ...state,
        //         user: action.payload 
        //     }

        // case 'GET_USER_ID':
        // return {
        //     ...state,
        //     user: action.payload
        // }

        // case 'DELETE_USER':
        //     return {
        //         ...state
        //     }

        // case 'UPDATE_USER':
        //     return {
        //         ...state
        //     }

        // case 'SIGN_IN':
        //     return {
        //         ...state
        //     }

        // case 'SIGN_UP':
        //     return {
        //         ...state
        //     }


//------------------------------ CASE FILTERS ------------------------------------

        case 'FILTER_ORDER_PRICE':
            return {
                ...state,
                allproducts: action.payload
            }

        case 'FILTER_TYPE':

            const Brands = [];
            
            for(let i=0; i<state.allproducts.length; i++){
                if(!Brands.includes(state.allproducts[i].brand)){
                    Brands.push(Brands.concat(state.allproducts[i].brand));
                }
            }

            console.log(Brands)


            return {
                ...state,
                allproducts: action.payload,
            }

        case 'GET_ORIGIN':
                return {
                    ...state,
                    allproducts: action.payload,
        }

        case 'GET_ALL_BRAND':

            let brands = [];

            for(let i=0; i<state.allproducts.length; i++){
                if(!brands.includes(state.allproducts[i].brand)){
                    brands.push(state.allproducts[i].brand);
                }
            }

            return {
                ...state,
                allBrands: brands,
            }




        
    



//-------------------------------- CASE DEFAULT --------------------------------------

        default:
                return state;
    }
}

export default rootReducer