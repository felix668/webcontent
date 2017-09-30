<template>
	<div class="plist" id="column2"> 
		<img :src="styleobj.title2" class="title">
		<div class="package" v-for="(item,index) in choosePackage" :style="'background-image:url('+styleobj.columnbg2+')'">
			<div class="pname">
				<h3>{{item.bagName}}</h3>
			</div>
			<img class="hot" :src="styleobj.hot" v-if="Math.max.apply([],pknum)==pknum[index]">
			<div class="pktag" :style="'background-image:url('+styleobj.tag+')'">{{item.discountBagMoney}}元购</div>
			<ul class="booklist">
				<li v-for="book in item.bookInfo.slice(0,3)">
					<div class="bcover" @click="loadApp">
						<img :src="book.cover">
						<span class="bprice">{{book.price}}元/本</span>
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
				</li>
			</ul>
			<ul class="booklist">
				<li v-for="book in item.bookInfo.slice(3,6)">
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
					<p :style="{color:styleobj.color2}">{{item.originalBagMoney}}元/3本</p>
				</div>
				<div class="btn" @click="loadApp" :style="{backgroundColor:styleobj.color2}">
					<strong>立即抢购</strong>
					<span>({{pknum[index]}}人已抢)</span>
				</div>
			</div>
		</div>
	</div>
</template>	
<style lang="sass">
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
.pktag{
	position: absolute;
	top:.2rem;
	left:-.34rem;
	width:1.88rem;
	height:.66rem;
	@include icobg();
	font-weight:bold;
	line-height: .66rem;
	font-size:.28rem;
	text-align:center;
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
#column2 .package{
	height:auto;
	background-size:100% 100%;
}
.buyinfo {
	position:relative;
	padding-top:.32rem;
	-webkit-box-sizing:border-box;
}
</style>
<script type="text/javascript">
	export default {
		props:["pkdata"],
		data:function(){
			return{		
				pknum:this.pkdata.choiceNumber,
				choosePackage:this.pkdata.choosePackage,
				styleobj:this.pkdata.pictureAndStyle
			}
		},
		methods:{
			loadApp:function(){
				this.$emit('load');
				forceLog("tsj","TSJspBtn2");
			}
		}
	};	
</script>	