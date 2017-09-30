<template>
	<div id="app">
		<mask-over v-if="over"></mask-over>
		<mask-login v-if="!isLogin || isguest" :login="isLogin" :guest="isguest"></mask-login>
		<div class="wrap" v-if="isLogin">
			<img class="ban" :src="'src/images/ban.jpg'" />
			<book-list :bookshelf="shelf" :booklist="columnBooks"></book-list>
			<div class="botbtn">
				<a @click="gourl('act170704/index.html','BX')"></a>
				<a @click="gourl('act170705/index.html','JF')"></a>
			</div>
			<rules></rules>
		</div>
	</div>
</template>
<script type="text/javascript">
	import database from "./data.js"
	import "./css/index.less"
	import maskOver from "./components/Over.vue"
	import rules from "./components/Rules.vue"
	import maskLogin from './components/Login.vue'
	import bookList from './components/Booklist.vue'
	export default {
		components:{
	 		maskOver,
	 		rules,maskLogin,bookList
	 	},
		data:function(){
			return{
				plat: window.pt,
		 		loading: true,
		 		over: false,
				isLogin: false,
				isguest:false,
				shelf:[],
				columnBooks:[]
			}
		},
		mounted(){
			this.initPage();	
	 	},
	 	methods:{
	 		initPage(){
	 			let self=this;
				Local.reqaObj(common.server() + "pkg170802/init", data=>{
					console.log(data);
					if(data.code == -4){
						self.over = true
					}
					self.isLogin=data.isLogin;
					if(self.isLogin){
						self.isguest=data.isguest;
						self.shelf=data.shelfbooks;
						self.columnBooks=data.rankbooks;
					}
					$(".loadingbox").hide();
				});
				Local.forceLog(common.param("act_f"),"SQPLindex");
				
	 		},
	 		gourl(url,weizi){
	 			Local.forceLog(common.param("act_f"),"SQPLgoto-"+weizi);
	 			Local.openInside(common.front()+url);
	 		},
	 	}
	}

</script>	
<style>
	
</style>
