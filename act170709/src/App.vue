<template>
	<div id="app">
		<!-- <mask-load v-if="loading"></mask-load> -->
		<mask-over v-if="over"></mask-over>
		<div class="wrap">
			<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">
		        	<img class="ban ban1" :src="'./src/images/topimg1.jpg'"/>
		        	<div class="slide1">
		        		<div class="peopleNum">
		        			<span v-for="(item,ind) in totals" :class="'n'+item"></span>
		        			人
		        		</div>
		        		<template v-if="receive">
		        		<div class="norece">
		        			<img :src="'./src/images/dikouq.png'" />
		        			<a @click="receiveQuan">领 取</a>
		        		</div>
		        		</template>
		        		<template v-else> 
			        		<div class="received">
			        			<p v-if="quanNUm">已领取<span>{{ quanNUm }}</span>抵扣券，有效期7日</p>
			        			<p v-else>来晚一步，漫画抵扣券已被领完</p>
			        			<a @click="gocomic">去看漫画书 ></a>
			        		</div>
		        		</template>
		        	</div>
		        </div>
		        <div class="swiper-slide" v-for="(item,index) in books">
		        	<div class="bookface" @click="godetail(item.bid)"></div>
		        	<img class="ban" :src="item.cover"/>
		        	<div class="bookbox">
		        		<h4>《{{ item.title }}》</h4>
		        		<p>{{ item.intro }}</p>
		        		<a class="clastify" @click="goclass(item.classid,item.category)">{{ item.category }}</a><span>{{ item.label }}</span>
		        		<a class="readbtn" @click="goread(item)">阅 读</a>
		        	</div>
		        </div>
		        <div class="swiper-slide">
		            <div class="bookface" @click="gocomic"></div>
		        	<img class="ban" :src="'./src/images/resultimg.jpg'"/>
		        	<div class="bookbox resultbox">
		        		<h4>对这些不感兴趣？</h4>
		        		<div class="writebox received">
		        			<p>去QQ阅读漫画专区<p>
		        			<p class="nums"><span>23614</span>(本)</p>
		        			<p>漫画作品等你来阅</p>
		        			<a @click="gocomic">去看漫画书 ></a>
		        		</div>
		        	</div>
		        </div>
		    </div>		   
		    <!-- 如果需要导航按钮 -->
		    <div class="swiper-button-prev"></div>
		    <div :class="['swiper-button-next',{ active:!diluted && isfrist==0 }]"></div>
		    <div :class="['leftscroll',{ active:isfrist==0 }]">左滑又是一道风景</div>
		</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import database from "./data.js"
	import "./css/index.less"
	import maskLoad from "./components/Load.vue"
	import maskOver from "./components/Over.vue"
	import "swiper/dist/css/swiper.min.css"
	import Swiper from "swiper/dist/js/swiper.jquery.min.js"
	export default {
		components:{
			//maskLoad,
	 		maskOver,
	 		Swiper
	 	},
		data:function(){
			return{
				plat: window.pt,
		 		loading: true,
		 		over: false,
				isLogin: false,
				receive:true,
				quanNUm:'',
				gene:0,
				bookMan:[],
				bookWoman:[],
				bookPublish:[],
				totals:'',
				books:[],
				isfrist:0,
				diluted:true,//稀释
				bkbid:[]
			}
		},
		watch:{

		},
		mounted(){
			this.initPage();	
	 	},
	 	methods:{
	 		initPage(){
	 			let self=this;
				Local.reqaObj(common.server() + "pkg170709/init", data=>{
					console.log(data);
					if(data.code == -4){
						self.over = true
					}
					self.totals=data.count.split('');
					self.isLogin=data.isLogin;
					if(self.isLogin){
						self.receive=data.canPick;
						self.quanNUm=data.quan;
					}
					self.gene=data.gd;
					if(self.gene==0){
						self.books=database.bookPublish;
					}else if(self.gene==1){
						self.books=database.bookMan;
					}else if(self.gene==2){
						self.books=database.bookWoman
					}
					let timer=null;
					timer=setTimeout(()=>{
						$(".peopleNum span").addClass('active');
						var mySwiper = new Swiper('.swiper-container',{
				 			prevButton:'.swiper-button-prev',
						    nextButton:'.swiper-button-next',
						    onTransitionEnd:function(swiper){
						      	self.isfrist = swiper.activeIndex;
						      	self.diluted=true;
						      	Local.forceLog(common.param("act_f"),"MHXSpage-"+swiper.activeIndex);
						    }
				 		})
						timer=null
					}, 80);
					//self.loading=false;
					$(".loadingbox").hide();
					//console.log(document.body.clientWidth+','+document.body.clientHeight)
				});
				 Local.forceLog(common.param("act_f"),"MHXSindex");
				
	 		},
	 		goclass(id,name){
	 			if(this.plat=='adr'){
	 				window.location.href = 'uniteqqreader://nativepage/category/list?actionId='+id+'&actionTag=,-1,-1,-1,-1,-1&pagestamp=1&area=0&action=comicCat&title='+name;
	 			}else{
					window.location.href = "uniteqqreader://nativepage/category/comic?actionId="+id+"&actionTag=&title="+name+'&area=0';
	 			}
	 		},
	 		gocomic(){
	 			Local.forceLog(common.param("act_f"),"MHXSmanhuasc");
	 			window.location.href ='uniteqqreader://nativepage/comic/bookstore';
	 		},
	 		godetail(bid){
	 			Local.forceLog(common.param("act_f"),"MHXSdetailCid="+bid);
	 			window.location.href = "uniteqqreader://nativepage/comic/detail?cid="+bid;
	 		},
	 		goread(book){
	 			Local.forceLog(common.param("act_f"),"MHXSreadCid="+book.bid);
	 			this.bkbid[0]=book;
	 			Local.addToShelfBooks(JSON.stringify(this.bkbid));
	 			window.location.href = "uniteqqreader://nativepage/comic/open?cid="+book.bid;
	 		},
	 		receiveQuan(){
	 			Local.forceLog(common.param("act_f"),"MHXSreceive");
	 			if(this.isLogin){
	 				if(this.receive && this.diluted){
	 					this.diluted=false;
	 					Local.reqaObj(common.server() + "pkg170709/pick", data=>{
	 						console.log(data);
	 						if(data.code==1){
	 							this.quanNUm=data.quan;
	 							this.totals=data.count.split('');
	 							this.receive=false;
	 						}else{
	 							Local.showToast(data.msg);
	 						}
	 					});
	 				}
	 			}else{
	 				Local.login();
	 			}
	 		}
	 	}
	}

</script>	
<style>
	
</style>
