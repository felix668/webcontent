<template>
	<div class="mask">
		<div class="tiparea" v-if="!isguest">
			<p class="sel">确认选择这本书免费读？</p>
			<div class="tipbtns">
				<span @click="$parent.hidemask">取消</span>
				<span @click="$parent.getFree">确认</span>
			</div>
		</div>
		<div class="tiparea" v-else>
			<p class="guest">ios游客登录用户<br>暂不支持参加加书架阅读得好礼活动</p>
			<div class="tipbtns">
				<span @click="$parent.hidemask" class="knowbtn">我知道了</span>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.mask{	position:fixed;top:0;left:0;width: 100%;height: 100%;background:rgba(0,0,0,.6);z-index: 100;
	-webkit-align-items:center;-webkit-justify-content:center;display:-webkit-flex;
}
.tiparea{
	width: 5.2rem;height:3.64rem;background: #f1f1f1 url(../images/mask.png) center no-repeat;background-size:5rem auto;text-align: center;
	.sel,.guest{font-size: .32rem;color: #333;line-height: .4rem;margin:1.2rem 0 1rem;}
	.time{color: #999;}
	.guest{font-size: .28rem;margin: 1rem 0 .12rem;}
}
.tipbtns{
	margin-top:.72rem;
	font-size: 0;
	span{
		display: inline-block;width: 2.2rem;height: .76rem;color: #fff;font-size: .32rem;line-height: .76rem;border-bottom: .06rem solid #c8c8c8;margin:0 .1rem;
		&:first-child{
			background:#a7a7a7;
		}
		&:last-child{
			background:#e7a532;
		}
	}
	.knowbtn{width: 3rem}
}

</style>
<script type="text/javascript">
	export default {
		props:["isguest"],
		data:function(){
			return{
			}
		},
		created:function(){ 	
	 	},
	 	mounted:function (){	 				
	 	},
	 	methods:{
	 		
	 	}
	}
</script>