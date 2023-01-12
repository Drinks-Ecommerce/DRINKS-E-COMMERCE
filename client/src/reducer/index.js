const initialState = {
    allproducts: [],
    copyallproducts:[],
    typesproducto:[],
    details: [],
    // product: [], ruta echa para que se la use en el componente del admin para que pueda borrar y modificar el producto.
    // user: [] ruta echa para el get y post del usuario
}

function rootReducer(state = initialState, action){

    switch (action.type){
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
        case 'GET_TYPES' :
            return{
                ...state,
                typesproducto: action.payload
            }

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

        // case 'DELETE_PRODUCT':
        //     return {
        //         ...state,
        //         product: action.payload
        //     }

        // case 'UPDATE_PRODUCT':
        //     return {
        //         ...state,
        //         product: action.payload
        //     }

        // case 'GET_ROL':
        //     return {
        //         ...state,
        //         user: action.payload
        //     }

        // case 'CREATE_USER':
        //     return {
        //         ...state
        //     }

        case 'FILTER_ORDER_PRICE':
            return {
                ...state,
                allproducts: action.payload
            }

        case 'FILTER_TYPE':
            return {
                ...state,
                allproducts: action.payload,
            }

        case 'GET_ORIGIN':
                return {
                    ...state,
                    allproducts: action.payload,
                }

        default:
                return state;
    }
}

export default rootReducer