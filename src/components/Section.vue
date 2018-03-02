<template>
  <div class="section">
    <span class="num">01</span>
    <div class="title">
      <slot name="title">
        VR全屋装<br />所见即所得
      </slot>
    </div>
    <div class="line line1"></div>
    <div class="line line2"></div>
    <span class="line vr">VR</span>
  </div>
</template>

<script>
export default {
  name: 'Section'
}
</script>

<style lang="less" scoped>
.section{
  background-color: #fbfbfb;
  position: relative;
  height: 3.16rem;
  padding-bottom: 48px;
  line-height: 1.7;
  &> *{
    position: absolute;
  }
  .title{
    margin-left: 1.04rem;
    font-family: 'PingFangSC-Regular';
    font-size: 0.48rem;
    margin-top: 1.64rem;
    line-height: 1.5;
    z-index: 100;

  }
  .num{
    display: block;
    margin-left: 2.26rem;
    font-size: 2.4rem;
    color:rgba(237, 242, 242,.6);
    font-family: 'HelveticaNeue-CondensedBold'
  }
  .line{
    z-index: 200;
    left: 1.04rem;
    &1{
      border-left: 1px solid #e0e2eb;
      height: 0.4rem;
      bottom:1.6rem;
    }
    &2{
      height: 1px;
      border-top:1px solid #149a91;
      width: 0.4rem;
      bottom: 0;
    }
  }
  .vr{
    font-size: 0.14rem;
    color:#6f727c;
    display: block;
    transform: rotate(-90deg);
    bottom: 2rem;
    left: 0.9rem;
  }
}
</style>
