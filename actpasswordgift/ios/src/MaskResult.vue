<template>
	<div class="mask">
		<div class="flash" v-show="tktype==0"><img :src="'images/flash.png'" /></div>
		<div class="tiparea" v-show="tktype==-105 || tktype==-109">
			<img :src="'images/dclq.png'" class="dclq" />
			<p v-show="tktype==-109">不要贪心哦，同一个口令只能领取一次礼包</p>
			<p v-show="tktype==-105">本礼包为限量领取，已领罄<br>少侠，下回请早点来</p>
			<div class="btn_close" @click="closemask">我知道啦</div>
		</div>
		<div class="tiparea" v-show="tktype==-108">
			<div class="icon_close" @click="closemask"></div>
			<img :src="errstat==-1?'images/errimg3.png':errstat==-2?'images/errimg1.png':'images/errimg2.png'" class="errimg" />
			<p class="errtxt">很遗憾，您的口令没有对应的礼包<br>{{errstat==-1?'需要下凡历个劫':errstat==-2?'三思而行哦':'遇到挫折要不放弃，不抛弃'}}</p>
		</div>
		<div class="tiparea" v-show="tktype==0">
			<div class="icon_close" v-show="prizeco==0 || prizeco==4 || prizeco==6 || prizeco==20" @click="closemask"></div>
			<p class="prizett">恭喜获得{{ prrzeinfo.gigttt }}</p>
			<div class="prizimg">
				<img :src=" prrzeinfo.pic " class="errimg" />
			</div>
			<p class="errtxt">{{ prrzeinfo.ptxt }}</p>
			<div class="btn_close" v-show="prizeco==2 || prizeco==3 || prizeco==5" @click="closemask">我知道啦</div>
			<div class="btn_close" v-show="prizeco==4" @click="goviparea">去包月专区享特权</div>
			<div class="btn_close" v-show="prizeco==6" @click="godraw(prrzeinfo.url)">去抽奖</div>
			<div class="btn_close" v-show="prizeco==0" @click="goreadbook(prrzeinfo.bookinfos)">去阅读</div>
			<div class="btn_close" v-show="prizeco==20" @click="goshelf(prrzeinfo.bookinfos)">去书架阅读</div>
		</div>
	</div>	
</template>
<script>
	module.exports = {
		props:['show','tktype','hold','chai','errstat','prizeco','prrzeinfo'],
		data: function(){
			return {
			}
		},
		methods: {
			closemask:function(){
				this.$parent.showmask=false;
				$("#btnok").addClass('disabled');
				$(".chaibag").removeClass('chaianim');
				$(".tiparea").removeClass('anmat');
				this.$parent.holder='';
			},
			goviparea:function(){
				Local.goMontharea();
				this.closemask();
				forceLog(param('act_f'),'goMontharea');
			},
			godraw:function(url){
				Local.go(url);
				this.closemask();
				forceLog(param('act_f'),'goLucydraw');
			},
			goreadbook:function(onebbid){
				ABook.gotoRead(onebbid.bid);
				//ABook.gotoRead
				this.closemask();
				forceLog(param('act_f'),'goRead');
			},
			goshelf:function(bookbid){
				Local.goShelf();
				this.closemask();
				forceLog(param('act_f'),'goShelf');
			}
		}
	}
</script>
