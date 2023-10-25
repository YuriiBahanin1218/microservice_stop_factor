<template>
  <div class="d-flex">
    <span class="custom-span mr-4" :class="{'active': activeParam}" @click="setOperator(true, '(и)')">и</span>
    <span class="custom-span" :class="{'active': !activeParam}" @click="setOperator(false, '(или)')">или</span>
  </div>
</template>

<script>
export default {
  name: 'CustomLogicalBlock-component',
  props: ['item'],
  data () {
    return {
      activeParam: true
    }
  },
  mounted () {
    this.$store.dispatch('modal/setOperatorActions', { customIndex: this.item.customIndex, value: '(и)' })
    this.$store.dispatch('managerStops/setOperatorActions', { customIndex: this.item.customIndex, value: '(и)' })
  },
  methods: {
    setOperator (bool, value) {
      this.activeParam = bool
      this.$store.dispatch('modal/setOperatorActions', { customIndex: this.item.customIndex, value })
      this.$store.dispatch('managerStops/setOperatorActions', { customIndex: this.item.customIndex, value })
    }
  }
}
</script>

<style scoped>
.custom-span {
  display: flex;
  justify-content: center;
  width: 64px;
  height: 32px;
  background: #F0F1F2;
  border-radius: 100px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  color: #576270;
}
.active {
  background: #0DB2E7;
  color: #FFFFFF;
}
</style>
