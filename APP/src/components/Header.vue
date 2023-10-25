<template>
  <div class="header-wrapper">
    <v-img src="../assets/tsod.svg" max-width="56"></v-img>
    <div class="d-flex justify-space-between right-wrapper">
      <search></search>
      <div class="d-flex justify-space-between" style="width: 148px">
        <span class="pic-wrapper">
          <v-icon large
          >{{ icons.mdiBellOutline }}</v-icon>
        </span>
        <v-avatar size="64">
          <img
            :src="helper()"
            alt="user"
          >
        </v-avatar>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Search.vue'
import { mdiBellOutline } from '@mdi/js'

export default {
  name: 'Header-component',
  components: {
    search: Search
  },
  data () {
    return {
      icons: {
        mdiBellOutline
      }
    }
  },
  methods: {
    getImgUrl (pet) {
      const images = require.context('../assets/', false, /\.svg$/)
      return images('./' + pet + '.svg')
    },
    helper () {
      const helpParam = window.location.href.includes('manager') ? 'manager' : 'user'
      return this.getImgUrl(helpParam)
    }
  }
}
</script>

<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 96px;
  background: #FFFFFF;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
}
.right-wrapper {
  width: 756px;
}
.pic-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F0F1F2;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
}
</style>
