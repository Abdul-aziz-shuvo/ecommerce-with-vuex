<template>
    <div>
    
         <div class="container">
              <div class="row mt-5">
                <div class="col-4">
                        <img :src="product?.image" alt="" >
                </div>
                <div class="col-8">
                    <h2>{{product?.title}}</h2>
                    <input type="number" min="1" v-model.number="quantity" class=" col-1 mr-2" name="" >
                    <span> Price : {{product?.price}}</span>
                    <button type="" class="btn btn-info d-block mt-3" @click="addCart" >Add to cart</button>
                    <div class="mt-3">
                         <p>{{product?.description}}</p>
                      
                    </div>
                </div>
            </div>
         </div>

       
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
    export default {
        name:'Product',
        props:['id'],
        data() {
            return {
                quantity:1
            }
        },
        computed:{
            ...mapState(['product'])
          
       },
       methods: {
         
            addCart(){
                this.addToCart({
                     product : this.product,
                     quantity : this.quantity
                 });
            },
              ...mapActions(['addToCart','getProduct']),
       },
        created() {
            this.getProduct(this.id)
        }
    }
</script>

<style scoped>

</style>