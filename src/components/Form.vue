<template>
  <div class="wrap">
    <h2>现在预约</h2>
    <div class="line"></div>
    <h3>免费获得客厅装修类型VR全景方案</h3>
    <!-- 表单 -->
    <form>
      <!-- 装修类型选择 -->
      <div class="selection">
        <select v-model="selection_type" class="select">
          <option v-for="option in options_type" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <!-- 城市选择 -->
      <div class="selection">
        <select v-model="selection_city" class="select">
          <option v-for="option in options_city" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <!-- 小区地址 -->
      <div class="selection">
        <input type="text" v-model.trim="community" placeholder="小区">
      </div>
      <!-- 提交btn -->
      <div class="selection">
        <button type="submit" class="btn-submit" @click.prevent="on_submit()">立即预约</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'Form',
  data: function () {
    return {
      community: '',
      selection_type: 1,
      selection_city: 1,
      options_type: [
        {
          text: '毛坯房',
          value: 1
        },
        {
          text: '装修类型2',
          value: 2
        },
        {
          text: '装修类型3',
          value: 3
        }
      ],
      options_city: [
        {
          text: '杭州',
          value: 1
        },
        {
          text: '城市2',
          value: 2
        },
        {
          text: '城市3',
          value: 3
        }
      ]
    }
  },
  methods: {
    on_submit: function () {
      if (this.community === '') {
        this.on_empty()
        return
      }
      const datapost = {
        type: this.selection_type,
        city: this.selection_city,
        community: this.community
      }
      let me = this
      this.$ajax({
        method: 'post',
        url: '',
        data: datapost
      }).then(function (data) {
        me.on_succeeded()
      }).catch(function (err) {
        if (err.request) {
          console.log(err.request)
        } else {
          console.log('error:', err.message)
        }
        me.on_failed()
      })
    },
    on_succeeded: function () {
      Toast({
        message: '操作成功'
      })
    },
    on_failed: function () {
      Toast({
        message: '提交失败'
      })
    },
    on_empty: function () {
      Toast({
        message: '请完善地址信息'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrap{
  background-color: rgb(244,244,244);
  padding: 0.56rem 0;
  h2,h3{
    text-align: center;
    font-weight: normal;
    margin:0;
  }
  h2{
    font-size: 0.5rem;
  }
  h3{
    font-size: 0.3rem;
    color:#d2d2d2;
    margin-bottom: 0.8rem;
  }
  .line{
    height: 1px;
    border-top:1px solid #149a91;
    width: 0.4rem;
    bottom: 0;
    margin: 0.24rem auto;
  }
  form{
    width: 80vw;
    margin:0 auto;
  }
  .selection,.select,input[type="text"],.btn-submit{
    height: 0.8rem;
  }
  .selection{
    position: relative;
    margin-bottom: 0.4rem;
    &:last-of-type{
      margin-bottom: 0;
    }
    input[type="text"],.select{
      background-color: #fff;
      text-indent: 0.2rem;
    }
    input[type="text"],.select,.btn-submit{
      width: 100%;
      position: absolute;
      border:none;
    }
    input::-webkit-input-placeholder{
        color:#999;
    }
    .select{
      margin:0;
      border-radius: 0;
      color:#999;
      border:none
    }
    .btn-submit{
      text-align: center;
      font-family: 'PingFangSC-Regular';
      font-size: 0.28rem;
      padding: 0;
      background-color: rgb(60,209,187);
      color:#fff;
      &:active{
        background-color: darken(rgb(60,209,187), 10%);
      }
    }
  }
}
</style>
