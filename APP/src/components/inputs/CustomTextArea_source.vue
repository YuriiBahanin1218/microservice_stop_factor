<template>
  <div>
    <span class="input-label d-flex justify-center">{{ item.label }}</span>
    <div class="d-flex justify-center">
      <textarea class="custom-textarea pl-4 pt-3" v-model="areaValue" :placeholder="item.placeholder"  :style="`width: ${item.width}`" @change="send($event)"></textarea>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CustomTextArea-component',
  props: ['item'],
  data () {
    return {
      areaValue: ''
    }
  },
  methods: {
    send (event) {
      this.$store.dispatch('source/setSourceDescription', { name: this.item.name, value: event.target.value, type: this.item.stateType })
    }
  },
  computed: {
    ...mapGetters('managerStops', { getFormula: 'getFormula' })
  }
}
</script>

<style scoped>
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
  height: 96px;
  background: #E7E9EB;
  border-radius: 16px;
  border: none;
}
</style>
