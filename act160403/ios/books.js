var Books = {};
function init() {
	Books.fillPage();
}

function nologin() {
	$(".nologin").show();
	$(".main").hide();
}

Books.fillPage = function() {
	Local.reqaObj(server() + "sum?act_f=" + param("act_f"), function(data) {
		// 处理初始化数据
		console.log(data);
		if (data.isLogin) {
			initpage(data.u);
			initgene(data.u);
		} else {
			nologin();
		}

	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
initgene = function(u) {
	Local.reqaObj(serverRoot() + "api/gene?u=" + u, function(gdata) {
		// 处理初始化数据
		console.log("基因", gdata);
		var data = gdata.tags;
		var lenth = $(".gene_box .classify").length;
		for (var i = 0; i < lenth; i++) {
			if (i >= data.length)
				break;
			var num = i + 1;
			$('.class' + num + ' .classify_name').text(data[i].tagName);// 基因名
		}
	}, [], function() {
	}, 1);
	Local.reqaObj(serverRoot() + "api/user?type=2&u=" + u, function(gdata) {
		// 处理初始化数据
		console.log("头像", gdata);
		if (gdata.users) {
			var me = gdata.users[0];
			me && $("#userface").attr('src', me.avor);
		}
	}, [], function() {
	}, 1);
}
initpage = function(u) {
	Local.reqaObj(serverRoot() + "api/rec?u=" + u, function(data) {
		// 处理初始化数据
		console.log("书籍", data);
		$("#times").text(data.date);
		if (data.rec) {
			$('#b1').append(template('b1_t', {
				books : data.rec.slice(0, 3)
			}));
			$('#b2').append(template('b2_t', {
				books : data.rec.slice(3, 6)
			}));
			$('#b3').append(template('b3_t', {
				books : data.rec.slice(6, 10)
			}));
		}
	}, [], function() {
	}, 1);
}