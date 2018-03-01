<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Page01 from 'pages/Page01'
export default {
  name: 'app',
  components: {
    Page01
  }
}
</script>

<style lang="less">
body{
  margin:0;
}
</style>
