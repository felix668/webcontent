<template>
	<div id="app">
		<div class="box">
			<div class="line">
			<h4>什么是月票？</h4>
			<p>月票是VIP等级用户专有的票种，用来评选VIP上架作品（此VIP作品非包月作品，主要指所有按照章节付费书）</p>
			</div>
			<div class="line">
			<h4>什么是推荐票？</h4>
			<p>推荐票是表达你对一部作品的喜爱并乐于与他人分享的票种，同时也是一部作品受欢迎程度的重要判断依据。</p>
			</div>
			<div class="line bn">
			<h4>什么是打赏？</h4>
			<p>打赏是对作者的即时激励表达您对作者作品的支持同时打赏成功后作者是可以获取一定的收益的。目前可对签约的作品进行打赏操作。</p>
			</div>
		</div>
	</div>
</template>
<style lang="less">
body,div,p,h4{margin:0;padding:0;}
a{text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;}
*{-webkit-tap-highlight-color:rgba(0,0,0,0)}
body{font-family:"Microsoft YaHei",Helvetica,STHeiTi,sans-serif,sans-serif;-webkit-text-size-adjust:none; font-size:.3rem; line-height: .52rem; color: #a5574b;}
.box{ position: absolute;left: 0 ;top: 0; width: 100%; height: 100%; background: #fdedd6 url(../src/images/infoimg.jpg) no-repeat left top; background-size: 100% auto; 
     &:after{ content:''; position: absolute; left: 0 ;bottom: 0; z-index: 1; width: 100%; height: 1.63rem;background:url(../src/images/botimg.jpg) no-repeat left top; background-size: 100% auto; }
     h4{font-size: .32rem; color: #604343; font-weight: normal;
		
     }
     .line{border-bottom:1px dashed #b16b5e; overflow: hidden;margin: 0 .4rem; padding: .3rem 0; 
		&:first-child h4{ padding-top:1.2rem;}
		&.bn{ border-bottom: none; }
     }
	.more{ display:block; position: relative; z-index: 2; text-align: center; margin: 0 auto; color: #5d9ff9;font-size:.32rem; height: .7rem; line-height: .7rem; }
}
</style>

