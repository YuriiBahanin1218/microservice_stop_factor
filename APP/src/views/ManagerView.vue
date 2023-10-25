<template>
  <div>
    <cheader></cheader>
    <cmenu></cmenu>
    <div class="main-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Menu from '../components/Menu.vue'
export default {
  name: 'Manager-view',
  components: {
    cheader: Header,
    cmenu: Menu
  }
}
</script>

<style scoped>
.main-wrapper{
  margin-left: 360px;
}
@media only screen and (max-width: 1400px) {
  .main-wrapper{
    margin-left: 300px;
  }
}
</style>
