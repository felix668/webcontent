<template>
	<div id="root">
		
		<mask-loading v-show=" page==='pending' "></mask-loading>
		<mask-over v-if=" page==='over' "></mask-over>

		<div class="main" v-show=" page==='ready' ">
			<mask-download :show="show_mask" :act="act"></mask-download>
			
			<div class="focus" :style=" 'background-image: url('+focus_img+');background-size: 100% auto;' ">

				<!-- <p class="pink_text">直播时间：<span>9月10日 20:00</span></p> -->
				<div class="margin"></div>
				<div class="notice"
				v-show="show_notice">
					<img :src=" 'img/horn.png' "/>{{notice}}
				</div>
				
				<!-- <div class="bar">
					<div class="avatar">
						<img :src=" 'img/avatar.png' "/>
					</div>
					<p>直播未开始，先来了解我吧</p>
				</div> -->
			</div>

			<div class="front_con"
			:style=" 'background-image:url(img/front.png);background-size:100% auto;display:'+(share||(!share&&timeleft>0)?'block':'none') ">
				<div class="front" v-if="!share">
					<img class="timeleft" :src=" 'img/timeleft.png' " :style=" show_alarm?'':'left:0.98rem;top:0.5rem;' "/>
					<countdown :timeleft="timeleft" :act="act" :style=" show_alarm?'':'left:2.86rem;top:0.3rem;' "></countdown>
					<button-alarm :alarm="alarmState" :act="act" v-if="show_alarm"></button-alarm>
				</div>
			</div>

			<div class="play" v-show="!share&&timeleft<=0"
			@click="TO_PLAY">
				<img class="replay" :src=" 'img/replay_3.png' "/>
				<p class="play_text">{{play_text}}</p>
			</div>
			<img class="btn_toread" :src=" 'img/btn_toread_3.png' "
			v-show="share"
			@click="SHOW_MASK"/>

			<div class="middle">
				<img class="open-quote" :src=" 'img/open-quote.png' "/>
				<div class="middle-top">
					<img class="close-quote" :src=" 'img/close-quote.png' "/>
					<p class="p-black">
						{{intro}}
					</p>
					<ul>
						<li v-for="a in introList"><span v-if=" introList.length>1 ">◆</span>{{a}}</li>
					</ul>
				</div>
				<div class="my_books">
					<p class="my_books_title">{{text_title}}</p>
					<!-- <img class="my_books_img" :src=" 'img/my_books.png' "/> -->
					<!-- <p class="text_total">{{text_total}}</p> -->
					<div class="text_table">
						<div class="text_cell">
							{{text_total}}
						</div>
					</div>
<!-- 					<stack-both
					:items="items" :act="act"></stack-both> -->
				</div>
				<swiper :items="items" :act="act"></swiper>
			</div>
			<div class="chat" v-if="show_chat" 
			:style=" 'background:'+theme_color ">
				<div class="content">
					<p class="chat_title">{{chat_title}}</p>
					<!-- <img class="chatImg" :src=" 'img/chat.png' "/> -->
					<p class="chat_text">{{chat_text}}</p>
					<div class="video-frame">
						<iframe frameborder="0" width="100%" height="100%" 
						:src=" 'https://v.qq.com/iframe/player.html?vid='+video_id+'&tiny=0&auto=0' " allowfullscreen></iframe>
					</div>
				</div>
			</div>
			<img class="bottom_pic" :src=" bottom_pic "
			v-show="show_bottom_pic"/>
<!-- 			<img :src=" 'img/qqreader.png' " style="display:none"/> -->
	<!-- 		<debug :state="$data"></debug> -->
		</div>
	</div>
</template>

<script type="text/javascript">
	import './App.scss';
	export default {
		components: {
			maskLoading: require('../components/MaskLoading.vue'),
			maskOver: require('../components/MaskOver.vue'),
			maskDownload: require('../components/MaskDownload.vue'),

			Swiper: require('../components/Swiper.vue')
		},
		data: function(){
			return {
				dev: false,

				page: 'pending',

				ios: (function(){
					var el = document.querySelector('[config]');
					var val = el.getAttribute('config');
					console.log(val)
					return /ios/.test( val )?true:false
				})(),

				share: (function(){
					var el = document.querySelector('[config]');
					var val = el.getAttribute('config');
					return /share/.test( val )?true:false
				})(),

				show_mask: false,

				loggedIn: false,

				// 头图
				focus_img: '',
				show_notice: false,
				notice: '--',
				
				play_text: '播放',
				href: '',

				//距离直播开始的时间：
				timeleft: 14400000,
				show_alarm: true, 
				// 'pending','unset','resolved','set'
				alarmState: 'pending',
				livetime: '',

				// 作家介绍
				intro: 'Hi，我是叶非夜,日销15.6万言情天福布斯年度人气作家，直播内容预告如下',
				introList: [],
				// 我的作品
				text_title: '--',
				text_total: '--',
				items: [],

				// 随便聊聊
				show_chat: false,
				theme_color: 'white',
				chat_title: '--',
				chat_text: '--',
				video_id: 's03424eytr3',

				// 页面底部的图片
				show_bottom_pic: true,
				bottom_pic: '',

				inProcessing: false,
				obj: {}

			}
		},
		created: function(){

		},
		mounted: function(){
			this.act({type:'INIT'});
			//console.log(this)
			// this.items = [{
			// 	id: 0,
			// 	title: '美国队长',
			// 	score: 6.7,
			// 	intro: 'Cocain business controlls America!',
			// 	_class: ''
			// }];
		},
		methods: {
			SHOW_MASK: function(){
				this.act({type:'SHOW_MASK'});
			},
			TO_PLAY: function(){
				this.act({type:'TO_PLAY'});
			},
			act: function(action){
				var self = this;
				switch(action.type){
					case 'INIT':
						if(self.dev){
							self.share = true;
							self.timeleft = 0;
							self.text_title = '我写的书';
							self.text_total = '共2000万字';
							var books = [{
								id: 0,
								_class: '',
								title: '三国演义水浒传西游记',
								score: 8.8,
								intro: '三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记',
								cover: './img/pic.jpg',
								bid: 111,
								corner: '新书推荐'
							},{
								id: 1,
								_class: '',
								title: '三国演义水浒传西游记',
								score: 8.8,
								intro: '三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记',
								cover: './img/focus.png',
								bid: 111,
								corner: '人气'
							},{
								id: 2,
								_class: '',
								title: '三国演义水浒传西游记',
								score: 8.8,
								intro: '三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记',
								cover: './img/thumb.jpg',
								bid: 111,
								corner: '新作'
							}];
							books.forEach(a=>{
								if( a.intro.length>150 ){
									a.intro = a.intro.substr(0,150)+' ...';
								};
							});
							self.items.push(...books);
							self.introList = ['--','--','--','--'];
							self.show_chat = true;
							self.theme_color = 'grey';
							self.page = 'ready';
						}else{
							// if(self.share){
							// 	window.initSNS = function(){
							// 		S.share({
							// 			url: location.href,
							// 			cover: '',//location.href.replace(/share\.html/,'img/qqreader.png'),
							// 			title: 'QQ阅读大神直播',
							// 			desc: 'QQ阅读大神直播'
							// 		})
							// 	};
							// };
							Local.forceLog( '-1','topic_live_index' );
							Local.reqaObj( common.server()+`topic/live/init?topicid=`+common.param('topicid'), function(data) {
								console.log(data)
								var __ = data.topic;

								self.loggedIn = data.isLogin;

								self.focus_img = __.headimg;
								self.show_notice = __.havebroadcast;
								self.notice = __.broadcast;

								self.timeleft = __.timeleft;
								self.play_text = __.timeleft<-3600000?'已结束':'播放';
								self.href = __.href;

								self.show_alarm = __.haveremindtime;
								if( self.timeleft<=14400000 ){
									self.show_alarm = false;
								};
								self.alarmState = data.reserved===true?'resolved':'unset';
								self.livetime = __.livetime;

								self.intro = __.authotitle;
								self.introList.push(...__.authointro);

								self.text_title = __.bookmodule.title;
								self.text_total = __.bookmodule.comment;
								__.bookmodule.books.forEach((a,i)=>{
									if( a.intro.length>150 ){
										a.intro = a.intro.substr(0,150)+' ...';
									};
									console.log(a.intro)
									self.items.push({
										id: i,
										_class: '',
										title: a.title,
										score: Number(a.score),
										intro: a.intro,
										cover: a.cover,
										bid: a.bid,
										corner: a.extra
									})
								})

								self.show_chat = __.havevideo;
								self.theme_color = data.color;
								self.chat_title = __.videotitle;
								self.chat_text = __.videointro;
								self.video_id = __.videourl;

								self.show_bottom_pic = __.haveintroimg;
								self.bottom_pic = __.introimg;

								if(!self.share){
									// 如果当前页面不是分享页：
									var url = (function(){
										var pre = (function(){
											// 如果当前环境为测试环境：
											if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
												return 'https://ptsolomo.reader.qq.com/book_res/event';
											}else{
												return 'https://yuedu.reader.qq.com/event';
											}
										})();
										return pre+'/acttopiclive/adr/share.html?tf=1&topicid='+common.param('topicid');
									})();
									// 设置右上角的分享图标：
									Local.setIconForShareing(
										url,
										data.shareimg, 
										data.sharetitle, 
										data.shareintro
									);
								}else{
									// 如果当前页面为分享页：
									self.obj = {
										url: location.href,
										cover: data.shareimg,
										title: data.sharetitle,
										desc: data.shareintro
									};
									// 设置用于二次分享的信息：
									sns.share( self.obj );
									// function __share(){
									// 	S.share( self.obj )
									// }
									// if(window.S){
									// 	__share();
									// }else{
									// 	var interval = setInterval(()=>{
									// 		if(window.S){
									// 			__share();
									// 			clearInterval(interval);
									// 		};
									// 	},500);
									// }
								}

								//self.act({type:'MOCK'});

								self.page = 'ready';

							}, [], function() {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
						};
						break;
					case 'MOCK':
						self.timeleft = 10000;
						break;
					case 'SET_ALARM':
						Local.forceLog( '-1','topic_live_to_reserve' );
						if( self.loggedIn===false ){
							Local.login();
						}else if( self.alarmState==='unset' ){
							try{
							Local.reqaObj( common.server()+`topic/live/reserve?tid=${common.param('topicid')}`, function(data) {
								//console.log( JSON.stringify(data) )
								self.alarmState = 'set';
							}, [], function() {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
							}catch(e){
								console.log(e)
							}
						};
						break;
					case 'MINUS':
						if( this.timeleft-60000>0 ){
							this.timeleft -= 60000;
						}else{
							this.timeleft = 0;
						};
						if( this.timeleft<=14400000 ){
							this.show_alarm = false;
						};
						break;
					case 'SHOW_MASK':
						if(!self.inProcessing){
							self.inProcessing = true;
							var href = (function(){
								if( env.pt==='adr' ){
									return 'http://iyuedu.qq.com/event/acttopiclive/adr/index.html?topicid='+common.param('topicid');
								}else{
									return 'https://yuedu.reader.qq.com/event/acttopiclive/ios/index.html?topicid='+common.param('topicid');
								}
							})();

							// href = href.replace(
							// 	/acttopiclive.*/,
							// 	'acttopiclive/'+env.pt+'/index.html?topicid='+common.param('topicid')
							// );
							//console.log(href);
							//N.openPage( href );
							sns.open(function(installStat,plat){
								if(installStat == -2){
									bnative.openPage( href );
								}else if(installStat){
									bnative.openPage( href );
								}else{

								}
							})
							setTimeout(()=>{
								self.show_mask = true;
								self.inProcessing = false;
							},3000)
						}
						break;
					case 'TO_PLAY':
						Local.forceLog( '-1','topic_live_to_play' );
						//Local.openPage( self.href );
						location.href = self.href;
						break;
					case 'TO_DOWNLOAD':
						N.downLoad(null, '10003531');
						break;
					case 'HIDE_MASK':
						self.show_mask = false;
						break;
					case 'TO_BOOK':
						Local.forceLog( '-1','topic_live_to_book_'+action.bid );
						if(!self.share){
							ABook.gotoDetail( action.bid );
						}else{
							self.act({
								type: 'SHOW_MASK'
							})
						}
						break;
				}
			}
		}
	}
</script>