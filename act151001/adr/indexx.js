function tipContent(data) {
var _str='';
if(data.ret==1){
_str+='<strong>领取体验卡失败</strong>';
_str+='<p>微信帐号不能参与活动，退出微信帐号，切换QQ登录，即可参与活动</p>';
_str+='<a href="javascript:void(0)" onclick="Index.closeTip();" class="kbtn">知道啦</a>';
}else if(data.ret==2){
_str+='<strong>领取体验卡失败</strong>';
_str+='<p>您的手机设备号异常，不能领取包月体验卡，感谢您对QQ阅读的支持。</p>';
_str+='<a href="javascript:void(0)" onclick="Index.closeTip();" class="kbtn">知道啦</a>';
}else if(data.ret==3){
_str+='<strong>领取体验卡失败</strong>';
_str+='<p>您未通过QQ会员公众号下载QQ阅读，不能参与活动，感谢您对QQ阅读的支持。</p>';
_str+='<a href="javascript:void(0)" onclick="Index.closeTip();" class="kbtn">知道啦</a>';
}else if(data.ret==4){
_str+='<strong>领取体验卡失败</strong>';
_str+='<p>您不是QQ会员，不能领取包月体验卡，感谢您对QQ阅读的支持。</p>';
_str+='<a href="javascript:void(0)" onclick="Index.closeTip();" class="kbtn">知道啦</a>';
}else if(data.ret==5||data.ret==6){
_str+='<strong>领取体验卡失败</strong>';
_str+='<p>您不是首次安装QQ阅读，不能领取包月体验卡，感谢您对QQ阅读的支持。</p>';
_str+='<a href="javascript:void(0)" onclick="Index.closeTip();" class="kbtn">知道啦</a>';
}else if(data.ret==7){
_str+='<strong>已领取过体验卡</strong>';
_str+='<p>每台手机只能领取一次哦，体验卡已发至其他QQ号的账户中。';
_str+='</p>';
_str+='<a href="javascript:void(0)" onclick="Index.closeTip();Index.disableRecieveBtn();" class="kbtn">知道啦</a>';
}else if(data.ret==8){
_str+='<strong>已领取过体验卡</strong>';
_str+='<p>每人只有一次机会哦，体验卡已发到你的账户</p>';
_str+='<a href="javascript:void(0)" onclick="Index.closeTip();Index.disableRecieveBtn();" class="kbtn">知道啦</a>';
}else if(data.ret==0){
_str+='<strong>成功领取'+data.vipCardCount+'天体验卡</strong>';
_str+='<p>您可以去我的账户查看。</p>';
_str+='<a href="javascript:void(0)" onclick="Index.closeTip();" class="kbtn">知道啦</a>';
}else{
_str+='<strong>领取体验卡失败</strong>';
_str+='<p>网络链接失败，请稍候再试</p>';
_str+='<a href="javascript:void(0)" onclick="Index.closeTip();" class="kbtn">知道啦</a>';
}

return _str;
}

