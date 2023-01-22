const initialState = {
    allproducts: [],
    copyallproducts:[],
    filters: [],
    typesproducto:[],
    details: [],
    allBrands: [],
    allOrigins: [],
    userRol: [],
    userr:[],
    wishlist: [],
    urlPayment:"",
    isAuthenticated: true,
    reviews:[],


    // product: [], ruta echa para que se la use en el componente del admin para que pueda borrar y modificar el producto.
    user: {},

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

            const marcas = [];

            for(let i=0; i<state.copyallproducts.length; i++){
                var result = state.copyallproducts.filter(marca => marca.brand === action.payload);
            }

            return{
                ...state,
                copyallproducts: result 

        }

        case 'GET_BY_ORIGIN':

            const origenes = [];

            for(let i=0; i<state.filters.length; i++){
                if(state.filters[i].origin === action.payload){
                    origenes.push(state.filters[i])
                }
            }

            return {
                ...state,
                filters: origenes,
        }

        case 'GET_ALL_CART':

                return {
                    ...state,
                    allProductsCart: action.payload
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

         case 'GET_ROL':
            return {
                ...state,
                userRol: action.payload
            }

        case 'CREATE_ROLE':
            return {
                ...state
            }


//------------------------------ CASE USER ------------------------------------------

        case 'GET_USERR':
            return {
                ...state,
                userr:  action.payload
            }

           

        // case 'GET_USER_EMAIL':
        //     return {
            //         ...state,
            //         user: action.payload
            //     }
            
            case 'DELETE_USER':
            
                window.localStorage.removeItem("cookie")
            
                return {
                    ...state,
                    user: {}
            }

            case 'GET_USER_NAME':
            return {
                ...state,
                userr: action.payload 
            }

        case 'GET_USER_ID':
        return {
            ...state,
            userr: action.payload
        }

        case 'DELETE_USER':
            return {
                ...state
            }

        case 'UPDATE_USER':
            return {
                ...state
            }

        case 'SIGN_UP':
            return {
                ...state
            }



//------------------------------ CASE FILTERS ------------------------------------

        case 'FILTER_ORDER_PRICE':
            return {
                ...state,
                allproducts: action.payload
            }

        case 'FILTER_TYPE':

            return {
                ...state,
                allproducts: action.payload,
                copyallproducts: action.payload,
            }

        case 'GET_ORIGIN':
                return {
                    ...state,
                    allproducts: action.payload,
        }

        case 'GET_ALL_ORIGIN':

            let origin = [];

            for(let i=0; i<state.allproducts.length; i++){
                if(!origin.includes(state.allproducts[i].origin)){
                    origin.push(state.allproducts[i].origin);
                }
            }

            return {
                ...state,
                allOrigins: origin,
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

        case 'LOGIN_USER':

                window.localStorage.setItem("cookie", JSON.stringify(action.payload.data.userFound))
                console.log("state LOGIN_USER");
                return {
                    ...state,
                    isAuthenticated: true,
                    user: action.payload
            }

        case 'FILL_USER':

            return {
                ...state,
                user: JSON.parse(window.localStorage.getItem("cookie"))
        }


        case 'PAYMENT_POST': 
            return {
                ...state,
                urlPayment:action.payload
            }

        case 'GET_WISHLIST':
            return {
                ...state,
                wishlist: action.payload
            }

            case "LOGOUT_USER":
                return {
                  ...state,
                  isAuthenticated: false,
                  user: {}
                };

            case 'POST_REVIEWS':
                    return {
                        ...state,
                        reviews: action.payload
        
                    }

            case 'GET_REVIEWS':
                return{
                    ...state,
                    reviews:action.payload
                }

//-------------------------------- CASE DEFAULT --------------------------------------

        default:
                return state;
    }
}

export default rootReducer