<template>
	<div id="root">
		<div class="wrap">
			<div class="banner">
				<div class="chaibag"></div>
				<div class="redbag">
					<p class="logintxt" v-show="!login">登录输入口令，领红包</p>
					<div v-show="login">
						<input type="text" class='kouling' placeholder="输入口令，100%领红包" v-model='holder'  @keyup="intblur($event)" ref="inptxt" />
					</div>
					<div id="btnok" class="btn" v-bind:class="{ disabled: login }" @click="actions(holder,$event)">{{ login ? '确 定':'登 录'}}</div>
				</div>
			</div>
			<ul class="actlist">
				<li v-for="(item, index) in config">
					<div class="titlebox">
						<span>{{ index+1 }}</span> / {{ item.title }}
						<p> 活动时间：{{ item.timers}}</p>
						<div class="goconcern" @click="gogurl(item.skipValue,item.skipType,item.actid,$event)">{{ item.skipDesc }}</div>
					</div>
					<ul class="prizelist">
						<li v-for="plist in item.subAct">
							<div class="prizeimg">
								<img :src="plist.pic" />
							</div>
							<div class="prizinfo">
								<p class="tt">{{ plist.prize }}</p>
								<p class="personnum">已有{{ plist.pickedNumber }}人领取</p>
								<p class="findpass">{{ plist.desc }}</p>
							</div>
							<div class="finised" v-show="plist.noneLeft"></div>
						</li>
					</ul>
				</li>
			</ul>
	</div>
	<mask-loading v-show="loading"></mask-loading>
	<mask-fuwuhao v-show="showfwh"></mask-fuwuhao>
	<mask-result v-show="showmask" :show.sync='showmask' :tktype="passgift.code" hold="holder" :chai='open' :errstat="passgift.errcode" :prizeco="passgift.type" :prrzeinfo="passgift"></mask-result>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			maskLoading: require('../src/MaskLoading.vue'),
			maskFuwuhao: require('../src/MaskFuwuhao.vue'),
			maskResult: require('../src/MaskResult.vue')
		},
		data:function(){
			return {
				loading:true,
				open:false,
				login:true,
				showmask:false,
				intok:false,//确定
				holder:'',
				showfwh:false,
				config:[{
					platform:'',//平台
					title:'去微信关注QQ阅读公众号获口令',
					startTime:'1489654414',
					endTime:'1489654414',
					timers:'',
					skipValue:'http://www.baidu.com',//
					skipType:2,//跳转方式（下拉选框：1不跳转、2服务号、3URL）
					skipDesc:'如何关注',
					actid:'',
					subAct:[{
						toolNum:'100',//道具值（书籍限免需填写折扣ID，其他道具填写数值）
						//toolType:'',//下拉选框：书籍限免、书券阅券、成长值、包月体验卡、书币、抽奖
						toolType:0,//
						prize:'',
						pic:'./images/prizeimg.png',//口令图片
						pickedNumber:'1000',//人工运营量
						desc:'去QQ阅读公众号《xxx》书中找口令',//描述文案
					}]

				}],
				passgift:{
					    code:-109,//口令对错或已领取、礼品发完
				        errcode:0,//口令错误随机数
					    type:'',//
					    amount:'100',//
					    gigttt:'',
						pic:'./images/prizeimg.png',
						expireTime:'1489654414',//
						ptxt:'',
						bookinfos:[],
						url:''
				}
				
			}
		},
		methods: {
			initpage:function(){
				let self=this;
				Local.reqaObj(server()+ "template/passwordgift/init?qimei=12351235", function(data) {
					self.loading=false;
					self.login=data.isLogin;
					self.config=data.acts;
					let stet;
					for(let i=0;i<self.config.length;i++){
						let stime=self.config[i].startTime;
						let etime = self.config[i].endTime;
						self.config[i].timers=self.getTime(stime,etime);
					}

				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param('act_f'));
			},
			getTime:function(startT,endT){
				let st = new Date(startT);
				let et = new Date(endT);
				let rest=st.getFullYear()+'-'+parseInt(st.getMonth()+1)+'-'+st.getDate()+' '+st.getHours()+'点 ~ '+et.getFullYear()+'-'+parseInt(et.getMonth()+1)+'-'+et.getDate()+' '+et.getHours()+'点';
				return rest;
			},
			gogurl:function(url,type,actd,e){
				let $cur = $(e.currentTarget);
				let self=this;
				if(type==3){//fuwuhao
					Local.go(url);
				}
				if(type==2){//butiaozhuan
					self.showfwh=true;
				}
				forceLog(param('act_f'),'goUrl'+actd);
			},
			intblur:function(ev){//按键事件
				let self=this;
				let len=self.holder.length;
				if(len>0){
					if(ev.keyCode==13){
						self.showtank(self.holder);
						$("input").blur();
						forceLog(param('act_f'),'keyNum');
				   }
				}			
			},
			actions:function(kouling,e){
				let $cur = $(e.currentTarget);
				let self=this;
				if(self.login){
					if(self.holder.length>0){
						self.showtank(kouling);
					}
					forceLog(param('act_f'),'btnNum');
				}else{
						Local.login();
				}
			},
			showtank:function(kouling){
				let self=this;
				Local.reqaObj(server()+ "template/passwordgift/pick?password="+encodeURI(kouling), function(data) {
						self.passgift=data;
						let timer=null;
						self.showmask=true;
						if(self.passgift.code==-108){//输错
							let rand=-(Math.floor(Math.random()*3));
							self.passgift.errcode=rand;
							console.info(self.passgift.errcode);
						}
						if(self.passgift.code==0){//输对
							$(".chaibag").addClass('chaianim');
							$(".tiparea").addClass('anmat');
							let exptime=new Date(self.passgift.expireTime);
							let txt=exptime.getFullYear()+'年'+parseInt(exptime.getMonth()+1)+'月'+exptime.getDate()+'日';
							if(self.passgift.type==0){//书籍限免
								self.passgift.gigttt='限时免费读';
								self.passgift.ptxt='免费读至'+txt;
							}
							if(self.passgift.type==20){//书籍限免
								self.passgift.gigttt='书包限时免费读';
								self.passgift.ptxt='免费读至'+txt;
							}
							if(self.passgift.type==2){//书券2阅券
								self.passgift.gigttt=self.passgift.amount+'阅券';
								self.passgift.ptxt='有效期至'+txt;
							}
							if(self.passgift.type==3){//成长值
								self.passgift.gigttt=self.passgift.amount+'成长值';
								self.passgift.ptxt='加速升级，更多福利';
							}
							if(self.passgift.type==4){//包月体验卡
								self.passgift.gigttt=self.passgift.amount+'天包月体验卡';
								self.passgift.ptxt='有效期至'+txt+'，赶紧使用吧';
							}
							if(self.passgift.type==5){//书币
								self.passgift.gigttt=self.passgift.amount+'书币';
							}
							if(self.passgift.type==6){//抽奖
								self.passgift.gigttt=self.passgift.amount+'次抽奖机会';
							}
						}	
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
			}
		},
		watch:{
            holder:{
                handler:function(val,oldval){
                    if(val.length>0){
                    	$("#btnok").removeClass('disabled');
                    }else{
                    	$("#btnok").addClass('disabled');
                    } 
                },
                deep:true
            }
        },
		created:function(){
			//页面初始化
	        this.initpage();
		}
	}
</script>