<template>
<div>
	<div class="champion swiper-container">
		<div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="(item,index) in weeklist">
		  		<div class="banbg">
		  			<div class="championface"><img :src="item.avor" /><p class="nick">{{ item.nickName }}</p></div>
		  			<p class="zhuti">{{ item.zhuti }}&nbsp周英雄</p><p class="weekscore">周积分<span>{{ item.weekscore }}</span></p><p class="person">超越<span>{{ item.surpassNum }}</span>人</p>
		  			<div :class="['danmu',{ anima:index==0}]" v-show="index==0">
		  			    <ul>
		  			    	<li class="info"><p>历史类达人</p></li>
		  			    	<li class="info"><p>阅读时长{{ item.readTime }}分钟，金主大大</p></li>
		  			    	<li class="info"><p>超越{{ item.shareNum }}人</p></li>
		  			    </ul>
		  				<ul>
		  					<li class="info"><p>历史类达人</p></li>
		  			    	<li class="info"><p>阅读时长{{ item.readTime }}分钟，金主大大</p></li>
		  					<li class="info"><p>超越{{ item.shareNum }}人</p></li>
		  				</ul>
		  			</div>
		  			<div :class="['danmu',{ anima:index==1}]" v-show="index==1">
						<ul>
							<li class="info"><p>打赏{{ item.rewardNum }}</p></li>
							<li class="info"><p>阅读时长{{ item.readTime }}分钟，真爱粉</p></li>
							<li class="info"><p>超越{{ item.shareNum }}人</p></li>
						</ul>
						<ul>
							<li class="info"><p>投推荐票{{ item.recomNum }}张</p></li>
							<li class="info"><p>周积分{{ item.voteNum }}</p></li>
							<li class="info"><p>囤书节购书花费{{ item.buyBookNum }}</p></li>
						</ul>
		  			</div>
		  			<div :class="['danmu',{ anima:index==2}]" v-if="index==2">
		  				<ul>
							<li class="info"><p>打赏{{ item.rewardNum }}</p></li>
							<li class="info"><p>阅读时长{{ item.readTime }}分钟</p></li>
							<li class="info"><p>超越{{ item.shareNum }}人</p></li>
						</ul>
						<ul>
							<li class="info"><p>投推荐票{{ item.recomNum }}张</p></li>
							<li class="info"><p>周积分{{ item.voteNum }}</p></li>
							<li class="info"><p>囤书节购书花费{{ item.buyBookNum }}</p></li>
						</ul>
		  			</div>
		  			<div :class="['danmu',{ anima:index==3}]" v-if="index==3">
		  				<ul>
		  			    	<li class="info"><p>漫画达人orz，看漫画{{ item.comicNum }}本</p></li>
		  			    	<li class="info"><p>仙侠小能手，阅读时长{{ item.readTime }}分钟</p></li>
		  			    	<li class="info"><p>超越{{ item.shareNum }}人</p></li>
		  			    </ul>
		  				<ul>
		  					<li class="info"><p>漫画达人orz，看漫画{{ item.comicNum }}本</p></li>
		  					<li class="info"><p>仙侠小能手，阅读时长{{ item.readTime }}分钟</p></li>
		  					<li class="info"><p>超越{{ item.shareNum }}人</p></li>
		  				</ul>
		  			</div>
		  			<div :class="['danmu','danmuLast',{ anima:index==4}]" v-if="index==4">
		  				<ul>
		  					<li class="info"><p>获赞{{ item.thumbs }}次</p></li>
		  					<li class="info"><p>阅读时长{{ item.readTime }}分钟</p></li>
		  					<li class="info"><p>发表书评{{ item.pubReview }}条</p></li>
		  					<li class="info"><p>超越{{ item.shareNum }}人</p></li>
		  				</ul>
		  				<ul>
		  				   <li class="info"><p>收到回复{{ item.recevieReview }}条</p></li>
		  					<li class="info"><p>大神说提问{{ item.questions }}条</p></li>
			  				<li class="info"><p>收听{{ item.listenIn }}条</p></li>
			  				<li class="info"><p>被偷听{{ item.eavesdrop }}条</p></li>
			  				<li class="info"><p>被回答{{ item.answer }}条</p></li>
		  				</ul>	
		  			</div>
		  			<div class="zhezhao"></div>
		  		</div>
		  		<div class="championBook">
		  			<img class="bface" :src="item.book.cover" @click="godetail(item.book.bid)" />
		  			<h4>{{ item.book.title }}</h4>
		  			<p><span>推荐语：</span>{{ item.book.recommend }}</p>
		  			<div class="author">{{ item.book.author }} 	<a @click="goread(item.book.bid)">阅读</a></div>
		  		</div>
		    </div>
		</div>
		<div class="swiper-pagination" id="pagination"><span v-for="(item,index) in weeklist">第{{ index+1 }}周</span></div>
	</div>
</div>
	
</template>
<script>
import database from "../data.js"
	export default {
		data(){
			return{
				plat: window.pt,
				weeklist:[]
			}
		},
		computed:{
			weeklist(){
				return database.weeklist
			}
		},
	 	methods:{
	 		godetail(bid){
	 			Local.forceLog(common.param("act_f"),"RYZDgodetail-"+bid);
	 			Local.goBookDetail(bid);
	 		},
	 		goread(bid){
	 			Local.forceLog(common.param("act_f"),"RYZDgoread-"+bid);
	 			Local.goRead(bid);
	 		}
	 	},
	 	mounted(){
	 		 let mySwiper = new Swiper('.champion',{
				pagination : '.swiper-pagination',
				resistanceRatio:0,
				paginationClickable: true,
				paginationBulletRender: function (swiper, index, className) {
				    return '<span class="' + className + '">第' + (index + 1) + '周</span>';
				},
				onTransitionEnd:function(swiper){
					Local.forceLog(common.param("act_f"),"RYZDpage-"+swiper.activeIndex);
				}
			});
	 	}

	}
</script>
<style lang='less'>
.champion{
    &.swiper-container{
    	position: absolute; left: 0 ;top: 0; z-index: 1; width: 100%; height: 100%;
    	.swiper-slide{ 
    		/*padding-top: .7rem;*/
    		.banbg{ width: 100%; height: 5.7rem; background: url(../images/recomimgs.png) no-repeat; background-size: 100% 100%; position: relative; z-index: 3; padding-top: .84rem;
				.championface{ width: 2rem; height:2rem;  position: relative; z-index: 1;  margin:0 auto;
					&:after{ content:''; position: absolute; left: -.86rem; top: -.42rem; z-index: 1; width: 3.68rem; height: 3.16rem; background: url(../images/guan.png) no-repeat; background-size: 100% 100%; }
					img{ width: 100%; border-radius: 100%; }
					.nick{position:absolute; left:.2rem;  bottom:-.2rem; z-index: 2; width: 1.56rem; text-align: center; font-size: .22rem; color: #fbefbe; }
					
				}
				.weekscore,.person,.zhuti{ position: absolute; top: .7rem; right: .24rem; width: 1.98rem; height: .42rem; text-align: center; line-height: .42rem; font-size: .24rem; color: #34b9dc; text-align: center;  background: #fae99f; border-radius: .42rem;
						span{ color: #fb8aa0; }
					}
				.person{ top: 1.2rem; }
				.zhuti{ top:.2rem; background:#fb8aa0; font-weight: bold; color: #fff; width: 2.4rem }
				.info{ position: absolute;z-index: 3; padding: 0 .7rem 0 0; height: .44rem; min-width: 1.3rem;   font-size: .28rem ;color: #fff;
					p{background: #36c2e7;border-radius: .44rem 0 0 .44rem; height: 100%; padding-left: .22rem;}
					&:after{ content:''; position: absolute; right: 0; top: 0; width: .7rem; height: .44rem; background: url(../images/danmu.png) no-repeat;  background-size: 100% 100%;}
				}
				.danmu{position: absolute; bottom: .8rem; left: 0; z-index: 1;width: 100%; height: 2.17rem; 
					ul{ width: 100%;  height: 100%;position: absolute;left: 0; top: 0; z-index:-1; -webkit-transform:translateX(100%); 
						.info:first-child{ left:2.58rem; top:.26rem; }
						.info:nth-child(2){ left:.18rem; top:1.1rem; }
						.info:last-child{ left:3.22rem; top:1.74rem; }
						&.active{ z-index: -1; }
					}
					&.danmuLast{
					.info:first-child{ left:1rem; top:.26rem; }
					.info:nth-child(3){ left:4.5rem; top:.14rem; }
					.info:nth-child(4){ left:4.1rem; top:.94rem; }
					.info:last-child{ left:3.22rem; top:1.74rem; }
					}
				}
				.zhezhao{
					position: absolute; left: 0; bottom: 0; z-index: 15; width: 100%; height: 1.58rem; background: url(../images/recombotms.png) no-repeat; background-size: 100% 100%;-webkit-transform: translateZ(1px);
				}
			}
			&.swiper-slide-active .anima ul{ 
				-webkit-animation:flay 6s linear infinite;z-index:-1;
				&:last-child{ -webkit-animation-delay:3s;}
				@-webkit-keyframes flay{
						0%{ -webkit-transform:translateX(100%) }
						50%{-webkit-transform:translateX(0%)}
						100%{-webkit-transform:translateX(-100%)}
					}
			}
			.championBook{ 
				margin:.6rem .3rem 0; padding-left: 1.88rem; min-height: 2.24rem; position: relative; z-index: 1; font-size: .28rem; line-height: .48rem; 
				.bface{ position: absolute; left: 0 ;top:0; width: 1.68rem; height: 2.24rem;}
				h4{  font-size: .28rem; line-height: .28rem; color: #333; margin-bottom: .1rem; font-weight: normal;}
				p{color: #9ea2ae;  display: -webkit-box;-webkit-box-orient:vertical; -webkit-line-clamp:7;overflow: hidden; text-overflow: ellipsis; white-space: wrap; font-size: .24rem; line-height: .38rem;
					span{ color: #333; } }
				.author{ height: .44rem; margin-top: .1rem; position:relative; z-index: 1; padding-left: .36rem; background: url(../images/iconAuthor.png) no-repeat left .09rem; background-size: .28rem .28rem; font-size: .28rem;
					a{ display: block; position: absolute; right: 0 ;top: 0; width: 1.06rem; padding-top: 1px; height: .43rem; line-height: .44rem; border-radius: .44rem; text-align: center; color: #fff; background: #fc8fa6;overflow: hidden; }
				 }
			}
			@media screen and (max-height:540px){
				.championBook{ margin:.3rem .3rem 0; 
					p{-webkit-line-clamp:5;}
				}
			}
			@media screen and (max-height:590px) and (max-width:400px){
				.championBook{ margin:.5rem .3rem 0; 
					p{-webkit-line-clamp:5;}
				}
			}
    	}
    	#pagination{ 
	    	z-index: 30; left: .3rem; right:.3rem; bottom:0; height: .84rem; width: auto; display: -webkit-flex; -webkit-justify-content:space-between;
	    }
	    .swiper-pagination-bullet{ 
	    	display: block; width: 1.16rem; height: .82rem; line-height: 1rem; border:1px solid #36c2e7; border-bottom: none; border-radius: .82rem .82rem 0 0; text-align: center;background: #fff; opacity: 1; margin:0; overflow: hidden;
				&.swiper-pagination-bullet-active{ 
					background: #36c2e7; color: #fff 
				}
	    }
    }
}
</style>