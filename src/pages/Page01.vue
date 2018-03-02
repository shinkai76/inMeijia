<template>
  <div>
    <my-header></my-header>
    <my-swipe></my-swipe>
    <my-section></my-section>
    <my-content></my-content>
    <my-form></my-form>
  </div>
</template>

<script>
import Header from 'components/Header'
import Swipe from 'components/Swipe'
import Section from 'components/Section'
import Content from 'components/Content'
import Form from 'components/Form'

export default {
  name: 'Page01',
  components: {
    'my-header': Header,
    'my-swipe': Swipe,
    'my-section': Section,
    'my-content': Content,
    'my-form': Form
  }
}
</script>

<style lang="less">
.mint{
  &-header{
    background-color: #1b1a1f;
  }
  &-swipe-items-wrap{
    height: 4rem;
  }
  &-swipe-indicator{
    border:1px solid #666;
    &s{
      left: 15%;
    }
  }
}
</style>
