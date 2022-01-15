<template>
  <div class="home">
    <v-row>
      <Info />
    </v-row>
    <v-row>
      <Servers />
    </v-row>
  </div>
</template>

<script>
import Servers from '@/components/Servers.vue'
import Info from '@/components/Info.vue'

export default {
  name: 'Home',
  components: {
    Servers,
    Info
  }
}
</script>
