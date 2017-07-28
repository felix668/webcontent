<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<mask-over v-if="over"></mask-over>
		<share-page :main="pagedata" v-if="!loading"></share-page>
	</div>
</template>
<script type="text/javascript">
	import "./css/index.scss";
	import maskLoad from "./components/load.vue";
	import maskOver from "./components/over.vue";
	import sharePage from "./components/sharePage.vue";
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
				reqa(`${server()}pkg170607/shareInit`, data=> {
					var data=JSON.parse(data);	  	
		            if(data.code == -4){
		            	this.over=true;
		            	return;
		            }			
		            this.pagedata=data;
		            this.loading=false;					
				}, [], ()=> {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"),`LYFpageInit${env.pt}`);				
	 		}	
		},
		components:{
	 		maskLoad,
	 		maskOver,
	 		sharePage
	 	}
	}
</script>	
