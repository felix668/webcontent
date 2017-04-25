<template>
	<div class="part1">
		<div class="headline">
			<p>{{title}}</p>
			<img src="images/part2.png">
		</div>
		<div class="books">
			<div class="title">推荐你最关注的3本书</div>
			<ul class="booklist">
				<li v-for="book in booklist1">						
					<div class="cover" @tap="goDetail(book.bid)">
						<img :src="book.cover">
					</div>
					<p class="name">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
					<div @tap="free100(book.title,book.bid,event)" v-if="select!==book.bid" :class="[select==false?'btn':select==book.bid?'btn':'disable']"><span>选TA</span></div>
					<div class="btn f24" @tap="addshelf(book.bid)" v-else><span>免费读100章</span></div>
				</li>		
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Bus from './bus.js';		
	export default {
		props:["title","dataobj"],
		data:function(){
			return{
				booklist1:this.dataobj.booklist1,
				select:this.dataobj.picked100
			}
		},
		methods:{
			free100:function(name,bid,event){
			 	if(!this.$parent.islogin){
			 		Local.login();
			 		return;
			 	};	
			 	if(!this.select){
				 	this.$parent.showmask="maskSelect";	
					Bus.$emit('name-select',{'name':name,'bid':bid});
					var self=this;
					Bus.$on('confirm-btn',function(){
						self.select=bid;
					});	
				};				 							
			},
			addshelf:function(bid){
				//打开阅读页
				ABook.gotoRead(bid);
				forceLog("LYH100Read","top",bid);
			},
			goDetail:function(bid){
				ABook.gotoDetail(bid);
				forceLog("LYHbookDetail","top",bid);
			}		
		}
	};	
</script>