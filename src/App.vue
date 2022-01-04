<template>
  <v-app>
    <v-app-bar
    app
    dark
      elevation="8"
      shaped
    >
      <v-toolbar-title>Precision Gaming</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn class="mr-2" text color="primary">Home</v-btn>
        <v-btn class="mr-2" text>Info</v-btn>
        <v-btn class="mr-2" text>Bans</v-btn>
        <v-btn text>Discord</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
