<template>
	<div class="order-book">
		<div class="order-zan">
			<div class="dzan ani" v-if="!hasVote" @click="zan">
				<img src="src/images/hand.png" class="hand">
				<div class="circle"></div>
				<img src="src/images/line.png" class="line1">
				<img src="src/images/line.png" class="line2">
			</div>
			<div class="dzan" v-else>
				<img src="src/images/voted.png" class="voted">
			</div>
			<div class="progress">
				<div class="percent" :style="'width:'+percent">
					<img src="src/images/pro.png">
					<span>{{totalnow}}</span>
				</div>
			</div>
		</div>
		<p class="tip">预约后，《1987了》上线将自动加入书架，方便阅读</p>
		<div class="ordered" v-if="hasOrder">
			<img src="src/images/order-s.png">
		</div>
		<div class="btn" @click="order" v-else>–<strong>立即预约</strong>–</div>
	</div>
</template>
<style lang="sass">
@mixin bg($width,$height,$pic){
	width:$width;
	height:$height;
	background:url("../images/"+$pic) no-repeat;
	background-size: 100% auto;
}
.order-book{margin-top:-.32rem;@include bg(100%,8.4rem,"order-bg.jpg");text-align:center;padding-top:3.9rem;-webkit-box-sizing:border-box;position: relative;	
	.tip{color:#91867b;font-size:.24rem;margin:.36rem auto}
	.ordered{width:4.16rem;margin:0 auto;position:absolute;bottom:-.4rem;left:0;right:0;}
	.btn{position: relative;z-index:2;}
}
.order-zan{@include bg(100%,1.84rem,"zan-bg.png");position:relative;
	.progress{width:5.6rem;height:.1rem;background:#373737;border-radius:.1rem;position:relative;top:.9rem;left:1.38rem;box-shadow:inset 0px 1px rgba(61,50,28,.7);
		//@include bg(5.9rem,.1rem,"progress.png");overflow:hidden;
	}
	.percent{height:100%;background:#ceaf73;border-radius:.1rem;position:relative;-webkit-transition:width .2s;transition:width .2s;
		img{position:absolute;top:-.5rem;right:-.1rem;width:.2rem;}
		span{position: absolute;bottom:-.5rem;right:-.4rem;color:#aba094;font-size:.24rem;}
	}
}
.dzan{
	width:1.4rem;height:1.4rem;position:absolute;left:.26rem;top:.2rem;z-index:10;
	.circle{position:absolute;width:1.18rem;height:1.18rem;background:rgba(249,226,172,1);top:0;right:0;left:0;bottom:0;margin:auto;border-radius:100%}
	.line1,.line2{position:absolute;top:0;left:0;width:100%;}
	.line2{-webkit-transform:scale(1.1)}
}
.ani{
	.hand{-webkit-animation:ani1-1 .8s infinite}
	.circle{-webkit-animation:ani1-2 .8s infinite}
	.line1{-webkit-animation:ani1-4 .8s infinite}
	.line2{-webkit-animation:ani1-3 .8s infinite}
}
@-webkit-keyframes ani1-1{
	0%,100%{-webkit-transform:scale(1)}
	50%{-webkit-transform:scale(1.12)}
}
@-webkit-keyframes ani1-2{
	0%,100%{-webkit-transform:scale(1);opacity:.2}
	50%{-webkit-transform:scale(1.15);opacity:.12}
}
@-webkit-keyframes ani1-3{
	0%{-webkit-transform:scale(.92);opacity:.5}
	50%{-webkit-transform:scale(1.11);opacity:.2}
	100%{-webkit-transform:scale(1);opacity:.5}
}
@-webkit-keyframes ani1-4{
	0%,100%{-webkit-transform:scale(1);opacity:.8}
	50%{-webkit-transform:scale(1.2);opacity:.05}
}
</style>
<script>
	export default{
		props:["orderinfo"],
		data (){
			return{
				hasVote: this.orderinfo.hasVote,
    			hasOrder: this.orderinfo.hasOrder,
    			isGuest:this.orderinfo.isguest,
    			isLogin:this.orderinfo.isLogin,
    			totalnow:this.orderinfo.total,
				totalneed:1987520
			}
		},
		computed:{
			percent(){
				return (parseInt(this.totalnow)/this.totalneed)*100 > 100 ? "100%" : (this.totalnow/this.totalneed)*100+"%";
			}
		},
		methods:{
			zan(){
				if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
				//let data={code:1,total:233091};	
				Local.reqaObj(`${common.server()}pkg170607/upvote`, data=> {
					this.$parent.hideUpvote=data.hideUpvote;
					this.totalnow=data.total;  	
					if(data.code == 1 || data.code == -3){
						Local.showToast(data.msg);
						this.hasVote = true;						
					}else if(data.code == -4){
						this.$parent.showover();
					}	            					
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				Local.forceLog(common.param("act_f"),"LYFzan");
			},
			order(){
				if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
				if(!this.isLogin){
					Local.login();
					return;
				}
				if(this.isGuest){
					this.$emit("iosyk","order");
					return;
				}
				//let data={code:1};
				Local.reqaObj(`${common.server()}pkg170607/addShelf`, data=> { 
					if(data.code == 1){
						// Local.addToShelf({"bid":860714,"title":"1987了","intro":"李易峰","author":"李易峰"},0);
						this.hasOrder=true;
					}else if(data.code == -4){
						this.$parent.showover();
					}	            					
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				Local.forceLog(common.param("act_f"),"LYForder");
			}
		}
	}
</script>
