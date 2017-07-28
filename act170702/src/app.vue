<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<mask-over v-if="over"></mask-over>
		<div class="swiper-container" id="swiper-container" v-if="!over">
			<div class="swiper-pagination" @click="tabclick"></div>
	        <div class="swiper-wrapper">
	        	<div class="swiper-slide"> 
	         		<user-rank :is-login="isLogin" :userinfo="weekRank.userRankInfo" rank="week"></user-rank>		
	         		<rank-list :listinfo="weekRank.allRank" rank="week"></rank-list>
	        	</div>
	            <div class="swiper-slide"> 
	            	<user-rank :is-login="isLogin" :userinfo="totalRank.userRankInfo" rank="all"></user-rank>
	            	<rank-list :listinfo="totalRank.allRank" rank="all"></rank-list>
	         	</div>	         			
	    	</div>
	    	<score-mask ref="scoremask"></score-mask>
		</div>
	</div>
</template>
<style lang="sass">
.swiper-container{
	overflow: hidden;
	z-index: 10;
	position: relative;
}
.swiper-wrapper{
  -webkit-transition:-webkit-transform 0s ease;
  -webkit-transform:translate3d(0px,0,0);
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: box;
  display: flex;
  width: 100%;
}
.swiper-pagination{
	display: -webkit-box;
	display: -webkit-flex;
	display: box;
	display: flex;	
	span{
		-webkit-flex:1;
	    -webkit-box-flex:1;
		width:100%;
		height:.72rem;
		background:url(./images/tab.png) no-repeat;
		background-size:8rem auto;
		&:nth-child(1){
			background-position:right 0;			
			&.swiper-pagination-bullet-active{
				background-position:0 0;
			}
		}
		&:nth-child(2){
			background-position:right bottom;		
			&.swiper-pagination-bullet-active{
				background-position:0 bottom;
			}
		}
	}
}
.swiper-slide{
  width:100%;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
.swiper-active{
	border-bottom:.04rem solid #5099f7;
	background:#fff;
}
</style>
<script type="text/javascript">
	import "./css/index";
	import maskLoad from "./components/load";
	import maskOver from "./components/over";
	import Swiper from "swiper";
	export default {
		data(){
			return{
		 		loading:true,
		 		over:false,
		 		isLogin:true,
		 		weekRank:{userRankInfo:{},allRank:[]},
		 		totalRank:{userRankInfo:{},allRank:[]},
		 		swiper:{}
			}
		},
		created(){ 
			this.init();
	 	},
	 	mounted(){
			this.pageswiper();
	 	},
	 	methods:{
	 		init(){		
				if(process.env.NODE_ENV === 'local'){					
					let data = require("./js/data");
					if(data.code == -4){
			            this.over = true;
			            return;
		    	    }	
					this.weekRank = data.week;
					this.totalRank = data.all;
					this.isLogin = data.isLogin;
					this.loading = false;
					return;		        		
				}
				//周榜数据
				Local.reqaObj(`${common.server()}pkg170702/initWeek`, data=> {
					console.log(data);  	
		            if(data.code == -4){
		            	this.over = true;
		            	return;
		            }			
		            this.weekRank = data;
					this.isLogin = data.isLogin;	
		            this.loading = false;				
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				//总榜数据	
				Local.reqaObj(`${common.server()}pkg170702/initAll`, data=> {		
		            this.totalRank = data;				
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				Local.forceLog(common.param("act_f"),"PHBpageInit");				
			},
			pageswiper(){
				this.swiper = new Swiper('#swiper-container', {
					initialSlide:0,
 			 		slidesPerView: 'auto',
	 			 	pagination : '.swiper-pagination',
	 				paginationClickable :true,
			    	resistanceRatio : 0.5,
			    	onInit:swiper=>{
						window.onscroll=_=>{
							swiper.slideTop=document.body.scrollTop;
						}
					},
			    	onSlideChangeStart:swiper=>{
			    		swiper.slides[swiper.previousIndex].style.height='0px';
			    		swiper.slides[swiper.activeIndex].style.height="auto";
			    		swiper[`slide${swiper.previousIndex}`]=swiper.slideTop;
			    		window.scrollTo(0,swiper[`slide${swiper.activeIndex}`]);
						this.$refs.scoremask.tkmask = false;
					}
			    });	 
			},
			tabclick(){
				setTimeout(()=>{
					Local.forceLog(common.param("act_f"),`PHBtab${this.swiper.activeIndex}`);
				})
			}
	 	},
	 	components:{
	 		maskLoad,
	 		maskOver,
	 		userRank:require('./components/userRank'),
	 		rankList:require('./components/rankList'),
	 		scoreMask:require('./components/Integral')
	 	}
	};
</script>	
