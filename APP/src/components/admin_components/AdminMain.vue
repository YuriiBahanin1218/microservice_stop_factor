<template>
  <div class="home-wrapper d-flex">
    <div class="first-screen screen">
      <pSelct class="helper"></pSelct>
      <div class="clients-wrapper">
        <div class="wrapper-title">Списки выбранных Клиентов</div>
        <div v-if="stops.length > 0" class="stops-block scroll-hide">
          <div v-for="(stop, index) of stops" :key="index">
            <div class="d-flex bank-title__wrapper">
              <span><img class="pic" :src="getImgUrl(stop.src)" :alt="`logo${index}`"/></span>
              <span class="bank-name d-flex align-center ml-3">{{ stop.name }}</span>
            </div>
            <div v-for="(subStop, idx) of stop.subItems" :key="(idx+33) * 3" class="stop-item d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <span class="mr-3">
                  <img class="pic" :src="getImgUrl(stop.src)" :alt="`logo${index}`"/>
                </span>
                <span class="mr-2 d-flex align-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
                    <path d="M19 9L12 16L5 9" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span class="subStop-text">{{ subStop.text }}</span>
              </div>
              <div class="d-flex">
                <span class="c-circle plus d-flex justify-center align-center">
                  <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 18H31.5" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 31.5L18 4.5" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span class="c-circle cancel d-flex justify-center align-center ml-2">
                  <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.9999 26.9999L9 9" stroke="rgba(245, 43, 72, 1)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.0001 9L9 27.0001" stroke="rgba(245, 43, 72, 1)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            <div class="d-flex justify-center align-center">
              <button class="add-btn">Добавить список</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-screen screen">
      <factorScreen></factorScreen>
    </div>
  </div>
</template>

<script>
import PartnerSelect from './PartnerSelect.vue'
import { mdiMagnify } from '@mdi/js'
import { mapGetters } from 'vuex'
import FactorScreen from '../FactorScreen.vue'

export default {
  name: 'AdminMain-component',
  data () {
    return {
      changeTab: 'catalog',
      icons: {
        mdiMagnify
      },
      stopsArray: [
        {
          text: 'Список базовых факторов',
          subStops: [
            { text: 'Срок с даты государственной регистрации Клиента' },
            { text: 'Наличие Клиента в реестре недобросовестных поставщиков' },
            { text: 'Проверка руководителя компании' }
          ]
        },
        {
          text: 'Список базовых факторов',
          subStops: [
            { text: 'Срок с даты государственной регистрации Клиента' },
            { text: 'Наличие Клиента в реестре недобросовестных поставщиков' },
            { text: 'Проверка руководителя компании' }
          ]
        },
        {
          text: 'Список базовых факторов',
          subStops: [
            { text: 'Срок с даты государственной регистрации Клиента' },
            { text: 'Наличие Клиента в реестре недобросовестных поставщиков' }
          ]
        },
        {
          text: 'Список базовых факторов',
          subStops: [
            { text: 'Срок с даты государственной регистрации Клиента' },
            { text: 'Проверка руководителя компании' }
          ]
        }
      ]
    }
  },
  components: {
    pSelct: PartnerSelect,
    factorScreen: FactorScreen
  },
  computed: {
    ...mapGetters('adminStops', { stops: 'getStops' })
  },
  methods: {
    getImgUrl (pet) {
      const images = require.context('../../assets/', false, /\.svg$/)
      return images('./' + pet + '.svg')
    },
    openPanel (id) {
      const block = document.querySelector(`#${id}`)
      if (block.classList.contains('show')) {
        block.classList.remove('show')
      } else {
        block.classList.add('show')
      }
    },
    addActive (id) {
      console.log(123)
      const block = document.querySelector(`#${id}`)
      if (block.classList.contains('active')) {
        block.classList.remove('active')
      } else {
        block.classList.add('active')
      }
    }
  }
}
</script>

<style scoped>
.create-btn {
  width: 200px;
  height: 48px;
  border: 1px solid #0DB2E7;
  color: #0DB2E7;
  border-radius: 100px;
}
.create-btn:disabled {
  background: #D9D9D9;
  color: #A9ACB1;
  border: none;
}
.stop-list {
  height: 600px;
  overflow: auto;
}
.stop-list__item {
  width: 600px;
  height: 56px;
  background: #F0F1F2;
  border-radius: 16px;
}
.search-block {
  margin-top: 24px;
  margin-bottom: 24px;
}
.input{
  width: 600px;
}
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
.clients-wrapper {
  margin-top: 24px;
  padding-bottom: 40px;
}
.wrapper-title {
  font-weight: 700;
  font-size: 18px;
  font-family: 'Raleway';
  font-style: normal;
  line-height: 29px;
  color: #576270;
  margin-bottom: 24px;
}
.helper {
  margin: 0 auto;
}
.svg {
  transform: rotate(-90deg);
}
.bank-title__wrapper {
  background: #FFFFFF;
  box-shadow: 0px 1px 0px #F0F1F2;
  margin-bottom: 16px;
}
.subStop-text {
  font-weight: 700;
  font-size: 16px;
  font-family: 'Raleway';
  font-style: normal;
  line-height: 29px;
  color: #2D2F33;
}
.bank-name {
  font-weight: 700;
  font-size: 16px;
  font-family: 'Raleway';
  font-style: normal;
  line-height: 29px;
  color: #2D2F33;
}
.stop-item {
  background: #F0F1F2;
  border-radius: 16px;
  width: 720px;
  height: 56px;
  margin-bottom: 12px;
  padding: 0 10px 0 24px;
}
.second-stop-item {
  width: 600px;
  background: #F0F1F2;
  border-radius: 16px;
  height: 56px;
  padding: 0 10px 0 24px;
}
.pic {
  width: 36px;
  height: 36px;
}
.c-circle {
  width: 36px;
  height: 36px;
  border-radius: 100px;
}
.plus {
  background: #0DB2E7;
}
.cancel {
  background: #FFFFFF;
}
.stops-block {
  height: 701px;
  overflow: scroll;
}
.scroll-hide::-webkit-scrollbar {
  width: 0;
}
.add-btn {
  width: 200px;
  height: 48px;
  background: #0DB2E7;
  border-radius: 100px;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Raleway';
  font-style: normal;
  line-height: 19px;
  margin-top: 24px;
}
.tab-btn {
  border-radius: 16px;
  height: 56px;
  background: #FFFFFF;
  border: 1px solid #A9ACB1;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Raleway';
  font-style: normal;
  line-height: 29px;
  color: #576270;
}
.actibe-tab {
  border: 1px solid #0DB2E7;
  color: #0DB2E7;
}
.catalog-btn {
  width: 240px;
}
.stops-btn {
  width: 294px;
}
.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(87, 98, 112, 1);
}
.active {
  background-color: rgba(45, 47, 51, 1);
  border: none;
}
.el-text {
  font-weight: 500;
  font-size: 14px;
  font-family: 'Raleway';
  font-style: normal;
  line-height: 16px;
  color: #2D2F33;
}
.sub-el__wrapper {
  display: none;
  border-radius: 0 0 16px 16px;
  border: 1.7px solid #F0F1F2;
  border-top: none;
}
.sub-el {
  padding: 0 10px 0 24px;
  border-top: 1.7px solid #F0F1F2;
  height: 40px;
}
.sub-el:nth-child(1) {
  border-top: none;
}
.show .sub-el__wrapper{
  display: block;
  border-left: 4px solid #0DB2E7;
  border-radius: 0 0 16px 0px;
}
.show .second-stop-item {
  border-radius: 16px 16px 0 0;
}
.show .arrow {
  transform: rotate(90deg);
  transition: 0.3s;
}
@media only screen and (max-height: 900px) {
  .home-wrapper{
    height: 565px;
  }
  .first-screen {
    height: 80vh;
  }
  .second-screen {
    height: 80vh;
  }
}
@media only screen and (min-width: 1921px) {
  .first-screen{
    width: 56.7%;
  }
  .second-screen {
    width: 40%;
  }
  .stop-item {
    width: 99%;
  }
  .bank-name {
    font-size: 19px;
  }
  .subStop-text {
    font-size: 19px;
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
  .stop-item {
    width: 99%;
  }
  .bank-name {
    font-size: 14px;
  }
  .subStop-text {
    font-size: 12px;
  }
  .stops-block {
    height: 450px;
  }
}
</style>
