<template>
	<div id="root">
		<div class="wrap" v-show="!over">
			<div class="topbox">
				<p class="adtime">活动时间：12.5~12.12</p>
				<p class="title">你充我就送大礼</p>
				<div class="shubi" data-type="1"><img :src="'img/icon_sb.png'"><span @click="shawmask"></span></div>
				<ul class="prizelist">
					<li><a href="javascript:" data-type="2">100书券<span @click="shawmask"></span></a></li>
					<li><a href="javascript:" data-type="3">3张推荐票<span @click="shawmask"></span></a></li>
					<li><a href="javascript:" data-type="4">3天包月特权<span @click="shawmask"></span></a></li>
					<li><a href="javascript:" data-type="5">100成长值<span @click="shawmask"></span></a></li>
				</ul>
				<p class="title2">微信支付充10元且关注QQ阅读公众号即可领取礼包</P>
				<div class="page_btn" @click="recharge">
					<a>
						<img :src="'img/icon_wx.png'" class="icon_wx" v-show="!czcg">
						<img :src="'img/libao.png'" class="icon_lb" v-show="czcg">
						{{ picked ?'礼包已领取':czcg ?'如何领取礼包':'微信支付充1000书币领礼包' }}
					<ul class="arrows"><img :src="'img/arrow.png'"><img :src="'img/arrow.png'"><img :src="'img/arrow.png'"></ul>
					</a>
				</div>
				<p class="title3">请选择<span>“微信支付95折”</span>，否则无法领取</P>
			</div>
			<!--攻略-->
			<div class="raiders">
				<h4>礼包攻略：</h4>
				<ul>
					<li><span>1</span>选择“微信支付”，充值“1000书币”</li>
					<li><span>2</span>在充值成功的页面上勾选关注“QQ阅读”公众号<img :src="'img/gz_qqyd.png'"></li>
					<li><span>3</span>也可以手动在微信上搜索“QQ阅读”进行关注<img :src="'img/ss_qqyd.png'"></li>
					<li><span>4</span>前往公众号活动页即可领取礼包奖励，每人仅限一次</li>
					<li><span>5</span>活动时间：12月5日15:00~12月12日24:00</li>
				</ul>
			</div>
			<p class="copyright">本活动最终解释权归QQ阅读所有</p>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<ejectmask v-show="mask" :type="prizetype" :mask.sync="mask"></ejectmask>
	</div>
	
</template>
<script type="text/javascript">
	export default {
		components: {
			maskLoading: require('../src/MaskLoading.vue'),
			maskOver: require('../src/MaskOver.vue'),
			ejectmask: require('../src/ejectMask.vue')
		},
		data: function(){
			return {
				login:false,
				over:false,
				mask:false,
				czcg:false,
				vip:false,
				loading:false,
				picked:false,
				prizetype:0
			}
		},
		methods: {
			initpage:function(){
				var self=this;
				Local.init();
				Local.reqaObj(server() + "cz/init", function(data) {
					self.loading=false;
					console.log(data);
					self.login=data.isLogin;
					self.over=data.isOver;
					self.czcg=data.czcg;
					self.picked=data.picked;
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"));
			},
			recharge:function(){
				var self=this;
				Local.reqaObj(server() + "cz/init", function(data) {
					self.login=data.isLogin;
					self.over=data.isOver;
					self.czcg=data.czcg;
					self.picked=data.picked;
					console.log(data.isLogin);
					if(!self.login){
					   Local.login(); 
					}else{
						if(!self.czcg){
							Local.doCharge("act",true,1000);
						}else{
							Local.go("raiders.html");
							console.log("lingqugonglue");
							
						}
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},
			shawmask:function(e){
				var self=this;
				var ejectMask = this.$children[0];
				var $cur = $(e.currentTarget);
				var type=$cur.parent().data('type');
				self.prizetype=type;
				self.mask=true;
				//console.log(self.mask);
			}	
		},
		created:function(){
			//页面初始化
	        this.initpage();

		}
	}
</script>