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


        default:
                return state;
    }

}

export default rootReducer