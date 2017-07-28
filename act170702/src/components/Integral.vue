<template>
    <div class="mask" v-show="tkmask">
		<div class="teaparea">
			<div class="closetk" @click="closemask" v-show="result.code !== 0"></div>
			<h4>{{ result.code == 0 ? `恭喜你，获得${result.scores}积分` : '没有可兑换的积分' }}</h4>
			<p v-if="result.code == 0">阅读时常满{{result.time}}分钟，获得{{result.scores}}积分</p>
			<p v-else>参与玩一夏活动，赚积分</p>
		    <div class="closebtn" :class="{ bluebtn: result.code == 0 }" @click="earnclose">{{ result.code == 0 ?'我知道了' : '赚积分 >>' }}</div>
		</div>
	</div>
</template>
<style lang="sass" scoped>
.mask{
    background: rgba(0,0,0,.4); position: fixed; z-index: 1000; left: 0; top: 0 ;width: 100%; height: 100%;
    display: -webkit-flex;
	-webkit-align-items:center;
    -webkit-justify-content: center;
	display: -webkit-box;
	-webkit-box-align:center;
	-webkit-box-pack:center;
    .teaparea{ text-align: center;
    	background: #fff7e7;
		width: 5.2rem;
		border-radius: .2rem;
		padding: .96rem 0 .46rem;
		position: relative;
		z-index: 1; -webkit-animation:scalse linear .2s;
    	&:before{
    		content:'';
    		position: absolute;
    		left: 0;
    		top: -.2rem;
    		width: 100%;
    		height: .82rem;
			background: url(../images/tktopbg.png) no-repeat top left;
			background-size: 100% auto;
			
    	}
    	@-webkit-keyframes scalse {
		  0%{ -webkit-transform: scale(0); opacity: 0;}
		  100%{-webkit-transform: scale(1);opacity: 1;}
		}
		.closetk{
			position: absolute;
			top: .2rem;
			right: .28rem;
			width: .4rem; 
			height: .4rem;
			background: url(../images/close.png) no-repeat center right;
			background-size: .26rem .26rem;
		}
		h4{
			font-size: .32rem;
			color: #333;
			font-weight: normal;
			line-height: .6rem;
			margin:0;
		}
		p{
			font-size: .24rem;
			color: #f08c59;
			margin:0 .4rem;
		}
		.closebtn{
			width: 4.4rem;
			height: .78rem;
			margin:.32rem auto 0;
			border-radius: 5px;
			background: #e77c6e;		
			border-bottom: 2px solid rgba(231,124,110,.4);
			text-align: center;
			line-height: .78rem;
			font-size: .32rem;
			color: #fff;
			&.bluebtn{
				background: #86c3b9;
				border-bottom: 2px solid rgba(134,195,185,.4);
				margin-bottom: .2rem;
			}
		}
    }
}
</style>
<script>
    import Bus from "./bus";
	export default {
		data(){
			return{
				tkmask:false,
				result:{}
			}
		},
		created(){
			Bus.$on("getScore",(data)=>{
				this.result = data;
				this.tkmask = true;
			});
		},
	 	methods:{
	 		closemask(){
	 			this.tkmask = false;
	 		},	
	 		earnclose(){
	 			this.closemask();
	 			if(this.result.code == 0){
	 				this.$parent.init();
	 			}else{
	 				//打开集合页
	 				Local.openInside(`${common.front()}act170705/index.html?act_f=170705`);
	 			}
	 		}
	 	}
	}
</script>

