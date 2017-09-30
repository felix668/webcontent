<template>
	<div id="app">
		<!-- <mask-load v-if="loading"></mask-load> -->
		<mask-over v-if="over"></mask-over>
		<div class="main" v-if="!loading">
			<component :is="item.mid" v-for="item in modules" :mdata="item" :key="item.id"></component>	
		</div>
		<img src="src/images/logo.png" class="logo">
		<!-- 弹窗提示 -->
		<tip-mask ref="tip"></tip-mask>
	</div>
</template>
<script type="text/javascript">
	import './css/index';
	import components from './components/vuelist';
	export default {
		data(){
			return{
		 		loading:true,
		 		over:false,
		 		pagedata:{},
		 		actid:common.param("actid"),
		 		sharepage:document.body.dataset.page ? true : false //是否是分享页面
			}
		},
		created(){ 
			this.init();
	 	},
	 	mounted(){	
	 		//游客并且有成长值
	 		this.guestTip();
	 	},
	 	methods:{
	 		init(){
				if(process.env.NODE_ENV === 'local'){
					var data=require("./js/data");
					if(data.code == -4 || data.code == -2){
			            this.over=true;
			            return;
		    	    }
		    	    this.styleinit(data);
		    	    this.pagedata=data;
					this.loading=false;	
					$("#loadingbox").hide();
		    	    return;					
				}
				Local.reqaObj(`${common.server()}init?actid=${this.actid}`, data => { 
					console.log(data) 	
		            if(data.code == -4 || data.code == -2){
		            	this.over=true;
		            	return;
		            }			
		            this.styleinit(data);
		            this.pagedata=data;
		            this.loading=false;	
		            $("#loadingbox").hide();				
				}, [], () => {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);	
				Local.forceLog("templateV2","TpInit",this.actid,0);
			},
			styleinit(data){
				document.title = data.name || "title";
				$('body').css({'backgroundColor':data.bgcolor,'color':data.fontcolor});
			},
			guestTip(){
				if(this.pagedata.isGuest && this.pagedata.grownModuleNum > 0){
				   this.$refs.tip.show({name:'guest',msg:''});
				}
			}
	 	},
	 	computed:{
	 		modules(){
	 			return this.pagedata.modules
	 		},
	 		isLogin(){
	 			return this.pagedata.isLogin
	 		},
	 		isGuest(){
	 			return this.pagedata.isGuest
	 		},
	 		userinfo(){
	 			return this.pagedata.userinfo || {}
	 		},
	 		btncolor(){
	 			return {
	 				backgroundColor:this.pagedata.btncolor || "#000"
	 				// backgroundColor:this.pagedata.btncolor || this.pagedata.bgcolor
	 			}
	 		},
	 		share(){
	 			return this.pagedata.share
	 		},
	 		bgcolor(){
	 			return this.pagedata.bgcolor
	 		}
	 	},
	 	components:components
	};
</script>	
