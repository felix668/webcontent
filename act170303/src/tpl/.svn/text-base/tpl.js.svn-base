const fs = require('fs');
const path = require('path');

var vendor = {
  adr: 
    `<script type="text/javascript" src="../adr/vendor/vue.min.js"></script>

    <script type="text/javascript" src="../adr/vendor/adr/jsbridge.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/common.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/local.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/zbook.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/abook.js"></script>`,
  com:
    `<script type="text/javascript" src="../adr/vendor/vue.min.js"></script>

    <script type="text/javascript" src="vendor/com/env.js"></script>

    <script type="text/javascript" src="vendor/com/wxshare.js"></script>
    <script type="text/javascript" src="vendor/com/qqapi.js"></script>
    <script type="text/javascript" src="vendor/com/sns-v1.js"></script>

    <script type="text/javascript" src="vendor/com/androidScheme.js"></script>
    <script type="text/javascript" src="vendor/com/iosscheme.js"></script>
    <script type="text/javascript" src="vendor/com/native-v1.js"></script>

    <script type="text/javascript" src="../adr/vendor/ios/charm.js"></script>
    <script type="text/javascript" src="../adr/vendor/ios/cfoot.js"></script>
    <script type="text/javascript" src="../adr/vendor/ios/local.js"></script>`,
  ios: 
     `<script type="text/javascript" src="../adr/vendor/vue.min.js"></script>

    <script type="text/javascript" src="../adr/vendor/ios/charm.js"></script>
    <script type="text/javascript" src="../adr/vendor/ios/cfoot.js"></script>
    <script type="text/javascript" src="../adr/vendor/ios/local.js"></script>
    <script type="text/javascript" src="../adr/vendor/ios/zbook.js"></script>
    <script type="text/javascript" src="../adr/vendor/ios/abook.js"></script>`,

  test:
    `<script type="text/javascript" src="../adr/vendor/vue.min.js"></script>
    <script type="text/javascript" src="../adr/vendor/TweenMax.min.js"></script>

    <script type="text/javascript" src="../adr/vendor/adr/jsbridge.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/common.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/local.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/zbook.js"></script>
    <script type="text/javascript" src="../adr/vendor/adr/abook.js"></script>`,
};

var config = [{
  name: 'index',
  platform: 'adr',
  title: '九州•海上牧云记',
  config: '',
  vendor: vendor.adr,
  bundle: 'index',
  dest: path.resolve( __dirname,'../../adr/index.html' ),
},{
  name: 'share',
  platform: 'adr',
  title: '九州•海上牧云记',
  config: 'share',
  vendor: vendor.com,
  bundle: 'index',
  dest: path.resolve( __dirname,'../../adr/share.html' ),
},{
  name: 'index',
  platform: 'ios',
  title: '九州•海上牧云记',
  config: '',
  vendor: vendor.ios,
  bundle: 'index',
  dest: path.resolve( __dirname,'../../ios/index.html' )


},{
  name: 'test',
  platform: 'adr',
  title: 'test',
  config: '',
  vendor: vendor.test,
  bundle: 'test',
  dest: path.resolve( __dirname,'../../adr/test.html' ),


// },{
//   batch: 'one',
//   name: 'one_share',
//   platform: 'com',
//   title: '新书推荐',
//   config: 'share',
//   vendor: vendor.com,
//   bundle: 'one',
//   dest: path.resolve( __dirname,'../../adr/one_share.html' )
// },{
//   batch: 'two',
//   name: 'two_share',
//   platform: 'com',
//   title: '新书推荐',
//   config: 'share',
//   vendor: vendor.com,
//   bundle: 'one',
//   dest: path.resolve( __dirname,'../../adr/two_share.html' )


// },{
//   batch: 'one',
//   name: 'one',
//   platform: 'ios',
//   title: '新书推荐',
//   config: '',
//   vendor: vendor.ios,
//   bundle: 'one',
//   dest: path.resolve( __dirname,'../../ios/one.html' ),
// },{
//   batch: 'one',
//   name: 'ques',
//   platform: 'ios',
//   title: '新书推荐-趣味测试',
//   config: '',
//   vendor: vendor.ios,
//   bundle: 'ques',
//   dest: path.resolve( __dirname,'../../ios/ques.html' ),
// },{
//   batch: 'one',
//   name: 'boiler',
//   platform: 'ios',
//   title: '抢先剧透',
//   config: '',
//   vendor: 
//     `<script type="text/javascript" src="../adr/vendor/vue.min.js"></script>`,
//   bundle: 'boiler',
//   dest: path.resolve( __dirname,'../../ios/boiler.html' )
// },{
//   batch: 'two',
//   name: 'two',
//   platform: 'ios',
//   title: '新书推荐',
//   config: '',
//   vendor: vendor.ios,
//   bundle: 'one',
//   dest: path.resolve( __dirname,'../../ios/two.html' ),
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
  `<link rel="stylesheet" type="text/css" href="../adr/dist/${a.bundle}.style.css">`:``}
</head>

<body>

  <div id="root">
  </div>

  <!-- <script type="text/javascript" src="../adr/vendor/debugger.js"></script> -->
  ${a.vendor}

  ${process.env.NODE_ENV==='production'?
  `<script type="text/javascript" src="../adr/dist/${a.bundle}.bundle.js"></script>`:
  `<script type="text/javascript" src="/adr/dist/${a.bundle}.bundle.js"></script>`}
  
  <!-- <script type="text/javascript" src="http://pingjs.qq.com/h5/stats.js" name="MTAH5" sid="500402670" ></script> -->

  <!-- <script type="text/javascript" src="http://pingjs.qq.com/ping.js"></script>
  <script type="text/javascript">
    if(typeof(pgvMain) == 'function'){
      pgvMain();
    }
  </script> -->
  <script>
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
  </script>

</body>

</html>
`;
	fs.writeFileSync( a.dest,tpl );
})