<template>
	<div class="wrap">
		<div class="top">
			<img :src="'../adr/images/banner.png'" alt="女神季" class="banner" @load="flipTip();">
			<div class="flowers">
				<i v-for="n in 7"></i>
			</div>
			<div class="lights">
				<img :src="'../adr/images/light.png'" v-for="n in 5">				
			</div>
			<img :src="'../adr/images/pk-bg.jpg'" class="bg">
		</div>
		<div class="rank">
			<div class="ranklist">
				<a v-for="(item,index) in rank" :href="'#rank'+index">
					<img :src="goddessList[item.dashenId].avor">
					<strong>{{goddessList[item.dashenId].name}}</strong>
					<i></i>
				</a>
			</div>
			<img :src="'../adr/images/vote.png'">
		</div>
		<ul class="gdlist" ref="gdlist">
			<li v-for="(item,index) in rank" :id="'rank'+index">
				<div class="card" :class="{'flip':goddessList[item.dashenId].cardflip}" @click="flip(goddessList[item.dashenId])">
					<div class="avor">
						<img :src="goddessList[item.dashenId].avor">
						<i></i>
					</div>
					<div class="back">
						<p @click="goCommt(goddessList[item.dashenId].bid,goddessList[item.dashenId].cid)">欲知更多内容<span>到书评区逛逛></span></p>
					</div>
				</div>			
				<div class="info">
					<strong>{{goddessList[item.dashenId].name}}</strong>
					<span>
						<b>{{item.num}}</b>票
					</span>
				</div>
				<div :class="{'voice paused':!goddessList[item.dashenId].play,'voice play':goddessList[item.dashenId].play}">
					<div class="toucharea" @click="play(item.dashenId,goddessList[item.dashenId],$event)"></div>	
					<div class="top">
						<div class="horn">
							<i></i><i></i><i></i>
						</div>
						<span class="declar">PK宣言</span>
						<span class="long">{{goddessList[item.dashenId].time}}"</span>
					</div>
					<div class="progress"></div>
					<audio :src="goddessList[item.dashenId].voice">
				</div>
				<div class="skill">
					<p class="title">女神技能</p>
					<img :src="goddessList[item.dashenId].skill">				
				</div>
				<div class="equip">
					<p class="title">女神装备</p>
					<img :src="goddessList[item.dashenId].equip" @click="goBookDetail(goddessList[item.dashenId].bid)">
				</div>
				<div class="btn" @click="goQues(item.dashenId)"></div>
			</li>
		</ul>
		<rule :plat="plat"></rule>
	</div>
</template>
<style lang="sass" scoped>
.wrap{background:url(../images/repeat-bg.jpg) repeat-y;background-size:100% auto;font-size:.24rem;}
audio{width:0;height:0;}
.top{position: relative;width:100%;}
.bg{position:absolute;top:0;left:0;}
.banner{position:relative;z-index:3;}
.lights{
	position:absolute;
	top:0;left:0;
	z-index:2;
	width:100%;
	height:7.88rem;
	overflow: hidden;
	img{
		width:5.72rem;
		position:absolute;
		&:nth-child(1){
			left:.78rem;top:-2.5rem;opacity: .52;
			-webkit-animation:light .8s infinite;
		}
		&:nth-child(2){
			left:2.14rem;top:-1.4rem;opacity: .85;
			-webkit-animation:light 1.1s infinite;
		}
		&:nth-child(3){
			left:0;top:5rem;opacity: .7;
			-webkit-animation:light .9s .1s infinite;
		}
		&:nth-child(4){
			left:.7rem;top:1.8rem;opacity: .7;
			-webkit-animation:light 1.8s infinite;
		}
		&:nth-child(5){
			left:6.5rem;top:.2rem;opacity: .7;
			-webkit-animation:light 1.2s infinite;
		}
		@-webkit-keyframes light{
			0%{-webkit-transform:translate3d(2rem,-3rem,0);}
			100%{-webkit-transform:translate3d(-4rem,1rem,0);}
		}
	}

}
.flowers{
	position:absolute;
	top:0;right:0;
	width:7.08rem;
	height:5.92rem;
	z-index:6;
	i{	
		position:absolute;
		background:url(../images/flowers.png) no-repeat;
		background-size:7.08rem auto;
		&:nth-child(1){
			width:1.16rem;
			height:1.62rem;
			-webkit-animation:flower 1s;
		}
		&:nth-child(2){
			width:5.8rem;
			height:.76rem;
			-webkit-animation:flower 13s .2s;
		}
		&:nth-child(3){
			width:.56rem;
			height:.5rem;
			right:0;
			top:.56rem;
			background-position:right -.52rem;
			-webkit-animation:flower 2s .4s;
		}
		&:nth-child(4){
			width:.56rem;
			height:.56rem;
			left:0;
			top:3rem;
			background-position:0 -2.9rem;
			-webkit-animation:flower 3s .1s;
		}
		&:nth-child(5){
			width:.6rem;
			height:.46rem;
			left:4.5rem;
			top:1.38rem;
			background-position:-4.5rem -1.38rem;
			-webkit-animation:flower 6s -1s;
		}
		&:nth-child(6){
			width:.6rem;
			height:.94rem;
			left:5.7rem;
			top:2.46rem;
			background-position:-5.7rem -2.46rem;
			-webkit-animation:flower 2s .4s;
		}
		&:nth-child(7){
			width:1.94rem;
			height:.9rem;
			right:0;
			bottom:0;
			background-position:right bottom;
			-webkit-animation:flower 2s .4s;
		}
		@-webkit-keyframes flower{
			0%{-webkit-transform:translate3d(-1rem,-1rem,0) rotate(30deg)}
			100%{-webkit-transform:translate3d(0,0,0) rotate(0deg)}
		}
	}
}
%icon{
	background:url(../images/icons.png) no-repeat;
	background-size:3.7rem auto;
}
@mixin rankpos($n){
	@for $i from 0 through $n{
		&:nth-child(#{$i+1}) i{
			background-position: 0 -1.4 * $i +rem;
		}
	}
}
%rankicon{
	i{
		position:absolute;
		top:-.28rem;left:-.36rem;
		background:url(../images/rank.png) no-repeat;
		background-size:1.02rem auto;
		width:1.02rem;
		height:1.02rem;		
	}
	@include rankpos(7);
}
.rank{
	position:relative;z-index:10;margin:.34rem 0 .64rem;
	.ranklist{height:5.78rem;margin-bottom:.42rem;}
	strong{
		width:1.22rem;height:.5rem;position:absolute;left:-.05rem;bottom:.08rem;
		color:#fff;
		font-size:.26rem;
		line-height:.54rem;
		text-align:center;
		@extend %icon;
	}
	a{
		-webkit-animation:slideDown 1s;
		-webkit-transform:translate3d(0,-.5rem,0);opacity:0;
		width:1.14rem;position:absolute;
		&::after{
			content:"";width:.04rem;height:.26rem;background:#aa5fbc;position:absolute;top:-.38rem;left:.56rem;
		}
		&:nth-child(1){
			top:0;left:3.16rem;
			&::after{
				display:none;
			}
		}
		&:nth-child(2){
			top:2.1rem;left:1.38rem;-webkit-animation-delay:.2s;
			&::before{
				content:"";width:3.66rem;height:.04rem;background:#aa5fbc;position:absolute;top:-.4rem;left:.56rem;
			}
		}
		&:nth-child(3){
			top:2.1rem;left:3.16rem;-webkit-animation-delay:.3s;
		}
		&:nth-child(4){
			top:2.1rem;left:5rem;-webkit-animation-delay:.4s;
		}
		&:nth-child(5){
			top:4.3rem;left:.6rem;-webkit-animation-delay:.5s;
			&::before{
				content:"";width:5.16rem;height:.04rem;background:#aa5fbc;position:absolute;top:-.4rem;left:.56rem;
			}
		}
		&:nth-child(6){
			top:4.3rem;left:2.3rem;-webkit-animation-delay:.6s;
		}
		&:nth-child(7){
			top:4.3rem;left:4rem;-webkit-animation-delay:.7s;
		}
		&:nth-child(8){
			top:4.3rem;left:5.72rem;-webkit-animation-delay:.8s;
		}	
		i{
			-webkit-transform:scale(.54);
			top:-.4rem;
			left:-.4rem;
		}
		@extend %rankicon;	
		@-webkit-keyframes slideDown{
			100%{-webkit-transform:translate3d(0,0,0);opacity:1;}
		}
	}	
}
.gdlist{
	position:relative;
	z-index:11;
	width:6.4rem;
	margin:0 auto;
	color:#764827;
	li{
	 	height:5.96rem;
	 	background:url(../images/border.png) 0 1.02rem no-repeat;
	 	background-size:100% auto;
	 	margin-bottom:.32rem;
	 	@extend %rankicon;	
	 	-webkit-box-sizing:border-box;
	 	padding-left:.36rem;
	 	position:relative;
	 	&:last-child{
	 		margin-bottom:.7rem;
	 	}
	 	&:nth-child(7),&:nth-child(8){
	 		.equip img{width:4.9rem}
	 	}
	}
	.info{
		padding:1.06rem 0 0 2.54rem;
		height:.96rem;
		line-height:.96rem;
		position:relative;
		strong{
			font-size:.32rem;	
		}
		span{
			position:absolute;
			right:.3rem;
			top:1.04rem;
		}
		b{
			font-size:.48rem;
			color:#fcb736;
			-webkit-text-stroke: 1px #7e4e2d;
		}
	}
	.title{
		padding-left:.32rem;
		margin-bottom:.14rem;
		color:#7f4834;
		position:relative;
		&::after{
			content:"";
			width:.3rem;
			height:.3rem;
			position:absolute;
			top:0;
			left:0;
			@extend %icon;
			background-position:-2.24rem 0;
		}
	}
	.equip{
		margin-top:.4rem;
		img{
			width:4.3rem;
		}
	}
	.skill img{
		width:5.72rem;
	}
	.btn{
		display:block;
		margin:.2rem auto 0;
		width:3.64rem;
		height:1.02rem;
		@extend %icon;
		background-position:0 -1rem;
	}
}
.card{
	position:absolute;
	top:.1rem;
	left:.2rem; 
	width:2.48rem;
	height:2.8rem;
	overflow:hidden;
	&>div{
	   position: absolute;left:0; top:0; width:100%; height:100%;
	   -webkit-transform-style:preserve-3d;
	   -webkit-backface-visibility:hidden;
	   -webkit-transition:all 1s ease;
	}
	.avor{		
		-webkit-transform:rotateY(0deg);
		z-index:2;
		img{width:2.01rem;margin:.26rem 0 0 .47rem;}
		i{-webkit-transition:all .3s ease;top:0;left:0;}
	}
	.back{
		-webkit-transform:rotateY(180deg);
		z-index:1;
		background:url(../images/back.png) no-repeat;
		background-size:100% auto;
		text-align:left;
		padding:1.2rem 0 0 .74rem;
		-webkit-box-sizing:border-box;	
		font-size:.2rem;
		span{display:block;font-size:.24rem;}
	}
}
.flip{
	.avor{	 
	-webkit-transform:rotateY(180deg);
	 i{opacity:0;}
	}
	.back{
		-webkit-transform:rotateY(0deg);
	}
}
.voice{
	width:3.04rem;
	height:.6rem;
	line-height:.6rem;
	margin:0 0 .22rem 2.54rem;
	position:relative;
	@extend %icon;
	background-position:0 -2.3rem;
	border-radius:.6rem;
	overflow:hidden;
	&::after{
		content:"";
		width:.4rem;
		height:.14rem;
		@extend %icon;
		background-position:-1.54rem -.1rem;
		position:absolute;
		right:.14rem;
		top:.04rem;	
	}
	.top{
		position:relative;
		z-index:4;
	}
	.horn{
		display:inline-block;
		width:.48rem;
		height:.48rem;
		@extend %icon;
		background-position:right 0;
		vertical-align:middle;
		position:relative;
		top:-.06rem;
		margin:0 .12rem;
		i{
			position:absolute;
			width:.06rem;
			height:.02rem;
			background:#f9d81b;
			top:.21rem;
			left:.3rem;
			-webkit-transform-origin:left center;
			&:nth-child(2){
				top:.18rem;
				-webkit-transform:rotate(-30deg);
			}
			&:nth-child(3){
				top:.24rem;
				-webkit-transform:rotate(30deg);
			}
		}
	}	
	.declar{
		font-size:.28rem;
	}
	.long{margin-left:.7rem;}
	.progress{
		position:absolute;
		top:0;
		left:0;
		width:0;
		height:.52rem;
		background:-webkit-linear-gradient(top,#fcadf9,#fbcef7);
		border-radius:.52rem .52rem;
	}
}
.play{
    .horn i{ 
	   -webkit-animation:horn .4s infinite alternate .2s;	     	
      &:nth-child(2){
       -webkit-animation-delay:0s;
      }
      &:nth-child(3){
      	 -webkit-animation-delay:.4s;
      }
	}
	@-webkit-keyframes horn{
		0%{opacity:0}  
		100%{opacity:1;}
	}
	@-webkit-keyframes pro{
		0%{width:0}  
		100%{width:100%;}
	}
}
.paused{
	 .horn i{
	 -webkit-animation-play-state: paused;
	 }
	 .progress{
	  -webkit-animation-play-state: paused!important;
	 }
}
.toucharea{width:100%;height:100%;position:absolute;top:0;left:0;z-index:10;opacity:0;}
</style>
<script type="text/javascript">
	var goddessList=require("../js/data.js");
	export default{
		props:["rank"],
		data:function(){
			return{
				plat:document.body.dataset.plat,
				goddessList:goddessList
			}
		},
		mounted:function(){
		},
		methods:{
			play:function(id,list,$event){	
				var obj=$event.target.parentNode;	
				var audio=obj.querySelectorAll("audio")[0];
				for(var key in this.goddessList){
					if(key!==id){
						this.goddessList[key].play=false;						
					}				
				}
				for(var i=0;i<8;i++){
					document.querySelectorAll("audio")[i].pause();
				}			
				if(list.play){
					list.play=false;
					audio.pause();
				}else{
					list.play=true;
					audio.play();
					obj.querySelectorAll(".progress")[0].style.webkitAnimation="pro "+list.time+"s linear";
				}	
				audio.addEventListener("ended",function(){
					obj.querySelectorAll(".progress")[0].style.webkitAnimation="";
					obj.querySelectorAll(".progress")[0].style.width="100%";
					list.play=false;
				})	
			},
			flip:function(obj){
				if(obj.cardflip){
					obj.cardflip=false;
				}else{
					obj.cardflip=true;
				}
			},
			flipTip:function(){
				var obj,one=true,self=this;
				window.onscroll=function(){
					if(!obj){
						obj=self.$refs.gdlist;
						obj.card=obj.querySelectorAll(".card")[0];
						//obj.top=obj.offsetTop-window.innerHeight;进入可视区域
						obj.top=obj.offsetTop-100;
					}
					if(document.body.scrollTop>obj.top && one){
						one=false;
						obj.card.className="card flip";
						setTimeout(function(){
							obj.card.className="card";
						},500)
					}
				}
			},
			goBookDetail:function(bid){
				ABook.gotoDetail(bid);
			},
			goQues:function(id){
				window.location.href="uniteqqreader://nativepage/audioquestion/list?aid="+id;
			},
			goCommt:function(bid,cid){
				window.location.href="uniteqqreader://nativepage/comment/detail?bid="+bid+"&commentid="+cid+"&ctype=0";
			}
		},
		components:{
			rule:require("./rule.vue")
		}
	}
</script>






















