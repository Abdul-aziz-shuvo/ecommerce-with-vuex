<template>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="right:0;left:auto;min-width:300px" @click="$event.stopPropagation();
         ">
           <div class="row m-0">
             <div class="col-5 ml-2 border-bottom">
               <p class="m-0">Product Title</p>
               <p class="m-0">1 x 10 </p>
             </div>

              <div class="col-6 border-bottom" style="text-align:end"> 
                <button type="" class="badge bg-secondary mr-2">remove</button>
              </div>

             <div class="col-6">
               Total Price : 
             </div>

            <div class="col-6" style="text-align:end">
              $123
            </div>
           </div>
           
        </ul>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>