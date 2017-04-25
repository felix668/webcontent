<template>
	<div class="plist" id="column2"> 
		<img :src="'../adr/images/m2.png'" class="title">
		<div class="package" v-for="n in 3">
			<div class="pname">
				<h3>{{pkdata['choosePackage'+(n-1)].bagName}}</h3>
			</div>
			<i class="hot" v-if="Math.max.apply([],pknum)==pknum[n-1]"></i>
			<div class="pktag">{{pkdata['choosePackage'+(n-1)].money}}元购</div>
			<ul class="booklist">
				<li v-for="(book,index) in pkdata['choosePackage'+(n-1)].bookInfo.slice(0,3)">
					<div class="bcover" @click="loadApp">
						<img :src="book.cover">
						<span class="bprice">{{book.price}}元/本</span>
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
				</li>
			</ul>
			<ul class="booklist">
				<li v-for="(book,index) in pkdata['choosePackage'+(n-1)].bookInfo.slice(3,6)">
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
					<p>{{pkdata['choosePackage'+(n-1)].money}}元/3本</p>
				</div>
				<div class="btn" @click="loadApp">
					<strong>立即抢购</strong>
					<span>({{pknum[n-1]}}人已抢)</span>
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
}
.choice{
	@include btnStyle(1.04rem,.58rem,#ff7561,.04rem);
	margin-top:.1rem;
	line-height:.58rem;
	font-size:.22rem;
	position:relative;
}
.checked{
	background:#3fbc82;
	&::before{
		content:"";
		position:absolute;
		top:-.14rem;
		right:-.12rem;
		width: .36rem;
		height:.36rem;
		@include icobg(0 -.56rem);
	}
}
.grey{background:#dbdbdb;
		color:#8b8b8b;}
.tip{
	color:#999;
	font-size:.22rem;
	text-align:center;
	margin:.24rem 0 -.08rem;
}
.buyinfo .prices{
 	strong{
		color:#36a873;
	}
	p{
		text-decoration:none;
	}
}
</style>
<script type="text/javascript">
	export default {
		props:["pkdata","pknum"],
		data:function(){
			return{			
			}
		},
		methods:{
			loadApp:function(){
				this.$emit('load');
				forceLog(param("act_f"),"TSJspBtn2");
			}
		}
	};	
</script>	