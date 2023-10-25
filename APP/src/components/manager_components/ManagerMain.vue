<template>
  <div class="home-wrapper d-flex">
    <div class="first-screen screen">
      <stopScreen></stopScreen>
    </div>
    <div class="second-screen screen">
      <factorScreen></factorScreen>
    </div>
  </div>
</template>

<script>
import FactorScreen from '../FactorScreen.vue'
import StopFactorScreen from '../StopFactorScreen.vue'
export default {
  name: 'ManagerMain-component',
  components: {
    factorScreen: FactorScreen,
    stopScreen: StopFactorScreen
  }
}
</script>

<style scoped>
.screen {
  background: #FFFFFF;
  border-radius: 36px;
  border: none;
  margin-top: 39px;
  padding: 40px;
}
.first-screen{
  height: 904px;
  width: 800px;
  margin-right: 40px;
}
.second-screen {
  height: 904px;
  width: 680px;
}
@media only screen and (max-height: 900px) {
  .home-wrapper{
    height: 565px;
  }
}
@media only screen and (min-width: 1921px) {
  .first-screen{
    width: 56.7%;
  }
  .second-screen {
    width: 40%;
  }
}
@media only screen and (max-width: 1400px) {
  .first-screen{
    width: 56.7%;
    margin-right: 20px;
  }
  .second-screen {
    width: 40%;
  }
}
</style>
