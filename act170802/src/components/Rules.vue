<template>
	<div class="rules">
		<h4 class="ttbox"><span>活动规则</span></h4>
		<ul>
			<li><span>1、</span>活动时间：2017年8月14日-2017年8月20日</li>
			<li><span>2、</span>活动期间每条书评赠送50积分，上限5条；回复一次赠送20积分，上限10次；点赞一次赠送10积分，上限30次</li>
			<li><span>3、</span>本次活动赠送的积分为次日到账，在活动期间有效，可用于开宝箱和累计冲榜</li>
			<li><span>4、</span>本次活动最终解释权归QQ阅读所有</li>
		</ul>
		<img class="copyright" :src="'src/images/logo.png'" />
	</div>
</template>
<style lang="less">
.rules{
    background: #7cd0eb; padding: .3rem .3rem .3rem; margin:0; color: #4a879a;
	.ttbox{ font-size: .32rem; text-align: center; height: .35rem; margin-bottom: .3rem; 
	}
	li{ text-align: left; margin: 0 .18rem .18rem .4rem; position: relative; z-index: 1; font-size: .28rem; line-height: .48rem;
	    span{position: absolute; left:-.4rem; top: .07rem; display: block; width: .3rem;  line-height: .36rem; overflow: hidden; }
    }
    .copyright{ display: block; width: 2.32rem; height: .86rem; margin:.3rem auto 0; opacity: .5;  }
}
</style>