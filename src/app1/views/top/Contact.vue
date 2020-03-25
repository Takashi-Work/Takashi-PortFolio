<template>
 <div>
    <UniqueNavi></UniqueNavi>
    <ContactForm></ContactForm>
 </div>
</template>

<script>
import ContactForm from '@/app1/components/starting-top/ContactForm.vue'
import UniqueNavi from '@/app1/components/modules/UniqueNavi.vue'
export default {
  name: 'Contact',
  components: {
    ContactForm,
    UniqueNavi,
  }
}
</script>
