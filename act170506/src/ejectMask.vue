<template>
	<div class="mask">
		<div class="tiparea">
			<div class="gifticon"></div>
			<div class="closemk" @click="closemask"></div>
			<div class="votes">
				<h4>恭喜你获得{{quan}}书券</h4>
				<p>书券有效期7天</p>
				<a class="closbtn" @click="gobuy">真开心，去买书</a>
			</div>
		</div>
	</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {
			}
		},
		props:['mask','quan'],
		mounted: function(){
		},
		methods: {
			gobuy:function(){
				let self=this;
				self.closemask();
			},
			closemask:function(){
				this.$parent.maskshow=false;
				$(window).scrollTop(320);
			}
		}
	}
</script>
