<template>
  <div>
    <span class="input-label d-flex justify-center">{{ item.label }}</span>
    <div class="d-flex justify-center">
      <input class="input"  :style="`width: ${item.width}`" @change="send($event)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomInput-component',
  props: ['item'],
  methods: {
    send (event) {
      this.$store.dispatch('managerStops/setCurrentStopAction', { name: this.item.name, value: event.target.value, type: this.item.stateType })
    }
  }
}
</script>

<style scoped>
.input {
  height: 56px;
  background: #E7E9EB;
  border-radius: 16px;
  padding-left: 24px;
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
</style>
