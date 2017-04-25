<template>
	<div id="root">
		<div class="wrap" v-show="!showjutou">
			<div class="bammerbox">
				<div class="tt">叶非夜新书4月10日正式发布</div>
				<div class="newbook">
					<div class="bookface"></div>
					<div class="bookinfo">
						<h4>大神引入怀：101个深吻</h4>
						<p>“一年后，我们离婚，互不干扰。”季忆之所以答应贺季晨假结婚，是因为她坚信完美情人贺季晨绝对不会爱上她......</p>
					</div>
				</div>
				<p class="notice">点击预约，新书上架后将自动加入您的书架</p>
				<div class="btnbox">
					<a class="spoiler" @click="jutou">免费抢先看剧透</a>
					<a class="appointment" @click="gotoapp()"><img :src="'images/icon_time.png'" /><i>立即预约</i></a>
				</div>
				<div class="tt video">叶非夜想对你说</div>
				<div class="videobox">
					<div class="vvbox">
						<img :src="'images/vidwoimg.jpg'" @click="PLAY($event)" v-show=" state==='paused' "/>
						<video ref="video" src="images/1.mp4" preload="metadata" v-show=" state==='playing'">
							<source type="video/mp4">  
						</video>
						<div class="glass"  @click="PAUSE()" v-show=" state==='playing'||state==='paused' "  @ended="onPlayerEnded"></div>
					</div>
				</div>
				<div class="tt video">赢取新书见面礼</div>
				<div class="sharebox">
					<p class="shanr" v-if="showprize"><b>{{ username }}：</b>我刚刚抽到<span>{{ prizename }}</span>，你也来试试吧</p>
					<p class="shanr" v-else><b>{{ username }}：</b>分享你一次抽奖，快来试试手气</p>
					<p class="notice">抽奖秘诀：分享完要返回“QQ阅读”才可以抽奖哦</p>
					<a class="sharebtn shareafter" @click="gotoapp()">去QQ阅读分享赢好礼 ></a>
				</div>
				<div class="prizebox" v-bind:class="{ iosbox:evnios }">
					<div class="prizebtn"></div>
					<a class="startprize" @click="gotoapp()"></a>
				</div>
				<div class="rules">
					<p>活动规则</p>
					<ul>
						<li><span>1.</span>活动时间：4月6日—4月9日</li>
						<li><span>2.</span>活动期间从客户端内分享页面即可获得一次抽奖机会</li>
						<li><span>3.</span>每位用户可多次分享，但仅能参加一次抽奖</li>
						<li><span>4.</span>分享至微信后需要立刻点击“回到QQ阅读”才能获得限免，选择“留在微信/QQ”视为分享失败</li>
						<li><span>5.</span>请从QQ阅读客户端内发起分享获得限免，其他平台二次分享暂不能获得抽奖机会</li>
						<li><span>6.</span>中实物奖励后请认真填写地址，将在15个工作日内寄出</li>
					</ul>
					<p class="copyright">本活动最终解释权归QQ阅读所有</p>
				</div>
			</div>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<mask-download v-show="downshow" :show.sync="downshow"></mask-download>
		<mask-spoiler v-show="showjutou"></mask-spooler>
		
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			maskLoading: require('../src/MaskLoading.vue'),
			maskOver: require('../src/MaskOver.vue'),
			maskSpoiler: require('../src/MaskSpoiler.vue'),
			maskDownload:require('../src/MaskDownload.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,//活动结束
				downshow:false,//下载弹框
				showjutou:false,//预约
				state: 'paused',
				loaded: false,
				username:'',
				prizename:'',
				showprize:false,
				evnios:true
			}
		},
		watch:{
			state: function(state){
				var self = this;
				switch (state) {
					case 'loading':
						this.$refs.video.load();
						this.$refs.video.addEventListener('pause',()=>{
							if( this.state==='playing' ){
								this.state = 'paused';
							}
						});

						this.$refs.video.addEventListener('loadeddata',()=>{
							self.loaded = true;
						});
						break;
					case 'ready':
						if( this.loaded ){
							this.$refs.video.pause();
							this.$refs.video.currentTime = 0;
						};
						break;
					case 'playing':
						self.$refs.video.play();
						break;
					case 'paused':
						this.$refs.video.pause();
						break;		
				}
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
				$.ajax({type : 'GET',
						url :server()+'pkg170305/shareinit?userticket='+ticket,
						dataType : "json",
						timeout : 5000,
						success : function(data) {
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
						},
						error : function(xhr, type) {
						}
				});
				forceLog(param("act_f"),"yfyindex");
			},
			jutou:function(){
				window.scrollTo(0,0); 
				this.showjutou=true;
			},
			PLAY:function(e){
				e.stopPropagation();
				var self = this;
				if( this.state === 'paused' ){
					self.state = 'playing';
					this.$refs.video.play();
				}
				forceLog(param('act_f'),'shiping');
			},
			PAUSE: function(){
				if( this.$refs.video.ended ){
					this.$refs.video.play();
				}else{
					this.state = 'paused';
				};
			},
			onPlayerEnded:function(){
				this.state = 'paused';
			},
			gotoapp:function(){
				var self=this;
				S.open(function(installStat,plat){
					if(installStat){
						if(env.pt=="adr"){
							N.openPage("http://iyuedu.qq.com/event/act170305/adr/index.html?act_f=170406");
						}else if(env.vw=="wx" && env.pt=="ios"){
							N.openPage("https://yuedu.reader.qq.com/event/act170305/ios/index.html?act_f=170406");
							setTimeout(function(){
								self.downshow=true;
							}, 2000);
							setTimeout(function(){
								self.downshow=false;
							}, 5000);
						}else{
							N.openPage("https://yuedu.reader.qq.com/event/act170305/ios/index.html?act_f=170406");
						}
					}else{
						self.downshow=true;//显示下载弹窗
					}
				});
				forceLog(param('act_f'),'openBtn'+env.pt);
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();
		}
	}
</script>