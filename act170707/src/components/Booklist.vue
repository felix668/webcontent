<template>
	<div class="booklist">
		<ul>			   
			<li v-for="(item,ind) in bookshelf">
				<div class="bookinfo">
					<div class="bookface" @click="godetail(item.bid)"><div class="icons"></div><img :src="item.cover" /></div>
					<div class="booksi">
						<h4>《{{ item.title }}》</h4>
						<p>{{ item.author }}</p>
						<p class="introduction">已更新至{{ item.lastcname }}</p>
					</div>
				</div>
				<div class="btnbox">
					<a @click="voteFor(item)"><img :src="'src/images/icontjp.png'" />投推荐票</a>
					<a @click="areward(item)"><img :src="'src/images/iconshang.png'" />打赏</a>
					<a @click="monthticked(item)"><img :src="'src/images/iconyue.png'" />投月票</a>
				</div>
			</li>
		</ul>
		<ul>			   
			<li v-for="(item,ind) in booklist">
				<div class="bookinfo">
					<div class="bookface" @click="godetail(item.bid)"><div class="icons hoticon"></div><img :src="item.cover" /></div>
					<div class="booksi">
						<h4>《{{ item.title }}》</h4>
						<p>{{ item.author }}</p>
						<p class="introduction">{{ item.intro }}</p>
					</div>
				</div>
				<div class="btnbox">
					<a @click="voteFor(item)"><img :src="'src/images/icontjp.png'" />投推荐票</a>
					<a @click="areward(item)"><img :src="'src/images/iconshang.png'" />打赏</a>
					<a @click="monthticked(item)"><img :src="'src/images/iconyue.png'" />投月票</a>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:['bookshelf','booklist','version'],
		data(){
			return{
				plat: window.pt,
			}
		},
	 	methods:{
	 		monthticked(book){
	 			let self=this;
	 			self.$parent.bookname=book.title;
			 	let bid=book.bid;
			 	Local.forceLog(common.param("act_f"),"SJTPmonthlyTicket-"+bid);
	 			if(self.plat=='ios' && !self.version){//新版本
			 			if(self.$parent.monthNum==0){
					    	self.$parent.showmask=true;
					    	self.$parent.type=-10000;
					    }else{
					    	Local.reqaObj(common.server()+"pkg170705/vote?bid="+bid, data=>{
								console.log(data);
								if(data.code==0 || data.code==-10000 || data.code==-10001 || data.code==-10002){
									self.ismengzhu=data.ismengzhu; 
									self.$parent.type=data.code;
									self.$parent.showmask=true;
								}else if(data.code==-102){
									Local.showToast('该书暂时不支持投月票');
								}else{
									Local.showToast('投票失败');
								}
							}, [], ()=> {				
								Local.showToast("网络异常，请稍候重试");
							}, 1);
					    }
	 			}else{
	 				Local.monthlyRicket(bid);
	 			}
	 		},
	 		areward(book){
	 		    let self=this;
	 		    let bid=book.bid;
	 		    Local.forceLog(common.param("act_f"),"SJTPreward-"+bid);
	 			if(self.plat=='ios' && !self.version){//新版本
					Local.goBookDetail(bid);
	 			}else{
	 				Local.reWard(bid);
	 			}
	 		},
	 		voteFor(book){
	 			let self=this;
	 			self.$parent.bookname=book.title;
		 		let bid=book.bid;
		 		Local.forceLog(common.param("act_f"),"SJTPrecommendTicket-"+bid);
	 			if(self.plat=='ios' && !self.version){//新版本
		 			if(self.$parent.recommendNum==0){
				    	self.$parent.showmask=true;
				    	self.$parent.recomendmask=true;
				    	self.$parent.type=-10000;
				    }else{
				    	Local.reqaObj("https://newios.reader.qq.com/v6_5_1/rticket/send?bid="+bid+"&count=1", data=>{
							console.log(data);
							if(data.code==0 || data.code==101){
								self.$parent.type=data.code;
								self.$parent.showmask=true;
								self.$parent.recomendmask=true;
							}else{
								Local.showToast('投票失败');
							}
						}, [], ()=> {				
							Local.showToast("网络异常，请稍候重试");
						}, 1);
				    }
	 			}else{
	 				Local.reCommend(bid);
	 			}
	 		},
	 		godetail(bid){
	 			Local.goBookDetail(bid);
	 		},
	 		recommServer(){
	 			if (window.location.hostname === 'iyuedu.qq.com' || window.location.hostname==='yuedu.reader.qq.com'){
					return "https://newios.reader.qq.com/";
				}else{
					return "https://ptbookios.reader.qq.com/";
				};
	 		}
	 	}

	}
</script>
<style lang='less'>
@ft32:.32rem;
@ft24:.24rem;
@ft26:.26rem;
@graylinecolor:#cac6c2;
.btnstyle{
	height: .68rem;
	line-height: .7rem;
	text-align: center;
	border-radius: 5px;
	background: #fecead;
	font-size:@ft26;
	border-bottom: 1px solid #eba08e;
	overflow: hidden;
}
	.booklist { padding-bottom: .6rem;
		li{ margin:.26rem .24rem 0; background: #fcf8f2; border:3px solid #fff; padding: .1rem 0; border-radius: 7px; box-shadow: 0 3px 0px #f6bb91; 
			.bookinfo{ height: 2.44rem; display: -webkit-box;-webkit-box-align:center; position: relative; z-index: 1; padding-left: 2.24rem;  border-bottom: 1px solid @graylinecolor; padding-bottom: .36rem;
				.bookface{ position:absolute; left: .3rem ;top: 0; width: 1.68rem; height: 2.44rem; box-shadow: 0 1px 10px rgba(0,0,0,.25); 
					img{display: block; width: 100%; height: 100%;}
					.icons{ position: absolute; left: .02rem; top: 0; width: .52rem; height: .92rem; background: url(../images/iconread.png) no-repeat; background-size: 100% 100%;
						&.hoticon{ background: url(../images/iconhot.png) no-repeat; background-size: 100% 100%; }
					}
				}
				.booksi{
					padding-right: .3rem; -webkit-box-flex:1;
					h4{ font-size: @ft32; line-height: .6rem; height: .6rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
					p{ border-bottom: 1px dashed @graylinecolor; padding-bottom: .15rem; padding-left:.12rem; 
						&.introduction{ display: -webkit-box;-webkit-box-orient:vertical; -webkit-line-clamp:2;overflow: hidden; margin-top: .2rem; border-bottom: none; padding-bottom:0 }
					}
				} 
			}
			.btnbox{ padding-top: .15rem; display: -webkit-flex;flex-wrap:wrap; margin:0 .12rem; 
				a{ display: block; width: 1.92rem; .btnstyle; font-weight: bold; margin:0 .14rem;
					img{ width: .36rem; margin-right: .16rem; display: inline-block; vertical-align: top; position: relative; top: .16rem; }
					&:nth-child(2) img{ top: .14rem;}
					&:last-child img{ top: .2rem;}
				}
			}
		}
   }
</style>