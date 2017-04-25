const fs = require('fs');
const path = require('path');

var config = [{
	name: 'red',
  ztype: 'adr',
  title: '春节红包数据统计',
  vendor: 
    `<script type="text/javascript" src="vendor/vue.min.js"></script>
    <script type="text/javascript" src="vendor/countUp.min.js"></script>
    <script type="text/javascript" src="vendor/adr/common.js"></script>
    <script type="text/javascript" src="vendor/adr/zbook.js"></script>`,
	dest: path.resolve( __dirname,'../../red.html' )
},{
  name: 'farm',
  ztype: 'adr',
  title: '冬牧场',
  vendor: 
    `<script type="text/javascript" src="../adr/vendor/vue.min.js"></script>
    <script type="text/javascript" src="../adr/vendor/TweenMax.min.js"></script>
    <script type="text/javascript" src="../adr/vendor/canvas.js"></script>
    <script type="text/javascript" src="../adr/vendor/iscroll.js"></script>
    <script type="text/javascript" src="../adr/vendor/turnjs/jquery.min.1.7.js"></script>
    <script type="text/javascript" src="../adr/vendor/turnjs/turn.min.js"></script>

    <script type="text/javascript" src="../adr/vendor/adr/jsbridge.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/common.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/local.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/zbook.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/abook.js"></script>`,
  dest: path.resolve( __dirname,'../../farm.html' )
}]

config.forEach(a=>{
	var tpl =
`
<!DOCTYPE html>
<html ztype="${a.ztype}" config="">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <meta name="format-detection" content="telephone=no, email=no"/>
  <title>${a.title}</title>
  <link rel="stylesheet" type="text/css" href="../adr/dist/${a.name}.style.css">
</head>

<body>

  <div id="root">
  </div>

  ${a.vendor}

  <script type="text/javascript" src="../adr/dist/${a.name}.bundle.js"></script>

  <!-- <script type="text/javascript" src="http://pingjs.qq.com/ping.js"></script>
  <script type="text/javascript">
    if(typeof(pgvMain) == 'function'){
      pgvMain();
    }
  </script> -->
  <!-- <script>
    var _mtac = {"performanceMonitor":1};
    (function() {
      var mta = document.createElement("script");
      mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.2";
      mta.setAttribute("name", "MTAH5");
      mta.setAttribute("sid", "500355784");
      mta.setAttribute("cid", "500361510");
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(mta, s);
    })();
  </script> -->

</body>

</html>
`;
	fs.writeFileSync( a.dest,tpl );
})