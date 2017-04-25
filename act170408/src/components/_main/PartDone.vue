<style lang="less" scoped>
  .PartDone {
    .line {
      display: table;
      margin: auto;
      overflow: hidden;
      .avatar {
        float: left;
        width: 1.2rem; height: 1.2rem;
        border: 0.07rem solid #42324e;
        border-radius: 1000px;
        margin-right: 0.24rem;
        overflow: hidden;
        img {
          width: 100%; height: 100%;
        }
      }
      .p0 {
        float: left;
        line-height: 1.2rem;
        font-size: 0.24rem;
        color: #e6d1b8;
        span {
          font-weight: 600;
        }
      }
    }
    .text {
      display: table;
      margin: auto; margin-bottom: 0.12rem;
      overflow: hidden;
      .text_qq {
        float: left;
        width: 1.13rem;
      }
      .text_farm {
        float: left;
        width: 1rem;
      }
      .text_num {
        float: left;
        font-size: 0.28rem;
        line-height: 0.3rem;
        color: #a1436b;
        font-weight: 600;
      }
      .text_books {
        float: left;
        width: 1.23rem;
      }
    }
    .text_rest {
      width: 3.94rem;
      margin: auto;
      margin-bottom: 0.3rem;
    }
    .torch {
      width: 3.03rem;
      margin: auto;
    }
    .btn_to_read {
      width: 3.31rem;
      margin: auto;
    }
    .logo {
      width: 2.3rem;
      margin: 0.56rem auto 0.44rem auto;
    }
  }
</style>

<template>
  <div class="PartDone" v-show="done===true">
    <div class="line" v-if=" user.loggedIn&&user.donated>0 ">
      <div class="avatar">
        <img :src=" user.avatar "/>
      </div>
      <div class="p0">
        {{meta.share?name_sliced:'我'}}为农家书屋捐出阅读时长<span>{{user.donated}}</span>分钟
      </div>
    </div>
    <img class="torch" :src=" img+'/main/torch.png' "/>
    <div class="text">
      <img class="text_qq" :src=" img+'/main/text_qq.png' "/>
      <img class="text_farm" :src=" img+'/main/text_farm.png' "
      @click="$store.dispatch({type:'SHOW',what:'mask_house'})"/>
      <div class="text_num">
        捐{{donated.books}}
      </div>
      <img class="text_books" :src=" img+'/main/text_books.png' "/>
    </div>
    <img class="text_rest" :src=" img+'/main/text_rest.png' "/>

    <img class="btn_to_read" :src=" img+'/main/btn_to_read.png' "
    v-show=" meta.share "
    @click="$store.dispatch({type:'TO_BOOKSHELF'})"/>
    <img class="logo" :src=" img+'/main/logo.png' "/>
  </div>
</template>

<script type="text/javascript">
  export default {
    computed: {
      done(){
        return this.$store.state.done;
      },
      meta(){
        return this.$store.state.meta;
      },
      user(){
        return this.$store.state.user;
      },
      img(){
        return this.$store.state.img;
      },
      donated(){
        return this.$store.state.donated;
      },
      name_sliced(){
        return this.$store.getters.name_sliced;
      }
    }
  }
</script>