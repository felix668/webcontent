<template>
	<div id="root">
		<div class="wrap">
			<div class="tabdiff tablist swiper-container" v-show="showtab">
				<ul class="swiper-wrapper">
					<li class='swiper-slide' @click="tabswitch($event)" v-for="(item,ind) in tablist"><span>{{item}}</span></li>
				</ul>
			</div>
			<ul class="tabbox">
				<li class="tabcon">
					<img :src="'../adr/public/images/img1.png'" />
					<div class="box">
						<div class="bookbox">
							<div class="book" @click="godetail('855885')">
					            <img class="cover" :src="'../adr/public/images/3.jpg'"/>
					        </div>
					        <div class="bookinfo">
					        	虫子书
					        	<p>这不是关于虫子的故事，而是虫子们自己的神奇作品。</p>
					        	<p class='freet'>免费阅读时间至2017.4.26</p>
					        	<a @click="godetail('855885')">立即阅读</a>
					        </div>
						</div>
						<div class="bookbox">
							<div class="book" @click="godetail('831784')">
					            <img class="cover" :src="'../adr/public/images/4.jpg'"/>
					        </div>
					        <div class="bookinfo">
					        	草房子
					        	<p>安徒生奖得主曹文轩经典之作，感动人心，催人泪下。</p>
					        	<p class='freet'>免费阅读时间至2017.5.1</p>
					        	<a @click="godetail('831784')">立即阅读</a>
					        </div>
						</div>
					</div>
				</li>
				<li class="tabcon hide">
					<img :src="'../adr/public/images/img0.png'" />
					<div class="box">
						<div class="bookbox">
							<div class="book" @click="godetail('814861')">
					            <img class="cover" :src="'../adr/public/images/0.jpg'"/>
					        </div>
					        <div class="bookinfo">
					        	唐诗三百首全集
					        	<p>国学之美！清代蘅塘退士选编本，流传至今的唐诗集。</p>
					        	<p class='freet'>免费阅读时间至2017.5.1</p>
					        	<a @click="godetail('814861')">立即阅读</a>
					        </div>
						</div>
						<div class="bookbox">
							<div class="book" @click="godetail('808014')">
					            <img class="cover" :src="'../adr/public/images/1.jpg'"/>
					        </div>
					        <div class="bookinfo">
					        	诗经
					        	<p>不学诗，无以言！变易之道、忧患意识、君子风骨，尽在书中。</p>
					        	<p class='freet'>免费阅读时间至2017.4.23</p>
					        	<a @click="godetail('808014')">立即阅读</a>
					        </div>
						</div>
						<div class="bookbox">
							<div class="book" @click="godetail('847306')">
					            <img class="cover" :src="'../adr/public/images/2.jpg'"/>
					        </div>
					        <div class="bookinfo">
					        	苏东坡诗词全集
					        	<p>收录苏轼经典诗词，并有精彩题解及详尽注释，堪称佳本！</p>
					        	<p class='freet'>免费阅读时间至2017.5.1</p>
					        	<a @click="godetail('847306')">立即阅读</a>
					        </div>
						</div>
					</div>
				</li>
				
				<li class="tabcon hide">
					<img :src="'../adr/public/images/img2.png'" />
					<div class="box">
						<div class="bookbox">
							<div class="book" @click="godetail('544275')">
					            <img class="cover" :src="'../adr/public/images/5.jpg'"/>
					        </div>
					        <div class="bookinfo">
					        	玉观音
					        	<p>孙俪、赵薇、佟大为深情演绎，海岩感动亿万读者的巅峰杰作！</p>
					        	<p class='freet'>免费阅读时间至2017.4.23</p>
					        	<a @click="godetail('544275')">立即阅读</a>
					        </div>
						</div>
						<div class="nobookface pt3">
							<p class="tt">平凡的世界</p>
							<p>茅盾文学奖皇冠上的明珠，激励千万青年的不朽经典。</p>
						</div>
						<div class="nobookface">
							<p class="tt">玩的就是心跳</p>
							<p>“新京派”作家王朔代表作，一本悬念迭起、扑朔迷离的奇书。</p>
						</div>
						<div class="nobookface">
							<p class="tt">婚姻保卫战</p>
							<p>《奋斗》《蜗居》之后都市婚姻大戏原著小说，直抵生活痒处。</p>
						</div>
					</div>
				</li>
				<li class="tabcon hide">
					<img :src="'../adr/public/images/img3.png'" />
					<div class="box">
						<div class="bookbox">
							<div class="book" @click="godetail('721223')">
					            <img class="cover" :src="'../adr/public/images/6.jpg'"/>
					        </div>
					        <div class="bookinfo">
					        	三国演义
					        	<p>一百年波澜壮阔的历史画卷，影响一生的中国经典必读名著。</p>
					        	<p class='freet'>免费阅读时间至2017.5.1</p>
					        	<a @click="godetail('721223')">立即阅读</a>
					        </div>
						</div>
					</div>
				</li>
			</ul>
			
			<div class="sherebtn" @click="shared">{{urlis=='com'?'去QQ阅读看好书':'邀请好友共读书'}}<img :src="'../adr/public/images/arrow.png'" /></div>
			<img class="gototal" :src="'../adr/public/images/go.png'" @click="goall" />
			<div class="rules" v-show="showrule">
				<h4>－ 活动规则－</h4>
				<p><span>1.</span>活动时间：2017年4月23日 19:30-5月2日0点；</p>
				<p><span>2.</span>活动期间，部分书籍限时免费阅读；</p>
				<p><span>3.</span>明星次序按照湖南卫视晚会顺序排列；</p>
				<p><span>4.</span>本活动最终解释权归QQ阅读所有{{ urlis=='ios'?',与苹果公司无关':''}}。</p>
			</div>
			<img class="copyright" :src="'../adr/public/images/btomcopy.jpg'"/>
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
				islogin:false,
				showbrowers:false,
				showrule:true,
				downshow:false,
				showtab:false,
				tabs:['共读青春','共读诗歌','共读爱情','共读经典'],
				tablist:[],
				tabstaus:4,
				shareObj:{
					url :"",
					cover :"",
					title : "423全民阅读，全明星共读之夜",
					desc : "今夜，QQ阅读携手易烊千玺等众星邀你一起读"
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
				if(self.urlis=='com'){
					self.showrule=false;
				}
				Local.reqaObj(server() + "pkg170409/init?pt="+self.urlis, function(data) {
					console.log(data);
					self.loading=false;
					if(data.code==-4){
						self.over=true;
					}
					self.islogin=data.isLogin;
					self.tabstaus=data.tabstatus;
					self.tabdiff(self.tabstaus);
					self.shareObj.url=front()+"act170409/com/index.html?tf=1&act_f=170409";
					self.shareObj.cover=front()+"act170409/adr/public/images/coverm.jpg";
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				//forceLog('param("act_f")','zgzyindex'+self.urlis);
			},
			tabdiff:function(ind){
				let self=this;
				if(ind>0){
					let timer=null;
					let num=ind+1;
					self.showtab=true;
					self.tablist=self.tabs.slice(0,num);
					timer=setTimeout(function(){
						$('.swiper-wrapper li').eq(0).addClass('active').siblings().removeClass('active');
						$('.tabbox li').eq(0).removeClass('hide').siblings().addClass('hide');
						let win=$('.swiper-wrapper li').width()*num;
						let winW=document.body.clientWidth;
						let disX=winW-win;
						let len=$('.swiper-wrapper li').length;
						console.log(win);
						if(len>3){
							$(".tabdiff").removeClass('tablist');
							$('.tabdiff').each(function(){
								$(this).swiper({
									speed:200,
									slidesPerView:'auto',
									calculateHeight: true
								});
								//$(".swiper-wrapper").css('transform','translate3d('+(disX-40)+'px, 0px, 0px)');
							});
						}
						timer=null;
					}, 80);
				}else{
					self.showtab=false;
				}
				
			},
			goall:function(){
				let self=this;
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
								forceLog(param("act_f"),"170409_sharegojhy");
							}
						});
				}else if(self.urlis=='adr'){
					Local.openPage('http://iyuedu.qq.com/event/act170410/index.html?act_f=170410');
					forceLog(param("act_f"),"170409_gojhy");
				}else{
					Local.openInside('https://yuedu.reader.qq.com/event/act170410/index.html?act_f=170410');
					forceLog(param("act_f"),"170409_gojhy");
				}
			},
			tabswitch:function(e){
				let self=this;
				let $cur = $(e.currentTarget);
				let ind=$cur.index();
				forceLog(param("act_f"),"170409_tabdiff"+ind);
				$('.swiper-wrapper li').eq(ind).addClass('active').siblings().removeClass('active');
				$('.tabbox li').eq(ind).removeClass('hide').siblings().addClass('hide');
			},
			gotoapp:function(){
				let self=this;
				S.open(function(installStat,plat){
						
						if(env.vw=='wb'){
							self.showbrowers=true;
						}else{
							if(installStat){
								if(env.pt=="adr"){
									N.openPage("http://iyuedu.qq.com/event/act170409/adr/index.html?act_f=170409");
								}else if(env.vw=="wx" && env.pt=="ios"){
									N.openPage("https://yuedu.reader.qq.com/event/act170409/ios/index.html?act_f=170409");
									setTimeout(function(){
										self.downshow=true;
									}, 2000);
									setTimeout(function(){
										self.downshow=false;
									}, 5000);
								}else{
									N.openPage("https://yuedu.reader.qq.com/event/act170409/ios/index.html?act_f=170409");
								}
							}else{
									self.downshow=true;//显示下载弹窗
							}
						}
						forceLog(param("act_f"),"170409_openBtn"+env.pt);
					});
			},
			godetail:function(bid){
				let self=this;
				if(self.urlis=='com'){
					self.gotoapp();
				}else{
					ABook.gotoDetail(bid);
					forceLog(param("act_f"),"170409_bookdetail"+bid);
				}
				
			},
			shared:function(){
				let self=this;
				if(self.urlis=='com'){
					self.gotoapp();
				}else{
					Local.shareTopic(self.shareObj.url, self.shareObj.cover, self.shareObj.title,self.shareObj.desc, 1);
					forceLog(param("act_f"),"170409_shared");
				}
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();   
		}
	}
</script>