<template>

    <div>
       <div class="container">
            <product-list />
       </div>
    </div>
</template>

<script>
    import ProductList from './product/productList'
    export default {
        name:'Home',
       components:{
           ProductList
       },
     
    }
</script>

<style scoped>

</style>