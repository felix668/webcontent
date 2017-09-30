<template>
	<div id="app">
		<!-- <mask-load v-if="loading"></mask-load> -->
		<mask-over v-if="over"></mask-over>
		<div class="main" v-if="!loading">
			<component :is="item.mid" v-for="item in modules" :mdata="item" :key="item.id"></component>	
		</div>
		<img src="src/images/logo.png" class="logo">
		<app-load v-if="loadmask"></app-load>
		<mask-wb v-if="wb"></mask-wb>
		<mask-share v-if="sharemask"></mask-share>
	</div>
</template>
<script type="text/javascript">
	import './css/index';
	import components from './components/vuelist-share';	
	let share2={};
	export default {
		data(){
			return{
		 		loading:true,
		 		over:false,
		 		sharemask:false,
		 		pagedata:{},
		 		actid:param("actid"),
		 		loadmask:false,
				wb:false,
		 		sharepage:document.body.dataset.page ? true : false //是否是分享页面
			}
		},
		created(){ 
			this.init();
	 	},
	 	methods:{
	 		init(){
				if(process.env.NODE_ENV === 'local'){
					var data=require("./js/data");
					if(data.code == -4 || data.code == -2){
			            this.over = true;
			            return;
		    	    }
		    	    this.styleinit(data);
		    	    this.pagedata = data;
					this.loading = false;
					$("#loadingbox").hide();		
		    	    return;					
				}
				reqa(`${server()}init?actid=${this.actid}`, data => { 
					var data = JSON.parse(data);
					// console.log(data) 	
		            if(data.code == -4 || data.code == -2){
		            	this.over = true;
		            	return;
		            }			
		            this.styleinit(data);
		            this.pagedata = data;
		            share2 = data.share2;
		            this.loading = false;
		            $("#loadingbox").hide();						
				}, [], () => {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);	
			},
			styleinit(data){
				document.title = data.name || "title";
				$('body').css({'backgroundColor':data.bgcolor,'color':data.fontcolor});
			},
			isHasApp(){
	 			if(env.vw == "wb"){
	 				this.wb=true;
	 				// forceLog(param("act_f"),`LYFdload-wb-${env.pt}`);	
	 				return;
	 			}
	 			//走判断流程
				S.open((installStat,plat)=>{
					var url = `templateV2/index.html?act_f=templateV2&actid=${this.actid}`;
					if(installStat == -2){						
						N.openPage(pageurl(url));			
						this.showmask();
					}else if(installStat){		
						N.openPage(pageurl(url));	
						if(env.vw == "wx" && env.pt == "ios") {
							setTimeout(()=>{
								this.showmask();
							},2000);
							setTimeout(()=>{
								this.loadmask=false;
							}, 5000)
						}   	
					}else{			
						this.showmask();
					}
				})	
				// forceLog(param("act_f"),`LYFdload-${env.vw}-${env.pt}`);					
 			},
 			showmask(){
				this.loadmask = true;
	 		}
	 	},
	 	computed:{
	 		modules(){
	 			return this.pagedata.modules
	 		},
	 		userinfo(){
	 			return this.pagedata.userinfo || {}
	 		},
	 		btncolor(){
	 			return {
	 				backgroundColor:this.pagedata.btncolor || this.pagedata.bgcolor
	 			}
	 		}	
	 	},
	 	components:components
	}
	window.initSNS = function(){
		setTimeout(()=>{
			var shareobj= Object.assign(share2 || {},{url : window.location.href});
			S.share(shareobj);
		},500)
	}
</script>	

