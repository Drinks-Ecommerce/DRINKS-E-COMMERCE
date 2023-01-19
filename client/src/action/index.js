import axios from 'axios';

// --------------------------- ACTIONS PRODUCTS ------------------------------------

export function getProducts(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3000/products");
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        });
    };
};

export function creatProducts(payload){
    return async function(dispatch){
    let json = await axios.post("http://localhost:3000/products", payload);
    return dispatch({
        type:"CREATE_PRODUCTS",
        payload: json
        });
    };
};

export function LoginUser(payload){
    return async function(dispatch){
        try{
            let json = await axios.post("http://localhost:3000/signIn", payload);
            return dispatch({
                type: "LOGIN_USER",
                payload: json
            })
        } catch(error){
            console.log(error)
            }
    }
}


// export function deleteProduct(id) {
//     return async function(dispacth) {
//         const json = await axios.delete(`http://localhost:3000/products/${id}`);
//         return dispatch({
//             type: 'DELETE_PRODUCT',
//             payload: json.data
//         });
//     };
// };

// export function updateProduct(id, payload) {
//     return async function(dispatch) {
//         const json = await axios.put(`http://localhost:3000/products/${id}`, payload);
//         return dispatch({
//             type: 'UPDATE_PRODUCT',
//             payload: json.data
//         });
//     };
// };

export function getDetail(id) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3000/products/${id}`);
        return dispatch({
            type: 'GET_DETAIL',
            payload: json.data
        });
    };
};

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

/*export function getByBrand(payload){
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
}*/

export function getByBrand(payload){
    return async function(dispatch){
        return dispatch({
            type: 'GET_BY_BRAND',
            payload: payload
        });
    };
};

export function getByOrigin(payload){
    return async function(dispacth){
        return dispacth({
            type: 'GET_BY_ORIGIN',
            payload: payload
        })
    }
}

//--------------------------------- ACTIONS TYPES ---------------------------------

export function getTypes(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3000/types");
        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        });
    };
};



// export function deleteProduct(id) {
//     return async function(dispacth) {
//         const json = await axios.delete(`http://localhost:3000/products/${id}`);
//         return dispatch({
//             type: 'DELETE_PRODUCT',
//             payload: json.data
//         });
//     };
// };

// export function updateProduct(id) {
//     return async function(dispatch) {
//         const json = await axios.post("http://localhost:3000/types", payload);
//         return dispatch({
//             type: 'POST_TYPE',
//             payload: json
//         });
//     };
// };

// export function deleteType(id) {
//     return async function(dispatch) {
//         const json = await axios.delete(`http://localhost:3000/types/delete/${id}`);
//         return dispatch({
//             type: 'DELETE_TYPE',
//             payload: json.data
//         })
//     }
// };



//--------------------------------- ACTIONS USER ROL ----------------------------------



export function postRol(payload) {
    return async function(dispatch) {
        const json = await axios.post("http://localhost:3000/roles", payload);
        return dispatch({
            type: 'CREATE_ROLE',
            payload: json
        });
    };
};

export function getRoles(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3000/roles");
        return dispatch({
            type: 'GET_ROL',
            payload: json.data
        });
    };
};/////////////////

//---------------------------------- ACTIONS USER ---------------------------------

export function getUsers() {
    return async function(dispatch) {
        const json = await axios("http://localhost:3000/users");
        return dispatch({
            type: 'GET_USERR',
            payload: json.data
        });
    };
};////////////////////////////////

// export function getUsersByEmail(email) {
//     return async function(dispatch) {
//         const json = await axios(`http://localhost:3000/users/${email}`);
//         return dispatch({
//             type: 'GET_USER_EMAIL',
//             payload: json.data
//         });
//     };
// };

export function getUsersByUserName(username) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3000/users/username/${username}`);
        return dispatch({
            type: 'GET_USER_NAME',
            payload: json.data
        });
    };
};

export function getUsersById(id) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3000/users/id/${id}`);
        return dispatch({
            type: 'GET_USER_ID',
            payload: json.data
        });
    };
};

export function deleteUser(id) {
    return async function(dispatch) {
        const json = await axios.delete(`http://localhost:3000/users/delete/${id}`);
        return dispatch({
            type: 'DELETE_USER',
            payload: json.data
        });
    };
};

export function updateUser(id, payload) {
    return async function(dispatch) {
        const json = await axios.put(`http://localhost:3000/users/update/${id}`, payload);
        return dispatch({
            type: 'UPDATE_USER',
            payload: json.data
        });
    };
};

// export function postSignIn(payload) {
//     return async function(dispatch) {
//         const json = await axios.post("http://localhost:3000/signIn", payload);
//         return dispatch({
//             type: 'SIGN_IN',
//             payload: json
//         });
//     };
// };

export function postSignUp(payload) {
    return async function(dispatch) {
        const json = await axios.post("http://localhost:3000/signUp", payload);
        return dispatch({
            type: 'SIGN_UP',
            payload: json
        });
    };
};



//------------------------------ ACTIONS FILTERS ----------------------------------

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
        const json =  await axios(`http://localhost:3000/products/bytypes/${payload}`);
        return dispatch({
            type: 'FILTER_TYPE',
            payload: json.data
        });
    };
};

export function getAllOrigins() {
        return async function(dispatch) {
            return dispatch({
                type: 'GET_ALL_ORIGIN',
            });
        };
    };

    export function getAllBrands(){
        return async function(dispatch){
            return dispatch({
                type: 'GET_ALL_BRAND',
            });
        };
    };

    export function FillUser(){
        return async function(dispatch){
            return dispatch({
                type: 'FILL_USER',
            })
        }
    }

    export function DeleteUser(){
        return async function(dispacth){
            return dispacth({
                type: 'DELETE_USER',
            })
        }
    }
    

