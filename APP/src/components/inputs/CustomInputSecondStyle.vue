<template>
  <div style="position: relative">
    <span class="input-label d-flex justify-center">{{ item.label }}</span>
    <input class="input" :style="`width: ${item.width}`" @change="send($event)"/>
  </div>
</template>

<script>
export default {
  name: 'CustomInputSecondStyle-component',
  props: ['item'],
  methods: {
    send (event) {
      this.$store.dispatch('managerStops/setCurrentStopAction', { name: this.item.name, value: event.target.value, type: this.item.stateType, factor: this.item.factor, customIndex: this.item.customIndex })
    }
  }
}
</script>

<style scoped>
.input {
  padding: 15px 0px 0px 20px;
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
  top: 10px;
  left: 20px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #576270;;
}
</style>
