<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<mask-over v-if="over"></mask-over>
		<main-page :main="pagedata" v-if="!loading"></main-page>
	</div>
</template>
<script type="text/javascript">
	import "./css/index.scss";
	import maskLoad from "./components/load.vue";
	import maskOver from "./components/over.vue";
	import mainPage from "./components/main.vue";
	export default {
		data(){
			return{
		 		loading:true,
		 		over:false,
		 		pagedata:{}
			}
		},
		created(){ 
			this.init();
	 	},
	 	methods:{
	 		init(){
				if(process.env.NODE_ENV === 'development'){					
					let data=require("./js/data.js");
					if(data.code==-4){
			            this.over=true;
			            return;
		    	    }	
					this.pagedata=data;
					this.loading=false;			        		
				}else{
					Local.reqaObj(`${common.server()}pkg170607/init`, data=> {	
			            if(data.code==-4){
			            	this.over=true;
			            	return;
			            }			
			            this.pagedata=data;	
			            this.loading=false;				
					}, [], ()=> {				
						Local.showToast("网络异常，请稍候重试");
					}, 1);
					Local.forceLog(common.param("act_f"),"LYFpageInit");
				}
			}
	 	},
	 	components:{
	 		maskLoad,
	 		maskOver,
	 		mainPage
	 	}
	};
</script>	
