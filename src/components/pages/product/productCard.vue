<template>
    <div class='mt-5'>
    
        <div class="card mx-auto" style="width: 18rem;">
            <img :src="product.image" class="card-img-top" alt="">
            <div class="card-body">
                <router-link :to="{name:'Product',params:{id:product.id}}"> <h4>{{product.title}}</h4></router-link>
                <p class="card-text">{{product.price}}</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        props:['product'],
        name:'ProductCard',
        mounted() {
           
        },
      
    }
</script>

<style scoped>

</style>