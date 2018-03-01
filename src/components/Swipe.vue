<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item>
      <img src="../assets/img/banner1@3.png" alt="banner1">
    </mt-swipe-item>
    <mt-swipe-item>
      <img src="../assets/img/banner2@3.png" alt="banner2">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name:'Swipe',
}
</script>

<style lang="less" scoped>
img{
  width: 100%;
}
</style>
