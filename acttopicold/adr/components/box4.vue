<template>
	<div class="part4">
		<div class="headline">
			<p v-if="title">{{title}}</p>
			<img v-if="pic" :src="'images/'+pic+'.png'">
			<img v-if="!pic" src="images/part4.png">
		</div>
		<div class="books" v-for="n in len/3">
			<div class="title" v-if="len>3">{{n==0 ? "根据你的阅读基因推荐" : n==1 ? "根据你最近阅读的书籍推荐" : "和你有共同喜好的人正在读"}}</div>	
			<div class="title" v-else>根据你的阅读喜好定制的免费书</div>		
			<ul class="booklist">
				<li v-for="book in booklist.slice(n*3,n*3+3)">						
					<div class="cover" @tap="goDetail(book.bid)">
						<img :src="book.cover">
					</div>
					<p class="name">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
					<div class="btn" @tap="gotoRead(book.bid)">阅读</div>
				</li>
			</ul>
		</div>
		<div v-if="!addall" @tap="addshelf"  :class='{"shelf":len>3,"btn3":len<=3}'><p>{{free ? "一键加入书架免费读" : "一键加入书架去阅读"}}</p></div>
		<div v-else  @tap="goshelf" :class='{"shelf":len>3,"btn4":len<=3}'><p>{{free ? "去书架免费读" : "去书架阅读"}}</p></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:["title","booklist","addall","pic","free"],
		data:function(){
			return {
				len:this.booklist.length,
				addall:this.addall,
				books:[]
			}
		},
		methods:{
			goDetail:function(bid){
				ABook.gotoDetail(bid);
				if(this.len<=3){
					forceLog("LYHbookDetail","top",bid);
				}else{
					forceLog("LYHbookDetail","bottom",bid);
				}
			},
			gotoRead:function(bid){
				ABook.gotoRead(bid);
				if(this.len<=3){
					forceLog("LYHreadbook","top",bid);
				}else{
					forceLog("LYHreadbook","bottom",bid);
				}				
			},	
			addshelf:function(){			
				if(!this.$parent.islogin){
			 		Local.login();
			 		return;
			 	}
			 	var self=this;
				self.booklist.forEach((item,i)=>{
					self.books.push(item.bid);
				});
				Local.reqaObj(server() + "topic/old/addall?bids="+self.books.join("_")+"&pagetype="+param("pagetype"), function(data) {  
					if(data.code==0){
						Local.showToast("成功加入书架");
						self.addall=true;
						//加入书架代码
						//Local.addToShelf(self.books.join("_"));
					}else{
						Local.showToast(data.msg);
					}					
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("LYHaddshelf","",self.books.join("_"));
			},
			goshelf:function(){
				Local.goShelf();
				if(this.len<=3){
					forceLog("LYHgoshelf","top","");
				}else{
					forceLog("LYHgoshelf","bottom","");
				}	
			}
		}
	};	
</script>	