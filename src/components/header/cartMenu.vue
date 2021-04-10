<template>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="right:0;left:auto;min-width:300px" @click="$event.stopPropagation();
         ">
           <div class="row m-0 border-top pt-0" v-for="item in cart" :key="item.product.id" >

             <div class="col-5 ml-2 " >
               <p class="m-0">{{item.product.title}}</p>
               <p class="m-0">{{item.quantity}} x  {{item.product.price}} </p>
             </div>

              <div class="col-6 " style="text-align:end"> 
                <button type="" class="badge bg-secondary mr-2">remove</button>
              </div>

             <div class="col-6">
               Total Price : 
             </div>

            <div class="col-6" style="text-align:end">
             {{item.product.price * item.quantity}} 
            </div>
           </div>
           
             <div class="row">
                <div class="col-6">
               Sub Total Price : 
             </div>

            <div class="col-6" style="text-align:end">
            {{cartPrice}}
            </div>
            </div>
           
        </ul>
</template>
<script>
export default {
    name:'CartMenu',
     computed:{
             cart(){
               return this.$store.state.cart;
           },
           cartPrice(){
            return this.$store.getters.cartItemPrice
          }
           
        },
       
}
</script>
<style lang="">
    
</style>