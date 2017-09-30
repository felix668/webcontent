<template>
	<div id="app">
		<mask-over v-if="over"></mask-over>
		<div class="wrap">
			<div class="swiper-container verticals">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">
		            <div class="arrow"></div>
		  			<div class="banner"></div>
		        </div>
		        <div class="swiper-slide">
				    <!-- <ul class="container">
				    	<li :class="{active:actived==0}" @click="showcom('champion',$event)">冠军推荐</li>
				    	<li :class="{active:actived==1}" @click="showcom('live',$event)">大神直播</li>
				    </ul> 
				    <component :is="comname"></component>-->
				    <champion></champion>
		        </div>
		    </div>
		</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import "./css/index.less" 
	import maskOver from "./components/Over.vue"
	import champion from './components/Champion.vue'
	import live from './components/Live.vue'
	import "swiper/dist/css/swiper.min.css"
	import Swiper from "swiper/dist/js/swiper.jquery.min.js"
	export default {
		components:{
	 		maskOver,
	 		Swiper,
	 		champion,
	 		live
	 	},
		data:function(){
			return{
				plat: window.pt,
		 		loading: true,
		 		over: false,
				isLogin: false,
				actived:0,
				comname:'champion'
			}
		},
		mounted(){
			this.initPage();	
	 	},
	 	methods:{
	 		initPage(){
	 			Local.forceLog(common.param("act_f"),"RYZDindex");
				var mySwiper = new Swiper('.verticals',{
					direction : 'vertical',
					resistanceRatio:0
				})
				document.querySelector('#loadingbox').style.display='none';

				//console.log(document.body.clientWidth+','+document.body.clientHeight);
	 		},
	 		// showcom(cname,e){
	 		// 	this.comname=cname;
	 		// 	let $cur = $(e.currentTarget);
	 		// 	this.actived=$cur.index();
	 		// }
	 	}
	}

</script>	
<style>
	
</style>
