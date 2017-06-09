<template>
	<div id="root">
		<div class="wrap" v-show="!answer && !result">
			<img :src="urlis=='adr'?config.pictureAndStyle.bannerAdr:config.pictureAndStyle.bannerIos" class="banner" />
			<div class="btnbox">
				<div class="btn" :style="btnstyle" ref="login" @click="dochange" @touchstart.stop="touchStart($event)" @touchend.stop="touchEnd($event)">{{ !login ? '登录开始答题': !isvip ? '开通包月会员参与答题' : '开始答题'}}</div>
				<p class="notice" v-show="!isvip && login">体验卡开通的用户无法参与</p>
			</div>
			
			<div class="rulebox">
				<div class="rule" v-show="!login || isvip">
					<img class="rule_tt" :src="'../adr/public/images/rule_tt.png'" alt="rules" />
					<ul>
						<li v-for="(item,index) in config.rule.text"><span>{{ index+1 }}</span>{{ item }}</li>
					</ul>
				</div>
				<div class="vip_privilege" v-show="!isvip && login">
					<h4>开通包月还可以：</h4>
					<img :src="config.pictureAndStyle.priv_img" />
					<ul class="privilege">
						<li v-for="(item,index) in config.rule.priv_text">{{ index+1 }}.{{ item }}</li>
					</ul>
				</div>
				
			</div>
			<img class="logo" :src="'../adr/public/images/logo.png'" alt="logo"/>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<mask-answer v-show="answer" 
					:show.sync="answer"
					:answerstyle="config.pictureAndStyle"
					:cardlist="config.card"
					:answernum="config.answernum"
					:urlis="urlis"
		></mask-answer>
		<mask-result v-show="result"
					:results='config.resultData'
					:urlis="urlis"			
		></mask-result>
		<mask-eject v-show="maskshow" :mask="maskshow" :urlis="urlis"></mask-eject>
	</div>
</template>
<script type="text/javascript">
    import database from './data';
	export default {
		components: {
			maskLoading: require('./MaskLoading.vue'),
			maskOver: require('./MaskOver.vue'),
			maskAnswer: require('./MaskAnswer.vue'),
			maskResult: require('./MaskResult.vue'),
			maskEject:require('./ejectMask.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,//活动结束
				urlis:'adr',
				answer:false,
				result:false,//
				login:false,//登录
				isvip:false,
				maskshow:false,//ios开通包月后后腿无涮新，关闭弹框重新发请求
				selresulte:[],
				userGd:'',
				config: {
		            pictureAndStyle:{},
		            card: {
		            	tonext:false
		            },
		            resultData:{
		            },
		            rule: {
		                
		            }
		        },
		        btnstyle: {//按钮样式
		        },
		        rulestyle:{//规则块样式
		        }
			}
		},
		methods: {
			initpage:function(){
				let self=this;
				let el = document.querySelector('html');
                self.urlis = el.getAttribute('platform');
				if(self.urlis=='adr'){
					Local.init();
				}
				//self.config=database;
				Local.reqaObj(server() + "pkgAnswerMonthlyVIP/init?tpc="+param('tpc'), function(data) {
					console.log(data,param('tpc'));
					self.loading=false;
					self.login=data.isLogin;
					self.isvip=data.isWhiteUser;
					self.config.pictureAndStyle=data.pictureAndStyle;
					self.config.rule=data.rule;
					self.config.card=data.card;
					self.userGd=data.gd;
					if(data.resultData==undefined){
						self.result=false;
					}else{
						self.config.resultData=data.resultData;
						self.result=true;
					}

					$("body").css({"background":"url("+self.config.pictureAndStyle.bodybg+") 100% repeat-y","background-size":"100% auto"});
					self.btnstyle={
						color:self.config.pictureAndStyle.font_color,
						backgroundImage:"url("+self.config.pictureAndStyle.btn_bg+")"
					};
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"),'TemplateOfAnswerByMonthlyVIP');
			},
			touchStart: function(e){
				let self=this;
                self.$refs.login.style.backgroundPosition="0 -1.2rem";
            },
            touchEnd: function(e){
            	let self=this;
            	self.$refs.login.style.backgroundPosition="0 0";
            },
			dochange:function(){
				var self=this;
				if(!self.login){
					Local.login();
				}else if(!self.isvip){
					Local.openVip(true);
					let timer;
					timer=setTimeout(function(){
						self.maskshow=true;
						clearTimeout(timer);
					},500);
					forceLog(param("act_f"),'openVip');
				}else{
					self.answer=true;
					forceLog(param("act_f"),'startAnswer');
				}
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();
		}
	}
</script>