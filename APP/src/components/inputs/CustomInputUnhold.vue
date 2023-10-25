<template>
  <div>
    <span class="input-label d-flex justify-center">{{ item.label }}</span>
    <div style="position: relative">
      <span class="input-title d-flex justify-center">{{ item.title }}</span>
      <input class="input" :style="`width: ${item.width}`" @change="send($event)"/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CustomInputUnhold-component',
  props: ['item'],
  methods: {
    send (event) {
      this.$store.dispatch('source/setCurrentInputAction', { name: this.item.name, value: event.target.value, type: this.item.stateType })
      // console.log(event.target.value)
    }
  }
}
</script>

<style scoped>
.main-div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.input {
  height: 56px;
  background: #E7E9EB;
  border-radius: 16px;
  padding-left: 20px;
  border: none;
  padding-top: 20px;
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
.input-title {
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
