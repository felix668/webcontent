<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<template v-else>
			<div class="login" v-if="!islogin">
				<img src="src/images/login.png">
				<p>登录后查看我的奖品</p>
				<div class="btn" @click="goLogin"><strong>立即登录</strong></div>
			</div>
			<template v-else>
				<div class="link">
					<p>获得实物奖的小伙伴，<span @click="writeAddress">请填写联系方式</span></p>
				</div>
				<ul class="plist" v-if="plist.length>0">
					<li v-for="item in plist">
						<div class="pic">
							<img :class="{ bokface:item.type==12}" :src="item.type==12?item.img:prizeName[item.type].img">
						</div>
						<p ><span v-if="item.type>7 && item.type!=12">{{ item.count }}</span>{{item.type==12?'限免《'+item.name+'》':prizeName[item.type].pzName}}</p>
						<a v-if="(item.type==10 || item.type==13) && verok" @click="gomaice(item.type)">立即使用></a>
						<a v-if="item.type==12" @click="goread(item.bid)">立即阅读></a>
					</li>
				</ul>
				<div class="nogift" v-else>
					<img src="src/images/l3.png">
					<p>您还没有奖品哦</p>
				</div>
			</template>
		</template>
	</div>
</template>

<script type="text/javascript">
	import maskLoad from "./components/Load.vue";
	export default {
		data(){
			return{
				loading:true,
				islogin:false,
		 		plist:[],
		 		verok:false,
		 		prizeName:[{

                },{
                    pzName:'iPhone 8',img:'src/images/prize/iPhone-8.png'
                },{
                    pzName:'QQ阅读电子书',img:'src/images/prize/yueduqi.png'
                },{
                    pzName:'500元京东卡',img:'src/images/prize/jd500.png'
                },{
                    pzName:'200元京东卡',img:'src/images/prize/jd200.png'
                },{
                    pzName:'耳机',img:'src/images/prize/erji.png'
                },{
                    pzName:'小米手环',img:'src/images/prize/shouhuan.png'
                },{
                    pzName:'1Q币',img:'src/images/prize/Qbi.png'
                },{
                    pzName:'书券',img:'src/images/prize/shuq.png'
                },{
                    pzName:'阅券',img:'src/images/prize/yueq.png'
                },{
                    pzName:'漫画抵扣券',img:'src/images/prize/dikouq.png'
                },{
                    pzName:'成长值',img:'src/images/prize/chengzhzhi.png'
                },{

                },{
                    pzName:'书籍抵扣券',img:'src/images/prize/dikouq.png'
                }],
			}
		},
		created(){ 
			this.init();
	 	},
	 	methods:{
	 		goLogin(){
	 			Local.login();
	 		},
	 		init(){
				Local.reqaObj(`${common.server()}pkg170903/myprize`, data=> { 
					console.log(data);
					this.islogin=data.isLogin;
					if(data.prizes){
						this.plist=data.prizes;
						this.verok=data.verok;
					}
		            this.loading=false;					
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);	
				Local.forceLog(common.param("act_f"),"GQJSPmyprize");
			},
			writeAddress(){
				Local.forceLog(common.param("act_f"),"GQJSPgocontact");
	 			let url=`${common.front()}contact/index.html`;
	 			Local.openInside(url);
	 		},
            gomaice(type){
            	if(type==10){
                    Local.forceLog(common.param("act_f"),"GQJSPmyprize_gomanhua");
                   window.location.href ='uniteqqreader://nativepage/comic/bookstore';
                }else{
                    Local.forceLog(common.param("act_f"),"GQJSPmyprize_godikouquan");
                    window.location.href ='uniteqqreader://nativepage/client/voucherdetail';
                }
                
            },
            goread(bid){
            	Local.forceLog(common.param("act_f"),"GQmyprize_goread_"+bid);
                Local.goRead(bid);
            }
	 	},
	 	components:{
	 		maskLoad
	 	}
	};
</script>
<style lang="less">
body,ul,li,p{margin:0;padding: 0;}
ul,li{list-style: none;}
.login{
	text-align: center;font-size: .28rem;
	img{width: 2.5rem;margin:1.78rem 0 0;}
	p{color: #333;line-height: .4rem;margin:.6rem 0 .46rem;}
	.btn{width:3.36rem;height:.9rem;margin:0 auto;line-height:.9rem;background: #5199f7;
		strong{color:#fff;}
	}
}
.link{font-size: .26rem;color: #cecece;height: .9rem;line-height: .9rem;background: #303030;text-align: center;
	span{color: #eec651;text-decoration: underline;}
}
.plist{
	margin:.08rem .3rem 0;
	li{
		display:-webkit-box;
		display:-webkit-flex;
		-webkit-box-align:center;
		-webkit-align-items:center;
		padding:.22rem 0;
		height: 1.4rem;
		border-bottom: 1px solid #e2e2e2;
		position: relative;
		z-index: 1;
		padding-right: 1.2rem;
		padding-left: 1.84rem;
		a{
			width: 1.2rem;
			height: 1.92rem;
			display:-webkit-flex;
			-webkit-box-align:center;
			position: absolute;
			top: 0; 
			right: 0;
			font-size: .24rem;
			color: #6cabd5;
			line-height: 1.92rem;
		}
	}
	.pic{
		width:1.4rem;height:1.4rem;border:.04rem solid #e2e2e2; position: absolute;left: .1rem; top:.18rem;
		display:-webkit-box;
		display:-webkit-flex;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		-webkit-align-items:center;
		-webkit-justify-content:center;/**/
		img{display: block; width: 100%;
			&.bokface{ display: block; width:.8rem;}
		}
	}
	p{margin-left:.44rem;font-size: .28rem;color: #383838;overflow: hidden;white-space: nowrap; text-overflow: ellipsis;}
}
.nogift{
	padding: 1rem 0;text-align: center;
	img{width: .73rem;margin:0 auto 1rem}
	p{font-size: .3rem;}
}
</style>	
