<template>
	<div id="root">
		<div class="wrap" v-show="!answer && !result">
			<img :src="config.banner" ale="banner" class="banner" />
			<div class="btnbox">
				<div class="btn" :style="btnstyle" ref="login" @click="dochange" @touchstart.stop="touchStart($event)" @touchend.stop="touchEnd($event)">{{ !login ? '登录开始答题': !isvip ? '开通包月会员参与答题' : '开始答题'}}</div>
				<p class="notice" :style="{color:config.red_ftcolor}" v-show="!isvip && login">体验卡开通的用户无法参与</p>
				<p class="notice" :style="{color:config.red_ftcolor}" v-show="!isvip && login && config.answernum==4">同一账号已在iPhone设备上完成答题</p>
			</div>
			
			<div class="rulebox"  :style="rulestyle">
				<div class="rule" v-show="!login || isvip">
					<img class="rule_tt" :src="config.rule.rule_tt" alt="rules" />
					<ul>
						<li v-for="(item,index) in config.rule.text" :style="{color:config.ft_color}"><span :style="{color:config.rule.rule_suqfc,background:config.rule.rule_suqbg}">{{ index+1 }}</span>{{ item }}</li>
					</ul>
				</div>
				<div class="vip_privilege" v-show="!isvip && login" :style="{color:config.ft_color}">
					<h4>开通包月还可以：</h4>
					<img :src="config.rule.priv_img" />
					<ul class="privilege">
						<li v-for="(item,index) in config.rule.priv_text">{{ index+1 }}.{{ item }}</li>
					</ul>
				</div>
				
			</div>
			<img class="logo" :src="'images/logo.png'" alt="logo"/>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<mask-answer v-show="answer" 
					:show.sync="answer"
					:cardlist="config.card"
					:cardbg="config.card_bg"
					:ftcol="config.ft_color"
					:redcol="config.red_ftcolor"
					:answernum="config.answernum"
		></mask-answer>
		<mask-result v-show="result" 
					:cardbg="config.card_bg"
					:resultdata='config.resultData'
					:ftcol="config.ft_color"
					:redcol="config.red_ftcolor"			
		></mask-result>
	</div>
</template>
<script type="text/javascript">
    import database from './data';
    import  '../../css/index.css';
	export default {
		components: {
			maskLoading: require('../src/MaskLoading.vue'),
			maskOver: require('../src/MaskOver.vue'),
			maskAnswer: require('../src/MaskAnswer.vue'),
			maskResult: require('../src/MaskResult.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,//活动结束
				answer:false,
				result:false,//
				login:true,//登录
				isvip:true,
				config: {
		            name: '',//标题
		            bodybg:'',//背景图，y轴重复
		            banner: '',//banner图
		            card_bg:'',
		            ft_color:'',
		            red_ftcolor:'',
		            answernum:0,
		            button:{
		            	btn_bg:'',//按钮背景图
		            	btn_txt:[],//按钮文案
		            	font_color:'',//按钮字体颜色
		            },
		            card: {
		            	selresulte:[],
		            	tonext:false
		            },
		            resultData:{

		            },
		            rule: {
		                rule_tt:'',//规则标题
						rule_suqfc:'',//规则序列字体颜色
						rule_suqbg:'',//规则序列背景色　
						text: [],
						priv_tt:'',
						priv_img:'',
						priv_text:[]
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
				self.loading=false;
				self.config=database;
				$("body").css({"background":"url("+self.config.bodybg+") 100% repeat-y","background-size":"100% auto"});
				self.btnstyle={
					color:self.config.button.font_color,
					backgroundImage:"url("+self.config.button.btn_bg+")"
				};
				self.rulestyle={
					backgroundImage:"url("+self.config.card_bg+")"
				};
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
					//Local.login();
					console.log("请登陆");
				}else if(!self.isvip){
					//Local.openVip(true);
					console.log("去开通包月");
				}else{
					console.log("开始答题");
					self.answer=true;
					self.result=true;
					//返回答了几道题，以及所选选项
					self.config.answernum=0;
					//self.config.card.selresulte=[];
					//console.log(self.config.card.selresulte);
					var num=self.config.answernum-1;
					for(let i=0;i<num;i++){
					   $(".card").eq(i).css("display","none");
					}
				}
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();
		}
	}
</script>