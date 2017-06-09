var NewUserGiftFree10 = {};
NewUserGiftFree10.url = '';
NewUserGiftFree10.name = 'newUserGiftFree10';
NewUserGiftFree10.qq = '';
NewUserGiftFree10.qm = '';
NewUserGiftFree10.login = '';
NewUserGiftFree10.giftId = '';
NewUserGiftFree10.getGiftUrl = '';
NewUserGiftFree10.last = '';

function init() {
	loadTpl('tpl/newUserGuide.html');
	NewUserGiftFree10.giftId = param("giftId");
	//+"&skey=Mx864GoBJ4&timi=3571919126"
	NewUserGiftFree10.url =  server() + 'pkg170505/init2';
	console.log(NewUserGiftFree10.url);
	if(Local.iOS){
		NewUserGiftFree10.getGiftUrl = 'https://newcommon.reader.qq.com/common/newUser/getGift?giftId=10&c_platform=ioswp';
	}else{
		NewUserGiftFree10.getGiftUrl = 'https://newcommon.reader.qq.com/common/newUser/getGift?giftId=10';
	}
	NewUserGiftFree10.getContent();
}

NewUserGiftFree10.getContent = function() {
	setParam("tf", "2");
	Local.reqaObj(NewUserGiftFree10.url, function(dataObj) {
		NewUserGiftFree10.login = dataObj.isLogin;
		if(!dataObj.isLogin) {
			Local.login();
			return;
		}
		if(dataObj.code == 1) {
			NewUserGiftFree10.qq = dataObj.qq;
			dataObj.giftId = NewUserGiftFree10.giftId;
			NewUserGiftFree10.last= dataObj.last;
			ih("timeDiv", template("t1", dataObj));
			if(dataObj.last != "") {
				setTimeCountDown();
				$('.countDown,.countInfo').show();
				$('.getGoods').hide();
			};
			ih("content", template("t2", dataObj));
			h5Own();
			ZBook.bindtouchall();
		}
	}, ['content'], function() {}, 1);
};

//将1位数字变成两位数字
function toDouble(n) {
	if(n >= 0 && n < 10) {
		return '0' + n;
	} else {
		return n;
	}
}

function toBookDetail(id) {
	window.location.href = 'uniteqqreader://nativepage/book/detail?bid=' + id;
}
//加书架

function addNewUserBookToShelf(id, type) {
	var addBookShelf = {};
	addBookShelf.url = server() + 'pkg170505/addShelf?b=' + id;
	Local.reqaObj(addBookShelf.url, function(dataBook) {
		if(!isLogin) {
			Local.login();
			return;
		}
		var bookInfo = {
			bid: id
		};
		Local.addOneToShelf(bookInfo, 0);
	}, [], function() {}, 1);
	ih("shelf" + type + id, "已在书架");
	addClass("shelf" + type + id, "disable");
	id("shelf" + type + id).onclick = function() {};
}

//页面调用的js方法
function h5Own() {
	var indx = 0,
		curPos, touchStartX, touchStartY;
	var wid = document.body.clientWidth;
	//设置最低高度，以防出现不能滑屏的情况
	var heig = document.body.clientHeight;
	var tabsHeig = heig - ($('.banner').height() + $('.tabsMenu').height());
	$('.tabsBookList').css('min-height', tabsHeig);
	var len = $('.tabsContent>li').length - 1;
	var aTabs = $('.tabsMenu li');
	scroll();
	//	点击切换tab
	for(var i = 0; i < aTabs.length; i++) {
		aTabs[i].index = i;
		aTabs[i].onclick = function() {
			indx = this.index;
			scroll();
		}
	}
	//	滑动切换
	$('.tabsBookList').on('touchstart', function(ev) {
		touchStartX = ev.targetTouches[0].pageX;
		touchStartY = ev.targetTouches[0].pageY;
		$('.bookTab').on('touchmove', function(ev) {
			var disX = ev.targetTouches[0].pageX - touchStartX;
			var disY = ev.targetTouches[0].pageY - touchStartY;
			if(Math.abs(disX) > Math.abs(disY)) {
				ev.preventDefault();
			}
		})
		$('.bookTab').on('touchend', function(ev) {
			var offsetX = ev.changedTouches[0].pageX - touchStartX;
			var offsetY = ev.changedTouches[0].pageY - touchStartY;
			if(offsetX > 60 && Math.abs(offsetX) > Math.abs(offsetY)) {
				indx--;
				if(indx <= 0) {
					indx = 0;
				}
			} else if(offsetX < -60 && Math.abs(offsetX) > Math.abs(offsetY)) {
				indx++;
				if(indx >= len) {
					indx = len;
				}
			}
			scroll();
			$('.bookTab').off('touchmove touchend');
		})
	})
	//	滑动切换动作
	function scroll() {
		$('.tabsContent').css('-webkit-transform', 'translateX(' + -wid * indx + 'px)');
		$('.tabsContent').css('height', $('.tabsContent>li').eq(indx).height() + 'px');
		$('#liCur').css('-webkit-transform', 'translateX(' + 2.4 * indx + 'rem)');
		for(var i = 0; i < aTabs.length; i++) {
			aTabs[i].className = '';
		}
		aTabs[indx].className = 'cur';
	}
}

var sh;

function setTimeCountDown() {
	timeCountDown();
	sh = window.setInterval(timeCountDown, 1000);
}
var nowTime =0;
//倒计时
function timeCountDown() {
	var endTime = new Date(NewUserGiftFree10.last.replace(/-/g,'/'));
	var nowTime = new Date();
	var leftsecond = Math.floor((endTime.getTime() +864000000 - nowTime.getTime()) / 1000);
	console.log(leftsecond);
	if(leftsecond == "undefined" || leftsecond == "" || isNaN(leftsecond) || leftsecond <= 0) {
		$('#countDownDay').html("00");
		$('#countDownHour').html("00");
		$('#countDownMin').html("00");
		clearInterval(sh);
	} else {
		timeDay = parseInt(leftsecond / 3600 / 24);
		timeHour = parseInt((leftsecond / 3600) % 24);
		timeMin = parseInt((leftsecond / 60) % 60);

		$('#countDownDay').html(toDouble(timeDay));
		$('#countDownHour').html(toDouble(timeHour));
		$('#countDownMin').html(toDouble(timeMin));
	}
}
//头部显示切换
function gotoCount() {
	//点击按钮请求领取信息
	Local.reqaObj(NewUserGiftFree10.getGiftUrl, function(data) {
		if(data.code == 0) {
			$('.countDown,.countInfo').show();
			$('.getGoods').hide();
			var timeCount = new Date().getTime()+864000000;
			NewUserGiftFree10.last = new Date(timeCount);
			setTimeCountDown();
		} else {
			Local.showToast(data.rookieMsg);
			console.log(data.rookieMsg);
		}
		
	}, [], function() {}, 1);
}