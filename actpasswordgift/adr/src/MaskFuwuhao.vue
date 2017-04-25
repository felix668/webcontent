<template>
	<div class="fwhmask">
		<div class="fwhtip">
			<p>打开微信</p>
			<ul>
				<li><span>1.</span>打开微信</li>
				<li><span>2.</span>搜索“QQ阅读服务号”，点击进入
					<img :src="'images/fwhimgs.jpg'" />
				</li>
				<li><span>3.</span>关注服务号，在历史推送文章中寻找当期口令</li>
			</ul>
			<div class="btn_close" @click="closetk">我知道啦</div>
		</div>
	</div>
</template>
<script>
module.exports = {

	data: function(){
		return {
		}
	},
	methods:{
		closetk:function(){
			this.$parent.showfwh=false;
		}
	}
}
</script>