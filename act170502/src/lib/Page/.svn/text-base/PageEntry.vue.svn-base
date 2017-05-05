<style lang="less" scoped>
  .PageEntry {
    position: absolute; left: 0; top: 0;
    width: 100%;
    overflow: scroll;
    z-index: 100;
    .content666 {
      width: 100%; height: 17.98rem;
      .share {
        position: absolute; left: 0; top: 0;
        font-size: 0.6rem;
        color: white;
        background: orange;
      }
      .two_btns {
        overflow: hidden;
        .to_rules {
          float: left;
          width: 2.52rem; height: 0.78rem;
          margin-left: 0.75rem;
          border-radius: 0.05rem;
          background: rgba(0,0,0,0.8);
          line-height: 0.78rem; text-align: center;
          font-size: 0.28rem;
          color: #cdcdcd;
          .icon_rules {
            display: inline-block;
            width: 0.28rem;
            vertical-align: middle;
            margin-right: 0.2rem;
          }
        }
        .to_form {
          float: right;
          width: 2.52rem; height: 0.78rem;
          margin-right: 0.75rem;
          border-radius: 0.05rem;
          background: rgba(0,0,0,0.8);
          line-height: 0.78rem; text-align: center;
          font-size: 0.28rem;
          color: #cdcdcd;
          .icon_people {
            display: inline-block;
            width: 0.37rem;
            vertical-align: middle;
            margin-right: 0.2rem;
          }
        }
      }
    }
  }
</style>

<template>
<transition name="fade">
  <div class="PageEntry rem_height" v-show=" change_main.stage==='entry' ">
    <div class="content666" 
    :style=" 'background-image:url('+img+'/main/heading.png);background-size: 100% auto;background-repeat:no-repeat;background-position:0 7%;' ">

      <div style="height:10.52rem;"></div>
    
      <btn-to-factory></btn-to-factory>
      <video-hu></video-hu>
    
      <div class="two_btns">
        <div class="to_rules"
        @click="$store.dispatch({type:'SHOW',what:'mask_rules'})">
          <img class="icon_rules" :src="img+'/main/icon_rules.png'"/>活动规则
        </div>
        <div class="to_form"
        @click="$store.dispatch({type:'SHOW',what:'mask_form'})">
          <img class="icon_people" :src="img+'/main/icon_people.png'"/>大学生入口
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script type="text/javascript">
  export default {
    components: {
      VideoHu: require('./VideoHu.vue'),
      BtnToFactory: require('./BtnToFactory.vue'),
    },
    computed: {
      change_main(){
        return this.$store.state.change_main;
      },
      img(){
        return this.$store.state.img;
      }
    },
    methods: {
      share(){
      }
    }
  }
</script>