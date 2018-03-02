<template>
  <mt-header title="in美家">
    <router-link to="/home" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>

</style>
