<template>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="right:0;left:auto;min-width:300px" @click="$event.stopPropagation();
         ">
           <div class="row m-0 p-3 pt-0 border-bottom" v-for="item in cart" :key="item.product.id" >

             <div class="col-5 ml-2 " >
               <p class="m-0">{{item.product.title}}</p>
               <p class="m-0">{{item.quantity}} x  {{item.product.price}} </p>
             </div>

              <div class="col-6 " style="text-align:end"> 
                <button type="" class="badge bg-secondary mr-2" @click="removeProduct(item)">remove</button>
              </div>

             <div class="col-6">
               Total Price : 
             </div>

            <div class="col-6" style="text-align:end">
             {{item.product.price * item.quantity}} 
            </div>
           </div>
           
             <div class="row p-2">
                <div class="col-6 ">
               Sub Total Price : 
             </div>

            <div class="col-6 " style="text-align:end">
            {{cartItemPrice}}
            </div>
            </div>
           
        </ul>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    name:'CartMenu',
     computed:{
           ...mapState(['cart']),
           ...mapGetters(['cartItemPrice']) 
        },
        methods: {
          ...mapActions(['removeProduct','getCartProducts'])
        },
        mounted() {
           this.getCartProducts();
        },
       
}
</script>
<style lang="">
    
</style>