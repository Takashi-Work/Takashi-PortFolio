<template>
 <nav class="navigation-menu" :class="{'show':showNavi}">
   <div @click="shows" class="navi-menu1" >
     <span class="navigation-menu-bars"></span>
   </div>

   <ul class="menu-list">
     <li class="menu-list-item"><router-link  to="/">Home</router-link></li>
     <li class="menu-list-item"><router-link  to="/profile">Profile</router-link></li>
     <li class="menu-list-item"><router-link  to="/work">Work</router-link></li>
     <li class="menu-list-item"><router-link  to="/contact">Contact</router-link></li>
   </ul>
 </nav>
</template>

<script>
export default {
  name: 'UniqueNavi',
  data: () => {
    return {
      showNavi: false
    }
  },
  methods: {
    shows () {
      if (this.showNavi === true) {
        this.showNavi = false
      } else {
        this.showNavi = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
   .navigation-menu-bars,
.navigation-menu-bars::before,
.navigation-menu-bars::after
{
  cursor: pointer;
  border-radius: 1px;
  height: 2px;
  width: 25px;
  background: #fff;
  position: absolute;
  left: 0%;
  top: 50%;
  display: block;
  transition: all 0.3s;
}

.navigation-menu
{
  background-color: transparent;
  height: 100%;
  position: fixed;
  width: 599px;
  transform: translateX(-100%);
  transition: transform 0.3s 0.3s;
  color: #fff;
  font-family: tahoma;
  font-size: 2.4rem;
  z-index: 30;

  &.show
  {
    transform: translateX(0);

    .navigation-menu-bars
    {
      background-color: transparent;
    }

    .navigation-menu-bars::before,
    .navigation-menu-bars::after
    {
      top: 0;
    }

    .navigation-menu-bars::before
    {
      transform: rotate(45deg);
    }

    .navigation-menu-bars::after
    {
      transform: rotate(-45deg);
    }

    .menu-list-item
    {
      opacity: 1;
    }

    .menu-list-item:nth-child(1)
    {
      transition-delay: 1s;
    }

    .menu-list-item:nth-child(2)
    {
      transition-delay: 1.25s;
    }

    .menu-list-item:nth-child(3)
    {
      transition-delay: 1.5s;
    }

    .menu-list-item:nth-child(4)
    {
      transition-delay: 1.75s;
    }
  }
}
@media (max-width: 600px)
{
  .navigation-menu
  {
    width: 85%;
  }

  .menu-list
  {
   margin: -75px 0 0 0;
   padding: 10px 0 0 0;
  }

  .menu-list-item
  {
    margin: 0;
    height: 40px;
  }

}

.navigation-menu::before
{
  background:rgba(223, 149, 79, 0.643);
  content: '';
  height: 400%;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%) rotate(40deg);
  width: 100%;
  z-index: 0;
}

.navi-menu1
{
  cursor: pointer;
  height: 30px;
  position: absolute;
  right: -40px;
  top: 5px;
  width: 30px;
}

.navigation-menu-bars::before,
.navigation-menu-bars::after
{
  content: '';
}

.navigation-menu-bars::before
{
  left: 0px;
  top: -8px;
}

.navigation-menu-bars::after
{
  left: 0px;
  top: 8px;
}

.menu-list
{
  padding: 59px;
  position: relative;
  z-index: 50;
}

.menu-list-item
{
  margin: 40px 0;
  opacity: 0;
  transition: opacity 0.5s 0.5s;

  a
  {
    color: #fff;
  }
}

h1
{
  text-align: center;
}
</style>
