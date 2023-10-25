<template>
  <div class="seletc-wrapper">
    <button class="panel-btn d-flex justify-space-between align-center" @click="partnersShow = !partnersShow">
      <div class="pl-3" v-if="resultBanksArray.length < 1">Выберите Клиента...</div>
      <div v-else class="d-flex align-center">
        <span v-for="(bank, index) of resultBanksArray" :key="(index+25)*4" class="d-flex">
          <span class="mr-2 d-flex align-center">
            <v-img class="picture" :src="getImgUrl(bank.src)" :alt="`logo${index}`"></v-img>
          </span>
          <span class="mr-1 d-flex align-center bank-name">{{ bank.name }}</span>
          <span class="mr-4 d-flex align-center">
            <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" @click.stop="deleteBank(index)">
              <path d="M26.9999 26.9999L9 9" stroke="rgba(245, 43, 72, 1)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M27.0001 9L9 27.0001" stroke="rgba(245, 43, 72, 1)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </span>
      </div>
      <div class="pic-wrapper pr-3 pt-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'rotate': partnersShow}" class="svg">
          <path d="M19 9L12 16L5 9" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </button>
    <div class="partners-list" v-if="partnersShow">
      <div v-for="(partner, index) of partners"
        :key="index"
        class="d-flex align-center justify-space-between partners-list__item"
        :class="{'active': resultBanksArray.includes(partner)}"
        :id="`parnter${index}`"
        @click="chooseParnter(`parnter${index}`, partner)">
        <div class="d-flex">
          <span class="partner-pic mr-5">
            <v-img :src="getImgUrl(partner.src)" :alt="`logo${index}`"></v-img>
          </span>
          <span class="partner-name pt-2">
            {{ partner.name }}
          </span>
        </div>
        <div class="custom-checkbox d-flex justify-center align-center">
          <img src="../../assets/accept.svg">
        </div>
      </div>
      <div class="d-flex justify-center btn-block">
        <button class="choose-btn" @click="acceptChoose">Выбрать</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PartnerSelect-component',
  data () {
    return {
      partnersShow: false,
      choosenBanks: [],
      resultBanksArray: [],
      partners: [
        { name: 'ПАО “Метком Банк”', src: 'metcom' },
        { name: 'АО “Банк СГБ”', src: 'Severgasbank' },
        { name: 'АО “Банк АТБ”', src: 'ATB' }
      ]
    }
  },
  methods: {
    getImgUrl (pet) {
      const images = require.context('../../assets/', false, /\.svg$/)
      return images('./' + pet + '.svg')
    },
    chooseParnter (id, prtner) {
      const block = document.querySelector(`#${id}`)
      if (block.classList.contains('active')) {
        block.classList.remove('active')
      } else {
        block.classList.add('active')
      }
      const idx = this.choosenBanks.findIndex(item => item.name === prtner.name)
      if (idx === -1) {
        this.choosenBanks.push(prtner)
      } else {
        this.choosenBanks.splice(idx, 1)
      }
    },
    acceptChoose () {
      this.partnersShow = false
      this.resultBanksArray = [...this.choosenBanks]
      this.$store.dispatch('adminStops/chooseCurentBanksAction', this.resultBanksArray)
    },
    deleteBank (index) {
      this.resultBanksArray.splice(index, 1)
      this.choosenBanks = [...this.resultBanksArray]
      this.$store.dispatch('adminStops/chooseCurentBanksAction', this.resultBanksArray)
    }
  }
}
</script>

<style scoped>
.seletc-wrapper {
  position: relative;
  width: 720px;
}
.panel-btn  {
  width: 720px;
  height: 56px;
  background: #F0F1F2;
  border-radius: 100px;
  border: none;
  margin-bottom: 16px;
  padding-left: 24px;
  padding-right: 16px;
}
.svg {
  transition-duration: 0.3s;
}
.rotate {
  transform: rotate(180deg);
  transition-duration: 0.3s;
}
.partners-list {
  position: absolute;
  z-index: 55;
  width: 720px;
  padding: 12px 52px 40px;
  background: #FFFFFF;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
}
.partners-list__item {
  width: 640px;
  height: 64px;
  border-bottom: 1px solid #E7E9EB;
  cursor: pointer;
}
.choose-btn {
  background: #0DB2E7;
  border-radius: 100px;
  width: 216px;
  height: 48px;
  color: #FFFFFF;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}
.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(87, 98, 112, 1);
}
.active .custom-checkbox {
  background-color: rgba(45, 47, 51, 1);
  border: none;
}
.btn-block {
  margin-top: 24px;
}
.partner-name {
  font-weight: 500;
  font-size: 16px;
  font-family: 'Raleway';
  font-style: normal;
  line-height: 29px;
}
.bank-name {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
}
.picture {
  width: 28px;
  height: 28px;
}
@media only screen and (min-width: 1921px) {
  .seletc-wrapper {
    width: 99%;
  }
  .panel-btn {
    width: 99%;
  }
  .partners-list {
    width: 99%;
  }
  .partners-list__item {
    width: 99%;
  }
  .partner-name {
    font-size: 19px;
  }
  .choose-btn {
    font-size: 19px;
  }
  .bank-name {
    font-size: 19px;
  }
}
@media only screen and (max-width: 1400px) {
  .seletc-wrapper {
    width: 99%;
  }
  .panel-btn {
    width: 99%;
  }
  .partners-list {
    width: 99%;
  }
  .partners-list__item {
    width: 99%;
  }
  .partner-name {
    font-size: 14px;
  }
  .choose-btn {
    font-size: 14px;
  }
  .bank-name {
    font-size: 10px;
  }
  .picture {
    width: 20px;
    height: 20px;
  }
}
</style>
