<template>
	<div class="plist" id="column2"> 
		<img :src="'../images/m2.png'" class="title">
		<div class="package">
			<div class="pname">
				<h3>任选3本<b>14.23元</b>即购</h3>
			</div>
			<div class="pktag">14.23元购</div>
			<ul class="booklist">
				<li v-for="(book,index) in pkdata.choose.slice(0,3)">
					<div class="bcover" @click="loadApp">
						<img :src="book.cover">
						<span class="bprice">{{book.price}}元/本</span>
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
				</li>
			</ul>
			<ul class="booklist">
				<li v-for="(book,index) in pkdata.choose.slice(3,6)">
					<div class="bcover" @click="loadApp">
						<img :src="book.cover">
						<span class="bprice">{{book.price}}元/本</span>
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
				</li>
			</ul>
			<div class="buyinfo">
				<div class="prices">
					<p>{{pkdata.packageMoney}}元/3本</p>
				</div>
				<div class="btn" @click="loadApp">
					<strong>{{canpick ? "立即抢购" : "即将开抢"}}</strong>
				</div>
			</div>
		</div>
	</div>
</template>	
<style lang="sass">
@mixin icobg($pos:0 0){
	background:url("../images/icos.png") no-repeat;
	background-size: 1.48rem auto;
	background-position:$pos;
}
@mixin btnStyle($width,$height,$bgcolor,$radius){
	width:$width;
	height:$height;
	background:$bgcolor;
	-webkit-border-radius:$radius;      
    text-align:center;
    color:#fff;
}
#column2{margin-bottom:.5rem}
.pname b{color:#fe5d5d;}
.pktag{
	position: absolute;
	top:.2rem;
	left:-.34rem;
	width:1.48rem;
	height:.84rem;
	@include icobg(0 -1.2rem);
	font-weight:bold;
	line-height: .6rem;
	font-size:.24rem;
	padding-left:.1rem;
	-webkit-box-sizing:border-box;
	color:#fff;
}
.bprice{
	position:absolute;
	bottom:0;
	right:0;
	padding:0 .1rem;
	height:.34rem;
	line-height:.34rem;
	font-size:.2rem;
	background:rgba(0,0,0,.6);
	text-align:center;
	color:#fff;
}
</style>
<script type="text/javascript">
	export default {
		props:["pkdata","canpick"],
		data:function(){
			return{			
			}
		},
		methods:{
			loadApp:function(){
				this.$emit('load');
			}
		}
	};	
</script>	