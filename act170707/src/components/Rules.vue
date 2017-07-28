<template>
	<div class="rules">
		<h4 class="ttbox"><span>活动规则</span></h4>
		<ul>
			<li><span>1、</span>活动时间：2017年7月24日——8月7日0点</li>
			<li><span>2、</span>活动期间使用推荐票，每投1张赠送30积分；使用月票，每投一张赠送300积分；每打赏1{{ plat=='adr'?'书币':'阅点'}}赠送1积分</li>
			<li><span>3、</span>本次活动积分赠送的积分为次日到账，在活动期间有效，可用于开宝箱和累计冲榜</li>
		</ul>
		<img class="copyright" :src="'src/images/logo.png'" />
	</div>
</template>
<style lang="less">
.rules{
    background: #94e4d9; padding: 0 .3rem .3rem; margin:0; color: #5d5a83;
	.ttbox{ font-size: .32rem; text-align: center; height: .35rem; margin-bottom: .55rem; border-bottom: 1px solid #8fd7d1;
		span{display: block; height: .7rem; line-height: .7rem; width: 2.12rem; background: #94e4d9; margin:0 auto;}
	}
	li{ text-align: left; margin: 0 .18rem .18rem .4rem; position: relative; z-index: 1; font-size: .28rem; line-height: .48rem;
	    span{position: absolute; left:-.4rem; top: .07rem; display: block; width: .3rem;  line-height: .36rem; overflow: hidden; }
    }
    .copyright{ display: block; width: 2.32rem; height: .86rem; margin:.3rem auto 0;  }
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