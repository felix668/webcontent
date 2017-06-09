<template>
	<div class="mask">
		<div class="teaparea recevietk" v-show="retype==-4">
			<p>ios游客登录用户<br>暂不支持参加本次活动</p>
			<a class="btnaction" @click="closemask">知道啦</a>
		</div>
		<div class="teaparea recevietk" v-show="retype==-3">
			<div class="closeicon"  @click="closemask()"></div>
			<p>将《我是至尊》加书架并阅读至<br>第三章才可参与领{{ plag=="adr"?"书币":"阅点"}}活动哦</p>
			<a class="btnaction" @click="goread(book[0].bid,cid)">去阅读</a>
		</div>
		<div class="teaparea recevietk" v-show="retype==-1">
			<p>{{ plag=="adr"?"书币":"阅点"}}已被抢光，<br>下次要加速哦！</p>
			<a class="btnaction" @click="closemask">好的</a>
		</div>
		<div class="teaparea recevietk" v-show="retype==-2">
			<p>同一设备或同一账号<br>只能领取一次哦～</p>
			<a class="btnaction" @click="yilingqu">好的</a>
		</div>
		<div class="teaparea recevietk" v-show="retype==0">
			<div class="prizeicon"></div>
			<p class="recevieQuan">恭喜获得{{ quannum }}{{ plag=="adr"?"书币":"阅点"}}!</p>
			<a class="btnaction" @click="closemask">好的</a>
		</div>
	</div>
</template>
<script>
	export default {
	    props:['show','retype','quannum','book','plag','isshelf','cid'],
		data: function(){
			return {
			}
		},
		methods: {
			goread(bid,cid){
				let self=this;
				self.closemask();
				if(self.isshelf){
					Local.goRead(bid,cid);
					//self.$parent.read=true;
					//ABook.gotoRead(bid);
				} else {
					console.log(bid);
					Local.reqaObj(server() + "pkg170602/addshelf", function(data) {
						console.log(data);
						if(self.plag=="adr"){
							Local.addToShelf(bid);
							self.$parent.inshelf=true;
							Local.goRead(bid,cid);
						}else{//后台提供给你个接口，回调里再执行这个操作吧我提供给你个接口，回调里再执行这个操作吧
							Local.addToShelfBooks(JSON.stringify(self.book));
							self.$parent.inshelf=true;
							Local.goRead(bid,cid);
						}
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}
				forceLog(param("act_f"),"FLTX_goread");
			},
			yilingqu(){
				let self=this;
				self.$parent.tokenpicked=1;
				self.$parent.showrecevie=false;
			},
			closemask(){
				let self=this;
				self.$parent.showrecevie=false;
			}
		}
		
	}
</script>
