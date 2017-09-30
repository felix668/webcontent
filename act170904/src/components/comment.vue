<template>
  <div id="comment">
    <div class="title">
      <span class="line"></span>
      <strong class="text">看芳华 写书评</strong>
      <span class="line"></span>
    </div>
    <div class="book">
      <img class="image" src="src/images/book.png" @click="goDetail">
      <div class="detail">
        <p class="name">芳华</p>
        <p class="author">作者：严歌苓</p>
        <p class="desc">冯小刚执导、严歌苓编剧、黄轩主演同名电影《芳华》。</p>
        <p class="more" @click="goDetail">了解更多&gt;</p>
      </div>
    </div>
    <div class="content" v-for="(item,index) in 2" :key="item">
      <p class="head">
        <i class="avatar" :style="{backgroundImage: `url(${commentList[index].avatar})`}"></i>
        <span class="nick">{{commentList[index].name}}</span>
        <span class="date">{{commentList[index].time}}</span>
      </p>
      <p class="body">{{commentList[index].content}}</p>
    </div>
    <p class="more" @click="goComment">更多评论 &gt;</p>
    <p class="input" @click="goComment"></p>
  </div>
</template>
<style lang="scss" scoped>
  @mixin bgpic($width,$height,$pic){
    width: $width;
    height: $height;
    background:url("../images/"+$pic) no-repeat;
    background-size: 100% auto;
  }
  #comment{
    padding: 0 .3rem;
  }
  .book{
    overflow: hidden;
    text-align: left;
    margin-top: .54rem;
    border-bottom: .02rem solid rgb(140, 154, 72);
    .image{
      width: 2.06rem;
      float: left;
      margin-right: .16rem;
    }
    .name{
      font-size: .32rem;
      margin-top: .04rem;
    }
    .author{
      font-size: .28rem;
      margin: .16rem 0 .18rem;
    }
    .desc{
      font-size: .28rem;
    }
    .more{
      margin-top: .2rem;
      margin-bottom: .5rem;
      font-size: .28rem;
      color: #be003f;
      float: right;
    }
  }
  .content{
    margin-top: .3rem;
    padding-bottom: .2rem;
    border-bottom: .02rem solid rgb(140, 154, 72);
    .head{
      height: .64rem;
      line-height: .64rem;
      .avatar{
        border: .01rem solid rgb(91, 101, 40);
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        width: .62rem;
        height: 0.62rem;
        float: left;
        background-size: 100% auto;
      }
      .nick{
        margin-left: .1rem;
        font-size: .24rem;
        color: #6a7536;
        float: left;
      }
      .date{
        color: #5b6528;
        font-size: .24rem;
        float: right;
      }
    }
    .body{
      margin-top: .1rem;
      text-align: left;
      margin-left: .74rem;
      font-size: .28rem;
    }
  }
  .more{
    font-size: .28rem;
    color: #be003f;
    margin: .3rem 0 .38rem;
  }
  .input{
    @include bgpic(6.9rem,.78rem,"input.png");
  }
</style>
<script>
  export default {
    data(){
      return {
        commentList: [
					{
						avatar: `src/images/commentavatar/1.jpg`,
						name: '流浪的娃',
						content: '刘峰的经历应该反过来，如果爱上的是何小曼一切爱情会不一样，如果是从神坛下走上神坛，人生也会不一样。不过无所谓，爱对了是青春，爱错了是芳华。',
						time: '9月14日 18:29'
					},
					{
						avatar: `src/images/commentavatar/2.jpg`,
						name: '青青草',
						content: '“好人”是那个时代最好的嘉奖，只是刘峰的善良是脆弱的，他的爱也是脆弱的。',
						time: '10月1日 10:11',
					},
					{
						avatar: `src/images/commentavatar/3.jpg`,
						name: 'LMT',
						content: '所有人都会老，但青春不会老，刘峰这样的少年不会老，刘峰是时代的产物，却可以穿越时代。',
						time: '10月2日 12:55',
					},
					{
						avatar: `src/images/commentavatar/4.jpg`,
						name: '开心生活',
						content: '何小曼的爱把刘峰推上神坛，刘峰对林丁丁的爱把自己推下神坛，青春不是错误，爱才是。',
						time: '10月3日 22:16',
					},
					{
						avatar: `src/images/commentavatar/5.jpg`,
						name: '小竹',
						content: '心中的刘峰，就是黄轩的样子。全程代入黄轩看完了小说，对电影更加期待，青春易逝，芳华永存。',
						time: '10月3日 23:01'
					},
					{
						avatar: `src/images/commentavatar/6.jpg`,
						content: '一口气读完感慨良多，太多的话如鲠在喉。小说太过真实又太过遥远，每个年代，都有这样的芳华重现，仔细想想，我们身边不也有着相似的刘峰，相似的何小曼，相似的林丁丁？',
						time: '10月4日 08:25'
					}
				]
      }
    },
    methods: {
      goDetail(){
				Local.goBookDetail('854309')
			},
			goComment(){
				window.location.href = 'uniteqqreader://nativepage/comment/index?bid=854309&ctype=0'
			}
    }
  }
</script>