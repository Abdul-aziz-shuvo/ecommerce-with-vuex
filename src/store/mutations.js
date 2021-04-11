export const SET_PRODUCTS = (state,products) => {
    state.products = products
}

export const SET_PRODUCT = (state,product) => {
    state.product = product
}

export const ADD_TO_CART = (state,{product,quantity}) => {
    var productInCart = state.cart.find(item => {
       return item.product.id == product.id
    })
    if(productInCart){
        productInCart.quantity += quantity
        return;
    }
    state.cart.push({
        product,
        quantity
    })
}


export const SET_CART_PRODUCTS = (state,items) => {
    state.cart = items
}

export const REMOVE_PRODUCT = (state,product) => {

    state.cart = state.cart.filter(item => {
        return item.product.id != product.product.id
    })

}
