<template>
	<div class="part5">
		<div class="headline">
			<img src="images/part5.png">
		</div>
		<div class="books">
			<div class="title">推荐你最关注的3本书</div>
			<ul class="booklist">
				<li v-for="book in dataobj.booklist1">						
					<div @tap="goDetail($event,book.bid)" class="cover">
						<img :src="book.cover">
						<span class="dist"><i>2折</i></span>
					</div>
					<p class="name">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
					<p class="oprice">原价{{book.price/100}}／千字</p>
					<p class="cprice">0.01元／千字</p>
					<div class="btn" @tap="goDetail($event,book.bid)"><span>抢购</span></div>
				</li>		
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">	
	export default {
		props:["dataobj"],
		methods:{
			goDetail:function($event,bid){
				ABook.gotoDetail(bid);
				if($event.target.parentNode.tagName=="A" || $event.target.tagName=="I"){
					forceLog("LYHbookDetail","top",bid);
				}else{
					forceLog("LYHQGbooks","top",bid);
				}				
			}
		}
	}
</script>