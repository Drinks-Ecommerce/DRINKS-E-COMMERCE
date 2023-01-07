const initialState = {
    allproducts: [],
    copyallproducts:[],
    typesproducto:[],
    details: []
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

        // case 'FILTER_ORDER_PRICE':
        //     return {
        //         ...state,
        //         allproducts: action.payload
        //     }

            case 'FILTER_TYPES':

            const alltypes= state.copyallproducts;
            const filtradostypes= action.payload === 'TINTO' ? alltypes.filter(e => e.type) : alert('NO HAY TYPES');

            return{
                ...state,
                allproducts: filtradostypes

            }


        default:
                return state;
    }

}

export default rootReducer