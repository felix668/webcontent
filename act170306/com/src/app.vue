<template>
	<div id="root">
		<div class="wrap">
			<div class="bammerbox">
				<div class="tt video">动画抢先看</div>
				<div class="videobox">
					<div class="vvbox">
						 <iframe frameborder="0" width="100%" height="100%" :src="videosrc" allowfullscreen></iframe>
					</div>
				</div>
				<ul class="videoselect">
					<li class="active" @click="videosel(vid[0],$event)">第一集</li>
					<li @click="videosel(vid[1],$event)">第二集</li>
				</ul>
				<div class="tt">动画追更不过瘾 原著看剧透</div>
				<div class="newbook">
					<div class="bookface"></div>
					<div class="bookinfo">
						<h4>全职高手</h4>
						<p>叶秋，荣耀中的顶尖高手王者。带着对往昔的回忆和一把未完成的自制武器，走上重返巅峰之路！</p>
					</div>
				</div>
				<div class="btnbox">
					<a class="freeread" @click="gotoapp()">原著限时免费读 ></a>
				</div>
				<div class="tt">赢取动画周边礼</div>
				<div class="sharebox">
					<a class="sharebtn" @click="gotoapp($event)">去QQ阅读分享活动赢好礼 ></a>
					<p class="shanr" v-if="showprize"><b>{{ username }}：</b>我刚刚抽到<span>{{ prizename }}</span>，你也来试试吧</p>
					<p class="shanr" v-else><b>{{ username }}：</b>分享你一次抽奖，快来试试手气</p>
					<p class="notice">抽奖秘诀：分享完要返回“QQ阅读”才可以抽奖哦</p>
				</div>
				<div class="prizebox" v-bind:class="{ iosbox:evnios,guestbox:isguest }">
					<div class="prizebtn"></div>
					<a class="startprize" @click="gotoapp($event)"></a>
				</div>
				<div class="rules">
					<p>活动规则</p>
					<ul>
						<li><span>1.</span>活动时间：4月7日—4月10日</li>
						<li><span>2.</span>活动期间，全职高手全本限时免费4天，从客户端内分享页面还能获得一次抽奖机会</li>
						<li><span>3.</span>每位用户可多次分享，但仅能参加一次抽奖</li>
						<li><span>4.</span>分享至微信后需要立刻点击“回到QQ阅读”才能获得限免，选择“留在微信/QQ”视为分享失败</li>
						<li><span>5.</span>请从QQ阅读客户端内发起分享获得限免，其他平台二次分享暂不能获得抽奖机会</li>
						<li><span>6.</span>分享至微博平台暂不支持参加抽奖活动</li>
						<li><span>7.</span>中实物奖励后请认真填写地址，将在15个工作日内寄出</li>
					</ul>
					<p class="copyright">本活动最终解释权归QQ阅读所有</p>
				</div>
			</div>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<mask-browes v-show="showbrowers"></mask-browes>
		<mask-download v-show="downshow" :show.sync="downshow"></mask-download>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			maskLoading: require('../src/MaskLoading.vue'),
			maskOver: require('../src/MaskOver.vue'),
			maskDownload:require('../src/MaskDownload.vue'),
			maskBrowes:require('../src/MaskBrowers.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,//活动结束
				downshow:false,//下载弹框
				loaded: false,
				showbrowers:false,
				username:'',
				prizename:'',
				showprize:false,
				evnios:true,
				isguest:false,
				videosrc:'https://v.qq.com/iframe/player.html?vid=x002353t5ih&tiny=0&auto=0',
				vid:['x002353t5ih','n002397drjl']
			}
		},
		methods: {
			initpage:function(){
				let self=this;
				let u = navigator.userAgent;
    			let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    			if(isAndroid){
    				self.evnios=false;
    			}else{
    				self.evnios=true;
    			};
				let ticket = param('z-tickt');
				let guest = param('guest');
				$.ajax({type : 'GET',
						url :server()+'pkg170306/shareinit?userticket='+ticket,
						dataType : "json",
						timeout : 5000,
						success : function(data) {
							console.log(data);
							self.loading=false;
							if( typeof data.nick==='string' ){
								self.username = data.nick;
							};
							self.prizename=data.prize;
							if(data.prize==''){
								self.showprize=false;
							}else{
								self.showprize=true;
							}
							if(guest){
								self.isguest=true;
							}else{
								self.isguest=false;
							}
						},
						error : function(xhr, type) {
							console.log(xhr, type);
						}
				});
				forceLog(param("act_f"),"qmdhindex");
			},
			videosel:function(vvd,e){
				let $cur = $(e.currentTarget);
				let self=this;
				let ind=$cur.index();
				self.videosrc="https://v.qq.com/iframe/player.html?vid="+vvd+"&tiny=0&auto=1";
				$cur.addClass('active').siblings().removeClass('active');
				forceLog(param("act_f"),"video");
			},
			gotoapp:function(){
				var self=this;
				S.open(function(installStat,plat){
					if(env.vw=='wb'){
						self.showbrowers=true;
					}else{
						if(installStat){

							if(env.pt=="adr"){
								N.openPage(front()+"act170306/adr/index.html?act_f=170407");
							}else if(env.vw=="wx" && env.pt=="ios"){
								N.openPage(front()+"act170306/ios/index.html?act_f=170407");
								setTimeout(function(){
									self.downshow=true;
								}, 2000);
								setTimeout(function(){
									self.downshow=false;
								}, 5000);
							}else{
								N.openPage(front()+"act170306/ios/index.html?act_f=170407");
							}
						}else{
								self.downshow=true;//显示下载弹窗
						}
						forceLog(param("act_f"),"openBtn"+env.pt);
					}
				});
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();
		}
	}
</script>