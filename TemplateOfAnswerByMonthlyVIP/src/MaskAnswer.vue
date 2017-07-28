<template>
	<div class="answerpage">
		    <div class="hua"></div>
			<ul class="answerbox">
				<li v-for="(item,index) in cardlist.list" class="card">
					<div class="padbox">
						<h4 ><span><em>{{ index+1 }}</em>/{{ cardlist.list.length }}</span>每答对1道题，送{{ cardlist.quannum }}{{ urlis=='adr'?'书券':'阅券' }}</h4>
						<p class="answername">{{ item.answerName }}</p>
						<div class="gobook">
							<p>{{ tipnum[index] }}%的人在《{{ item.bookname }}》1-5章找到答案</p>
							<div class="btn_gobook" :style="styleObj.btnstyle" @touchstart.stop="touchStart($event)" @touchend.stop="touchEnd(item.bid,$event)">书中找答案，再答题</div>
						</div>
						<P class="title">立即答题：</p>
						<ul class="ansewerlist">
							<li v-for="list in item.answerResult" @click="selected($event)"><div class='radio'></div>{{ list }}</li>
						</ul>
						<div class="nextanser">
							<p>每道题只有1次答题机会，错过无奖励哦！</p>
							<div class="btn_next" :style="styleObj.nextStyle" @click="tonextAns($event)">{{ index!=(cardlist.list.length-1)?'下一题':'完成答题'}}</div>
						</div>
					</div>
					
				</li>
		   </ul>
	</div>
</template>
<style scoped>
.answerpage{ position: fixed; z-index: 111; left: 0; top: 0; width: 100%; height: 100%;}
.answerbox{position: absolute; left: .3rem; top: .7rem; right: .3rem; bottom: 1rem; }
.answerbox .card{ position: absolute; left: 0; bottom: 0; z-index: 10; width: 100%; height: 100%; box-shadow: 0 1px 18px rgba(47,26,41,.36);background-repeat:repeat-y; background-size:100% auto;border-radius: .1rem;-webkit-transform-origin:100% 0;}
.answerbox .card.flyout{-webkit-animation:flyout 2s linear forwards;}
@keyframes flyout {
  0%{ -webkit-transform:translate(0) rotate(0deg);}
  10%{ -webkit-transform:translate(0) rotate(45deg);}
  100%{-webkit-transform:translate(-1000px) rotate(45deg);}
}
/**/.answerbox .card:nth-child(2){ z-index: 9; bottom: -.08rem;}
.answerbox .card:nth-child(3){ z-index: 8; bottom: -.16rem;}
.answerbox .card:nth-child(4){ z-index: 7; bottom: -.24rem;}
.answerbox .card:nth-child(5){ z-index: 6; bottom: -.3rem;}
.answerbox .card .padbox{padding: .4rem .28rem .4rem;}
.answerbox .card h4{ position: relative; z-index: 1; font-size: .28rem; line-height: .48rem; height: .48rem; text-align: center;}
.answerbox .card h4 span{position: absolute; display: block; right: 0.28rem; top: 0; height: .48rem; line-height: .48rem; font-size: .24rem;}
.answerbox .card h4 span em{ color: #fd7258; }
.answerbox .card .answername{ font-size: .28rem; line-height: .48rem; margin:.1rem 0 .3rem;}
.gobook p,.nextanser p{ font-size: .2rem; text-align: center; line-height: .6rem;color: #fd7258;}
.btn_gobook{ width: 5.98rem; height: .76rem; margin: 0 auto .8rem; line-height: .76rem; text-align: center; font-size: .36rem; background-repeat: no-repeat; background-size: 100% auto;}
.title{ font-size: .28rem ;line-height: .6rem; font-weight: bold;}
.ansewerlist li{position: relative; z-index: 1; padding-left: .6rem; line-height: .4rem; font-size: .28rem; margin: .24rem 0;/*display: -webkit-box;-webkit-line-clamp: 1;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;*/}
.ansewerlist li div{ display: block; position:absolute; left:0; top: 0; width: .3rem; height: .3rem; border-radius: 100%; border:#6b4316 1px solid; }
.nextanser{position:absolute; bottom: .4rem; left: 0; right: 0;}
.btn_next{ width: 4.44rem; height: 1.04rem; margin: 0 auto; text-align: center; line-height: 1.04rem;background-repeat: no-repeat; background-size: 100% auto; font-size: .28rem;}
</style>
<script>
	module.exports = {
		props:['show','cardlist','answerstyle','answernum','resultshow','urlis'],
		data: function(){
			return {
				tips:''
			}
		},
		computed:{
			styleObj:function(){
				return {
					btnstyle:{
						color:this.answerstyle.gobookcolor,
						backgroundImage:"url("+this.answerstyle.gobook_btnbg+")"
					},
					nextStyle:{
						color:this.answerstyle.btncolor,
						backgroundImage:"url("+this.answerstyle.btnbg+")",
						backgroundPosition:'0 -2.2rem'
					}
				};
			},
			tipnum:function(){
				let self=this;
				let len=self.cardlist.list.length;
				let arr=[];
				for(let i=0;i<len;i++){
					arr.push(Math.floor(Math.random()*11)+87);
				}
				return arr;
			}
		},
		methods: {
			touchStart: function(e){
                let $cur = $(e.currentTarget);
                let self=this;
                $cur.css("background-position","0 -1rem");
                
            },
            touchEnd: function(bid,e){
                var $cur = $(e.currentTarget);
                let self=this;
                $cur.css("background-position","0 0");
                ABook.gotoRead(bid);
               forceLog(param("act_f"),'findAnswer'+bid);
            },
            selected:function(e){
            	let $cur = $(e.currentTarget);
                let self=this;
                let ind=$cur.index();
                let parind=$cur.parent().parent().parent().index();
                $(".ansewerlist li").children('div').css("background","transparent");
                $cur.children('div').css("background","#fd7258");
                $cur.addClass("onact").siblings().removeClass('onact');
                $(".btn_next").css("background-position",'0 0');
                $(".btn_next").eq(parind).on('touchstart',function(){
                	$(this).css("background-position",'0 -1.1rem');
                });
                self.cardlist.tonext=true;
            },
            tonextAns:function(e){
            	let $cur = $(e.currentTarget);
                let self=this;
                let num=$cur.parent().parent().parent().index();
            	$cur.css("background-position",'0 0');
            	if(self.cardlist.tonext){
            		let ind=$(".onact").index();
            		self.$parent.selresulte.push(ind);
            		console.log(self.$parent.selresulte);
            		self.cardlist.tonext=false;
            		self.toNextQuestion(num);
            	}
            },
            toNextQuestion:function(ind){
            	forceLog(param("act_f"),'nextAnswer'+bid);
            	let self=this;
            	let len=self.cardlist.list.length-1;
            	$(".answerbox>li").eq(ind).addClass('flyout');
            	$(".ansewerlist li").removeClass('onact');
            	console.log(self.cardlist.tonext);
            	let timer=null;
            	if(ind==len){
            		Local.reqaObj(server() + "pkgAnswerMonthlyVIP/pick?tpc="+param('tpc')+"&gd="+self.$parent.userGd+"&ans="+self.$parent.selresulte, function(data) {
            			console.log(self.$parent.userGd);
            			self.$parent.config.resultData=data.resultData;
            			self.$parent.result=true;
            			self.$parent.answer=false;
            			forceLog(param("act_f"),'submitAnswer');
            		}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
            	}
            }
		}
	}
</script>
