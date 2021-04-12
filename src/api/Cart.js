import Api from './Api'
export default {
    data(){
        return Api.get('cart')
    },
    store(data){
        return Api.post('cart',data)
    },
    delete(id){
        return Api.delete(`cart/${id}`)
    }
}