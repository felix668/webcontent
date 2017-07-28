<template>
	<div class="plist" id="column0"> 
		<img src="src/images/worth-title.png" class="worth-title">
		<div class="package0" :style="styleObj">
			<p class="desc">进入书籍详情页，点击“下载”即可购买</p>
			<ul class="booklist">
				<li v-for="(book,n) in worth.slice(0,3)">
					<div @click="goDetail(book.bid)" class="bcover">
						<img :src="book.cover" @click="goDetail(book.bid)">
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
					<div class="choice" @click="goDetail(book.bid)">购买</div>
				</li>
			</ul>
			<ul class="booklist">
				<li v-for="(book,n) in worth.slice(3,6)">
					<div @click="goDetail(book.bid)" class="bcover">
						<img :src="book.cover" @click="goDetail(book.bid)">
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
					<div class="choice" @click="goDetail(book.bid)">购买</div>
				</li>
			</ul>
		</div>
	</div>
</template>	
<script type="text/javascript">
	export default {
		props:["worth","pub"],
		data(){
			return{	
				// styleobj:this.pkdata.pictureAndStyle
			}
		},
		computed:{
			styleObj(){
				return this.pub == 1?{borderColor: '#59bfff'}:{borderColor: '#ffd6b1'}
			}
		},
		mounted(){
			this.initstyle();
		},
		methods:{
			initstyle(){
				
			},
			goDetail(bid){
				Local.forceLog(common.param("act_f"),"TJSbuy")
       			Local.goBookDetail(bid);        
			}
		}
	};	
</script>	
<style lang="sass" scoped>
@mixin icobg($pos:0 0){
	background-size: 100% auto;
	background-position:$pos;
	background-repeat:no-repeat;
}
@mixin btnStyle($width,$height,$radius){
	width:$width;
	height:$height;
	-webkit-border-radius:$radius;      
    text-align:center;
    color:#fff;
}
.package0{
	padding-bottom: .54rem;
	padding-top: .14rem;
	box-sizing: border-box;
	position: relative;
	width: 7.14rem;
	background-size: 7.14rem auto;
	background-repeat: no-repeat;
	margin: 0 auto;
	border-width: .16rem;
	border-style: solid;
	border-radius: .6rem;
	background-color: #fff;
}
.desc{
	margin-top: .1rem;
	font-size: .24rem;
	color: #555;
	text-align: center;
}
.choice{
	@include btnStyle(1.04rem,.58rem,.04rem);
	margin-top:.1rem;
	line-height:.58rem;
	font-size:.22rem;
	position:relative;
}

.grey{
	background:#dbdbdb!important;
	color:#8b8b8b!important;
}
.tip{
	color:#999;
	font-size:.22rem;
	text-align:center;
	margin:.24rem 0 -.08rem;
}
</style>
