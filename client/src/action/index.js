import axios from 'axios';

export default function getProducts(){
    return async function(dispatch){
        let json = await axios.get("http:localhost:3000/products")

        return dispatch({
            type:"GET_PRODUCTS",
            payload: json.data
        })
    }
}

export default function getTypes(){
    return async function(dispatch){
        let json = await axios.get("http:localhost:3000/types")

        return dispatch({
            type:"GET_TYPES",
            payload: json.data
        })
    }
}

export default function filtertypes(payload){
    return{
        type: 'FILTER_TYPES',
        payload
    }
}