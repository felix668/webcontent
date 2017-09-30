<template>
	<div class="author-box" :id="mdata.id" :mid="mdata.mid" :style="styleobj">
		<strong class="line1">{{mdata.author}}</strong>
		<div class="intro line3">
			<p v-for="list in mdata.content">{{list}}</p>
		</div>
	</div>
</template>
<style lang="sass" scoped>
.author-box{
	height:2.4rem;width: 100%;background-size:100% auto;-webkit-box-sizing:border-box;padding:.42rem .52rem 0 .92rem;color:#fff;
	strong{font-size:.32rem;line-height:.4rem;margin-bottom:.2rem;display:block;}
	.intro{font-size:.26rem;line-height:.36rem;}

}
</style>
<script>
export default {
	props:["mdata"],
	data(){
		return{
			styleobj:{
				backgroundImage:`url(${this.mdata.pic || 'none'})`,
				color:this.mdata.fontcolor
			}
		}
	}
}
</script>

