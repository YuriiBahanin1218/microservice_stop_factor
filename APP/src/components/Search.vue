<template>
  <div>
    <v-text-field
      height="56"
      class="input"
      placeholder="Поиск..."
      filled
      rounded
      dense
    >
     <template v-slot:prepend-inner>
        <v-icon class="mt-2">{{ icons.mdiMagnify }}</v-icon>
      </template></v-text-field>
  </div>
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
  name: 'Search-component',
  data () {
    return {
      icons: {
        mdiMagnify
      }
    }
  }
}
</script>

<style scoped>
.input{
  width: 556px;
}
</style>
