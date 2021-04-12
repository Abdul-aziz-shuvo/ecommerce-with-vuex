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
import {mapState,mapActions} from 'vuex'
import ProductCard from './productCard'
    export default {
        name:'ProductList',
        components:{
            ProductCard
        },
        computed:{
            ...mapState(['products'])
          
        },
        methods: {
            ...mapActions(['getProducts'])
        },
        mounted() {
            this.getProducts()
        },
    }
</script>

<style scoped>

</style>