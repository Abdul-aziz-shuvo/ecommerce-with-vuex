<template>
    <div id="app">
      <Nav />
      <router-view></router-view>
    </div>
</template>

<script>

import Nav from './components/header/header'
export default {
  name: 'App',
  component:{
    Nav
  }
 
}
</script>

<style>

</style>
