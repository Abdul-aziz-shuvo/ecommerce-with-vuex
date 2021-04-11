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
        axios.post(`http://127.0.0.1:8000/api/cart`,{
            product_id : product.id,
            quantity
        })
}


export const  removeProduct = ({commit},product) => {
    axios.delete(`http://127.0.0.1:8000/api/cart/${product.product.id}`)
    commit('REMOVE_PRODUCT',product)

}



export const  getCartProducts = ({commit}) => {

    axios.get(`http://127.0.0.1:8000/api/cart`).then(res => {
        commit('SET_CART_PRODUCTS',res.data)
    })

}