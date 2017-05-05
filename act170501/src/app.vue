<template>
	<div id="root">
		<div class="warp">
			<div class="ban"></div>
			<div class="connect">
			<div class="contbox">
				<div class="shelfbook" v-show="shelfshow">
					<div  class='tite'>任选一本，畅读10日<p>你正在关注这些书</p></div>
					<ul class="booklist">
						<li v-for="books in bookshelf">
							<div class="bookface">
								<img :src="books.cover" />
							</div>
							<p class="bookname">{{ books.title }}</p>
							<p>{{ books.author }}</p>
							<a class="votebtn" v-bind:class="{ disabeled:selected,isselected:selected==books.bid }" @click="selectit(books.bid)"><span>{{ selected==books.bid?'去看书':'选TA'}}</span></a>
						</li>
					</ul>
				</div>
				<div  class='tite'>抢鲜好书，对你免费<p>根据你的兴趣推荐</p></div>
				<ul class="booklist">
					<li v-for="(books,index) in booklist">
						<div class="bookface" @click="gotodetail(books.bid)">
							<img :src="books.cover" />
						</div>
						<p class="bookname">{{ books.title }}</p>
						<p>{{ books.author }}</p>
						<a class="votebtn" v-bind:class="{ isselected:books.picked }" @click="receive(index,books.bid)"><span>{{books.picked?'去看书':'领限免'}}</span></a>
					</li>
				</ul>
				<div class="keyall" @click="onekey">{{ keyreceive?'去书架看书':'一键全部领限免'}}<ul class="arrows"><img :src="'../adr/public/images/arrow.png'"><img :src="'../adr/public/images/arrow.png'"><img :src="'../adr/public/images/arrow.png'"></ul></div>
			</div>
				
			</div>
			<div class="rules">
				<h4>－ 活动规则－</h4>
				<p><span>1.</span>本活动为幸运福利活动，仅部分用户可参与。</p>
				<p><span>2.</span>页面内限免书籍需手动领取，领取后可免费阅读10日。</p>
				<p><span>3.</span>限免特权到期后，书籍不再提供免费阅读。</p>
				<p><span>4.</span>活动最终解释权归QQ阅读所有。</p>
			</div>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
		<mask-browes v-show="showbrowers"></mask-browes>
		<mask-eject v-show="maskshow" :mask="maskshow" :type="masktype" :bookid='selectbid'></mask-eject>
		<mask-download v-show="downshow" :show.sync="downshow"></mask-download>
	</div>
</template>
<script type="text/javascript">
    import database from "./data";
	export default {
		components: {
			maskLoading: require('./MaskLoading.vue'),
			maskOver: require('./MaskOver.vue'),
			maskDownload:require('./MaskDownload.vue'),
			maskBrowes:require('./MaskBrowers.vue'),
			maskEject:require('./ejectMask.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,//活动结束
				islogin:false,
				showbrowers:false,
				downshow:false,
				maskshow:false,
				masktype:'',
				selectbid:'',//选择的书的bid
				shelfshow:true,//书架无书不展示
				selected:false,
				bookshelf:[],
				keyreceive:false,//一键领取
				booklist:[],
				moreclick:true
			}
		},
		methods: {
			initpage:function(){
				var self=this;
				Local.init();
				Local.reqaObj(server() + "pkg170501/init1", function(data) {
					console.log(data);
					self.loading=false;
					self.islogin=data.isLogin;
					self.keyreceive=data.free.pickedAll;
					self.booklist=data.free.books;
					if(data.shelf!=''){
						self.bookshelf=data.shelf.books;
						self.selected=data.shelf.picked;
					}else{
						self.bookshelf=[];
						self.selected=false;
					}
					let len=self.bookshelf.length;
					console.log(len);
					if(len==0){
						self.shelfshow=false;
					}else{
						self.shelfshow=true;
					}
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				//forceLog('param("act_f")','one_enter_free');
			},
			islast:function(){
				let self=this;
				let len=self.booklist.length;
				let num=0;
				for(let i=0;i<len;i++){
					if(self.booklist[i].picked){
						num++;
					}
				}
				console.log(num);
				return num;
			},
			//跳转书籍详情
			gotodetail:function(bid){
				ABook.gotoDetail(bid);
			},
			selectit:function(bid){
				let self=this;
				if(self.islogin){
					if(!self.selected){
						self.maskshow=true;
						self.masktype='shelfmask';
						self.selectbid=bid;
					}else if(self.selected==bid){
						ABook.gotoRead(bid);
					}
				}else{
					Local.login();
				}
				
			},
			receive:function(ind,bid){
				let self=this;
				let len=self.booklist.length;
				if(self.islogin){
					if(self.booklist[ind].picked){
						ABook.gotoRead(bid);
					}else{
							Local.reqaObj(server() + "pkg170501/pick1?type=2&bid="+bid, function(data) {
						 		console.log(data);
								self.booklist[ind].picked=true;
								if(self.islast()==len){
									self.keyreceive=true;
								}
								if(data.code==0){
									Local.showToast("领取成功，限免10天");
								}else{
									Local.showToast(data.msg);
								}
								
								//forceLog('param("act_f")','one_list_free');
							}, [], function() {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
								
					}
				}else{
					Local.login();
				}
				
			},
			onekey:function(){
				let self=this;
				if(self.islogin){
					if(self.keyreceive){
						Local.openBookShelf();
					}else{
						Local.reqaObj(server() + "pkg170501/pickall1", function(data) {
							console.log(data);
							self.maskshow=true;
							self.masktype='booklistmask';
							self.keyreceive=true;
							let len=self.booklist.length;
							for(let i=0; i<len; i++){
								self.booklist[i].picked=true;
							}
							//forceLog('param("act_f")','one_onekey_free');
						}, [], function() {
							Local.showToast("网络异常，请稍候重试");
						}, 1); 
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