<template>
	<div class="mask">
		<div class="teaparea" v-show="type==-2 || type==-1">
			<div class="closeicon"  @click="closemask()"></div>
			<div class="prizeicon"></div>
			<h4>{{ type==-2 ?"分享抽好礼 100%中奖":"已经抽过奖励" }}</h4>
			<p>{{ type==-2 ?"分享后返回QQ阅读即可抽取好礼":"把机会留给好友吧" }}</p>
			<a class="btnaction" @click="share()">{{type==-2?"分享抽奖":"分享给好友"}}</a>
		</div>
		<div class="teaparea prizemask" v-show="type==0">
			<div v-if="guest && prizety==2">
				<div class="closeicon"  @click="closemask()"></div>
				<div class="thanks"></div>
				<h4>很遗憾未中奖哦</h4>
				<p>《全职高手》现在免费中，快去看看吧</p>
				<a class="btnaction" @click="goread()">去看限免</a>
			</div>
			<div v-else>
				<div class="titles">恭喜你</div>
				<h4>获得<span>{{ pname[prizety] }}</span></h4>
				<img :src="pimg[prizety]" class="prizepic" />
				<p>{{ pinfo }}</p>
				<a class="btnaction" v-show="prizety==2 || prizety==3 " @click="closemask()">知道啦</a>
				<a class="btnaction" v-show="prizety==0 || prizety==1 || prizety==4 " @click="goadress()">填写奖品收获地址</a>
			</div>
		</div>
	</div>
</template>
<script>
	module.exports = {
		props:['show','type','prizety','pname','pinfo','pimg','shareinfo','sharherf','guest'],
		data: function(){
			return {
			}
		},
		methods: {
			closemask:function(){
			    this.$parent.showprize=false;
			},
			share:function(){
				let self=this;
				Local.shareTopic(self.shareinfo.url, self.shareinfo.cover, self.shareinfo.title,self.shareinfo.desc, 1);
				this.$parent.showprize=false;
				if(self.guest){
						timeer=setTimeout(function(){
							Local.reqaObj(server() + "pkg170306/sharesuccess", function(data) {
								self.$parent.shared=true;
								console.log(self.guest);
							}, [], function() {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
							timeer=null;
						},2000);
					};
				forceLog(param("act_f"),"sharebtn");
			},
			goadress:function(){
				Local.openInside('https://yuedu.reader.qq.com/event/act161002/ios/contact.html');
				this.$parent.showprize=false;
			},
			goread:function(){
				ABook.gotoRead('478670');
			}
		}
		
	}
</script>
