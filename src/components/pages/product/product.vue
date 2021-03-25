<template>
    <div>
    
         <div class="container">
              <div class="row mt-5">
                <div class="col-4">
                        <img :src="product.image" alt="">
                </div>
                <div class="col-8">
                    <h2>{{product.title}}</h2>
                    <input type="number" class=" col-1 mr-2" name="" value="">
                    <button type="" class="btn btn-info">Add to cart</button>
                    <div class="mt-3">
                         <p>{{product.description}}</p>
                      
                    </div>
                </div>
            </div>
         </div>

       
    </div>
</template>

<script>
    export default {
        data() {
            return {
                productId : null
            }
        },
       computed:{
           product(){
               return this.$store.state.product
           }
       },
        mounted() {
            this.productId = this.$route.params.id 
            console.log(this.productId)
            this.$store.dispatch('getProduct',this.productId)
        },
       
    }
</script>

<style scoped>

</style>