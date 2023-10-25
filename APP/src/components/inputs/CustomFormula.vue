<template>
  <div class="formula-wrapper" :style="`width: ${item.width}`">
    <div class="input-label d-flex justify-center">{{ item.label }}</div>
    <div class="input-wrapper">
      <span v-if="getFormula.length < 1">{{item.placeholder}}</span>
      <span v-for="(element, index) of getFormula" :key="index" v-else>
        <span class="mr-1">{{element.choosenFactor}}</span>
        <span  class="mr-1">{{element.choosenOperator}}</span>
        <span  class="mr-1">{{element.numberValue}}</span>
        <span v-if="element.logical" class="logical-color mr-1">{{element.logical}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CustomFormula-component',
  props: ['item'],
  computed: {
    ...mapGetters('managerStops', { getFormula: 'getFormula' })
  }
}
</script>

<style scoped>
.input-label {
  margin-bottom: 12px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #2D2F33;
}
.input-wrapper {
  height: 96px;
  width: 99%;
  margin: 0 auto;
  background: #E7E9EB;
  border-radius: 16px;
  border: none;
  padding: 24px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #576270;
}
.logical-color {
  color: #0DB2E7;
}
</style>
