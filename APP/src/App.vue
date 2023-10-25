<template>
  <v-app class="app-wrapper">
    <v-main>
      <router-view/>
    </v-main>
    <modal></modal>
  </v-app>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    modal: Modal
  },
  data: () => ({
    //
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500&display=swap');

body{
  background: #F0F1F2;
  font-family: 'Raleway', sans-serif;
}
.app-wrapper{
  background: #F0F1F2 !important;
}
</style>
