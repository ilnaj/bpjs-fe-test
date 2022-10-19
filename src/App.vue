<template>
  <div id="app">
    <div class="page">
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page{
    padding: 20px;
    text-align: left;
    box-shadow: 1px 1px 10px grey;
    margin: 0px 20%;
}
</style>
