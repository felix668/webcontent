<template>
	<div class="mask">
		<div class="tiparea" v-show="voteshow">
			<div class="votes" v-if="voteyue==0 || tktype==-10000">
				<div class="closemk" @click="closemask"></div>
				<div class="msg">月票数量不足</div>
				<p class="online first" >订阅消费及打赏可获得更多月票</p>
				<a href="javascript:" class="closbtn" @click="tovotes">{{plat=='adr'?'如何获得更多月票':'知道啦' }}</a>
			</div>
			<div class="votes"  v-if="tktype==0">				
				<div class="msg">投票成功</div>
				<p class="bookname">《{{bookname}}》</p>
				<p class="online first">获得2张月票（投1票=2票）</p>
				<a href="javascript:" class="closbtn" @click="voteseccess">知道啦</a>
			</div>
			<div class="votes" v-if="!ismengzhu && (tktype==-10001 || tktype==-10002)">
				<div class="msg">投票失败</div>
				<p class="online">普通VIP 用户对单本作品每日最多投2票,每月最多投5票。您投票已超出限制</p>
				<a href="javascript:" class="closbtn" @click="closemask">知道啦</a>
			</div>
			
			<div class="votes" v-if="ismengzhu && (tktype==-10001 || tktype==-10002)">
				<div class="msg">投票失败</div>
				<p class="online">该书盟主用户每日最多5票，每月最多投5票，您投票已超出限制</p>
				<a href="javascript:" class="closbtn" @click="closemask">知道啦</a>
			</div>
		</div>
		<div class="tiparea" v-show="promotevote">
			<div class="closemk" @click="closemask"></div>
			<div class="votes">
				<div class="msg">如何获得月票</div>
				<p class="online first">订阅消费及打赏可获得月票</p>
				<a href="javascript:" class="closbtn" @click="tovotes">{{ plat=='adr'?'查看详情':'知道啦' }}</a>
			</div>
		</div>
		<div class="tiparea" v-show="guest">
			<div class="votes">
				<div class="msg">好遗憾哦</div>
				<p class="online first">游客登录暂无法使用月票哦，<br>换个账号看看吧</p>
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
		props:['mashow','voteshow','promotevote','guest','voteyue','tktype','ismengzhu','bookname','bookmothcnt','plat'],
		mounted: function(){
		},
		methods: {
			tovotes:function(){
				let self=this;
				if(self.$parent.plat=='adr'){
					if(this.plat=='adr'){
						Local.gotoQUrl('http://iyuedu.qq.com/android/6_5_5/helpDetail.html?id=1039&lm_f=helpList&lmh_f=helpIndex_helpList&tf=1&fp=1')					
					}
					
				}
				self.closemask();
			},
			closemask:function(){
				this.$parent.maskshow=false;
				this.$parent.voteshow=false;
				this.$parent.promotevote=false;
			},
			voteseccess:function(){	

				let self=this;
				Local.reqaObj(`${common.server()}pkg170905/init`, data => {										
					self.$parent.ticket	=data.ticket;
				})									
				self.closemask();
			}
		}
	}
</script>

