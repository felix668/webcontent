<template>
	<div :class="!type ? 'book-intro' : 'book-intro2'">
		<template v-if="!type">
			<p>它记录三十岁的李易峰，出道十年的心路历程，</p>
			<p>它呈现最真实的李易峰，收录李易峰亲笔书信，直面成长。</p>
			<p>它包含100张李易峰独家私藏写真……</p>
		</template>
		<template v-else>
			<img src="src/images/bookc.png" @click="goDetail">
			<p class="bdesc" @click="goDetail">李易峰坦言出道十年，台前幕后的感动瞬间，分享个人的生活哲学。亲笔手写信，展现细腻情感，字里行间，见字如晤。超百张独家写真，黑白光影勾勒不一样的成熟轮廓。</p>
		</template>
	</div>
</template>
<style lang="sass">
.book-intro{background:#f4f4f4;padding:.26rem 0 .26rem .26rem;
	p{color:#323232;font-size:.22rem;line-height:.3rem;padding:.15rem 0}
}
.book-intro2{
	display:-webkit-box;
	display:-webkit-flex;
	-webkit-box-align:center;
	-webkit-box-pack:justify;
	-webkit-align-items:center;
	-webkit-justify-content:space-between;
	margin:.28rem .38rem 0;
	position: relative;z-index:22;
	img{width:1.67rem;}
	.bdesc{width:4.8rem;color:#323232;font-size:.22rem;line-height:.54rem}
}
</style>
<script>
	export default{
		props:["type"],
		methods:{
			goDetail(){
				if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
				Local.goBookDetail(860714);
				Local.forceLog(common.param("act_f"),"LYFgoDetail");
			}
		}
	}
</script>
