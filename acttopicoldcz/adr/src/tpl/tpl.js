const fs = require('fs');
const path = require('path');

var config = [{
  name: 'index_first',
  ztype: 'adr',
  config: 'adr first charge monthly',
  no: 0,
  title: '充值送书券 包月加倍领',
},{
	name: 'index',
  ztype: 'adr',
  config: 'adr charge monthly',
  no: 1,
  title: '充值送书券 包月加倍领',
},{
  name: 'charge_first',
  ztype: 'adr',
  config: 'adr first charge',
  no: 2,
  title: '你充我赠',
},{
  name: 'charge',
  ztype: 'adr',
  config: 'adr charge',
  no: 3,
  title: '你充我赠',
},{
  name: 'monthly',
  ztype: 'adr',
  config: 'adr monthly',
  no: 4,
  title: '包月特权加倍享',
},{


  name: 'index_first',
  ztype: 'ios',
  config: 'ios first charge monthly',
  no: 0,
  title: '充值送书券 包月加倍领',
},{
  name: 'index',
  ztype: 'ios',
  config: 'ios charge monthly',
  no: 1,
  title: '充值送书券 包月加倍领',
},{
  name: 'charge_first',
  ztype: 'ios',
  config: 'ios first charge',
  no: 2,
  title: '你充我赠',
},{
  name: 'charge',
  ztype: 'ios',
  config: 'ios charge',
  no: 3,
  title: '你充我赠',
},{
  name: 'monthly',
  ztype: 'ios',
  config: 'ios monthly',
  no: 4,
  title: '包月特权加倍享', 
}]

config.forEach(a=>{
	var tpl =
`
<!DOCTYPE html>
<html config="${a.config}" page-no="${a.no}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <title>${a.title}</title>
  <link rel="stylesheet" type="text/css" href="../adr/dist/index.style.css">
</head>

<body>

  <div id="root">
  </div>

<!-- <script type="text/javascript" src="http://pingjs.qq.com/ping.js"></script>

<script type="text/javascript">
  if(typeof(pgvMain) == 'function'){
    pgvMain();
  }
</script> -->
<!-- <script type="text/javascript" src="vendor/debug.js"></script> -->
<script type="text/javascript" src="../adr/vendor/vue.min.js"></script>

${a.ztype==='adr'?
`<script type="text/javascript" src="vendor/jsbridge.js"></script>
<script type="text/javascript" src="vendor/common.js"></script>
<script type="text/javascript" src="vendor/local.js"></script>
<script type="text/javascript" src="vendor/zbook.js"></script>
<script type="text/javascript" src="vendor/abook.js"></script>`
:
`<script type="text/javascript" src="../adr/vendor/ios/charm.js"></script>
<script type="text/javascript" src="../adr/vendor/ios/cfoot.js"></script>
<script type="text/javascript" src="../adr/vendor/ios/local.js"></script>
<script type="text/javascript" src="../adr/vendor/ios/zbook.js"></script>
`}

<script type="text/javascript" src="../adr/dist/index.bundle.js"></script>

<script>
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
</script>

</body>

</html>
`;
	fs.writeFileSync( path.resolve( __dirname,`${a.ztype==='adr'?'../../':'../../../ios/'}${a.name}.html` ),tpl );
})