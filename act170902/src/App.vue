<template>
	<div id="app">
		<div class="top">
			<img src="src/images/banner.jpg" class="banner">
			<img src="src/images/elem3.png" class="elem3">
			<img src="src/images/elem1.png" class="elem1">
			<img src="src/images/elem2.png" class="elem2">
		</div>
		<div class="my" ref="mybox">
			<div class="myinfo">
				<div class="avor">
					<img :src="mdata.avor || 'src/images/default.png'">
				</div>
				<div class="score">
					当前可用积分：<strong>{{mdata.isLogin ? mdata.score : 0}}</strong>
				</div>
				<div class="myprize f20" @click="myprize">
					我的奖品>
				</div>
			</div>
			<p class="tip f20">* 活动期间<strong>每消耗100{{text}}获得1积分</strong>,看书、打赏、开通包月均可消耗{{text}}</p>
		</div>
		<div :class="box.classname" v-for="box in boxs">
			<img :src="'src/images/'+box.title" class="title"> 
			<div class="tag">{{box.score}}积分</div>
			<p class="rest f20" v-if="box.card == 0">（今日剩余<strong>{{mdata.curLimitTreasureNum}}</strong>份）</p>
			<h2>开宝箱必得以下奖品之一</h2>
			<ul class="list">
				<li v-for="(prize,index) in box.prizes" @touchstart="longtap(prize)" @touchend="canceltap">
					<div class="pic">
						<img :src="'src/images/'+prize.pic">
					</div>
					<p>{{prize.name}}</p>
					<div :class="'layer l'+index" v-if="touch.id === prize.id">
						<div class="pic">
							<img :src="'src/images/'+prize.pic">
						</div>
						<strong>{{prize.name}}</strong>
						<div class="intro">{{prize.intro}}</div>
					</div>
				</li>
			</ul>
			<div id="bookbox" v-if="box.card == 1"></div>
			<template v-if="box.card == 0 && mdata.curLimitTreasureNum <= 0 && mdata.isLogin">
				<img src="src/images/done.png" class="done">
			</template>
			<template v-else>
				<template v-if="box.score > mdata.score && mdata.isLogin">
					<a href="#bookbox" class="btn" @click="doscore">点我赚积分</a>
					<div class="need">（还需{{box.score-mdata.score}}积分可换宝箱）</div>
				</template>
				<div :class="['btn rbtn',{'disable': mdata.showGary[box.card] === 1}]" v-else @click="exchange(box,mdata.showGary[box.card])">立即兑换</div>
			</template>		
		</div>
		<div class="box bookbox">
			<img src="src/images/title.png" class="title">
			<p>买书可消耗{{text}}获得积分哦</p>
			<div class="change" @click="change">换一换</div>
			<ul class="books">
				<li v-for="book in mdata.changeBookList.slice(bookindex,bookindex+3)">
					<img :src="book.cover" @click="goBookDetail(book.bid)">
					<p class="btitle">{{book.title}}</p>
					<p class="author">作者：{{book.author}}</p>
				</li>
			</ul>
			<a :href="mdata.sellLink" class="btn" @click="more">查看更多</a>
		</div>
		<div class="mask" v-if="confirm || prize">
			<div class="tiparea confirm" v-if="confirm">
				<p class="desc">确认兑换{{confirm.name}}</p>
				<div class="btns">
					<span @click="closemask">再考虑一下</span>
					<span @click="pick">确认</span>
				</div>
				<div class="close" @click="closemask"></div>
			</div>	
			<div class="tiparea prizeInfo" v-if="prize">
				<p class="desc" v-if="prize.expire">恭喜获得{{ticketname}}抵扣券</p>
				<p class="desc" v-else>恭喜获得{{prize.name}}</p>
				<div class="pic">
					<img :src="'src/images/'+prize.pic">
				</div>
				<div class="tip link" v-if="prize.link">
					<p>请填写收货地址以便接收奖励哦</p>
					<div class="btn" @click="contact">填写奖品收货地址</div>
				</div>
				<div class="tip qq" v-if="prize.qq">
					<p>请填写QQ号以便接收奖励哦</p>
					<input type="tel" placeholder="您的QQ号" v-model="qq.account" class="qqinfo" @focus="inputfocus">
					<span class="error" v-show="qq.error && qq.account !== ''">*请输入正确的QQ号码</span>
					<div class="btn" @click="submitqq">确定</div>
				</div>
				<div class="tip expire" v-if="prize.expire">
					<p>{{ticketname}}抵扣券，有效期7天</p>
					<a class="btn" @click="closemask" href="uniteqqreader://nativepage/client/voucherdetail">马上使用</a>
				</div>
				<div class="close" @click="closemask"></div>
			</div>
		</div>
		<rule :plat="plat"></rule>
		<mask-over v-if="over"></mask-over>
	</div>
</template>
<style src="./css/index.scss" lang="sass"></style>
<script>
	import boxs from "./js/boxs";	
	export default { 
		data() {
			return {
				over:false,
				boxs:boxs,
				mdata:{changeBookList:[],showGary:[]},
				touch:{timer:null,id:''},
				bookindex:0,
				plat:window.pt,
				confirm:false,
				prize:false,
				ticketname:'',
				qq:{account:"",error:false},
				text:window.pt == "ios" ? "阅点" : "书币",
				sharepage:document.body.dataset.page ? true : false //是否是分享页面
			}
		},
		created() {
			this.init();
		},
		mounted() {
			this.share();
		},
		methods: {
			init(){
				if(process.env.NODE_ENV === 'local'){					
					let data=require("./js/data").init;
					if(data.code == -4){
			            this.over = true;
			            return;
		    	    }	 
					this.mdata=data;
		            this.qq.account=this.mdata.u || '';
					document.querySelector("#loadingbox").style.display="none";
					return;		        		
				}
				Local.reqaObj(`${common.server()}pkg170902/init`, data=> {
					if(data.code == -4){
		            	this.over = true;
		            	return;
		            }			
		            this.mdata=data;
		            this.qq.account=this.mdata.u || '';
					document.querySelector("#loadingbox").style.display="none";			
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);	
				Local.forceLog(common.param("act_f"),"XHpageInit");
			},
			//分享 是否会带到奖品页和联系方式页
			share(){
				let sobj={
					url:`${common.sharefront()}act170902/share.html?act_f=170902`,
					cover:`${common.sharefront()}act170902/src/images/cover.png`,
					title:"开箱必得以下奖品之一",
					desc:"公仔、Q币、京东卡、笔记本、抵扣券"
				}
				Local.setIconForShareing(sobj.url,sobj.cover,sobj.title,sobj.desc);
			},
			//立即兑换
			exchange(box,order){
				if(order === 1){
					return;
				}
				if(!this.mdata.isLogin){
					Local.login();
					return;
				}
				this.confirm=box;
				Local.forceLog(common.param("act_f"),"XHexchange");
			},
			closemask(){
				this.confirm=false;
				this.prize=false;
			},
			pick(){
				//let data={prizeId:1,code:1,isLogin:true,prizeName:"漫画"}
				Local.reqaObj(`${common.server()}pkg170902/pick?c=${this.confirm.card}`, data=> {	
		            if(data.code == -4){
		            	this.over = true;
		            	return;
		            }
		            if(!data.isLogin){
		            	Local.login();
		            	return;
		            }		
		            if(data.code == 1){
		            	this.prize = this.confirm.prizes[data.prizeId];
		            	this.ticketname = data.prizeName;
		            	this.confirm = false;
		            	this.init();
		            }else{
		            	Local.showToast(data.msg);
		            }			            							
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},
			submitqq(){
				var reg=/^\d{5,10}$/;
				if(!reg.test(this.qq.account)){
					this.qq.error = true;
					return;
				}
				Local.reqaObj(`${common.server()}pkg170902/name?n=${this.qq.account}`, data=> {	
		            if(data.code == 1){
		            	this.closemask();
		            }else{
		            	Local.showToast(data.msg);
		            }	            		            							
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},
			inputfocus(){
				this.qq.error = false;
			},
			contact(){
				//填写联系方式页面
				if(!this.mdata.isLogin){
	            	Local.login();
	            	return;
	            }
				let url=`${common.front()}contact/index.html?act_f=170902`;
				this.closemask();
	 			Local.gotoQUrl(url);
			},
			myprize(){
				//当前页登录
				if(!this.mdata.isLogin){
	            	Local.login();
	            	return;
	            }
	            Local.forceLog(common.param("act_f"),"XHmyprize");
				Local.gotoQUrl(`${common.front()}act170902/myprize.html?act_f=170902`);
			},
			longtap(prize){
				//长按显示奖品介绍
				this.touch.timer = setTimeout(_=>{
			    	this.touch.id=prize.id;
			    	clearTimeout(this.touch.timer);
			    },500);
			   return false;
			},
			canceltap(){
				clearTimeout(this.touch.timer);
				this.touch.id='';
			},
			change(){
				//书本换一换
				if(this.bookindex == this.mdata.changeBookList.length-3){
					this.bookindex = 0;
				}else{
					this.bookindex += 3;
				}
				Local.forceLog(common.param("act_f"),"XHswitchbook");
			},
			goBookDetail(bid){
				Local.forceLog(common.param("act_f"),"XHbookdetail");
				Local.goBookDetail(bid);
			},
			doscore(){
				//点我赚积分
				Local.forceLog(common.param("act_f"),"XHdoScore");
			},
			more(){
				Local.forceLog(common.param("act_f"),"XHmore");
			}
		},
		components: {
			rule:require("./components/rule"),
			maskOver:require("./components/over")
		}
	}
</script>