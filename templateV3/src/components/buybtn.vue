<template>
	<div :class="['btnbox buybtn',{'inlinebtn' : mdata.btnCols > 1}]" :mid="mdata.mid">
		<img :src="mdata.btn0" @click="buy" v-if="mdata.operStatus === 0 && mdata.status === 1">
		<img :src="mdata.btn1" v-else>
		<!-- 静态文字 -->
		<p v-if="mdata.btntype === 0" :style="styleobj.text">
			{{mdata.scontent}}
		</p>
		<!-- 动态文字 -->
		<p v-if="mdata.btntype === 1" :style="styleobj.text">
			{{mdata.dcontent1 || '已有'}}
			<span :style="styleobj.hightext">{{mdata.dcontentNum}}</span>
			{{mdata.dcontent2 || '人购买'}}
		</p>
		<div class="mask" v-if="showAlert">
			<div class="tiparea" v-if="!fail">
				<h4 class="title f32 line1">{{bookinfo.name}}</h4>
				<div class="money">
					<p class="bookp">
						价格：<strong>{{bookinfo.price | price}}</strong>{{text1}}
					</p>
					<p class="account">
						余额：<strong>{{userinfo.coin}}</strong>{{text1}} + <strong>{{userinfo.ticket}}</strong>{{text2}}
					</p>
				</div>
				<div class="btn" v-if="isEnough" @click="submit" :style="$parent.btncolor">确认购买</div>
				<a href="uniteqqreader://nativepage/coin/recharge?value=1" class="btn" v-else :style="$parent.btncolor">余额不足，充值并购买</a>
				<i class="close" @click.prevent="hidemask"></i>
			</div>
			<div class="tiparea" v-else>
				<img :src="'src/images/fail.png'" class="failico">
				<p class="tip">{{msg}}</p>
				<div class="btn" @click="hidemask" :style="$parent.btncolor">我知道了</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.tiparea{width: 5.2rem;
	.title{padding-top: .5rem;}
	.money{font-size: .24rem;color: #666;line-height:.5rem;text-align: left;padding-bottom: .2rem;
		strong{font-size:.4rem;margin-right:.06rem;}
	}
	.bookp strong{color:#ee7d68;}
	.account strong{color:#555;}
	.failico{width: .74rem;margin:.66rem auto .3rem}
}
</style>
<script>
import Bus from "./bus";
export default {
	props:["mdata"],
	data(){
		return{
			bookinfo:{},
			styleobj:{
				text:{
					color:this.mdata.fontcolor || ''
				},
				hightext:{
					color:this.mdata.highcolor || ''
				}
			},
			showAlert:false,
			fail:false,
			msg:'',
			isEnough:false
		}
	},
	created(){
		console.log(111)
		Bus.$on(this.mdata.rid,obj => {
			console.log(obj[0])
			this.bookinfo = obj[0];
			this.isEnough = parseFloat(this.userinfo.coin + this.userinfo.ticket) >= parseFloat(this.bookinfo.price)*100 ? true : false;
		})
	},
	computed:{
		userinfo(){
			return this.$parent.userinfo;
		},
		text1(){
			return window.pt == 'ios' ? '阅点' : '书币';
		},
		text2(){
    	return window.pt == 'ios' ? '阅券' : '书券';
		}
	},
	methods:{
		buy(){
			console.log(bookinfo.price)
			if(this.$parent.sharepage){
				this.$parent.isHasApp();
				return;
			}
			if(!this.$parent.isLogin){
				Local.login();
				return;
			}
			if(this.bookinfo.pricetype === 1){//章节购买
				Local.goBookDetail(this.bookinfo.bid);
				return;
			}
			this.showAlert = true;
		},
		submit(){
			//发送购买请求
			//let data={code:-1111};
 			Local.reqaObj(`${common.server()}buy?moduleid=${this.mdata.id}&actid=${this.$parent.actid}&bid=${this.bookinfo.bid}`,data => {
 				if(data.code == 0){
 					Local.showToast("已成功购书");
 					this.hidemask();
					this.mdata.operStatus = 1;
 				}else if(data.code == -101){
 					this.mdata.operStatus = 1;
 					this.fail = true;
 					this.msg = "已经购买过";
 				}else if(data.code == -102){
 					this.isEnough = false;
 				}else{
 					this.fail = true;
 					this.msg = "购买未成功，请重试";
 				}
 		    },[],()=>{
				Local.showToast("网络异常，请稍候重试");
 			})
		},
		hidemask(){
			this.showAlert = false;
		}
	},
	filters:{
		price:function(value){
			return Math.ceil(value*100);
		}
	}
}
</script>

