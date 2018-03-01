<template>
  <div class="bgc-img">
    <div class="content1"></div>
    <div class="content2">
      <p class="text">区别于传统装修公司,我们提供整套的<br />VR全景方案100%还原未来新家</p>
      <a herf="#" class="more">
          了解更多
          <icon  name="右箭头" class="arrow"></icon>
      </a>
      <icon  name="向下箭头" class="arrow2"></icon>
      <p class="text r-text">360旋转<br />VR全套方案<br />所见即所得</p>
    </div>
  </div>
</template>

<script>

export default {
  name:'Content'
}
</script>

<style lang="less" scoped>
.bgc-img{
  position: relative;
  height: 7.18rem;
}
.content1,.content2{
  position: absolute;
  height: 100%;
  width: 100%;
}
.content1{
  opacity: 0.85;
  background:url(../assets/img/vr@3.png) no-repeat center 93%;
  background-size:100%;
}
.content2{
  padding-left: 1.04rem;
  .arrow2{
    color:#fff;
  }
  .text{
    font-family: 'PingFangSC-Regular';
    font-size: 0.26rem;
    color:#999;
    margin-top: 0.5rem;
  }
  .r-text{
    position: absolute;
    right:0.4rem;
    margin-top: 0;
  }
  p{
    margin: 0;
    line-height: 1.5
  }
  .more{
    display: block;
    width: 2rem;
    height: 0.64rem;
    line-height: 0.64rem;
    padding: 0;
    padding-left: 0.36rem;
    margin-top: 0.88rem;
    text-align: left;
    font-family: 'PingFangSC-Regular';
    font-size: 0.24rem;
    border:1px solid #333;
    background:none;
    border-radius: 16px;
    position: relative;
    .arrow{
      position: absolute;
      bottom:0.15rem;
      width:0.32rem;
      height: 0.32rem;
      animation:arrowMove 2.4s infinite ease-in;
    }
  }
}
@keyframes arrowMove {
    0%{
        transform: translate(0.1rem);
    }
    50%{
        transform: translate(0.2rem);
    }
    100%{
        transform: translate(0.1rem);
    }
}
</style>
