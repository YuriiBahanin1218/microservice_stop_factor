<template>
  <div class="d-flex justify-center" style="cursor: pointer" @click="push">
    <span class="c-circle plus d-flex justify-center align-center mr-3">
      <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 18H31.5" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18 31.5L18 4.5" stroke="white" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <span>{{ item.label }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomAddBtn-component',
  props: ['item'],
  data () {
    return {
      customIndex: 0
    }
  },
  methods: {
    push () {
      /* eslint-disable */
      let data = []
      for (let i = 0; i < this.item.inputs.length; i++) {
        let newResult = Object.assign({}, this.item.inputs[i])
        newResult.customIndex = this.customIndex
        data.push(newResult)
      }
      this.$store.dispatch('modal/addInputsAction', data)
      this.customIndex++
    }
  }
}
</script>

<style scoped>
.c-circle {
  width: 24px;
  height: 24px;
  border-radius: 100px;
}
.plus {
  background: #0DB2E7;
}
</style>
