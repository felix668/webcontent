var data={
    "isLogin":true,
    "shared":true, //是否分享
    "bookpicked": 2,  //是否领取限免 领取过则为书籍
    "isVip": false,
    "inshelf": true, //是否在书架
    "read": false,  //是否满足阅读条件
    "tokenpicked": false,  //是否领取了书券  领取过则为书券数
    "code":1,
    "isguest":false,
    "tokenendtime":"2017-05-1",
    "bookendtime":"2017-05-1"
}
var page={isLogin:false,shared:false,bookpicked:false,isVip:false,inshelf:false,read:false,tokenpicked:false,isguest:false,bookendtime:"",tokenendtime:""};
module.exports=data;
// export default data;