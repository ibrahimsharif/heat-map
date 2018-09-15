<template>

  <div id="app">
    <head>
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    </head>
    <v-app id="inspire" dark>
      <v-navigation-drawer
        clipped
        fixed
        v-model="drawer"
        width="320"
        app
      >
        <v-list dense>
          <v-list-tile @click="$router.push({name:'about'})">
            <v-list-tile-action>
              <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >About the project</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="$router.push({name:'create'})">
            <v-list-tile-action>
              <v-icon>place</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Optimize existing AED locations</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="$router.push({name:'optimize'})">
            <v-list-tile-action>
              <v-icon>assessment</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Create AED locations from incidents</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
      <img class="logo" v-bind:src="'../../static/heart-with-pulse.png'" alt="hearth with a hearth pulse in it.">
        <v-toolbar-title>Hearth Map</v-toolbar-title>
      </v-toolbar>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: true,
  }),
};
</script>

<style>
 .logo {
   width: 64x;
   height: 64px;
 } 
</style>
