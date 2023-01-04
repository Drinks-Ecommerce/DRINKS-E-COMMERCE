const initialState = {
    allproducts: [],
    copyallproducts:[],
    typesproducto:[]
}

function rootReducer(state = initialState, action){

    switch (action.type){
        case 'GET_PRODUCTS' :
            return{
                ...state,
                allproducts: action.payload,
                copyallproducts : action.payload

            }

        case 'GET_TYPES' :
            return{
                ...state,
                typesproducto: action.payload
            }

        default:
                return state;
    }

}

export default rootReducer