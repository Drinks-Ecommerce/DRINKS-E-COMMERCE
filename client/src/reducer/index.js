const initialState = {
    allproducts: [],
    copyallproducts:[],
    typesproducto:[],
    details: [],

    // SE FILTRARÁN LAS MARCAS DE ESE TIPO DE BEBIDA QUE SE ESTÉ RENDERIZANDO EN LA RUTA.
    all_brand_by_type: []
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

        case 'ALL_BRANDS_TYPE':
            return {
                ...state,

            }

        default:
                return state;
    }
}

export default rootReducer