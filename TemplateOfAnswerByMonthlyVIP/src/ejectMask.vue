<template>
	<div class="mask">
		<div class="tiparea">
			<div class="gifticon"></div>
			<div class="votes">
				<p>陛下，若已开通包月，<br>就可以答题领{{ urlis=='adr'?'书券':'阅券'}}哟～～</p>
				<a class="closbtn" @click="gotodati"></a>
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
		props:['mask','urlis'],
		methods: {
			gotodati:function(){
				let self=this;
				Local.reqaObj(server() + "pkgAnswerMonthlyVIP/init?tpc="+param('tpc'), function(data) {
					console.log(data);
					self.$parent.isvip=data.isWhiteUser;
					self.$parent.config.card=data.card;
					self.$parent.userGd=data.gd;
				}, [], function() {
					//Local.showToast("网络异常，请稍候重试");
				}, 1);
				self.$parent.maskshow=false;
			}
		}
	}
</script>
