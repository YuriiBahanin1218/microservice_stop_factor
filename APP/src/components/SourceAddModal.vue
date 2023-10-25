<template>
  <div class="modal-block d-flex align-center justify-center" v-if="openInfo.open">
    <div class="modal-wrapper" id="cModal">
      <div class="modal-window" :style="`width: ${openInfo.width}px`">
        <span class="close-btn d-flex align-center justify-center" @click="closeModal">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.9999 26.9999L9 9" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27.0001 9L9 27.0001" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <v-row class="inputs-wrapper" id="iwrapper">
          <v-col :cols="input.col" v-for="(input, index) of openInfo.inputs" :key="(index+44) *3" class="d-flex justify-center" :style="`padding-left: ${input.pl ? input.pl : 0}; padding-right: ${input.pr ? input.pr : 0};`">
            <cInput v-if="input.type === 'input'" :item="input"></cInput>
            <cArea v-if="input.type === 'area'" :item="input"></cArea>
            <cSelect v-if="input.type === 'select'" :item="input"></cSelect>
            <addBtn v-if="input.type === 'addBtn'" :item="input"></addBtn>
            <smallInput v-if="input.type === 'smallInput'" :item="input"></smallInput>
            <logicalBlock v-if="input.type === 'logical'" :item="input"></logicalBlock>
            <cformula v-if="input.type === 'formula'" :item="input"></cformula>
            <unholdInput v-if="input.type === 'unhold'" :item="input"></unholdInput>
            <fileAttach v-if="input.type === 'fileAttach'" :item="input"></fileAttach>
          </v-col>
        </v-row>
        <v-row class="mt-7">
          <v-col cols="12" class="d-flex align-center justify-center">
            <button class="save-btn" @click="save">Сохранить</button>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomAddBtn from './inputs/CustomAddBtn.vue'
import CustomInput from './inputs/CustomInput.vue'
import CustomInputSecondStyle from './inputs/CustomInputSecondStyle.vue'
import CustomLogicalBlock from './inputs/CustomLogicalBlock.vue'
import CustomSelect from './inputs/CustomSelect.vue'
import CustomTextArea from './inputs/CustomTextArea.vue'
import CustomFormula from './inputs/CustomFormula.vue'
import CustomInputUnhold from './inputs/CustomInputUnhold.vue'
import FileAttach from './inputs/FileAttach.vue'

export default {
  name: 'ModalWindow',
  components: {
    cSelect: CustomSelect,
    cInput: CustomInput,
    cArea: CustomTextArea,
    addBtn: CustomAddBtn,
    smallInput: CustomInputSecondStyle,
    logicalBlock: CustomLogicalBlock,
    cformula: CustomFormula,
    unholdInput: CustomInputUnhold,
    fileAttach: FileAttach
  },
  data () {
    return {
      stopTitle: '',
      groupTitle: ''
    }
  },
  computed: {
    ...mapGetters('modal', { openInfo: 'openInfo' })
  },
  methods: {
    closeModal () {
      this.$store.dispatch('managerStops/clearFormulaAction')
      this.$store.dispatch('modal/toogleOpenAction', { open: false, inputs: [] })
    },
    save () {
      this.$store.dispatch('managerStops/addNewStopAction')
      this.$store.dispatch('modal/toogleOpenAction', { open: false })
      this.stopTitle = ''
      this.groupTitle = ''
    }
    // confirm () {
    //   this.$store.dispatch('modal/toogleOpenAction', {status: false, actionParam: false, text: '', userResponse: true, open: false, task: false})
    // },
    // closeTask () {
    //   this.$store.dispatch('modal/taskToogleOpenAction', {status: false, actionParam: false, text: '', taskUserResponse: false, open: false, task: false})
    // },
    // confirmTask () {
    //   this.$store.dispatch('modal/taskToogleOpenAction', {status: false, actionParam: false, text: '', taskUserResponse: true, open: false, task: false})
    // }
  }
}
</script>

<style scoped>
.modal-block {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(87, 98, 112, 0.48);
}
.modal-window {
  padding-top: 40px;
  position: relative;
  background: #FFFFFF;
  border-radius: 36px;
  padding-bottom: 40px;
}
.close-btn {
  position: absolute;
  top: 24px;
  right: 35px;
  cursor: pointer;
  background-color: #ffffff;
  height: 42px;
  width: 42px;
  border-radius: 50%;
}
.input {
  width: 1080px;
  height: 56px;
  background: #E7E9EB;
  border-radius: 16px;
  border: none;
}
.input-label {
  font-family: 'Raleway';
  font-style: normal;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #2D2F33;
}
.custom-textarea {
  resize: none;
  width: 1080px;
  height: 96px;
  background: #E7E9EB;
  border-radius: 16px;
  border: none;
}
.custom-select {
  width: 352px;
  background: #E7E9EB;
  border-radius: 16px;
  border: none;
  height: 56px;
}
.save-btn {
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
.inputs-wrapper {
  max-height: 835px;
  /* overflow: scroll; */
}
</style>
