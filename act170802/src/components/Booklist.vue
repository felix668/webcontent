<template>
	<div class="bookbox">
		<ul class="blist">			   
			<li v-for="(item,ind) in bookshelf" :style="{ 'zIndex':parseInt(30-ind) }">
				<div class="bookinfo" >
					<div class="bookface" @click="godetail(item.bid)"><div class="icons"></div><img :src="item.cover" /><span class="breview">书评{{item.commentcount}}</span></div>
					<div class="booksi">
						<h4>{{ item.title }}</h4>
						<p>{{ item.author }}</p>
						<div class="btn" @click="gocomment(item.bid)">去评论</div>
					</div>
				</div>
			</li>
			<li v-for="(item,ind) in booklist" :style="{ 'zIndex':parseInt(10-ind) }">
				<div class="bookinfo">
					<div class="bookface" @click="godetail(item.bid)"><div class="icons hoticon"></div><img :src="item.cover" /><span class="breview">书评{{item.commentcount}}</span></div>
					<div class="booksi">
						<h4>{{ item.title }}</h4>
						<p>{{ item.author }}</p>
						<div class="btn" @click="gocomment(item.bid)">去评论</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:['bookshelf','booklist'],
		data(){
			return{
				plat: window.pt,
			}
		},
	 	methods:{
	 		godetail(bid){
	 			Local.forceLog(common.param("act_f"),"SQPLgodetail-"+bid);
	 			Local.goBookDetail(bid);
	 		},
	 		gocomment(bid){
	 			Local.forceLog(common.param("act_f"),"SQPLgocomment-"+bid);
	 			window.location.href = "uniteqqreader://nativepage/comment/index?bid="+bid+"&ctype=0";
	 			
	 		}
	 	}

	}
</script>
<style lang='less'>
@ft32:.32rem;
@ft24:.24rem;
@ft26:.26rem;
.btnstyle{
	display: block; width: 1.4rem; height: .76rem; line-height: .76rem; text-align: center; border-radius: 10px; background: #ee7b78; font-size: @ft32;color: #fff;
}
.bookbox{ position: relative;z-index: 1; margin: 0 .3rem .2rem; border:3px solid #89dbf5; background: #b2e6f9 url(../images/line.png) no-repeat center top; background-size: 6.76rem auto; border-radius: .5rem; padding: 0 .08rem;
	.blist { display: -webkit-flex;-webkit-flex-wrap:wrap;width: 100%; height: 19.23rem; overflow: hidden;
		li{width: 50%; position: relative; z-index: 1;
			.bookinfo{ height: 2.24rem;display: -webkit-box;-webkit-box-align:center; position: relative; z-index: 1;
				.bookface{ position:absolute; top: 0.53rem; width: 1.68rem; height: 2.24rem; box-shadow: 0 1px 10px rgba(0,0,0,.25);  border-top: 2px solid #5b95b2; overflow: hidden;
					img{display: block; width: 100%; height: 100%;}
					.icons{ position: absolute; left: .22rem; top: 0; width: .32rem; height: .86rem; background: url(../images/iconread.png) no-repeat; background-size: 100% 100%;
						&.hoticon{ background: url(../images/iconhot.png) no-repeat; background-size: 100% 100%; }
					}
					.breview{ display: block; position: absolute;left: 0; bottom: 0; right: 0; height: .4rem; line-height: .4rem; padding-left: 3px; background: rgba(0,0,0,0.75); color: #bbbaba; font-size: @ft24; }
				}
				.booksi{
					h4{  width:2.5rem; font-size: @ft32; line-height: .6rem; height: .6rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
					p{ width:1.4rem; font-size: @ft24; line-height: .48rem; height: .48rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: center; }
					.btn{.btnstyle;}
				}
			}
			&:nth-child(2n+1) .bookinfo{   padding: .53rem 0 1.12rem 2rem;
				.bookface{ position:absolute; left: 0;top: 0.53rem;border-left: 2px solid #5b95b2; }
			}
			&:nth-child(2n) .bookinfo{position: absolute; top: 2rem; right:0; z-index: 1;  padding: .53rem 2rem 1.12rem 0; 
				.bookface{ position:absolute; right: 0;top: 0.53rem;border-right: 2px solid #5b95b2; }
				.booksi{
					h4{ text-align: right;}
					p{ margin:0 0 0 auto;}
					.btn{.btnstyle; margin:0 0 0 0; float: right;}
				}
			}
		}
	}
}

</style>