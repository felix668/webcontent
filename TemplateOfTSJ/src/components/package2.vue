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
				<li v-for="(book,n) in item.bookInfo.slice(0,3)">
					<div @click="goDetail(book.bid)" class="bcover">
						<img :src="book.cover">
						<span class="bprice">{{book.price}}元/本</span>
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
					<div class="choice" :class="{'checked':(hasChoiced[index] && hasChoiced[index].indexOf(n)>-1) || choiceinfo[index].indexOf(n)>-1,'grey':(hasChoiced[index] && hasChoiced[index].indexOf(n)==-1) || (choiceinfo[index].length==3 && choiceinfo[index].indexOf(n)==-1) }" @click="choose(index,n,$event)">
						选TA
						<div class="checkico" :style="{backgroundColor:styleobj.color2}" v-if="(hasChoiced[index] && hasChoiced[index].indexOf(n)>-1) || choiceinfo[index].indexOf(n)>-1"></div>
					</div>
				</li>
			</ul>
			<ul class="booklist">
				<li v-for="(book,n) in item.bookInfo.slice(3,6)">
					<div @click="goDetail(book.bid)" class="bcover">
						<img :src="book.cover">
						<span class="bprice">{{book.price}}元/本</span>
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
					<div class="choice" :class="{'checked':(hasChoiced[index] && hasChoiced[index].indexOf(n+3)>-1) || choiceinfo[index].indexOf(n+3)>-1,'grey':(hasChoiced[index] && hasChoiced[index].indexOf(n+3)==-1) || (choiceinfo[index].length==3 &&choiceinfo[index].indexOf(n+3)==-1)}" @click="choose(index,n+3,$event)">
						选TA
						<div class="checkico" :style="{backgroundColor:styleobj.color2}" v-if="(hasChoiced[index] && hasChoiced[index].indexOf(parseInt(n+3))>-1) || choiceinfo[index].indexOf(n+3)>-1">
						</div>
					</div>
				</li>
			</ul>
			<p class="tip" v-show="choiceinfo[index].length>0">再次点击可取消选择</p>
			<div class="buyinfo">
				<div class="prices">
					<strong :style="{color:styleobj.color2}">已选{{hasChoiced[index] ? "3" : choiceinfo[index].length}}本</strong>
					<p>{{item.originalBagMoney}}元/3本</p>
				</div>
				<div class="btn" v-if="!hasChoiced[index] && choiceinfo[index].length==3" @click="buybook(index)" :style="{backgroundColor:styleobj.color2}">
					<strong>立即抢购</strong>
					<span>({{pknum[index]}}人已抢)</span>
				</div>
				<div class="btn disable" v-else>
					<strong>立即抢购</strong>
					<span>({{pknum[index]}}人已抢)</span>
				</div>
			</div>
		</div>
	</div>
</template>	
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
.checkico{
	position:absolute;
	top:-.14rem;
	right:-.12rem;
	width: .3rem;
	height:.3rem;
	border:.04rem solid #fff;
	border-radius:50%;
	&::after{
		content:'';
		width: .12rem;
		height:.06rem;
		border-left:.03rem solid #fff;
		border-bottom:.03rem solid #fff;
		-webkit-transform:rotate(-45deg);
		position:absolute;
		top:.1rem;
		left:.08rem;
	}
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
<script type="text/javascript">
	export default {
		props:["pkdata"],
		data(){
			return{	
				pknum:this.pkdata.choiceNumber || [],
				hasChoiced:this.pkdata.userHasChoicePackageId || [],
				choiceinfo:{"0":[],"1":[],"2":[]},
				choosePackage:this.pkdata.choosePackage,
				styleobj:this.pkdata.pictureAndStyle
			}
		},
		mounted(){
			this.initstyle();
		},
		methods:{
			initstyle(){
				var objchoice=document.querySelectorAll(".choice");
				var objchecked=document.querySelectorAll(".checked");
				for(var i=0;i<objchoice.length;i++){
					objchoice[i].style.backgroundColor=this.styleobj.color1;
				}
				for(var i=0;i<objchecked.length;i++){
					objchecked[i].style.backgroundColor=this.styleobj.color2;
				}
				
			},
			goDetail(bid){
       			Local.goBookDetail(bid);        
			},
			choose(n,index,e){			
				if(this.hasChoiced[n]){
					return;
				}
				if(this.choiceinfo[n].indexOf(index)>-1){
					this.removeTodo(this.choiceinfo[n],index);
					e.currentTarget.style.backgroundColor=this.styleobj.color1;
				}else if(this.choiceinfo[n].length<3){
					this.choiceinfo[n].push(index);
					e.currentTarget.style.backgroundColor=this.styleobj.color2;
				}
			},
			removeTodo(arry,todo) {
			    var index = arry.indexOf(todo);
			    arry.splice(index, 1);
			},
			buybook(n){
				if(this.choiceinfo[n].length<3){
					return;
				}
				if(!this.pkdata.isLogin){
					Local.login();
					return;
				}
				var obj=this.choosePackage[n],info=Object.assign({},obj,{bookInfo:[],pickId:n,clomn:2});
				this.choiceinfo[n].forEach((item,i)=>{
					info.bookInfo.push(obj.bookInfo[item]);
				});			
			    info.choiceId=this.choiceinfo[n].join("_");
				this.$emit('buy',info);
				Local.forceLog(common.param("act_f"),"TSJc2btn"+n);
			}
		}
	};	
</script>	