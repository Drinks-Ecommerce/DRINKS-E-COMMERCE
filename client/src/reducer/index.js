const initialState = {
    allproducts: [],
    copyallproducts:[],
    typesproducto:[],
    details: [],
    // product: [], estado creado para que se lo use en el componente del admin para que pueda borrar y modificar el producto.
    // user: [], estado creado para el get y post del rol del usuario.
    // type: [] estado creado para el delete de type.
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
        // case 'POST_TYPE':
        //     return {
        //         ...state
        //     }

        // case 'DELETE_TYPE':
        //     return {
        //         ...state,
        //         type: action.payload
        //     }

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

        // case 'CREATE_ROLE':
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