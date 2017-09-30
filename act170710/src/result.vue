<template>
	<div id="app">
		<div class="exchange">
			  <div class="states"><img src="src/images/allRight.png"></div>
			  <div class="explain">成功兑换<span>{{bookTicketNum}}</span>{{text1}}，已自动发放至账户
			    <p>{{text1}}可直接购买书籍，1{{text1}}=1{{text2}}完美阅读！</p>
			</div>
		</div>
		 <div class="exchangeList">
			<div class="newtitle">
			    <p>本周畅销书<em class="newtl"></em><em class="newtr"></em></p>
			</div>
	  		 <ul class="booklist">
	        	<li v-for="item in books" @click="goDetail(item.cid)"> 
	          		<div class="cover">
	          			<img :src="item.cover">
	          		</div>
		            <div class="bagDetail">
			            <h3>{{item.title}}</h3>
			            <p>{{item.category}}丨{{item.author}}<span class="popul">{{item.hotvalue}}热销</span></p>
			            <p>{{item.intro}}</p>
		            </div>
	            </li>
	        </ul>
	        <a href="uniteqqreader://nativepage/comic/bookstore" class="goComic" v-show="books.length">查看更多畅销书</a>
		</div> 
	</div>
</template>
<script type="text/javascript">
	// import "./css/index";
	export default {
		data(){
			return{
		 		plat:window.pt,
		 		bookTicketNum:common.param("bookTicketNum"),
		 		books:[]
			}
		},
		created(){
	 		this.init();
	 	},
	 	methods:{
	 		init(){
 				Local.reqaObj(`${common.server()}pkg170710/getrank`, data => {
					this.books=data.bookinfos;
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);				
	 		},
	 		goDetail(cid){
	 			location.href='uniteqqreader://nativepage/comic/detail?cid='+cid;
	 		}
		},
	 	computed:{
	 		text1(){
	 			return this.plat=="ios" ? "阅券" : "书券";
	 		},
	 		text2(){
	 			return this.plat=="ios" ? "阅点" : "书币";
	 		}
	 	}
	};
</script>	
