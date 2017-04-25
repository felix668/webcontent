<style lang="less" scoped>
  .Comments {
    position: relative; 
    width: 100%; height: 3.22rem;
    //margin-top: 1rem;
    // background: brown;
    perspective: 10rem;
    .panel-arrow {
      position: absolute; left: 0.4rem; top: 0;
      width: 6.7rem;
      opacity: 0;
      transform: translate3d(0,-30%,0) scale(1);
      transition-property: opacity,transform;
      transition-duration: 1s;
      z-index: 47;
      .arrow {
        width: 0; height: 0;
        border-left: 0.16rem solid transparent;
        border-bottom: 0.16rem solid white;
        border-right: 0.16rem solid transparent;
        margin: auto;
      }
      .panel {
        box-sizing: border-box;
        width: 6.7rem; height: 1.3rem;
        margin: auto;
        padding-left: 0.27rem; padding-right: 0.27rem; padding-top: 0.18rem;
        border-radius: 0.2rem;
        background: white;
        font-size: 0.28rem; color: #999999; line-height: 0.48rem;
      }
      &.class0 {
        opacity: 1;
        transform: scale(1);
        z-index: 50;
      }
      &.class1 {
        opacity: 0.7;
        //opacity: 1;
        transform: translate3d(0,0.25rem,0) scale(0.9);
        z-index: 49;
      }
      &.class2 {
        opacity: 0.5;
        //opacity: 1;
        transform: translate3d(0,0.45rem,0) scale(0.8);
        z-index: 48;
      }
      &.over {
        opacity: 0;
        transform: translate3d(0,0.65rem,0) scale(0.7);
        z-index: 47;
      }
    }
  }
</style>

<template>
  <div class="Comments"
  @click="show">
    <div class="panel-arrow"
    v-for="a in comments"
    :class="a.state">
      <div class="arrow"></div>
      <div class="panel">
        {{a.text}}
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      change: {},
      dispatch: {}
    },
    data: function(){
      return {
        playing: false,
        state: 'ready',
        cycle: 0,
        current: 0,
        over: false,
        comments: [{
          text: '［媒体评论］朱天文：我在台北，我读到了李娟，真不可思议我同时就在李娟那唯一无二的新疆。',
          state: ''
        },{
          text: '［媒体评论］舒飞廉：她的出现，就像当年的萧红一样，是天才的出现。李娟和阿勒泰的关系...',
          state: ''
        },{
          text: '［媒体评论］王安忆：她的文字一看就认出来，她的文字世界里，世界很大，时间很长，人变...',
          state: ''
        },{
          text: '［读者评价］很多年不曾见过的温暖又干净的文字 ——dana (成都)',
          state: ''
        },{
          text: '［读者评价］最几年读过的最好的华语散文，让我对文学有了一些... ——Xiao (New York City)',
          state: ''
        },{
          text: '［读者评价］文笔优美，带着孩子般的童趣和观察视角。看过之后,心中涌起... ——Fairylandyy',
          state: ''
        }]
      }
    },
    watch: {
      'change.page': function(nv){
        if( nv===3 ){
          if( this.playing===false ){
            this.playing = true;
            this.start();
          };
        }
      },
      current: function(nv){
        if( this.over ){
          this.comments[ nv ].state = 'class0';
          this.comments[ nv-1>=0?(nv-1):(nv+5) ].state = 'class1';
          this.comments[ nv-2>=0?(nv-2):(nv+4) ].state = 'class2';
          this.comments[ nv-3>=0?(nv-3):(nv+3) ].state = 'over';
          this.comments[ nv-4>=0?(nv-4):(nv+2) ].state = '';
        };
      },
      state: function(nv){

      }
    },
    mounted: function(){
      // this.start();
    },
    methods: {
      show(){
        this.dispatch({
          type: 'SHOW',
          what: 'mask_comments'
        })
      },
      restart(){
        this.stop();
        this.start();
      },
      stop(){
        this.cycle++;
        this.comments.forEach((a)=>{
          a.state = ''
        });
      },
      start: function(){
        this.over = false;
        var cycle = this.cycle;
        setTimeout(()=>{
          if( cycle!==this.cycle )return;
          this.comments[0].state = 'class0';
        },500);
        setTimeout(()=>{
          if( cycle!==this.cycle )return;
          this.comments[0].state = 'class1';
          this.comments[1].state = 'class0';
        },2500);
        setTimeout(()=>{
          if( cycle!==this.cycle )return;
          this.comments[0].state = 'class2';
          this.comments[1].state = 'class1';
          this.comments[2].state = 'class0';
          setTimeout(()=>{
            if( cycle!==this.cycle )return;
            this.current = 3;
            this.over = true;
            var interval = setInterval(()=>{
              if( cycle!==this.cycle ){
                clearInterval(interval);
                return;
              };
              if( this.current+1<=this.comments.length-1 ){
                this.current++;
              }else{
                this.current = 0;
              }
            },2000);
          },2000);
        },4500);
      }
    }
  }
</script>