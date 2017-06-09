<template>
	<div class="mask">
		<div class="teaparea" v-show="type==-2 || type==-1">
			<div class="closeicon" v-show="type==-2"  @click="closemask()"></div>
			<div class="prizeicon"></div>
			<h4 v-if="type==-2">分享抽好礼 100%中奖</h4>
			<h4 v-else>同一设备或同一账号<br>只能抽一次奖哦～</h4>
			<p>{{ type==-2 ?"分享后返回QQ阅读即可抽取好礼":"" }}</p>
			<a class="btnaction" @click="share()">{{type==-2?"分享抽奖":"知道啦"}}</a>
		</div>
		<div class="teaparea prizemask" v-show="type==0">
			<div class="titles"><span>恭喜你</span></div>
			<img :src="pimg[prizety]" class="prizepic" />
			<h4>获得<span>{{ pname[prizety] }}</span><em v-show="prizety==0">{{ plag=="adr"?"书币":"阅点" }}</em><em v-show="prizety==3 || prizety==5">限时免费读</em></h4>
			<p>{{ pinfo }}</p>
			<a class="btnaction" v-show="prizety==0 || prizety==2 || prizety==3 || prizety==5 " @click="closemask()">知道啦</a>
			<a class="btnaction" v-show="prizety==1 || prizety==4 " @click="goadress()">填写奖品收获地址</a>
		</div>
	</div>
</template>
<script>
	export default {
		props:['show','type','prizety','pname','pinfo','pimg','shareinfo','sharherf','plag'],
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
				this.$parent.showprize=false;
				console.log(self.type);
				if(self.type==-2){
					Local.shareTopic(self.shareinfo.url, self.shareinfo.cover, self.shareinfo.title,self.shareinfo.desc, 1);
				}
				
			},
			goadress:function(){
				let self=this;
				this.$parent.showprize=false;
				if(self.plag=='adr'){
			    	Local.go('http://iyuedu.qq.com/event/act161002/adr/contact.html');
			    }else{
			    	Local.openInside('https://yuedu.reader.qq.com/event/act161002/ios/contact.html');
			    }
				
			}
		}
		
	}
</script>
