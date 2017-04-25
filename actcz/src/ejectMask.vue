<template>
	<div class="mask">
		<div class="tiparea">
			<div class="prize" v-if="type==1">
				<img :src="'img/shubi.png'">
				<h4>书币<br>1000书币=10元</h4>
				<p>书币可用于购买QQ阅读书城的书籍</p>
			</div>		
			<div class="prize" v-if="type==2">
				<img :src="'img/shuquan.png'">
				<h4>100书券=100书币</h4>
				<p>书券可用于购买QQ阅读书城的书籍，15天有效期</p>
			</div>
			<div class="prize" v-if="type==3">
				<img :src="'img/tuijianp.png'">
				<h4>推荐票</h4>
				<p>决定一部作品在推荐榜单的排名，限当天使用，快投给你喜欢的作品</p>
			</div>
			<div class="prize" v-if="type==4">
				<img :src="'img/baoyue.png'">
				<h4>包月特权</h4>
				<p>体验3天包月vip业务，享有包月专区10万册好书的免费特权</p>
			</div>
			<div class="prize" v-if="type==5">
				<img :src="'img/chengzhangz.png'">
				<h4>成长值</h4>
				<p>助力升级，成长等级飞升，等级越高，领取的月度等级礼包越大</p>
			</div>		
			<a href="javascript:" class="closbtn" @click="closemask">我知道啦</a>
		</div>
	</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {
			}
		},
		props:['type','mask'],
		mounted: function(){
		},
		methods: {
			closemask:function(){
				this.mask=false;
			}
		}
	}
</script>
