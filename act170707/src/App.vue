<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<mask-login v-if="!isLogin || isguest" :login="isLogin" :guest="isguest"></mask-login>
		<div class="wrap" v-if="isLogin || !isguest">
			<div class="userinfo">
				<div class="userface"><img :src="avor" /></div>
				<ul>
					<li>月票: <em>{{ monthNum }}</em>张</li><li>推荐票: <em>{{ recommendNum }}</em>张</li>
				</ul>
				<p @click="gohelp">什么是月票、推荐票、打赏</p>
				<div class="refresh" @click="refreshpage"></div>
			</div>
			<div class="notice">每投1张推荐票送30积分；每投1张月票送300积分；<p>给作品打赏送等额积分</p><span>获积分，开宝箱！{{ plat=='adr'?'书券':'阅券'}}Q币每天送</span></div>
			<book-list :bookshelf="shelf" :booklist="columnBooks" :version="isversion"></book-list>
			<div class="botbtn">
				<a @click="gourl('act170704/index.html','BX')">开宝箱</a>
				<a @click="gourl('act170705/index.html','JF')">赚更多积分</a>
			</div>
			<rules></rules>
		</div>
		<mask-alert v-show="showmask" :voteyue="monthNum" :recomendN="recommendNum" :recomend="recomendmask" :tktype="type" :ismengzhu="ismengzhu" :bookname="bookname"></mask-alert>
		<mask-over v-if="over"></mask-over>
	</div>
</template>
<script type="text/javascript">
	//import database from "./data.js"
	import "./css/index.less"
	import maskLoad from "./components/Load.vue"
	import maskOver from "./components/Over.vue"
	import rules from "./components/Rules.vue"
	import maskLogin from './components/Login.vue'
	import bookList from './components/Booklist.vue'
	import maskAlert from './components/maskAlert.vue'
	export default {
		components:{
			maskLoad,
	 		maskOver,
	 		rules,
	 		maskLogin,
	 		bookList,
	 		maskAlert
	 		
	 	},
		data:function(){
			return{
				plat: window.pt,
		 		loading: true,
		 		over: false,
				isLogin: false,
				isguest:false,
				avor:'',
				monthNum:0,
				recommendNum:0,
				shelf:[],
				columnBooks:[],
				showmask:false,
				recomendmask:false,
				type:-1,
				ismengzhu:false,//该书盟主
				bookname:'',//投票书籍
				isversion:true
			}
		},
		created(){
			this.initPage();	
	 	},
	 	methods:{
	 		initPage(){
				Local.reqaObj(common.server() + "pkg170705/init", data=>{
					//console.log(data.code);
					if(data.code == -4){
						this.over = true
					// this.monthNum=database.monthNum;
					// this.recommendNum=database.recommendNum;
					// this.shelf=database.shelf;
					// this.columnBooks=database.columnBooks;
					// console.log(this.isversion);
					}else{
						this.isLogin=data.isLogin;
						this.monthNum=data.monthticket;
						this.recommendNum=data.recommendticket;
						this.avor=data.avor;
						this.isversion=data.verok;
						this.isguest=data.isguest;
						this.shelf=data.shelfbooks;
						this.columnBooks=data.rankbooks;
					}
					this.loading = false;
				});
				Local.forceLog(common.param("act_f"),"SJTPindex");
	 		},
	 		gourl(url,weizi){
	 			Local.forceLog(common.param("act_f"),"SJTPgoto-"+weizi);
	 			Local.openInside(common.front()+url);
	 		},
	 		gohelp(){
	 			Local.openInside(common.front()+'act170707/voteexplain.html');
	 		},
	 		refreshpage(){
	 			this.initPage();
	 			//console.log('refresh');
	 		}
	 	}
	}

</script>	
<style>
	
</style>
