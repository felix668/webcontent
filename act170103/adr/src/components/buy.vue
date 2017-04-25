<template>
	<div class="mask">
		<div class="tiparea" v-if="!fail">
			<img :src="'../adr/images/tip.png'">
			<h2>{{buyinfo.bagName}}</h2>
			<p class="bor">
				<span v-for="n in 3">
					《{{buyinfo.bookInfo[n-1].title}}》
				</span>
			</p>
			<div class="money">
				<p class="bookp">
					价格：<strong>{{buyinfo.discountBagMoney | price}}</strong>书币
				</p>
				<p class="account">
					余额：<strong>{{money}}</strong>书币 + <strong>{{zmoney}}</strong>书券
				</p>
			</div>
			<div class="submit" v-if="isEnough" @click="submit">确认购买</div>
			<a href="uniteqqreader://nativepage/coin/recharge?value=1" class="charge" v-else @click="recharge">余额不足，充值购买</a>
			<i class="close" @click.prevent="hidemask"></i>
		</div>
		<div class="tiparea" v-else>
			<img :src="'../adr/images/fail.png'" class="failico">
			<p class="fail">购买失败<br>请重试</p>
			<div class="submit" @click.prevent="hidemask">知道了</div>
		</div>
	</div>
</template>
<style lang="sass"scoped>
%text{font-size: .32rem;text-align: center;color:#444;line-height:.6rem}
.mask{
	position:fixed;top:0;left:0;width: 100%;height: 100%;background:rgba(0,0,0,.4);z-index: 100;
	-webkit-align-items:center;-webkit-justify-content:center;display:-webkit-flex;-webkit-border-radius:.1rem;
}
.tiparea{width: 5.2rem;background: #f1f1f1;border-radius: .1rem;position: relative;
	img{width: 2.74rem;margin:.26rem auto .1rem;}
	h2{@extend %text;}
	.bor{padding:.1rem 0 .2rem;margin:0 .3rem;color: #666;line-height: .44rem;font-size:.24rem;border-bottom: 1px dashed #c1c1c1}
	.money{padding: .17rem .26rem .35rem;font-size: .24rem;color: #666;line-height:.74rem;
		strong{font-size:.4rem;margin-right:.06rem;}
	}
	.bookp strong{color:#ee7d68;}
	.account strong{color:#555;}
	.submit,.charge{height: 1.14rem;line-height:1.16rem;background: #65b987;text-align: center;font-size: .3rem;font-weight: bold;color:#fff;-webkit-border-bottom-left-radius:.1rem;-webkit-border-bottom-right-radius:.1rem;}
	.charge{display:block;}
	.close{position:absolute;right:-.2rem;top:-.2rem;width: .52rem;height: .52rem;background: url(../images/icos.png) 0 -2.12rem no-repeat;background-size:1.48rem auto;}
	.failico{width: .74rem;margin:.66rem auto .3rem}
	.fail{@extend %text;margin-bottom:.5rem;}
}
</style>
<script type="text/javascript">
	export default {
		props:["buyinfo","money","zmoney","plat"],
		data:function(){
			return{			
				fail:false,
				isEnough:parseFloat(this.zmoney + this.money) >= parseFloat(this.buyinfo.discountBagMoney)*100 ? true : false
			}
		},
		methods:{
			hidemask:function(){
				this.$parent.hidemask();
			},
			submit:function(){
				let self=this;
				if(this.buyinfo.clomn==1){
					Local.reqaObj(common.server() + "pkg170103/pick?pickId="+this.buyinfo.pickId, function(data) {
						console.log(data.bookInfo);
						self.success(data);
					}, [], function() {
						self.showerror();
					}, 1);
				}else if(this.buyinfo.clomn==2){
					Local.reqaObj(common.server() + "pkg170103/choice?pickId="+this.buyinfo.pickId+"&choiceId="+this.buyinfo.choiceId, function(data) {
						console.log(data.bookInfo);
						self.success(data);
					}, [], function() {
				 		self.showerror();
					 }, 1);
				}
				Local.forceLog(common.param("act_f"),"TSJbuy");
			},
			success:function(data){
				if(data.code==1){
					if(this.plat=="ios"){				
						Local.addToShelfBooks(JSON.stringify(data.bookInfo));
						//Local.addToShelfBooks(data.bookInfo);
					}
					window.location.reload();
				}else if(data.code==-1){
					this.isEnough=false;
				}else if(data.isBlackUser){
					Local.showToast("黑名单");
					this.$parent.page.isBlackUser=true;
				}
			},
			showerror:function(){
				this.fail=true;
			},
			recharge:function(){
				Local.forceLog(common.param("act_f"),"TSJrecharge");
			}
		},
		filters:{
			price:function(value){
				return Math.ceil(value*100);
			}
		}
	};	
</script>