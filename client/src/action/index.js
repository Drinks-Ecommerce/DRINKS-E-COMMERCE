import axios from 'axios';

export function getProducts(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3000/products")

        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        })
    }
}

export function getTypes(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3000/types")

        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        })
    }
}

export function creatProducts(payload){
    return async function(dispatch){
      let json = await axios.post("http://localhost:3000/products", payload)

      return dispatch({
        type:"CREATE_PRODUCTS",
        payload: json
      })

    }
}

// export function getDetail(id) {
//     return async function(dispatch) {
//         const json = await axios(`http://localhost:3000/products/${id}`);
//         return dispatch({
//             type: 'GET_DETAIL',
//             payload: json.data
//         });
//     };
// };

export function filtertypes(payload){
    return{
        type: 'FILTER_TYPES',
        payload
    }
}