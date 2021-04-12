
import Product from '../api/Product'
import Cart from '../api/Cart'



export const getProducts = ({commit}) => {
   
   Product.all().then(resp => {
       commit('SET_PRODUCTS',resp.data)
   })
}

export const getProduct = ({commit},productId) => {
    Product.show(productId).then(resp => {
        commit('SET_PRODUCT',resp.data)
    })
}


export const  addToCart = ({commit},{product,quantity}) => {
        commit('ADD_TO_CART',{product,quantity})
}


export const  removeProduct = ({commit},product) => {
    Cart.delete(product.product.id)
    commit('REMOVE_PRODUCT',product)
}



export const  getCartProducts = ({commit}) => {
    Cart.data()
    .then(res => {
        commit('SET_CART_PRODUCTS',res.data)
    })
}