<template>
	<div id="root">
		<div class="warp">
			<div class="ban"></div>
			<div class="connect">
				<div class="shelfbook" v-show="shelfshow">
					<div  class='tite'>任选一本，畅读10日<p>你正在关注这些书</p></div>
					<ul class="booklist">
						<li v-for="books in bookshelf">
							<div class="bookface">
								<img :src="books.cover" />
							</div>
							<p class="bookname">{{ books.bookname }}</p>
							<p>{{ books.author }}</p>
							<a class="votebtn" v-bind:class="{ disabeled:selected,isselected:selected==books.bid }" @click="selectit(books.bid)"><span>{{ selected==books.bid?'去看书':'选TA'}}</span></a>
						</li>
					</ul>
				</div>
				<div  class='tite'>抢鲜好书，对您免费<p>根据你的兴趣推荐</p></div>
				<ul class="booklist">
					<li v-for="(books,index) in booklist">
						<div class="bookface" @click="gotodetail(books.bid)">
							<img :src="books.cover" />
						</div>
						<p class="bookname">{{ books.bookname }}</p>
						<p>{{ books.author }}</p>
						<a class="votebtn" v-bind:class="{ isselected:books.iselect }" @click="receive(index,books.bid)"><span>{{books.iselect?'去看书':'领限免'}}</span></a>
					</li>
				</ul>
				<div class="keyall" @click="onekey">{{ keyreceive?'去书架看书':'一键全部领限免'}}<ul class="arrows"><img :src="'../adr/public/images/arrow.png'"><img :src="'../adr/public/images/arrow.png'"><img :src="'../adr/public/images/arrow.png'"></ul></div>
			</div>
			<div class="rules">
				<h4>－ 活动规则－</h4>
				<p><span>1.</span>时间：2017年1月28日10点 -  2月3日0点</p>
				<p><span>2.</span>充值赠送：单次(一次性)充值达到指定额度，则赠送对应额度阅券，多充多送！</p>
				<p><span>3.</span>活动所赠阅券有效期均为15天并且即时到账，可用于直接购买书籍；</p>
				<p><span>4.</span>首充优惠活动仅限第一次充值用户参加，其余用户无法参加；</p>
				<p><span>5.</span>最终解释权归QQ阅读所有。</p>
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
				urlis:'',
				islogin:false,
				showbrowers:false,
				downshow:false,
				maskshow:false,
				masktype:'',
				selectbid:'',//选择的书的bid
				shelfshow:true,//书架无书不展示
				selected:false,//书架书选取，未选false，已选返回bid
				bookshelf:[],
				keyreceive:false,//一键领取
				booklist:[]
			}
		},
		methods: {
			initpage:function(){
				var self=this;
				Local.init();
				self.loading=false;
				self.selected=database.selected;
				self.bookshelf=database.bookshelf;
				self.keyreceive=database.keyreceive;
				self.booklist=database.booklist;
				let len=self.bookshelf.length;
				if(len==0){
					self.shelfshow=false;
				}else{
					self.shelfshow=true;
				}
				// Local.reqaObj(server() + "pkg170409/init?pt="+self.urlis, function(data) {
				// 	console.log(data);
				// 	self.loading=false;
				// }, [], function() {
				// 	Local.showToast("网络异常，请稍候重试");
				// }, 1);
				//forceLog('param("act_f")','zgzyindex'+self.urlis);
			},
			islast:function(){
				let self=this;
				let len=self.booklist.length;
				let num=0;
				for(let i=0;i<len;i++){
					if(self.booklist[i].iselect){
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
				if(!self.selected){
					self.maskshow=true;
					self.masktype='shelfmask';
					self.selectbid=bid;
				}else if(self.selected==bid){
					ABook.gotoRead(bid);
				}
			},
			receive:function(ind,bid){
				let self=this;
				let len=self.booklist.length;
				if(self.booklist[ind].iselect){
					ABook.gotoRead(bid);
				}else{
					// Local.reqaObj(server() + "pkg170409/init?bid="+bid, function(data) {
						self.booklist[ind].iselect=true;
						if(self.islast()==len){
							self.keyreceive=true;
						}
						console.log('领取成功，限免10天');
					// 	Local.showToast("领取成功，限免10天");
					// }, [], function() {
					// 	Local.showToast("网络异常，请稍候重试");
					// }, 1);
				}
			},
			onekey:function(){
				let self=this;
				if(self.keyreceive){
					console.log('goshelf');
					//Local.openBookShelf();
				}else{
				// Local.reqaObj(server() + "pkg170409/init?bid="+bid, function(data) {
					self.maskshow=true;
					self.masktype='booklistmask';
					self.keyreceive=true;
					let len=self.booklist.length;
					for(let i=0; i<len; i++){
						self.booklist[i].iselect=true;
					}
				// }, [], function() {
				// 	Local.showToast("网络异常，请稍候重试");
				// }, 1); 
				}
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();   
		}
	}
</script>