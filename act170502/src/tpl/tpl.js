const fs = require('fs');
const path = require('path');

var vendor = {
  adr: 
    `<script type="text/javascript" src="./vendor/vue.min.js"></script>

    <script type="text/javascript" src="./vendor/adr/jsbridge.js"></script>
    <script type="text/javascript" src="./vendor/adr/common.js"></script>
    <script type="text/javascript" src="./vendor/adr/local.js"></script>
    <script type="text/javascript" src="./vendor/adr/zbook.js"></script>
    <script type="text/javascript" src="./vendor/adr/abook.js"></script>`,
  com:
    `<script type="text/javascript" src="./vendor/vue.min.js"></script>

    <script type="text/javascript" src="./vendor/com/env.js"></script>

    <script type="text/javascript" src="./vendor/com/wxshare.js"></script>
    <script type="text/javascript" src="./vendor/com/qqapi.js"></script>
    <script type="text/javascript" src="./vendor/com/sns-v1.js"></script>

    <script type="text/javascript" src="./vendor/com/androidScheme.js"></script>
    <script type="text/javascript" src="./vendor/com/iosscheme.js"></script>
    <script type="text/javascript" src="./vendor/com/native-v1.js"></script>

    <script type="text/javascript" src="./vendor/ios/charm.js"></script>
    <script type="text/javascript" src="./vendor/ios/cfoot.js"></script>
    <script type="text/javascript" src="./vendor/ios/local.js"></script>`,
  ios: 
     `<script type="text/javascript" src="./vendor/vue.min.js"></script>

    <script type="text/javascript" src="./vendor/ios/charm.js"></script>
    <script type="text/javascript" src="./vendor/ios/cfoot.js"></script>
    <script type="text/javascript" src="./vendor/ios/local.js"></script>
    <script type="text/javascript" src="./vendor/ios/zbook.js"></script>
    <script type="text/javascript" src="./vendor/ios/abook.js"></script>`,

  test:
    `<script type="text/javascript" src="../adr/vendor/vue.min.js"></script>

    <script type="text/javascript" src="../adr/vendor/adr/jsbridge.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/common.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/local.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/zbook.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/abook.js"></script>`,
};

var config = [{
  name: 'two',
  platform: 'adr',
  title: '超值好书打包买',
  config: '',
  vendor: vendor.adr,
  bundle: 'two',
  dest: path.resolve( __dirname,'../../public/two.html' ),
},{
  name: 'five',
  platform: 'adr',
  title: '好书抢购倒计时',
  config: '',
  vendor: vendor.adr,
  bundle: 'five',
  dest: path.resolve( __dirname,'../../public/five.html' ),

},{
  name: 'two_share',
  platform: 'adr',
  title: '超值好书打包买',
  config: 'share',
  vendor: vendor.com,
  bundle: 'two',
  dest: path.resolve( __dirname,'../../public/two_share.html' ),
// // },{
// //   name: 'index',
// //   platform: 'ios',
// //   title: '九州•海上牧云记',
// //   config: '',
// //   vendor: vendor.ios,
// //   bundle: 'index',
// //   dest: path.resolve( __dirname,'../../ios/index.html' )


},{
  name: 'test_0',
  platform: 'adr',
  title: 'test_0',
  config: '',
  vendor: vendor.adr,
  bundle: 'test_0',
  dest: path.resolve( __dirname,'../../public/test_0_adr.html' ),
},{
  name: 'test_0',
  platform: 'ios',
  title: 'test_0',
  config: '',
  vendor: vendor.ios,
  bundle: 'test_0',
  dest: path.resolve( __dirname,'../../public/test_0_ios.html' ),


},{
  name: 'test_1',
  platform: 'adr',
  title: 'test_1',
  config: '',
  vendor: vendor.adr,
  bundle: 'test_1',
  dest: path.resolve( __dirname,'../../public/test_1_adr.html' ),
},{
  name: 'test_1',
  platform: 'ios',
  title: 'test_1',
  config: '',
  vendor: vendor.ios,
  bundle: 'test_1',
  dest: path.resolve( __dirname,'../../public/test_1_ios.html' ),

},{
  name: 'test_1_share',
  platform: 'com',
  title: 'test_1_share',
  config: 'share',
  vendor: vendor.com,
  bundle: 'test_1',
  dest: path.resolve( __dirname,'../../public/test_1_share.html' ),
}]

config.forEach(a=>{
	var tpl =
`
<!DOCTYPE html>
<html name="${a.name}"
platform="${a.platform}" 
config="${a.config}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <meta name="format-detection" content="telephone=no, email=no"/>
  <title>${a.title}</title>
  ${process.env.NODE_ENV==='production'?
  `<link rel="stylesheet" type="text/css" href="./dist/${a.bundle}.style.css">`:``}
</head>

<body>

  <div id="root">
  </div>

  <!-- <script type="text/javascript" src="./vendor/debugger.js"></script> -->
  ${a.vendor}

  ${process.env.NODE_ENV==='production'?
  `<script type="text/javascript" src="./dist/${a.bundle}.bundle.js"></script>`:
  `<script type="text/javascript" src="./dist/${a.bundle}.bundle.dev.js"></script>`}
  
  <!-- <script type="text/javascript" src="http://pingjs.qq.com/h5/stats.js" name="MTAH5" sid="500402670" ></script> -->

  <!-- <script type="text/javascript" src="http://pingjs.qq.com/ping.js"></script>
  <script type="text/javascript">
    if(typeof(pgvMain) == 'function'){
      pgvMain();
    }
  </script> -->
  <!-- <script>
      var _mtac = {"senseHash":0,"autoReport":0};
      (function() {
        var mta = document.createElement("script");
        mta.src = "http${a.config==='ios'||a.config==='share'?'s':'s'}://pingjs.qq.com/h5/stats.js?v2.0.2";
        mta.setAttribute("name", "MTAH5");
        mta.setAttribute("sid", "500402670");
        mta.setAttribute("cid", "500402673");
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(mta, s);
      })();
  </script> -->

</body>

</html>
`;
	fs.writeFileSync( a.dest,tpl );
})