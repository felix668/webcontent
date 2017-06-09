<template>
	<div class="mask">
		<div class="tiparea" v-if="receiveok">
			<div class="gifticon"></div>
			<div class="votes">
				<h4>领取成功</h4>
				<p>这本书已为你加入书架，快去看书吧</p>
				<a class="closbtn" @click="goreadbook(bookid)">去看书</a>
			</div>
		</div>
		<div v-else>
			<div class="tiparea" v-show="received==''">
			    <div class="gifticon"></div>
				<div class="votes">
					<p class="online">决定选择这本书，<br>享受10天限免特权？</p>
					<div class="btnbox">
						<a class="btnno" @click="closemask">取消</a>
						<a class="btnok" @click="selectok(bookid)">确定</a>
					</div>
					
				</div>
			</div>
			<div class="tiparea" v-show="received!=''">
				<div class="gifticon"></div>
				<div class="closemk" @click="closemask"></div>
				<div class="votes">
					<p class="online">你已领取过限免书籍了，<br>快去读书吧</p>
					<a class="closbtn" @click="gotoshelf()">去书架看书</a>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default {
		data: function(){
			return {
				receiveok:false
			}
		},
		props:['mask','received','bookid'],
		mounted: function(){
		},
		methods: {
			selectok:function(bid){
				let self=this;
				console.log(bid);
				Local.reqaObj(server() + "pkg170501/page4Accept?bid="+bid, function(data) {
					console.log(data);
					if(data.code==1){
						self.$parent.received=data.received;
						self.$parent.showsearch=false;
						self.$parent.inptxt='';
						$(".delesearch").addClass('hide');
						self.receiveok=true;
					}
					forceLog(param("act_f"),'four_recevie_free');
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},
			gotoshelf:function(){
				let self=this;
				self.closemask();
				Local.openBookShelf();
			},
			goreadbook:function(bid){
				let self=this;
				ABook.gotoRead(bid);
				self.closemask();
			},
			closemask:function(){
				this.receiveok=false;
				this.$parent.maskshow=false;
				this.$parent.showsearch=false;
				this.$parent.inptxt='';
				$(".delesearch").addClass('hide');
			}
		}
	}
</script>
