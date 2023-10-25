<template>
  <div class="side-wrapper">
    <div class="resource-wrapper">
      <span class="close-btn">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9999 26.9999L9 9" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M27.0001 9L9 27.0001" stroke="#576270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <div class="resource-title">Выбор приоритетных источников</div>
    </div>
    <div class="curator-wrapper">
      <div class="d-flex justify-center">
        <v-avatar size="64">
          <img
            src="../../assets/curator.svg"
            alt="curator"
          >
        </v-avatar>
      </div>
      <div class="d-flex justify-center curator-name mt-2">
        Николаева Ольга
      </div>
      <div class="d-flex justify-center curator-status mt-2">
        Ваш персональный менеджер
      </div>
      <div class="contact-wrapper d-flex justify-center mt-3">
        <span class="contact-circle d-flex justify-center align-center mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9993 17.9686V21.5816C24.0006 21.917 23.9318 22.249 23.7971 22.5563C23.6625 22.8636 23.465 23.1395 23.2174 23.3662C22.9698 23.593 22.6774 23.7656 22.359 23.8731C22.0407 23.9805 21.7033 24.0204 21.3686 23.9902C17.6554 23.5875 14.0885 22.3212 10.9547 20.293C8.03906 18.4439 5.56712 15.9769 3.7144 13.067C1.67503 9.92519 0.40589 6.34809 0.00979454 2.62554C-0.0203606 2.29251 0.0192973 1.95685 0.126243 1.63995C0.233188 1.32305 0.405079 1.03185 0.63097 0.784879C0.85686 0.537911 1.1318 0.34059 1.43829 0.20548C1.74478 0.0703704 2.0761 0.000431667 2.41115 0.000116762H6.03129C6.61692 -0.00563562 7.18466 0.201333 7.6287 0.582446C8.07273 0.963559 8.36276 1.49281 8.44472 2.07155C8.59752 3.22778 8.88089 4.36305 9.28942 5.4557C9.45178 5.88675 9.48691 6.35522 9.39067 6.8056C9.29443 7.25597 9.07084 7.66938 8.7464 7.99682L7.21387 9.52631C8.9317 12.5414 11.4331 15.0378 14.4542 16.7522L15.9867 15.2228C16.3148 14.899 16.729 14.6758 17.1803 14.5798C17.6315 14.4837 18.1009 14.5188 18.5328 14.6808C19.6277 15.0885 20.7652 15.3713 21.9237 15.5238C22.5099 15.6064 23.0452 15.901 23.4279 16.3518C23.8106 16.8026 24.0139 17.378 23.9993 17.9686Z" fill="white"/>
          </svg>
        </span>
        <span class="contact-circle d-flex justify-center align-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12C24 18.6274 18.6274 24 12 24C9.63859 24 7.43648 23.3179 5.57996 22.14L0 24L1.85999 18.42C0.682085 16.5635 0 14.3614 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="white"/>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBlock-component'
}
</script>

<style scoped>
.side-wrapper {
  margin-top: 67px;
  width: 336px;
  position: fixed;
  top: 140px;
  right: 40px;
  height: 904px;
}
.resource-wrapper {
  padding: 40px 24px;
  width: 336px;
  height: 405px;
  background: #FFFFFF;
  border-radius: 16px;
  border: none;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 33px;
  right: 33px;
  cursor: pointer;
}
.resource-title {
  font-family: 'Raleway';
  font-style: normal;
  width: 288px;
  height: 61px;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #2D2F33;
}
.curator-wrapper {
  padding-top: 40px;
  position: absolute;
  bottom: 70px;
  width: 336px;
  height: 257px;
  background: #FFFFFF;
  border-radius: 16px;
  border: none;
}
.curator-name{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
.curator-status{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #576270;
}
.contact-circle{
  background: #0DB2E7;
  border-radius: 100px;
  width: 48px;
  height: 48px;
}
</style>
