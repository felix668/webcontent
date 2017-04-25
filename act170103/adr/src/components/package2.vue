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
					<div @click="goDetail(book.bid)" class="bcover">
						<img :src="book.cover">
						<span class="bprice">{{book.price}}元/本</span>
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
					<div class="choice" :class="{'checked':(choice[n-1] && choice[n-1].split('_').indexOf(''+index)>-1) || choiceinfo[n-1].indexOf(index)>-1,'grey':(choice[n-1] && choice[n-1].split('_').indexOf(''+index)==-1) || (choiceinfo[n-1].length==3 &&choiceinfo[n-1].indexOf(index)==-1) }" @click="choose(n-1,index)">选TA</div>
				</li>
			</ul>
			<ul class="booklist">
				<li v-for="(book,index) in pkdata['choosePackage'+(n-1)].bookInfo.slice(3,6)">
					<div @click="goDetail(book.bid)" class="bcover">
						<img :src="book.cover">
						<span class="bprice">{{book.price}}元/本</span>
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
					<div class="choice" :class="{'checked':(choice[n-1] && choice[n-1].split('_').indexOf(parseInt(index+3)+'')>-1) || choiceinfo[n-1].indexOf(index+3)>-1,'grey':(choice[n-1] && choice[n-1].split('_').indexOf(index+3+'')==-1) || (choiceinfo[n-1].length==3 &&choiceinfo[n-1].indexOf(index+3)==-1)}" @click="choose(n-1,index+3)">选TA</div>
				</li>
			</ul>
			<p class="tip" v-show="choiceinfo[n-1].length>0">再次点击可取消选择</p>
			<div class="buyinfo">
				<div class="prices">
					<strong>已选{{choice[n-1]?choice[n-1].split("_").length:choiceinfo[n-1].length}}/3本</strong>
					<p>{{pkdata['choosePackage'+(n-1)].money}}元/3本</p>
				</div>
				<div class="btn" v-if="!choice[n-1] && choiceinfo[n-1].length==3" @click="buybook(n-1)">
					<strong>立即抢购</strong>
					<span>({{pknum[n-1]}}人已抢)</span>
				</div>
				<div class="btn disable" v-else>
					<strong>立即抢购</strong>
					<span>({{pknum[n-1]}}人已抢)</span>
				</div>
			</div>
		</div>
	</div>
</template>	
<style lang="sass" scoped>
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
				choice:this.pkdata.userHasChoicePackageId || [],
				choiceinfo:{"0":[],"1":[],"2":[]}			
			}
		},
		methods:{
			goDetail:function(bid){
				ABook.gotoDetail(bid);
			},
			choose:function(n,index){
				if(this.choice[n]){
					return;
				}
				if(this.choiceinfo[n].indexOf(index)>-1){
					this.removeTodo(this.choiceinfo[n],index);
					// this.choiceinfo[n].sort();
				}else if(this.choiceinfo[n].length<3){
					this.choiceinfo[n].push(index);
				}
			},
			removeTodo: function (arry,todo) {
			    var index = arry.indexOf(todo);
			    arry.splice(index, 1);
			},
			buybook:function(n){
				if(this.choiceinfo[n].length<3){
					return;
				}
				var obj=this.pkdata['choosePackage'+n],info={bookInfo:[]};
				info.bagName=obj.bagName;
				info.discountBagMoney=obj.money;
				this.choiceinfo[n].forEach((item,i)=>{
					info.bookInfo.push(obj.bookInfo[item]);
				});			
				info.pickId=n;
				info.choiceId=this.choiceinfo[n].join("_");
				info.clomn=2;
				this.$emit('buy',info);
				Local.forceLog(common.param("act_f"),"TSJc2btn"+(n+1));
			}
		}
	};	
</script>	