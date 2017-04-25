<template>
	<div class="part2">
		<div class="headline">
			<p>{{title}}</p>
			<img src="images/part3.png">
		</div>
		<div class="books" v-for="n in booklist2.length/3" :id='[n==0?"showfix":""]'>
			<div class="title">{{n==0 ? "根据你的阅读基因推荐" : n==1 ? "根据你最近阅读的书籍推荐" : "和你有共同喜好的人正在读"}}</div>			
			<ul class="booklist">
				<li v-for="book in booklist2.slice(n*3,n*3+3)">						
					<div class="cover" @tap="goDetail(book.bid)">
						<img :src="book.cover">
					</div>
					<p class="name">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
					<div class="btn2" @tap="selbooks(book.bid,$event)" :class="{'seled':select.indexOf(book.bid)>-1}" data-clicked="{{select.indexOf(book.bid)>-1?'true':'false'}}">选TA</div>
				</li>
			</ul>
		</div>
		<div class="shelf" @tap="addshelf" v-if="!seled"><p>加入书架免费读<span v-show="select.length>0">（已选{{select.length}}本）</span></p></div>
		<div class="shelf" v-else @tap="goshelf"><p>去书架免费读</p></div>
	</div>
</template>
<script type="text/javascript">
	import Bus from './bus.js';
	export default {
		props:["title","dataobj"],
		data:function(){
			return {
				booklist2:this.dataobj.booklist2,
				select:this.dataobj.bookspicked || [],
				seled:this.dataobj.bookspicked
			}
		},
		methods:{
			goDetail:function(bid){
				ABook.gotoDetail(bid);
				forceLog("LYHbookDetail","bottom",bid);
			},
			selbooks:function(bid,$event){	
				var elem=$($event.target);
				if(!this.seled){
					if(!elem.data("clicked")){
						elem.data("clicked","true");
						this.select.push(bid);
					}else{
						elem.data("clicked","false");
						this.select.$remove(bid);
						this.select.sort();
					}		
				}								
			},	
			addshelf:function(){
				if(this.select.length>3){
					Local.showToast("最多选择3本书免费读");
					return;
				}else if(this.select.length==0){
					Local.showToast("最少选择1本书免费读");
					return;
				}
				if(!this.$parent.islogin){
			 		Local.login();
			 		return;
			 	}
				this.$parent.showmask="maskShelf";
				Bus.$emit('shelf-select',this.select.join("_"));
				var self=this;
				Bus.$on('get-success',function(id){
					self.seled=true;
				});				
			},
			goshelf:function(){
				Local.goShelf();
				forceLog("LYHgoshelf","bottom","");
			}
		}
	};	
</script>	