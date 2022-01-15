<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
    app
    color="secondary"
    elevation="8"
    class="rounded-b-xl"
    >
      <v-toolbar-title>
        <v-img
          max-width="120"
          src="@/assets/logo.png"
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn class="mr-2 rounded-xl" text>Home</v-btn>
        <v-btn class="mr-2 rounded-xl" text href="https://stats.prgaming.net" target="_blank">Stats</v-btn>
        <v-btn class="mr-2 rounded-xl" text href="https://prgaming.net/bans" target="_blank">Bans</v-btn>
        <v-btn class="rounded-xl" text href="https://discord.gg/ftZvZ943bk" target="_blank">Discord</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>
