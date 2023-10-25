/* eslint-disable */
<template>
    <div style="position: relative" class="main-div" @click="openFileUpload">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon 30px // File attached">
          <path id="Vector"
          d="M5.66943 14.3305L14.2873 5.71264C16.8501 3.14982 21.0053 3.14982 23.5681 5.71264C26.1309 8.27545 26.1309 12.4306 23.5681 14.9934L13.6244 24.9371C11.9158 26.6456 9.14574 26.6456 7.4372 24.9371C5.72866 23.2286 5.72866 20.4585 7.4372 18.7499L17.3809 8.80623C18.2352 7.95196 19.6202 7.95196 20.4745 8.80623C21.3288 9.6605 21.3288 11.0456 20.4745 11.8998L11.8566 20.5177"
          stroke="#0DB2E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
      <input id="file-upload" class="file-upload-input" type="file" style="display: none" ref="fileInput" @change="handleFileUpload" />
      <span class="input-label">{{ item.label }}</span>
      <svg v-if="!fileUploaded" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon 30px // Info">
          <path id="Vector"
          d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25Z"
          stroke="#F52B48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path id="Vector_2" d="M15 13.75L15 16.875L15 20" stroke="#F52B48" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
          <path id="Vector_3" d="M14.9375 9.875H15.0625V10H14.9375V9.875Z" stroke="#F52B48" stroke-width="2.4"
          stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
  </div>
  </template>

<script>
export default {
  name: 'FileAttach-component',
  props: ['item'],
  data () {
    return {
      fileUploaded: false
    }
  },
  methods: {
    send (event) {
      this.$store.dispatch('managerStops/setCurrentStopAction', { name: this.item.name, value: event.target.value, type: this.item.stateType, factor: this.item.factor, customIndex: this.item.customIndex })
    },
    openFileUpload () {
      this.$refs.fileInput.click()
    },
    handleFileUpload (event) {
      const file = event.target.files[0]
      this.fileUploaded = true
      console.log(file)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.main-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 24px 13px 24px;
  gap: 49px;
  width: 352px; /* Specify your desired width */
  height: 56px; /* Specify your desired height */
  border: 1px solid #A9ACB1; /* 1px border with #576270 color */
  border-radius: 16px; /* 36px border radius */
  cursor: default;
}
.file-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 24px 13px 24px;
  gap: 49px;
  width: 352px; /* Specify your desired width */
  height: 56px; /* Specify your desired height */
  border: 1px solid #A9ACB1; /* 1px border with #576270 color */
  border-radius: 16px; /* 36px border radius */
  cursor: pointer;
}
.main-div:hover {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 24px 13px 24px;
  gap: 49px;
  width: 352px; /* Specify your desired width */
  height: 56px; /* Specify your desired height */
  border: 1px solid #0DB2E7; /* 1px border with #576270 color */
  border-radius: 16px; /* 36px border radius */
  cursor: pointer;
}

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
  top: 10px;
  left: 20px;
  width: 170px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #0DB2E7;
  align-items:center;
}
</style>
