<template>
	<div class="mask">
		<div class="tiparea" v-show="voteshow">
			<div class="votes" v-if="voteyue==0 || tktype==-10000">
				<div class="closemk" @click="closemask"></div>
				<h4>月票数量不足</h4>
				<p class="online">订阅消费及打赏可获得更多月票</p>
				<a href="javascript:" class="closbtn" @click="tovotes">如何获得更多月票</a>
			</div>
			<div class="votes" v-if="tktype==0">
				<h4>投票成功</h4>
				<p class="bookname">{{bookname}}</p>
				<p class="online">获得2张月票（投1票=2票）</p>
				<a href="javascript:" class="closbtn" @click="closemask">知道啦</a>
			</div>
			<div class="votes" v-if="!ismengzhu && (tktype==-10001 || tktype==-10002)">
				<h4>投票失败</h4>
				<p>普通VIP 用户对单本作品每日最多投2票，每月最多投5票。您投票已超出限制</p>
				<a href="javascript:" class="closbtn" @click="closemask">知道啦</a>
			</div>
			
			<div class="votes" v-if="ismengzhu && (tktype==-10001 || tktype==-10002)">
				<h4>投票失败</h4>
				<p>该书盟主用户每日最多5票，每月最多投5票，您投票已超出限制</p>
				<a href="javascript:" class="closbtn" @click="closemask">知道啦</a>
			</div>	
			
		</div>
		<div class="tiparea" v-show="promotevote">
			<div class="closemk" @click="closemask"></div>
			<div class="votes">
				<h4>如何获得月票</h4>
				<p class="online">订阅消费及打赏可获得月票</p>
				<a href="javascript:" class="closbtn" @click="tovotes">查看详情</a>
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
		props:['maskshow','voteshow','promotevote','voteyue','tktype','ismengzhu','bookname','bookmothcnt'],
		mounted: function(){
		},
		methods: {
			tovotes:function(){
				Local.openPage('help/help6.2.html');
				this.maskshow=false;
				this.promotevote=false;
				this.voteshow=false;
			},
			closemask:function(){
				this.maskshow=false;
				this.voteshow=false;
				this.promotevote=false;
			}
		}
	}
</script>
