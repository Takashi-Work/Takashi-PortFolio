<template>
  <div id="app">
    <div>
      <transition mode="out-in">
           <router-view />
      </transition> 
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#2c3e50;
  height: 100vh;
}

</style>
