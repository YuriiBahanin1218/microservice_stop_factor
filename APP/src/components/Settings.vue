<template>
  <div class="settings-wrapper">
    <div style="overflow: scroll; height: 720px;" class="scroll-hide">
      <div v-for="(item, index) of stops" :key="index" style="margin-bottom: 12px" @click="openPanel(`#customItem${index}`)" :id="`customItem${index}`" class="helper">
      <v-row class="item-wrapper">
        <v-col cols="12" class="d-flex justify-space-between py-0 my-0 align-center">
          <div class="d-flex">
            <div class="arrow-pic__wrapper">
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L12 12L1.5 22.5" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="item-text">{{ item.text }}</span>
          </div>
          <div class="bin-pic__wrapper">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" @click="deleteGroup(index)">
              <path d="M17.5 12.5L17.5 21.25" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.5 12.5L12.5 21.25" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.5 7.5H7.5V25C7.5 25.6904 8.05964 26.25 8.75 26.25H21.25C21.9404 26.25 22.5 25.6904 22.5 25V7.5Z" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 7.5H25" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.75 3.75H11.25C10.5596 3.75 10 4.30964 10 5V7.5H20V5C20 4.30964 19.4404 3.75 18.75 3.75Z" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </v-col>
      </v-row>
      <v-row class="stops-panels mt-0" @click.stop="">
        <v-col cols="12" v-for="(stop, idx) of item.subItems" :key="285 + idx" class="py-0">
          <div class="stop-wrapper d-flex justify-space-between align-center">
            <span>{{ stop.text }}</span>
            <div class="pics-wrapper d-flex">
              <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.959 9.92481L23.8768 9.78249C23.65 9.38997 23.5343 8.94319 23.5419 8.48995L23.5793 6.26642C23.587 5.81202 23.3474 5.38926 22.9536 5.16235L19.5328 3.19109C19.14 2.96475 18.6555 2.96881 18.2665 3.20169L16.3677 4.33867C15.9796 4.57105 15.5357 4.69378 15.0834 4.69378H14.9187C14.4654 4.69378 14.0206 4.57052 13.632 4.33718L11.7244 3.19197C11.3341 2.95765 10.8472 2.95405 10.4535 3.18257L7.04354 5.16168C6.65167 5.38912 6.41356 5.81079 6.42118 6.26382L6.45864 8.48995C6.46626 8.94319 6.35051 9.38997 6.12377 9.78249L6.04266 9.9229C5.8158 10.3156 5.48637 10.6393 5.08967 10.8591L3.14606 11.9362C2.74769 12.157 2.50092 12.5769 2.50196 13.0324L2.51091 16.9721C2.51193 17.4248 2.75763 17.8416 3.15322 18.0617L5.0875 19.1377C5.48556 19.3592 5.81555 19.6851 6.04184 20.0805L6.12874 20.2323C6.35229 20.6228 6.46628 21.0665 6.45868 21.5164L6.42127 23.7328C6.41359 24.1873 6.65319 24.6101 7.04698 24.837L10.4678 26.8082C10.8606 27.0346 11.3451 27.0305 11.734 26.7976L13.6329 25.6606C14.021 25.4283 14.4648 25.3055 14.9172 25.3055H15.0818C15.5351 25.3055 15.9799 25.4288 16.3686 25.6621L18.2762 26.8073C18.6665 27.0417 19.1533 27.0453 19.547 26.8168L22.957 24.8376C23.3489 24.6102 23.587 24.1885 23.5794 23.7355L23.5419 21.5094C23.5343 21.0561 23.65 20.6093 23.8768 20.2168L23.9579 20.0764C24.1848 19.6837 24.5142 19.3601 24.9109 19.1402L26.8545 18.0631C27.2529 17.8424 27.4996 17.4224 27.4986 16.9669L27.4897 13.0272C27.4886 12.5745 27.2429 12.1577 26.8473 11.9377L24.9084 10.859C24.5133 10.6392 24.1852 10.3163 23.959 9.92481Z" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2" @click="deleteStop(index, idx)">
                <path d="M17.5 12.5L17.5 21.25" stroke="#F52B48" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 12.5L12.5 21.25" stroke="#F52B48" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.5 7.5H7.5V25C7.5 25.6904 8.05964 26.25 8.75 26.25H21.25C21.9404 26.25 22.5 25.6904 22.5 25V7.5Z" stroke="#F52B48" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 7.5H25" stroke="#F52B48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.75 3.75H11.25C10.5596 3.75 10 4.30964 10 5V7.5H20V5C20 4.30964 19.4404 3.75 18.75 3.75Z" stroke="#F52B48" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center">
          <button class="add-btn" @click.stop="openModal(index)">Добавить</button>
        </v-col>
      </v-row>
      </div>
    </div>
    <div class="add-block-btn d-flex justify-center align-center">
      <span class="add-block-btn__wrapper" @click="addGroup">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 18H31.5" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 31.5L18 4.5" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Settings-component',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('stops', { stops: 'getStops' })
  },
  methods: {
    openPanel (el) {
      const block = document.querySelector(el)
      if (block.classList.contains('active')) return block.classList.remove('active')
      block.classList.add('active')
    },
    openModal (idx) {
      this.$store.dispatch('stops/setIndexAction', idx)
      this.$store.dispatch('modal/toogleOpenAction', { open: true })
    },
    deleteStop (index, idx) {
      this.$store.dispatch('stops/deleteStopAction', { index: index, idx: idx })
    },
    deleteGroup (index) {
      this.$store.dispatch('stops/deleteGroupAction', { index: index })
    },
    addGroup () {
      this.$store.dispatch('modal/toogleOpenAction', { open: true, group: true })
    }
  }
}
</script>

<style scoped>
.scroll-hide::-webkit-scrollbar {
  width: 0;
}
.settings-wrapper {
  position: relative;
  height: 840px;
  width: 97%;
  background: #FFFFFF;
  border-radius: 36px;
  border: none;
  margin-top: 107px;
  padding-top: 40px;
  padding-bottom: 40px;
}
.item-wrapper {
  cursor: pointer;
  position: relative;
  padding: 0px 25px 0 40px;
  background: #E7E9EB;
  border-radius: 100px;
  height: 72px;
  width: 98%;
  margin: 0 auto;
}
.stops-panels {
  display: none;
  padding: 0px 20px 0 40px;
  margin-bottom: 12px;
}
.active > .item-wrapper {
  background: #576270;
}
.active > .item-wrapper .item-text {
  color: #FFFFFF;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
}
.active > .stops-panels {
  display: block;
}
.arrow-pic__wrapper svg{
  transition-duration: 0.2s;
}
.active  .item-wrapper  .arrow-pic__wrapper svg{
  transition-duration: 0.2s;
  transform: rotate(90deg);
  margin-top: 2px;
}
.active  .item-wrapper  .arrow-pic__wrapper svg path{
  stroke: #FFFFFF;
}
.active  .item-wrapper  .bin-pic__wrapper svg path{
  stroke: #F52B48;
}
.stop-wrapper {
  height: 56px;
  padding: 0px 35px 0 30px;
  border-bottom: 1px solid #E7E9EB;
}
.item-text{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #576270;
}
.arrow-pic__wrapper {
  margin-right: 12px;
}
.bin-pic__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
}
.add-btn {
  font-family: 'Raleway';
  font-style: normal;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  background: #0DB2E7;
  border-radius: 100px;
  width: 200px;
  height: 48px;
}
.add-block-btn {
  cursor: pointer;
  margin: 0 auto;
  width: 100%;
  position: absolute;
  bottom: 40px;
}
.add-block-btn__wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0DB2E7;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
}
@media only screen and (max-height: 900px) {
  .settings-wrapper{
    height: 565px;
  }
  .scroll-hide{
    height: 445px !important;
  }
}
</style>
