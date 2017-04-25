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
			<div class="titles">恭喜你</div>
			<h4>获得<span>{{ pname[prizety] }}</span></h4>
			<img :src="pimg[prizety]" class="prizepic" />
			<p>{{ pinfo }}</p>
			<a class="btnaction" v-show="prizety==1 || prizety==2 || prizety==4 " @click="closemask()">知道啦</a>
			<a class="btnaction" v-show="prizety==0 || prizety==3 || prizety==5 " @click="goadress()">填写奖品收获地址</a>
		</div>
	</div>
</template>
<script>
	module.exports = {
		props:['show','type','prizety','pname','pinfo','pimg','shareobj','sharherf'],
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
				Local.shareTopic(self.sharherf, self.shareobj.cover, self.shareobj.title,self.shareobj.desc, 1);
				this.$parent.showprize=false;
			},
			goadress:function(){
				Local.openInside('https://yuedu.reader.qq.com/event/act161002/ios/contact.html');
				this.$parent.showprize=false;
			}
		}
		
	}
</script>
