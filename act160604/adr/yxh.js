$("document").ready(function() {
	Local.showToast("123123");
	console.log("123123");
	$("#init").click(function() {
		Local.reqaObj(server() + "pkgmdos/init", function (data) {
//			alert(JSON.stringify(data));
			Local.showToast(JSON.stringify(data));
		});

	});
	$("#sign").click(function() {
		Local.reqaObj(server() + "pkgmdos/sign", function (data) {
//			alert(JSON.stringify(data));
			Local.showToast(JSON.stringify(data));
		});
	});
	$("#pick_p1").click(function() {
		Local.reqaObj(server() + "pkgmdos/pick?p=p1&phone=15201346043&corp=cm", function (data) {
//			alert(JSON.stringify(data));
			Local.showToast(JSON.stringify(data));
		});
	});
	$("#pick_p2").click(function() {
		Local.reqaObj(server() + "pkgmdos/pick?p=p2&phone=15201346043&corp=cm", function (data) {
//			alert(JSON.stringify(data));
			Local.showToast(JSON.stringify(data));
		});
	});
	$("#pick_p3").click(function() {
		Local.reqaObj(server() + "pkgmdos/pick?p=p3&phone=15201346043&corp=cm", function (data) {
//			alert(JSON.stringify(data));
			Local.showToast(JSON.stringify(data));
		});
	});
	
	$("#init_joncer_test").click(function() {
		Local.reqaObj(server() + "pkg_joncer/init", function (data) {
//			alert(JSON.stringify(data));
			Local.showToast(JSON.stringify(data));
		});
	});
	
	$("#get_data").click(function() {
		Local.reqaObj(server() + "pkg_joncer/pick", function (data) {
//			alert(JSON.stringify(data));
			Local.showToast(JSON.stringify(data));
		});
	});
	
	$("#init_160802").click(function() {
		Local.reqaObj(server() + "pkg160802/init123", function (data) {
//			alert(JSON.stringify(data));
			Local.showToast(JSON.stringify(data));
		},"123123##",function(e){
			console.log(JSON.stringify(e));
			throw JSON.stringify(e);
		});
	});
	
	$("#getData").click(function() {
		Local.reqaObj(server() + "pkg160802/pick", function (data) {
//			alert(JSON.stringify(data));
			Local.showToast(JSON.stringify(data));
		});
	});
	
	$("#setData").click(function() {
		Local.reqaObj(server() + "pkg160802/pick11", function (data) {
//			alert(JSON.stringify(data));
			Local.showToast(JSON.stringify(data));
		},"123123##",function(e){
			console.log(JSON.stringify(e));
		});
	});
});