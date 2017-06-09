<template>
	<div id="root">
		<div class="warp">
			<div class="ban"></div>
			<div class="connect">
			<div class="contbox">
				<div class="search">
					<div  class='tite'>－{{ received?'你已经领取限免书，快去书架看书吧':'有心仪的书？直接搜索限免'}}－</div>
					<div class="searchbox">
						<input type="text" placeholder="搜索书名，立享限免" v-model='inptxt' @keyup='intblur($event)' />
						<div class="delesearch hide" @click="delesearch"></div>
					</div>
					<div class="searchResult" v-show='showsearch'>
						<div v-show='searched==0' class="searchBook">
							<img :src="searchBook.cover" class="cover">
							<p class="bookname">{{ searchBook.title }}</p>
							<p class="author">{{ searchBook.author }}</p>
							<p>{{ searchBook.intro }}</p>
							<a class="recevbtn" @click="receive(searchBook.bid)">领取限免</a>
						</div>
						<p v-show='searched!=0' class="nosearch">{{searched==-2?'查询不到你想要的书籍，请准确输入哦':'抱歉，当前书籍未参加活动，换本书试试吧'}}</p>
					</div>
				</div>
				<div  class='tite'>－还没想好？看看平台最热门的书吧－</div>
				<ul class='bangtab'>
					<li class='active' @click="showbang($event)">畅销榜</li>
					<li v-show="!publishUse" @click="showbang($event)">风云榜</li>
					<li v-show="!publishUse" @click="showbang($event)">经典榜</li>
				</ul>
				<div class="bangbox">
					<ul class="booklist">
						<li v-for="(books,index) in booklist1">
							<div class="bookface" @click="gotodetail(books.bid)">
								<img :src="books.cover" />
							</div>
							<p class="bookname">{{ books.title }}</p>
							<p>{{ books.author }}</p>
							<a class="votebtn" v-bind:class="{ disabeled:received!='',isselected:received==books.bid }" @click="receive(books.bid)"><span>{{received==books.bid?'去看书':'选它'}}</span></a>
						</li>
					</ul>
					<ul class="booklist hide">
						<li v-for="(books,index) in booklist2">
							<div class="bookface" @click="gotodetail(books.bid)">
								<img :src="books.cover" />
							</div>
							<p class="bookname">{{ books.title }}</p>
							<p>{{ books.author }}</p>
							<a class="votebtn" v-bind:class="{ disabeled:received!='',isselected:received==books.bid }" @click="receive(books.bid)"><span>{{received==books.bid?'去看书':'选它'}}</span></a>
						</li>
					</ul>
					<ul class="booklist hide">
						<li v-for="(books,index) in booklist3">
							<div class="bookface" @click="gotodetail(books.bid)">
								<img :src="books.cover" />
							</div>
							<p class="bookname">{{ books.title }}</p>
							<p>{{ books.author }}</p>
							<a class="votebtn" v-bind:class="{ disabeled:received!='',isselected:received==books.bid }" @click="receive(books.bid)"><span>{{received==books.bid?'去看书':'选它'}}</span></a>
						</li>
					</ul>
				</div>
			</div>
				
			</div>
			<div class="rules">
				<h4>－ 活动规则－</h4>
				<p><span>1.</span>本活动为幸运福利活动，仅部分用户可参与。</p>
				<p><span>2.</span>参与活动用户仅限领取一本书享受限时免费在线阅读，限免期为10天。活动结束后不再提供免费阅读。</p>
				<p><span>3.</span>活动最终解释权归QQ阅读所有。</p>
			</div>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<mask-eject v-show="maskshow" :mask="maskshow" :received="received" :bookid='selectbid'></mask-eject>
	</div>
</template>
<script type="text/javascript">
    import database from "./data";
	export default {
		components: {
			maskLoading: require('./MaskLoading.vue'),
			maskOver: require('./MaskOver.vue'),
			maskEject:require('./ejectMask.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,//活动结束
				islogin:true,
				maskshow:false,
				inptxt:'',
				showsearch:false,//是否显示搜索结果
				searched:0,//是否有搜索结果0有搜索结果，－1屏蔽书，－2查询不到
				received:'',//是否领取过,领取过为书籍bid
				selectbid:'',//选择的书的bid
				searchBook:{},//搜索结果
				publishUse:false,//是否出版身份
				booklist1:[],
				booklist2:[],
				booklist3:[]
			}
		},
		methods: {
			initpage:function(){
				var self=this;
				self.loading=false;
				Local.init();
				Local.reqaObj(server() + "pkg170501/page4Init", function(data) {
					console.log(data);
					if(data.code==-4){
						self.over=true;
					}
					self.islogin=data.isLogin;
					self.received=data.received;
					self.publishUse=data.publishUse;
					if(self.publishUse){
						self.booklist1=data.bookList1;
					}else{
						self.booklist1=data.bookList1;
						self.booklist2=data.bookList2;
						self.booklist3=data.bookList3;					
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"),'four_enter_free');
			},
			//跳转书籍详情
			gotodetail:function(bid){
				ABook.gotoDetail(bid);
			},
			delesearch:function(){
				let self=this;
				self.inptxt='';
				$("input").blur();
				$(".delesearch").addClass('hide');
				self.showsearch=false;
			},
			intblur:function(e){
				let self=this;
				let len=self.inptxt.length;
				if(len>0){
					$(".delesearch").removeClass('hide');
					if(e.keyCode==13){
						Local.reqaObj(server() + "pkg170501/page4Search?searchContent="+encodeURI(self.inptxt), function(data) {
							console.log(data,+'&&'+self.searched);
							//self.showsearch=true;
							self.searched=data.code;
							self.showsearch=true;
							if(self.searched==0){
								//self.searchBook=database.searchBook;
								self.searchBook=data.book;
								forceLog(param("act_f"),'four_search_result');
							}else{
								forceLog(param("act_f"),'four_search_noresult');
							}
						}, [], function() {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
						$("input").blur();
				   }
				}else{
					$(".delesearch").addClass('hide');
					self.showsearch=false;
				}
			},
			showbang:function(e){
				let self=this;
				let $cur = $(e.currentTarget);
				let ind=$cur.index();
				$('.bangtab li').eq(ind).addClass('active').siblings().removeClass('active');
				$('.bangbox ul').eq(ind).removeClass('hide').siblings().addClass('hide');
			},
			receive:function(bid){
				let self=this;
				if(self.islogin){
					if(self.received==bid){
						console.log(self.received+','+bid);
						ABook.gotoRead(bid);
					}else {
						self.selectbid=bid;
						self.maskshow=true;
					}
				}else{
					Local.login();
				}
				
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();   
		}
	}
</script>