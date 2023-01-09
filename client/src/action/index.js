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



//⬇️(gaston) action para el buscador por nombre

export function getByName(name){
    return async function(dispatch){
        try {
            let json = await axios.get("http://localhost:3000/products?name=" + name);
            return dispatch({
                type: 'GET_BY_NAME',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getByBrand(brand){
    return async function(dispatch){
        try {
            let json = await axios.get("http://localhost:3000/bybrand/?brand=" + brand);
            return dispatch({
                type: 'GET_BY_BRAND',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
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

export function getDetail(id) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3000/products/${id}`);
        return dispatch({
            type: 'GET_DETAIL',
            payload: json.data
        });
    };
};

export function filterByPriceOrder(payload) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3000/products/byprice/${payload}`);
        return dispatch({
            type: 'FILTER_ORDER_PRICE',
            payload: json.data
        });
    };
};

export function filterByTypes(payload) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3000/products/bytypes/${payload}`);
        return dispatch({
            type: 'FILTER_TYPE',
            payload: json.data
        });
    };
};
