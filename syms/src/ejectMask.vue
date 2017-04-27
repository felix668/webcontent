<template>
	<div class="mask">
		<div class="tiparea" v-show="type=='shelfmask'">
			<div class="votes">
				<p class="online">决定选择这本书，享受10天限免特权？</p>
				<div class="btnbox">
					<a class="btnno" @click="closemask">取消</a>
					<a class="btnok" @click="selectok(bookid)">确定</a>
				</div>
				
			</div>
		</div>
		<div class="tiparea" v-show="type=='booklistmask'">
			<div class="closemk" @click="closemask"></div>
			<div class="votes">
				<h4>领取成功</h4>
				<p>领取的全部限免书已为你加入书架，<br>限免10天</p>
				<a class="closbtn" @click="gotoshelf">去书架看书</a>
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
		props:['type','mask','bookid'],
		mounted: function(){
		},
		methods: {
			selectok:function(bid){
				let self=this;
				// Local.reqaObj(server() + "pkg170409/init?bid="+bid, function(data) {
					self.$parent.selected=bid; 
					console.log('已成功领取限免书');       
				// 	Local.showToast("已成功领取限免书");
				// }, [], function() {
				// 	Local.showToast("网络异常，请稍候重试");
				// }, 1);
				self.closemask();
			},
			gotoshelf:function(){
				let self=this;
				Local.openBookShelf();
				self.closemask();
			},
			closemask:function(){
				this.$parent.maskshow=false;
				this.$parent.masktype='';
			}
		}
	}
</script>
