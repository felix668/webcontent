// import {debug} from './debug.js';
import './rem.js';
//import './zeal.js';

function App(config){
	this.elem = config.elem;
	this.obj = $(this.elem);

	this.gift = this.obj.find('.gift');

	this.get = this.obj.find('.get');
	this.get1 = this.obj.find('.get1');
	this.text = this.obj.find('.text');

	this.topBtns = this.obj.find('.topBtn');
	this.disabled = this.obj.find('.disabled');
	this.already = this.obj.find('.already');
	this.signins = this.obj.find('.signin');

	this.left = this.obj.find('.left');

	this.trophies = this.obj.find('.trophy');
	this.chance = this.obj.find('.chance');
	this.btn = this.obj.find('.btn');

	this.mask = this.obj.find('.mask');
	this.square = this.obj.find('.square');
	this.info = this.obj.find('.info');
	this.desc = this.obj.find('.desc');
	this.pinkBtns = this.obj.find('.pinkBtn');
	this.gotIt = this.obj.find('.gotIt');
	this.help = this.obj.find('.help');
	this.write = this.obj.find('.write');
	this.close = this.obj.find('.close');

	this.testMode = true;
	//根据document.title判断该页面是安卓版还是ios版。
	this.ios = document.title==='ios'?true:false;

	this.data = null;
	this.inDrawing = false;

	this.init();
}

App.prototype = {
	init: function(){
		//通知服务器用户进入了index.html页面。
		Local.forceLog( common.param('act_f'),'index' );

		//从服务器获取数据。
		this.getData();
		//监听事件。
		this.listen();
	},
	getData: function(){
		var self = this;
		Local.reqaObj( common.server()+'pkg160801/init', function(data) {

			//如果开启了testMode，则对服务器返回的原始数据作以下修改以测试各种不同状态下页面的状态。

		}, [], function() {
			Local.showToast("网络异常，请稍候重试");
		}, 1);
		var data = {
			isLogin: true,
			over: false,
			gifts: {
				1: {
					acquired: false,
					timeleft: 0
				},
				2: {
					acquired: false,
					timeleft: 9999999,
					left: 2132
				},
				3: {
					acquired: false,
					timeleft: 0,
					left: 1234
				},
				4: {
					acquired: false,
					timeleft: 999,
					left: 22
				}
			},
			chance: 0
		}
		self.data = data;
		if( !self.data.isLogin ){
			self.updateBefore();
		}else{
			//如果用户已登录：
			self.updateAfter();
		}
	},
	updateBefore: function(){
		this.get.hide();
		this.signins.show();
		this.updateLeft();
	},
	updateAfter: function(){
		var self = this;
		self.signins.hide();
		self.get.show();
		self.updateChance();
		self.updateGift(1);
		self.updateGift(2);
		self.updateGift(3);
		self.updateGift(4);
		self.updateLeft();
	},
	updateLeft: function(){
		var self = this;
		self.left.each(function(){
			var i = $(this).index('.left');
			$(this).html(self.data.gifts[i+2].left);
		});
	},
	updateChance: function(){
		this.chance.html(this.data.chance);
	},
	updateGift: function(i){
		var self = this;
		if( i===1 ){
			self.topBtns.hide();
			if( self.data.gifts[1].timeleft<=0 ){
				self.text.html('今日阅读时长已达45分钟，可领取');
				if( self.data.gifts[i].acquired===true ){
					self.already.eq(i-1).show();
				}else{
					self.get.eq(i-1).show();
				};
			}else{
				self.text.html(`今日还需阅读：<br/>${Math.ceil(self.data.gifts[1].timeleft/1000/60)}分钟`);
				self.disabled.eq(i-1).show();
			}
		}else{
			var time = [5,15,30]
			var cc = self.gift.eq(i-1).find('.cc');
			self.gift.eq(i-1).find('.dd').hide();
			if( self.data.gifts[i].timeleft<=0 ){
				cc.html(`阅读时长已满${time[i-2]}小时`);
				if( self.data.gifts[i].acquired===true ){
					self.already.eq(i-1).show();
				}else{
					self.get.eq(i-1).show();
				};
			}else{
				var hours = Math.floor( self.data.gifts[i].timeleft/1000/3600 );
				var minutes = Math.ceil( self.data.gifts[i].timeleft/1000/60 - hours*60 );
				cc.html(`还需阅读${hours}小时${minutes}分钟`);
				self.disabled.eq(i-1).show();
			}
		}
	},
	showMask: function(i){
		var self = this;
		var name = self.ios?'阅券':'书券';
		self.square.html('');
		self.desc.css({textAlign:'left'});
		self.pinkBtns.hide();
		self.close.hide();
		switch (i) {
			case 'none':
				self.info.html('无抽奖机会');
				self.desc.html('参与每日任务和累计阅读时长可获得抽奖机会');
				self.gotIt.show();
				break;
			case 1:
				self.info.html('恭喜你获得<span>1次</span>抽奖机会');
				self.desc.html('赶紧去抽奖，iPhone6，小米手环等奖品等着你');
				self.gotIt.show();
				break;
			case 2:
				self.info.html(`恭喜你获得<br/><span>2次</span>抽奖机会、<span>50</span>${name}`);
				self.desc.html(`50${name}已及时到账，15天到期，到期将不能使用`);
				self.gotIt.show();
				break;
			case 3:
				self.info.html(`恭喜你获得<br/><span>3次</span>抽奖机会、<span>100</span>${name}`);
				self.desc.html(`100${name}已及时到账，15天到期，到期将不能使用`);
				self.gotIt.show();
				break;
			case 4:
				self.info.html(`恭喜你获得<span>4次</span>抽奖机会、<span>200</span>${name}和<span>200元</span>沪江学习卡`);
				self.desc.html(`200${name}已及时到账，15天到期，到期将不能使用`);
				self.help.html(`<img class="query" src="img/query.png"/> 查看如何使用学习卡`);
				self.close.show();
				self.help.show();
				break;
			case 'how':
				self.info.html('如何使用学习卡？');
				self.desc.html('');
				self.gotIt.show();
				break;
			case 'get0':
				self.square.html('<img src="img/square_0.png">');
				self.info.html('恭喜你获得<span>iPhone6</span>');
				self.desc.html('务必填写正确的联系方式，方便客服与你联系');
				self.write.show();
				self.close.show();
				break;
			case 'get1':
				self.square.html('<img src="img/square_1.png">');
				self.info.html('恭喜你获得<span>10成长值</span>');
				self.desc.css({
					textAlign: 'center'
				})
				self.desc.html('10成长值已及时到账');
				self.gotIt.show();
				break;
			case 'get2':
				self.square.html('<img src="img/square_2.png">');
				self.info.html('恭喜你获得<span>金士顿U盘</span>');
				self.desc.html('务必填写正确的联系方式，方便客服与你联系');
				self.write.show();
				self.close.show();
				break;
			case 'get3':
				self.square.html('<img src="img/square_3.png">');
				self.info.html('恭喜你获得<span>5书券</span>');
				self.desc.html('5书券已及时到账，15天到期，到期将不能使用');
				self.gotIt.show();
				break;
		}
		self.mask.show();
	},
	draw: function(){
		var self = this;
		if( !self.inDrawing ){
			self.inDrawing = true;
			self.trophies.css({
				background: 'transparent'
			});
			self.trophies.eq(0).css({
				background: 'url(img/orange_bg.png) no-repeat',
				backgroundSize: '100%'
			});
			var current = 0;
			var cycle = 0;
			var result = 3;//Math.round( Math.random()*7 );
			var duration = 100;
			function move(){
				current++;
				if(current===8){
					current = 0;
					cycle++;
				};
				self.trophies.css({
					background: 'transparent'
				});
				self.trophies.eq(current).css({
					background: 'url(img/orange_bg.png) no-repeat',
					backgroundSize: '100%'
				});
				duration += 10;
				if( cycle===3&&current===result ){
					setTimeout(function(){
						self.showMask('get'+current);
						self.data.chance--;
						self.updateChance();
						self.inDrawing = false;
					},1000);
				}else{
					setTimeout(move,duration);
				}
			}
			setTimeout(move,duration);
		};
	},
	listen: function(){
		var self = this;

		self.get.on('click',function(){
			var i = $(this).index('.get') + 1;
			self.data.gifts[i].acquired = true;
			self.data.chance += i;
			self.updateGift(i);
			self.updateChance();
			self.showMask(i);
		})
		//点击“抽奖”时：
		self.btn.on('click',function(){
			if(self.data.chance>0){
				self.draw();
			}else{
				self.showMask('none');
			}
		});
		//点击“我知道了”时：
		self.gotIt.on('click',function(){
			self.mask.hide();
		})
		self.close.on('click',function(){
			self.mask.hide();
		})
		self.help.on('click',function(){
			self.showMask('how');
		})
	}
}



new App({
	elem: document.getElementsByTagName('body')[0]
})