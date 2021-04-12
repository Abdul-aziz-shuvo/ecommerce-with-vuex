<template>
    <div>
    
         <div class="container">
              <div class="row mt-5">
                <div class="col-4">
                        <img :src="product?.image" alt="" >
                </div>
                <div class="col-8">
                    <h2>{{product?.title}}</h2>
                    <input type="number" class=" col-1 mr-2" name="" value="">
                    <button type="" class="btn btn-info" @click="addCart">Add to cart</button>
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
        computed:{
            ...mapState(['product'])
          
       },
       methods: {
         
            addCart(){
                this.addToCart({
                     product : this.product,
                     quantity : 1
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