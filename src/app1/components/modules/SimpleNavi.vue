<template>
   <ul id="nav">
      <li class="nav-item"><h2>Busines_Manager</h2></li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li v-if="!loggedIn"><router-link to="/login">Login</router-link></li>
      <li v-if="!loggedIn"><router-link to="/register">Register</router-link></li>
      <li v-if="loggedIn"><router-link to="/logout">Logout</router-link></li>
    </ul>
</template>

<script>
export default {
  computed: {
    loggedIn () {
      return this.$store.getters.loggedIn
    }
  }
}
</script>

<style lang="scss" scoped>

.flex-center {
  display: flex;
  justify-content: center;
}

#nav {
  display: flex;
  list-style: none;
  padding: 15px 0;
  margin: 0;
  justify-content: flex-end;
  background:darkslategray;

  margin-bottom: 0;
  .nav-item {
    margin-right: auto;
    color:floralwhite;
  }
  a {
    color:dimgray;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
