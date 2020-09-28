<template>
  <div class="logo" @click="$emit('click')">
    <img :src="`/logo/${color}.svg`" alt="Yung silva" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: 'dark',
      validator: (value) => {
        return ['light', 'lightest', 'dark', 'darkest'].includes(value)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
