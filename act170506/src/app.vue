<template>
	<div id="root">
		<div class="warp">
			<div class="ban"></div>
			<div class="connect">
			<div class="contbox">
				<div class="gologin" v-show="!islogin">
					<a class="lgoinbtn" @click="gologin">登录参与</a>
				</div>
				<div v-show="islogin">
					<div class="receiveQuan">
						<div  class='tite'>－先领券后买书－<p>书券送不停，点击领取</p></div>
						<a class="receivebtn" @click="recequan">{{ selected?'已领'+quanNum+'书券，去买书':'我要书券'}}</a>
					</div>
					<div  class='tite'>－你的专属个性书库－<p>本本一折  不容错过</p></div>
					<ul class="booklist">
						<li v-for="(books,index) in booklist">
							<div class="bookface" @click="gotodetail(books.bid)">
							   <div class="zheifon"></div>
								<img :src="books.cover" />
							</div>
							<p class="bookname">{{ books.title }}</p>
							<p>{{ books.author }}</p>
							<a class="votebtn" v-bind:class="{ disabeled:books.isBuy==1 }" @click="receive(index,books.bid)"><span>{{books.isBuy==1?'已购买':'抢购'}}</span></a>
						</li>
					</ul>
				</div>
			</div>
				
			</div>
			<div class="rules">
				<h4>－ 活动规则－</h4>
				<p><span>1.</span>本活动为幸运福利活动，仅部分用户可参与。</p>
				<p><span>2.</span>赠送书券金额随机，有效期7天。</p>
				<p><span>3.</span>活动期间可按折扣价购买所选书籍，活动结束后不再享受优惠。</p>
				<p><span>4.</span>活动最终解释权归QQ阅读所有。</p>
			</div>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<mask-eject v-show="maskshow" :mask="maskshow" :quan="quanNum"></mask-eject>
	</div>
</template>
<script type="text/javascript">
    import database from "./data";
	export default {
		components: {
			maskLoading: require('./MaskLoading.vue'),
			maskOver: require('./MaskOver.vue'),
			maskEject:require('./ejectMask.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,//活动结束
				islogin:false,
				maskshow:false,
				selected:false,//书券是否领取
				quanNum:0,
				booklist:[]
			}
		},
		methods: {
			initpage:function(){
				var self=this;
				
				//self.booklist=database.booklist;
				Local.init();
				Local.reqaObj(server() + "pkg170501/page3Init", function(data) {
					console.log(data);
					self.loading=false;					
					if(data.code==-4){
						self.over=true;
					}
					self.islogin=data.isLogin;
					self.selected=data.selected;
					self.quanNum=data.quanNum;
					self.booklist=data.bookList;
					
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"),'three_enter_buy');
			},
			gologin:function(){
				Local.login();
			},
			//跳转书籍详情
			gotodetail:function(bid){
				ABook.gotoDetail(bid);
			},
			recequan:function(){
				let self=this;
				if(self.islogin){
					if(!self.selected){
						Local.reqaObj(server() + "pkg170501/page3Accept?quanNum="+self.quanNum, function(data) {
							console.log(data);
							if(data.code==1){
								self.maskshow=true;
								self.selected=true;
								forceLog(param("act_f"),'three_accept');
							}else{
								Local.showToast(data.msg);
							}
						}, [], function() {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					}
				}else{
					Local.login();
				}
				
			},
			receive:function(ind,bid){
				let self=this;
				let len=self.booklist.length;
				if(self.islogin){
					if(self.booklist[ind].isBuy==0){
						Local.reqaObj(server() + "pkg170501/page3Buy?bid="+bid,function(data){
							console.log(data);
							if(data.code==1){
								if(data.isBuy==1){
									self.booklist[ind].isBuy==1
									Local.showToast(data.msg);
								}else{
									ABook.gotoDetail(bid);
								}
							}else{
								Local.showToast(data.msg);
							}
						}, [], function() {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
						forceLog(param("act_f"),'three_panic_buy');
					}
				}else{
					Local.login();
				}
				
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();   
		}
	}
</script>