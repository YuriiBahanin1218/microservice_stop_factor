<template>
  <div style="position: relative">
    <button
      ref="selectBtn"
      :style="`width: ${item.width}`"
      class="custom-select d-flex justify-space-between align-center px-7"
      @click="listShow = !listShow">
      <span class="custom-placeholder">{{ selectText }}</span>
      <div class="pt-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'svg': listShow}" class="simple">
          <path d="M19 9L12 16L5 9" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </button>
    <div class="list-wrapper" v-if="listShow" ref="test">
      <ul class="customUl scroll-hide pb-0 py-3 mb-3" v-if="item.valuesType === 'input'">
        <div class="customli d-flex align-center justify-center" v-for="(value, index) of item.values" :key="index" :style="`width: ${item.width}`">
          <li class="helperLi" @click.stop="">
            <div style="position: relative">
              <span class="input-label d-flex justify-center">{{ value.label }}</span>
              <input class="input" :style="`width: ${value.width}`" @change="changeValue($event, value)"/>
            </div>
          </li>
        </div>
      </ul>
      <div v-else-if="item.valuesType === 'factorWindow'" class="factor-window" :style="`--i: ${bottomHelper}px; width: ${item.factorWindowWidth}; height: ${windowHieght}px; position: fixed;`" @click.stop="">
        <div class="factors-window__title d-flex justify-center" @click.stop="">Каталог факторов</div>
        <span class="cancel-btn" @click="listShow = false">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.9999 26.9999L9 9" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27.0001 9L9 27.0001" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <div @click.stop="">
          <v-text-field
            @click.stop=""
            style="margin: 24px auto;"
            height="56"
            class="search-input"
            placeholder="Поиск по наименованию фактора..."
            filled
            rounded
            dense
            hide-details
          >
            <template v-slot:prepend-inner>
              <v-icon class="mt-2">{{ icons.mdiMagnify }}</v-icon>
            </template>
          </v-text-field>
        </div>
        <div class="d-flex justify-space-between" style="margin: 0px auto 24px; width: 1080px">
          <span class="factor-tab d-flex justify-center align-center" :class="{'activeTab': activeTab === 'baseFactors'}" @click.stop="changeTab('baseFactors')">Список базовых факторов</span>
          <span class="factor-tab d-flex justify-center align-center" :class="{'activeTab': activeTab === 'financialFactors'}" @click.stop="changeTab('financialFactors')">Список финансовых факторов</span>
          <span class="factor-tab d-flex justify-center align-center" :class="{'activeTab': activeTab === 'lawFactors'}" @click.stop="changeTab('lawFactors')">Список юридических факторов</span>
          <span class="factor-tab d-flex justify-center align-center" :class="{'activeTab': activeTab === 'productFactors'}" @click.stop="changeTab('productFactors')">Список продуктовых факторов</span>
        </div>
        <div style="padding-left: 40px; height: 350px">
          <v-radio-group v-model="radioGroup" class="radio-group">
            <v-radio
              @change.stop=""
              @click.stop=""
              v-for="(radio, index) of radios"
              :key="index"
              :value="radio.value"
              :on-icon="icons.mdiRadioboxMarked"
              :off-icon="icons.mdiRadioboxBlank"
              color="rgba(45, 47, 51, 1)"
              class="mx-0 mb-2">
              <template v-slot:label>
                <span class="">{{ radio.label }}</span>
              </template>
            </v-radio>
        </v-radio-group>
        </div>
        <div class="d-flex justify-center align-center">
          <button class="saveFactor-btn" @click.stop="saveFactor">Сохранить</button>
        </div>
      </div>
      <ul class="customUl scroll-hide pb-0" v-else :style="{top: cY + 'px', left: cX + 'px'}" id="customUll">
        <div class="customli d-flex align-center justify-center" v-for="(value, index) of item.values" :key="index"  @click="choose(value)" :style="`width: ${item.width}`">
          <li class="helperLi">{{ value.label }}</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mdiMagnify, mdiRadioboxMarked, mdiRadioboxBlank } from '@mdi/js'

export default {
  name: 'CustomSelect-component',
  props: ['item'],
  data () {
    return {
      radioGroup: null,
      listShow: false,
      cY: 0,
      cX: 0,
      selectText: this.item.label,
      activeTab: 'baseFactors',
      baseFactorsArray: [
        { label: 'Срок с даты государственной регистрации Клиента', value: 'Срок с даты государственной регистрации Клиента' },
        { label: 'Наличие Клиента в реестре недобросовестных поставщиков', value: 'Наличие Клиента в реестре недобросовестных поставщиков' },
        { label: 'Проверка руководителя компании', value: 'Проверка руководителя компании' }
      ],
      financialFactorsArray: [
        { label: 'Наличие убытка по годовой отчетности', value: 'Наличие убытка по годовой отчетности' },
        { label: 'Наличие отрицательных чистых активов по итогам завершенного года', value: 'Наличие отрицательных чистых активов по итогам завершенного года' },
        { label: 'Сумма гарантии', value: 'Сумма гарантии' }
      ],
      lawFactorssArray: [
        { label: 'Что-то юридическое 1', value: 'Что-то юридическое 1' },
        { label: 'Что-то юридическое 2', value: 'Что-то юридическое 2' },
        { label: 'Что-то юридическое 3', value: 'Что-то юридическое 3' }
      ],
      productFactorsArray: [
        { label: 'Что-то продуктовое 1', value: 'Что-то продуктовое 1' },
        { label: 'Что-то продуктовое 2', value: 'Что-то продуктовое 2' },
        { label: 'Что-то продуктовое 3', value: 'Что-то продуктовое 3' }
      ],
      icons: {
        mdiMagnify,
        mdiRadioboxMarked,
        mdiRadioboxBlank
      }
    }
  },
  mounted () {
    if (this.$refs.selectBtn) {
      this.cY = this.$refs.selectBtn.getBoundingClientRect().y + 66
    }
    this.cX = this.$refs.selectBtn.getBoundingClientRect().x
    // eslint-disable-next-line
    let windowHeiht = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    )
    window.addEventListener('click', (event) => {
      if (event.target instanceof Element) {
        const classNames = typeof event.target.className === 'string' ? event.target.className.split(' ') : []
        const classList = ['custom-placeholder', 'custom-select', 'customli', 'helperLi', 'customUl', 'factorWindow']
        if (classList.some(className => classNames.includes(className))) {
          return
        }
      }
      this.listShow = false
    })
    // document.querySelector('#iwrapper')
    document.querySelector('#iwrapper').addEventListener('scroll', (event) => {
      if (this.$refs.selectBtn.getBoundingClientRect().y + 355 > windowHeiht) {
        this.cY = this.$refs.selectBtn.getBoundingClientRect().y - 66
        this.cX = this.$refs.selectBtn.getBoundingClientRect().x
      } else {
        this.cY = this.$refs.selectBtn.getBoundingClientRect().y + 66
        this.cX = this.$refs.selectBtn.getBoundingClientRect().x
      }
    })
  },
  methods: {
    saveFactor () {
      this.selectText = this.radios.find(radio => radio.value === this.radioGroup).label
      this.$store.dispatch('managerStops/setCurrentStopAction', { name: this.item.name, value: this.radioGroup, type: this.item.stateType, factor: true, customIndex: this.item.customIndex })
      this.listShow = false
    },
    changeTab (tab) {
      this.activeTab = tab
      console.log(this.activeTab)
    },
    choose (value) {
      this.selectText = value.label
      this.listShow = false
      console.log(value)
      this.$store.dispatch('managerStops/setCurrentStopAction', { name: this.item.name, value: value.label, type: this.item.stateType, factor: this.item.factor, customIndex: this.item.customIndex })
    },
    changeValue (event, value) {
      if (this.selectText === this.item.label) this.selectText = ''
      const idx = this.selectText.split(',').findIndex(item => item.split(' ').includes(`${value.label}:`))
      if (idx === -1) {
        this.selectText = this.selectText + `${value.label}: ${event.target.value},` + ' '
      } else {
        console.log(this.selectText.split(','))
        const helpArr = this.selectText.split(',')
        event.target.value.length < 1 ? helpArr[idx] = '' : helpArr[idx] = ` ${value.label}: ${event.target.value}`
        this.selectText = helpArr.join(',')
      }
      // this.selectText = `${value.label}: ${event.target.value},`
    }
  },
  computed: {
    windowHieght () {
      return document.querySelector('#cModal').offsetHeight
    },
    bottomHelper () {
      return (window.screen.height - document.querySelector('#cModal').offsetHeight) / 2
    },
    /* eslint-disable */
    radios () {
      switch (this.activeTab) {
        case 'baseFactors':
          return this.baseFactorsArray
        case 'financialFactors':
          return this.financialFactorsArray
        case 'lawFactors':
          return this.lawFactorssArray
        case 'productFactors':
          return this.productFactorsArray
      }
    }
  }
}
</script>

<style scoped>
.saveFactor-btn {
  width: 200px;
  height: 48px;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Raleway';
  font-style: normal;
  color: #FFFFFF;
  line-height: 19px;
  background: #0DB2E7;
  border-radius: 100px;
}
.factor-tab {
  width: 261px;
  height: 56px;
  font-weight: 600;
  font-size: 15px;
  font-family: 'Raleway';
  font-style: normal;
  line-height: 29px;
  color: #2D2F33;
  background: #F0F1F2;
  border-radius: 16px;
}
.search-input{
  width: 1080px;
}
.scroll-hide::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.custom-select {
  background: #E7E9EB;
  border-radius: 16px;
  border: none;
  height: 56px;
}
.customUl {
  position: fixed;
  max-height: 280px;
  overflow: scroll;
  list-style: none;
  padding-left: 0;
  background: white;
  border-radius: 16px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.16);
}
.customli {
  box-sizing: border-box;
  height: 64px;
  cursor: pointer;
  border-bottom: 1px solid #E7E9EB;
}
.customli:last-child {
  border-bottom: none;
}
.list-wrapper{
  position: absolute;
  z-index: 205;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  top: 68px;
}
.custom-placeholder {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Red Hat Display', sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #576270;
  font-size: 14px;
  line-height: 16px;
}
.svg {
  transition-duration: 0.3s;
  transform: rotate(180deg);
}
.simple {
  transition-duration: 0.3s;
}
.input {
  padding: 5px 0px 0px 20px;
  height: 56px;
  background: #E7E9EB;
  border-radius: 16px;
  border: none;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2D2F33;

}
.input-label {
  position: absolute;
  top: 5px;
  left: 20px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #576270;;
}
.factor-window {
  padding-top: 40px;
  background: #FFFFFF;
  border-radius: 36px;
  padding-bottom: 40px;
  left: 380px;
  bottom: var(--i);
}
.factors-window__title {
  font-family: 'Raleway';
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  color: #2D2F33;
}
.cancel-btn {
  position: absolute;
  top: 34px;
  right: 42px;
  cursor: pointer;
}
.activeTab {
  background: #0DB2E7;
  color: #FFFFFF;
}
</style>
