<template>
	<div id="root">
		<div class="wrap">
			<div class="banner">
				<img :src="'../adr/public/images/banner.jpg'" />
			</div>
			<div class="mainbox">
				<ul class="totalnum">
					<li v-for="(item,ind) in totals" :class="'n'+item"></li>
				</ul>
				<p class="endtimer">截止时间：4月23日 {{ endtimes }}</p>
				<ul class="probox">
					<li v-for="(item,ind) in provinceNum" :class="'pro'+ind">
						{{item.proName+'（'+item.proNum+'）'}}
					</li>
				</ul>
				<div class="peotry">
					<h4>沁园春·长沙</h4>
					<p class="author">／毛泽东／</p>
					<p>独立寒秋，湘江北去，橘子洲头。<br>
						看万山红遍，层林尽染；漫江碧透，百舸争流。<br>
						鹰击长空，鱼翔浅底，万类霜天竞自由。<br>
						怅寥廓，问苍茫大地，谁主沉浮？<br>
						携来百侣曾游，忆往昔峥嵘岁月稠。<br>
						恰同学少年，风华正茂；书生意气，挥斥方遒。<br>
						指点江山，激扬文字，粪土当年万户侯。<br>
						曾记否，到中流击水，浪遏飞舟？
					</p>
					<img :src="'../adr/public/images/go.png'" @click="goall" />
				</div>
			</div>
			<div class="sharbtn"><a @click="shared">{{ urlis=='com'?'更多原著，去QQ阅读':'邀请好友，共读好书' }}<img :src="'../adr/public/images/arrow.png'" /></a></div>
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
			maskLoading: require('./MaskLoading.vue'),
			maskOver: require('./MaskOver.vue'),
			maskDownload:require('./MaskDownload.vue'),
			maskBrowes:require('./MaskBrowers.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,//活动结束
				urlis:'',
				showbrowers:false,
				downshow:false,
				totalNum:'31068128',
				totals:[],
				endtimes:'18:00',
				provinceNum:[{
					proName:'京津冀晋泸京津',
					proNum:'876221'
				},{
					proName:'京津冀晋泸京津',
					proNum:'876221',
					prott:''
				},{
					proName:'京津冀晋泸京津',
					proNum:'876221',
					prott:''
				},{
					proName:'京津冀晋泸京津',
					proNum:'876221',
					prott:''
				},{
					proName:'京津冀晋泸京',
					proNum:'876221',
					prott:''
				}],
				shareObj:{
					url :"",
					cover :"",
					title : "423全民阅读，共读中国梦",
					desc : "亿万人齐聚QQ阅读，共创阅读纪录"
				}
			}
		},
		computed:{
			urlis:function(){
				let el = document.querySelector('html');
                let val = el.getAttribute('platform');
				let platname;
				if( val=='adr'){
					platname='adr';
				}else if(val=='com'){
					platname='com';
				}else{
					platname='ios'
				}
				return platname;
			}
		},
		methods: {
			initpage:function(){
				var self=this;
				let el = document.querySelector('html');
                self.urlis = el.getAttribute('platform');
				if(self.urlis=='adr'){
					Local.init();
				}
				Local.reqaObj(server() + "pkg170407/init", function(data) {
					console.log(data);
					self.loading=false;
					if(data.code==-4){
						self.over=true;
					}
					self.totalNum=data.totalNum;
					self.provinceNum=data.provinceNum;
					self.endtimes=data.time;
					self.totals=self.totalNum.split('');
					let timer=null;
					timer=setTimeout(function(){$(".totalnum li").addClass('active'); timer=null}, 50);
					let len= data.provinceNum.length;
					for(let i=0;i<len;i++){
						self.provinceNum[i].proName=self.provinceNum[i].proName.split('').join(' ');
					}
					self.shareObj.url=front()+"act170407/com/index.html?tf=1&act_f=170407";
					self.shareObj.cover=front()+"act170407/adr/public/images/cover.jpg";
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"),'zgmindex'+self.urlis);
			},
			gotoapp:function(){
				let self=this;
				S.open(function(installStat,plat){
						if(env.vw=='wb'){
							self.showbrowers=true;
						}else{
							
							if(installStat){
								if(env.pt=="adr"){
									N.openPage("http://iyuedu.qq.com/event/act170407/adr/index.html?act_f=170407");
								}else if(env.vw=="wx" && env.pt=="ios"){
									N.openPage('https://yuedu.reader.qq.com/event/act170407/ios/index.html?act_f=170407');
									setTimeout(function(){
										self.downshow=true;
									}, 2000);
									setTimeout(function(){
										self.downshow=false;
									}, 5000);
								}else{
									N.openPage("https://yuedu.reader.qq.com/event/act170407/ios/index.html?act_f=170407");
								}
							}else{
									self.downshow=true;//显示下载弹窗
							}
							
						}
						forceLog(param("act_f"),"170407_openapp"+env.pt);
					});
			},
			goall:function(){
				let self=this;
				if(self.urlis=='com'){
					if(self.urlis=='com'){
						S.open(function(installStat,plat){
							
							if(env.vw=='wb'){
								self.showbrowers=true;
							}else{
								if(installStat){
									if(env.pt=="adr"){
										N.openPage("http://iyuedu.qq.com/event/act170410/index.html?act_f=170410");
									}else if(env.vw=="wx" && env.pt=="ios"){
										N.openPage('https://yuedu.reader.qq.com/event/act170410/index.html?act_f=170410');
										setTimeout(function(){
											self.downshow=true;
										}, 2000);
										setTimeout(function(){
											self.downshow=false;
										}, 5000);
									}else{
										N.openPage("https://yuedu.reader.qq.com/event/act170410/index.html?act_f=170410");
									}
								}else{
										self.downshow=true;//显示下载弹窗
								}
								
							}
							forceLog(param("act_f"),"170407_sharegojhy");
						});
					}
				}else if(self.urlis=='adr'){
					Local.openPage('http://iyuedu.qq.com/event/act170410/index.html?act_f=170410');
					forceLog(param("act_f"),"170407_gojhy");
				}else{
					Local.openInside('https://yuedu.reader.qq.com/event/act170410/index.html?act_f=170410');
					forceLog(param("act_f"),"170407_gojhy");
				}
			},
			shared:function(){
				let self=this;
				if(self.urlis=='com'){
					self.gotoapp();
				}else{
					Local.shareTopic(self.shareObj.url, self.shareObj.cover, self.shareObj.title,self.shareObj.desc, 1);
					forceLog(param("act_f"),"170407_sharebtn");
				}
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();
		}
	}
</script>