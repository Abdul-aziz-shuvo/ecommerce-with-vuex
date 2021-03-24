<template>
    <div>
        <div  class="row">
            <div class="col-12 col-md-4" v-for="product in products" :key="product.id">
                <product-card :product="product"/>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import ProductCard from './productCard'
    export default {
        components:{
            ProductCard
        },
        computed:{
            products(){
               return this.$store.state.products;
            }
        },
        mounted() {
            console.log(this.$store)
            this.$store.dispatch('getProducts');
        },
    }
</script>

<style scoped>

</style>