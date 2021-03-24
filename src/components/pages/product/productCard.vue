<template>
    <div class='mt-5'>
    
        <div class="card mx-auto" style="width: 18rem;">
            <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Product title</h5>
                <router-link :to="{name:'product',params:{id:id}}">{{product.title}} </router-link>
                <p class="card-text">$100</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        props:['id,product'],
      
    }
</script>

<style scoped>

</style>