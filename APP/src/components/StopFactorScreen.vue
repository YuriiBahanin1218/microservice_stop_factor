<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-6">
      <span class="screen-title">Мои карты</span>
      <div>
        <button class="cbtn" style="width: 176px">Создать список</button>
        <button class="cbtn ml-2" style="width: 200px" @click="openModal">Создать стоп-фактор</button>
      </div>
    </div>
    <div class="stop-list scroll-hide">
        <div v-for="(stop, index) of stopsArray" :key="(index + 22) * 2" class="mb-3" @click="openPanel(`panelScreen${index}`)" :id="`panelScreen${index}`">
            <div class="second-stop-item d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <div class="custom-checkbox d-flex justify-center align-center mr-3" @click.stop="addActive(`ccheckboxScreen${index}`, stop, index)" :id="`ccheckboxScreen${index}`">
                  <img src="../assets/accept.svg">
                </div>
                <span class="mr-2 d-flex align-center arrow" style="transition: 0.3s;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
                    <path d="M19 9L12 16L5 9" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span class="subStop-text">{{ stop.text }}</span>
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
            <div class="sub-el__wrapper">
              <div v-for="(el, idx) of stop.subStops" :key="(idx+9) * 2" class="d-flex justify-space-between align-center sub-el" @click.stop="">
                <div class="d-flex">
                  <div class="custom-checkbox d-flex justify-center align-center mr-3" @click.stop="addActive(`sccheckboxScreen${el.id}`)" :id="`sccheckboxScreen${el.id}`">
                    <img src="../assets/accept.svg">
                  </div>
                  <span class="el-text">
                    {{ el.stopName }}
                  </span>
                </div>
                <div class="d-flex align-center pt-1">
                  <span class="mr-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <g opacity="0.4">
                      <path d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15 3C15.97 5.92 16.46 8.96 16.46 12" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M22 22L21 21" stroke="#576270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span class="mr-1">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M23.959 9.92481L23.8768 9.78249C23.65 9.38997 23.5343 8.94319 23.5419 8.48995L23.5793 6.26642C23.587 5.81202 23.3474 5.38926 22.9536 5.16235L19.5328 3.19109C19.14 2.96475 18.6555 2.96881 18.2665 3.20169L16.3677 4.33867C15.9796 4.57105 15.5357 4.69378 15.0834 4.69378H14.9187C14.4654 4.69378 14.0206 4.57052 13.632 4.33718L11.7244 3.19197C11.3341 2.95765 10.8472 2.95405 10.4535 3.18257L7.04354 5.16168C6.65167 5.38912 6.41356 5.81079 6.42118 6.26382L6.45864 8.48995C6.46626 8.94319 6.35051 9.38997 6.12377 9.78249L6.04266 9.9229C5.8158 10.3156 5.48637 10.6393 5.08967 10.8591L3.14606 11.9362C2.74769 12.157 2.50092 12.5769 2.50196 13.0324L2.51091 16.9721C2.51193 17.4248 2.75763 17.8416 3.15322 18.0617L5.0875 19.1377C5.48556 19.3592 5.81555 19.6851 6.04184 20.0805L6.12874 20.2323C6.35229 20.6228 6.46628 21.0665 6.45868 21.5164L6.42127 23.7328C6.41359 24.1873 6.65319 24.6101 7.04698 24.837L10.4678 26.8082C10.8606 27.0346 11.3451 27.0305 11.734 26.7976L13.6329 25.6606C14.021 25.4283 14.4648 25.3055 14.9172 25.3055H15.0818C15.5351 25.3055 15.9799 25.4288 16.3686 25.6621L18.2762 26.8073C18.6665 27.0417 19.1533 27.0453 19.547 26.8168L22.957 24.8376C23.3489 24.6102 23.587 24.1885 23.5794 23.7355L23.5419 21.5094C23.5343 21.0561 23.65 20.6093 23.8768 20.2168L23.9579 20.0764C24.1848 19.6837 24.5142 19.3601 24.9109 19.1402L26.8545 18.0631C27.2529 17.8424 27.4996 17.4224 27.4986 16.9669L27.4897 13.0272C27.4886 12.5745 27.2429 12.1577 26.8473 11.9377L24.9084 10.859C24.5133 10.6392 24.1852 10.3163 23.959 9.92481Z" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span>
                    <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.9999 26.9999L9 9" stroke="rgba(245, 43, 72, 1)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27.0001 9L9 27.0001" stroke="rgba(245, 43, 72, 1)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StopFactorScreen-component',
  data () {
    return {
      choosenStops: []
    }
  },
  computed: {
    ...mapGetters('managerStops', { stopsArray: 'getStops' })
  },
  methods: {
    openModal () {
      this.$store.dispatch('modal/toogleOpenAction', {
        open: true,
        width: 1160,
        /* eslint-disable */
        inputs: [
          { label: 'Название стоп-фактора', type: 'input', name: 'stopName', width: '1080px', col: 12, stateType: 'currentStop' },
          { label: 'Описание стоп-фактора', type: 'area', stateType: 'currentStop', name: 'stopDescription', placeholder: 'Подробное описание стоп-фактора....', width: '1080px', col: 12 },
          { label: 'Формула', type: 'formula', name: 'formula', placeholder: 'Начните добавлять факторы для создания формулы...', width: '92%', col: 12 },
          { label: 'Добавить фактор', type: 'addBtn', name: 'addBtn', width: '1080px', col: 12, inputs: [
            { label: 'Выберите фактор', type: 'select', valuesType: 'factorWindow', factorWindowWidth: '1160px', name: 'choosenFactor', width: '261px', col: 3, pl: '60px', values: [{ label: 'Boolean' }] },
            { label: 'Выберите источник', type: 'select', factor: true, stateType: 'currentStop', name: 'choosenResource', width: '261px', col: 3, pl: '20px', values: [{ label: 'Контур' }, { label: 'СБИС' }] },
            { label: 'Выберите оператор', type: 'select', factor: true, stateType: 'currentStop', name: 'choosenOperator', width: '261px', col: 3, pr: '20px', values: [{ label: '=' }, { label: '>' }, { label: '<' }, { label: '>=' }, { label: '<=' }] },
            { label: 'Числовое значение', type: 'smallInput', factor: true, stateType: 'currentStop', name: 'numberValue', width: '261px', col: 3, pr: '60px' }
          ] }
        ]
      })
    },
    openPanel (id) {
      const block = document.querySelector(`#${id}`)
      if (block.classList.contains('show')) {
        block.classList.remove('show')
      } else {
        block.classList.add('show')
      }
    },
    addActive (id, stop, index) {
      console.log(index)
      const block = document.querySelector(`#${id}`)
      if (block.classList.contains('active')) {
        block.classList.remove('active')
      } else {
        block.classList.add('active')
      }
      if (stop) {
        const idx = this.choosenStops.findIndex(item => item === stop.text)
        if (idx === -1) {
          this.choosenStops.push(stop.text)
        } else {
          this.choosenStops.splice(idx, 1)
        }
      }
      if (index || index === 0) this.$store.dispatch('managerStops/setIndexsActions', index)
    }
  }
}
</script>

<style scoped>
.screen-title {
  font-weight: 700;
  font-size: 18px;
  font-family: 'Raleway';
  font-style: normal;
  line-height: 29px;
  color: #576270;
}
.cbtn {
  border-radius: 100px;
  height: 48px;
  border: 1px solid #0DB2E7;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Raleway';
  font-style: normal;
  line-height: 19px;
  color: #0DB2E7;
}
.cbtn:active {
  background: #0DB2E7;
  color: #FFFFFF;
}
.stop-list {
  height: 600px;
  overflow: auto;
}
.second-stop-item {
  width: 720px;
  background: #F0F1F2;
  border-radius: 16px;
  height: 56px;
  padding: 0 10px 0 24px;
}
.show .second-stop-item {
  border-radius: 16px 16px 0 0;
}
.show .arrow {
  transform: rotate(90deg);
  transition: 0.3s;
}
.show .sub-el__wrapper{
  display: block;
  border-left: 4px solid #0DB2E7;
  border-radius: 0 0 16px 0px;
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
.scroll-hide::-webkit-scrollbar {
  width: 0;
}
.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(87, 98, 112, 1);
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
.active {
  background-color: rgba(45, 47, 51, 1);
  border: none;
}
.svg {
  transform: rotate(-90deg);
}
.subStop-text {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
}
@media only screen and (max-width: 1400px) {
  .second-stop-item{
    width: 99%;
  }
}
@media only screen and (min-width: 1921px) {
  .second-stop-item{
    width: 100%;
  }
  .subStop-text {
    font-size: 19px;
  }
  .el-text {
    font-size: 17px;
  }
}
</style>
