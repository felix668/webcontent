<template>
	<div id="app">
		<!-- <mask-load v-if="loading"></mask-load> -->
		<!-- <mask-over v-if="over"></mask-over> -->
		<share-page></share-page>
	</div>
</template>
<script type="text/javascript">
	import "./css/index";
	// import maskLoad from "./components/load";
	// import maskOver from "./components/over.vue";
	import sharePage from "./components/sharePage";
	export default {
		data(){
			return{
		 		// loading:true
			}
		},
		created(){ 
			this.init();
	 	},
	 	methods:{
	 		init(){
				forceLog(param("act_f"),"LYFpageInit");	
				// setTimeout(_=>{
				// 	this.loading=false;
				// },500)
	 		}	
		},
		components:{
	 		// maskLoad,
	 		// maskOver,
	 		sharePage
	 	}
	}
</script>	
