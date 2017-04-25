// import {debug} from './debug.js';
import './rem.js';

class App {
	constructor(config){
		this.elem = config.elem;
		this.obj = $(this.elem);
		this.signin = this.obj.find('.signin');
		this.mine = this.obj.find('.mine');
		this.myAvatar = this.obj.find('.myAvatar');
		this.myName = this.obj.find('.myName');
		this.coinNumber = this.obj.find('.coinNumber');
		this.myRanking = this.obj.find('.myRanking');
		this.toBookshelf = this.obj.find('.toBookshelf');
		this.list = this.obj.find('.list');

		this.loading = this.obj.find('.loading');

		this.testMode = false;
		this.ios = document.title==='ios'?true:false;

		this.n = 0;
		this.data = null;

		this.init();
	}
	init(){
		Local.forceLog( common.param('act_f'),'more' );
		if( !this.ios ){
			this.getAndroidOSVersion();
		};
		this.getData();
		this.listen();
	}
	getAndroidOSVersion(){
		var v = Number(navigator.userAgent.match(/Android \d/)[0].replace(/Android /,''));
		if( v<5 ){
			this.toBookshelf.hide();
		};
	}
	getData(){
		var self = this;
		Local.reqaObj( common.server()+'pkg160801/morerank', function(data) {
			if( self.testMode ){
				data.isLogin = true;
				data.myrank = 30;
				data.rankList = data.rankList.slice(0,45);
			}
			//如果rankList这一数组的长度小于200：
			if( data.rankList.length<200 ){
				for( var i=data.rankList.length;i<200;i++ ){
					data.rankList[i] = {
						avor: 'img/default.jpg',
						name: '暂无',
						score: '暂无',
						rank: i
					}
				}
			};
			self.data = data;
			//如果用户已登录：
			if( data.isLogin ){
				self.signin.hide();
				if( !data.mynick&&!data.myavor ){
					self.myAvatar.attr('src','img/default.png');
					self.myName.html('游客');
				}else{
					self.myAvatar.attr('src',data.myavor);
					self.myName.html(data.mynick);
				}
				self.coinNumber.html(data.myscore);
				self.myRanking.html(
					(data.myrank===-1||data.myscore===0)?'--':
						(data.myrank>200?'200+':data.myrank)
				);
				self.mine.show();
			}
			self.arr = data.rankList;
			self.appendItems(data.rankList);
		}, [], function() {
			Local.showToast("网络异常，请稍候重试");
		}, 1);
	}
	appendItems(items){
		var str, str2;
		for( var i=this.n;i<this.n+15;i++ ){
			if( i<200 ){
				if( i<10 ){
					str = `<img src="img/badge${i<3?i:''}.png"/>`;
				}else{
					str = '';
				}
				if( i<15 ){
					str2 = 
						`<div class="round">
								<img src="${items[i].avor}"/>
						</div>`;
				}else{
					str2 = '';
				}
				this.list.append(
					`<li class="listItem">
						<div class="badge">
							${str}
							<p>${i+1}</p>
						</div>
						<div class="avatar">
							${i===0?
							'<img class="crown" src="img/crown.png"/>':''
							}
							${str2}
						</div>
						<p class="name" style="${items[i].rank===this.data.myrank?'color:#f65555':''}">
							${items[i].name}
						</p>
						<p class="number" style="${items[i].rank===this.data.myrank?'color:#f65555':''}">
							${items[i].score}
						</p>
					</li>`
				)
			};
		}
		this.n += 15;
	}
	listen(){
		var self = this;
		self.signin.on('touchstart',(e)=>{
			e.preventDefault();
			self.signin.css({
				background: '#5FB07E'
			})
		});
		self.signin.on('touchend',(e)=>{
			e.preventDefault();
			self.signin.css({
				background: '#6CC990'
			})
			if( self.ios ){
				Local.login(false,'d');
			}else{
				Local.login();
			}
		});
		self.toBookshelf.on('click',function(){
			Local.openBookShelf();
		});
		$(window).on('scroll',function(){
			//如果滚动条到达了页面最底部：
			//alert( ''+$(window).scrollTop()+','+$(document).height()+','+window.innerHeight )
			if( $(window).scrollTop() === ($(document).height()-window.innerHeight) ){
				if( self.n<=self.data.rankList.length ){
					self.appendItems(self.arr)
				}else{
					self.loading.hide();
					self.loading.html('没有更多数据了');
				}
			}
		})
	}
}

new App({
	elem: document.getElementsByTagName('body')[0]
})