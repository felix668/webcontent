<template>
	<div class="mask">
		<div class="tiparea">
			<strong>确认选择？</strong>
			<p>《{{book.name}}》<br>的100付费章节免费读</p>
			<div class="submit" @touchend.prevent="confirm">确认</div>
			<i class="close" @touchend.prevent="hidemask"></i>
		</div>
	</div>
</template>
<style lang="less" scoped>
.mask{position:fixed;top:0;left:0;width: 100%;height: 100%;background:rgba(0,0,0,0.7);display:-webkit-flex;-webkit-align-items:center;-webkit-justify-content:center;z-index: 10000;}
.tiparea{
	width:4.76rem;background: #fff;border-radius:.2rem;text-align: center;position: relative;
	strong{font-size:.34rem;line-height:.5rem;color:#333;padding:.66rem 0 .08rem;display: block;}
	p{font-size: .28rem;color: #666;line-height: .44rem}
	.submit{
		margin:.32rem auto .44rem;width:3.3rem;height: .8rem;line-height:.82rem;background: #ffa94c;text-align: center;font-size: .36rem;color:#fff;border-radius: .1rem;box-shadow: 0 .04rem 0 #c68136;		
	};
	.submit:active{background: #e99959;}
	.close{position:absolute;right:.14rem;top:.14rem;width: .46rem;height: .46rem;background: #6fd0fa url(../images/close.png) no-repeat;background-size: 100% auto;border-radius: 50%}
}
</style>
<script type="text/javascript">
	import Bus from './bus.js';
	module.exports={
		data:()=>{
		 	return{
		 		book:{}
		 	}			
		},
		created:function(){	
			var self=this;		
			Bus.$on('name-select',function(book){
				self.book=book;		
			});
		},
		methods:{
			hidemask:function(){
				this.$parent.showmask='';
			},
			confirm:function(){
				var self=this;
				Local.reqaObj(server() + "topic/old/pick100?bid="+self.book.bid+"&pagetype="+param("pagetype"), function(data) {						
					if(data.code==0){
						self.hidemask();
						Bus.$emit('confirm-btn');
						//加入书架代码
						Local.addToShelf(self.book.bid);
					}else{
						Local.showToast(data.msg);
						self.hidemask();
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("LYH100pick","top",self.book.bid);	
			}		
		}
	};	
</script>