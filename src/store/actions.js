import axios from 'axios'
export const getProducts = ({commit}) => {
   
   axios.get('http://127.0.0.1:8000/api/products')
   .then(resp => {
     
       commit('SET_PRODUCTS',resp.data)
   })
}

export const getProduct = ({commit},productId) => {
    
    axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
    .then(resp => {
      
        commit('SET_PRODUCT',resp.data)
    })
}


export const  addToCart = ({commit},{product,quantity}) => {

        commit('ADD_TO_CART',{product,quantity})
    
}