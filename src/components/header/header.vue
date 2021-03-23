<template>
    <div>
       
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>

      <div class="dropdown">
        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           Cart
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="right:0;left:auto;min-width:300px">
           
           <div class="row m-0">
             <div class="col-5 ml-2 border-bottom">
               <p class="m-0">Product Title</p>
               <p class="m-0">1 x 10 </p>
             </div>

              <div class="col-6 border-bottom" style="text-align:end"> 
                <button type="" class="badge bg-secondary mr-2">remove</button>
             </div>
           </div>
           
        </ul>
      </div>

  </div>
</nav>
       
    </div>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>

<style scoped>

</style>