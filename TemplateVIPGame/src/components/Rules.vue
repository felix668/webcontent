<template>
	<div class="rules">
		<h4 class="ttbox"><span>活动规则</span></h4>
		<ul>
			<li><span>1、</span>活动时间：2016年11月11日-11月13日</li>
			<li><span>2、</span>秒杀书籍在固定时间内享受折扣价格，活动结束后恢复原价。</li>
			<li><span>3、</span>每名用户购买超值包后，即可获得超值包内书籍永久免费阅</li>
			<li><span>4、</span>每名用户购买超值包后，可赠送超值包中书籍给一位好友。赠书页面可多次分享，但仅一位好友能获得赠书。活动结束后，赠书无法领取。</li>
		</ul>
		<img class="copyright" :src="'src/images/logo.png'" />
	</div>
</template>
<style lang="less">
.rules{
     padding:.3rem; margin:0; color: #8c88af;
	.ttbox{ font-size: .32rem; text-align: center; height: .35rem; margin-bottom: .55rem; 
		span{display: block; height: .7rem; line-height: .7rem; width: 2.12rem;  margin:0 auto;}
	}
	li{ text-align: left; margin: 0 .18rem .18rem .4rem; position: relative; z-index: 1; font-size: .28rem; line-height: .48rem;
	    span{position: absolute; left:-.4rem; top: .07rem; display: block; width: .3rem;  line-height: .36rem; overflow: hidden; }
    }
    .copyright{ display: block; width: 2.32rem; opacity: .6; height: .86rem; margin:.3rem auto 0;  }
}
</style>
<script>
	export default {
		data(){
			return{
				plat: window.pt,
			}
		},
	 	
	}
</script>