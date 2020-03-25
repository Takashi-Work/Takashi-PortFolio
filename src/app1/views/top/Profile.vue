<template> 
    <div>
      <UniqueNavi></UniqueNavi>
      <AboutMe></AboutMe>
    </div>
</template>

<script>
import AboutMe from '@/app1/components/starting-top/AboutMe.vue'
import UniqueNavi from '@/app1/components/modules/UniqueNavi.vue'
export default {
  name: 'Profile',
  components: {
    AboutMe,
    UniqueNavi
  }
}
</script>
