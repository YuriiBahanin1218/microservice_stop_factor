<template>
  <div class="menu-wrapper">
    <v-row>
      <v-col cols="12">
        <div class="d-flex user-info__wrapper">
          <v-avatar size="72" class="user-pic">
            <img :src="helper()" alt="user" @click="pushLink">
          </v-avatar>
          <div class="user-info ml-4 mt-4">
            <div class="user-info__name mb-1">{{ userName }}</div>
            <div class="user-info__status">{{ userStatus }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="list-row">
      <v-col cols="12">
        <v-list dense>
          <v-list-item class="menu-item" :class="{ 'selectItem': chooseSelected('main') }" @change="routerPush('main')">
            <v-list-item-icon>
              <span class="pic-wrapper" :class="{ 'selectPic': chooseSelected('main') }">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.05185 8.9C8.45661 8.9 7.97407 9.38254 7.97407 9.97778C7.97407 10.573 8.45661 11.0556 9.05185 11.0556H25.0222C25.6175 11.0556 26.1 10.573 26.1 9.97778C26.1 9.38254 25.6175 8.9 25.0222 8.9H9.05185ZM9.05185 13.7889C8.45661 13.7889 7.97407 14.2714 7.97407 14.8667C7.97407 15.4619 8.45661 15.9444 9.05185 15.9444H25.0222C25.6175 15.9444 26.1 15.4619 26.1 14.8667C26.1 14.2714 25.6175 13.7889 25.0222 13.7889H9.05185ZM9.05185 18.6778C8.45661 18.6778 7.97407 19.1603 7.97407 19.7556C7.97407 20.3508 8.45661 20.8333 9.05185 20.8333H25.0222C25.6175 20.8333 26.1 20.3508 26.1 19.7556C26.1 19.1603 25.6175 18.6778 25.0222 18.6778H9.05185ZM4.97778 11.0556C5.57302 11.0556 6.05556 10.573 6.05556 9.97778C6.05556 9.38254 5.57302 8.9 4.97778 8.9C4.38254 8.9 3.9 9.38254 3.9 9.97778C3.9 10.573 4.38254 11.0556 4.97778 11.0556ZM4.97778 15.9444C5.57302 15.9444 6.05556 15.4619 6.05556 14.8667C6.05556 14.2714 5.57302 13.7889 4.97778 13.7889C4.38254 13.7889 3.9 14.2714 3.9 14.8667C3.9 15.4619 4.38254 15.9444 4.97778 15.9444ZM4.97778 20.8333C5.57302 20.8333 6.05556 20.3508 6.05556 19.7556C6.05556 19.1603 5.57302 18.6778 4.97778 18.6778C4.38254 18.6778 3.9 19.1603 3.9 19.7556C3.9 20.3508 4.38254 20.8333 4.97778 20.8333Z"
                    :fill="chooseSelected('main') ? '#0DB2E7' : '#576270'" stroke-width="0.2" />
                </svg>
              </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="menu-item__name">Главная</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="menu-item" :class="{ 'selectItem': chooseSelected('profile') }"
            @change="routerPush('profile')">
            <v-list-item-icon>
              <span class="pic-wrapper" :class="{ 'selectPic': chooseSelected('profile') }">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 26.25C5 22.7982 9.47715 20 15 20C20.5228 20 25 22.7982 25 26.25"
                    :stroke="chooseSelected('profile') ? '#0DB2E7' : '#576270'" stroke-width="2.4" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M15 16.25C18.4518 16.25 21.25 13.4518 21.25 10C21.25 6.54822 18.4518 3.75 15 3.75C11.5482 3.75 8.75 6.54822 8.75 10C8.75 13.4518 11.5482 16.25 15 16.25Z"
                    :stroke="chooseSelected('profile') ? '#0DB2E7' : '#576270'" stroke-width="2.4" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="menu-item__name">Мой профиль</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="menu-item" :class="{ 'selectItem': chooseSelected('docs') }" @change="routerPush('docs')">
            <v-list-item-icon>
              <span class="pic-wrapper" :class="{ 'selectPic': chooseSelected('docs') }">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.5 26.25H7.5C6.80965 26.25 6.25 25.6904 6.25 25L6.25 5C6.25 4.30965 6.80964 3.75 7.5 3.75L16.9539 3.75C17.3021 3.75 17.6345 3.89524 17.8711 4.15074L23.4172 10.1406C23.6311 10.3716 23.75 10.6749 23.75 10.9898L23.75 25C23.75 25.6904 23.1904 26.25 22.5 26.25Z"
                    :stroke="chooseSelected('docs') ? '#0DB2E7' : '#576270'" stroke-width="2.4" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M23.75 11.25L17.5 11.25C16.8096 11.25 16.25 10.6904 16.25 10L16.25 3.75"
                    :stroke="chooseSelected('docs') ? '#0DB2E7' : '#576270'" stroke-width="2.4" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="menu-item__name">Документы</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="menu-item" :class="{ 'selectItem': chooseSelected('sources') }"
            @change="routerPush('sources')">
            <v-list-item-icon>
              <span class="pic-wrapper" :class="{ 'selectPic': chooseSelected('sources') }">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
                    :stroke="chooseSelected('sources') ? '#0DB2E7' : '#576270'" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <g opacity="0.4">
                    <path d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961"
                      :stroke="chooseSelected('sources') ? '#0DB2E7' : '#576270'" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
                      :stroke="chooseSelected('sources') ? '#0DB2E7' : '#576270'" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
                      :stroke="chooseSelected('sources') ? '#0DB2E7' : '#576270'" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                      :stroke="chooseSelected('sources') ? '#0DB2E7' : '#576270'" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </g>
                  <path
                    d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
                    :stroke="chooseSelected('sources') ? '#0DB2E7' : '#576270'" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M22 22L21 21" :stroke="chooseSelected('sources') ? '#0DB2E7' : '#576270'" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="menu-item__name">Источники</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <div class="curator-wrapper pr-1">
      <div class="d-flex justify-center">
        <v-avatar size="64">
          <img src="../assets/curator.svg" alt="curator">
        </v-avatar>
      </div>
      <div class="d-flex justify-center curator-name mt-2">
        Николаева Ольга
      </div>
      <div class="d-flex justify-center curator-status mt-2">
        Персональный менеджер.
      </div>
      <div class="mt-3">
        <button class="chat-btn">Чат с куратором</button>
      </div>
    </div>
    <span class="arrow-wrapper pic-wrapper">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.75 15L6.25 15" stroke="#161719" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.75 22.5L6.25 15L13.75 7.5" stroke="#161719" stroke-width="2.4" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Menu-component',
  data () {
    return {
      userName: '',
      userStatus: ''
    }
  },
  mounted () {
    this.chooseUser()
  },
  methods: {
    pushLink () {
      window.location.href.includes('manager') ? this.$router.push('/') : this.$router.push('/manager/manager_main')
    },
    routerPush (url) {
      if (this.$route.name === url) return
      window.location.href.includes('manager') ? this.$router.push(`/manager/manager_${url}`) : this.$router.push(url)
    },
    chooseSelected (url) {
      return window.location.href.includes('manager') ? this.$route.name === `manager_${url}` : this.$route.name === url
    },
    chooseUser () {
      if (window.location.href.includes('manager')) {
        this.userName = 'Евграфова Н.Н.'
        this.userStatus = 'Менеджер'
      } else {
        this.userName = 'Калужских Сергей'
        this.userStatus = 'Администратор'
      }
    },
    getImgUrl (pet) {
      const images = require.context('../assets/', false, /\.svg$/)
      return images('./' + pet + '.svg')
    },
    helper () {
      const helpParam = window.location.href.includes('manager') ? 'manager' : 'user'
      return this.getImgUrl(helpParam)
    }
  }
}
</script>

<style scoped>
.menu-wrapper {
  position: fixed;
  top: 140px;
  left: 40px;
  width: 280px;
  height: 904px;
  background: #FFFFFF;
  border-radius: 36px;
}

.user-info__wrapper {
  padding-top: 40px;
  padding-left: 24px;
}

.user-info__name {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
}

.user-info__status {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #576270;
}

.list-row {
  margin-top: 40px;
}

.menu-item {
  padding-left: 40px;
  height: 64px;
  margin-bottom: 12px;
}

.menu-item:hover {
  cursor: pointer;
}

.pic-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F0F1F2;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
}

.selectItem {
  width: 240px;
  height: 64px;
  background: rgba(13, 178, 231, 0.16);
  border-radius: 0px 100px 100px 0px;
  border: none;
  border-left: 4px solid rgba(13, 178, 231, 1);
}

.selectPic {
  background: #FFFFFF !important;
}

.curator-wrapper {
  position: absolute;
  bottom: 112px;
  right: 40px;
}

.curator-name {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}

.curator-status {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #576270;
}

.arrow-wrapper {
  position: absolute;
  cursor: pointer;
  bottom: 40px;
  right: 40px;
}

.chat-btn {
  color: #0DB2E7;
  border: 1px solid #0DB2E7;
  border-radius: 100px;
  width: 200px;
  height: 48px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}

.menu-item__name {
  font-size: 16px !important;
}

@media only screen and (max-height: 900px) {
  .menu-wrapper {
    top: 130px;
    height: 80vh;
  }
}

@media only screen and (min-width: 1921px) {
  .user-info__name {
    font-size: 17px;
  }

  .user-info__status {
    font-size: 16px;
  }

  .menu-item {
    padding-left: 30px;
  }

  .menu-item__name {
    font-size: 19px !important;
  }

  .selectItem {
    width: 95%;
  }
}

@media only screen and (max-width: 1400px) {
  .menu-wrapper {
    width: 240px;
  }

  .menu-item {
    padding-left: 15px;
  }

  .menu-item__name {
    font-size: 14px !important;
  }

  .selectItem {
    width: 90%;
  }

  .curator-wrapper {
    bottom: 85px;
    right: 15px;
  }

  .arrow-wrapper {
    bottom: 15px;
    right: 15px;
  }

  .user-info__wrapper {
    padding-top: 20px;
  }
}
</style>
