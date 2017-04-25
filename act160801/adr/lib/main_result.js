import './rem.js';

function App(config){
	this.elem = config.elem;
	this.obj = $(this.elem);

	this.result = this.obj.find('.result');
	this.list_1 = this.obj.find('.list-1');
	this.list_2 = this.obj.find('.list-2');
	this.list_3 = this.obj.find('.list-3');
	this.list_4 = this.obj.find('.list-4');

	this.testMode = true;
	//根据document.title判断该页面是安卓版还是ios版。
	this.ios = document.title==='ios'?true:false;

	this.data = null;

	this.init();
}

App.prototype = {
	init: function(){
		//通知服务器用户进入了index.html页面。
		//Local.forceLog( common.param('act_f'),'index' );

		//从服务器获取数据。
		this.getData();
	},
	renderList: function(items){
		function item(i){
			var __item = `
				<ul class="result-item">
					<li class="avatar" style="background: url(img/round.png); background-size: 100%;">
						<div class="avatar-img">
							<img src="${items[i].avor}"/>
						</div>
					</li>
					<li class="name">
						${items[i].name}
					</li>
					<li class="coin">
						消耗书币：<span>${items[i].score}</span>
					</li>
				</ul>
			`;
			return __item;
		}
		this.list_1.append( item(0) );
		this.list_2.append( item(1)+item(2) );
		this.list_3.append( item(3)+item(4)+item(5) );
		this.list_4.append( item(6)+item(7)+item(8)+item(9) );
	},
	getData: function(){
		var self = this;
		self.result.show();
		// Local.reqaObj( common.server()+'pkg160801/init', function(data) {
		// 	console.log(data);

		// 	self.data = data;

		// 	// 渲染中奖用户的列表：
		// 	self.renderList( data.rankList );
		// 	self.result.css({
		// 		transition: '0s',
		// 		transform: 'translate3d(0,0,0)'
		// 	})
		// 	self.result.show();

		// }, [], function() {
		// 	Local.showToast("网络异常，请稍候重试");
		// }, 1);
	}
}



new App({
	elem: document.getElementsByTagName('body')[0]
})