<template>
  <div class="home">
    <Servers msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Servers from '@/components/Servers.vue'

export default {
  name: 'Home',
  components: {
    Servers
  }
}
</script>
