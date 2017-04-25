function fillContent(data) {
var _str='';
_str+='<div class="mask"></div>';
_str+='<div class="pop_cnt">';
_str+='<div class="close"><b></b></div>';
_str+='<div class="pop_title"></div>';
_str+='<div class="w">';

_str+='</div>';
_str+='</div>';
_str+='<div class="top"><div>6月12日15:00-6月19日15:00</div><img src="images/top.png"></div>';
_str+='<div class="cnt">';
_str+='<div class="gift1"><img src="images/gift1.png"></div>';
_str+='<div class="content">';
_str+='<div class="pay"><a href="javascript:Local.doCharge();">马上充值</a></div>';

_str+='<div class="gift2"><img src="images/gift2.png"></div>';
_str+='<div class="cnt2">';
_str+='<div class="navi">';
_str+='<a href="javascript:go(\'mycard.html\');">我的刮刮卡</a>';
_str+='<a href="javascript:go(\'rules.html\');">活动规则</a>';
_str+='</div>';
_str+='<div class="bg">';
_str+='<div class="sc_cnt">';
_str+='<div class="sc_cnt2">';
_str+='<div class="w">';
_str+='充值满100元，送刮刮卡一张<br>';
_str+='百分百中奖！';
_str+='</div>';
_str+='<a href="javascript:LotteryIndex.startScratch();">开始刮奖</a>';
_str+='</div> ';
_str+='<div class="scratch_area" id="wScratchPad"></div>';
_str+='</div> ';
_str+='</div> ';
_str+='</div> ';
_str+='<div class="gift2"><img src="images/gift3.png"></div>';
_str+='<div class="notice">从未在腾讯文学<a href="javascript:Local.doCharge();">充值</a>过的用户，在活动期间<br>';
_str+='充值任意金额，即获新手礼包抽奖资格，<br>';
_str+='有机会获得郭敬明、鲍鲸鲸亲笔签名书、移动充电宝。</div>';
_str+='<div class="aw_cnt">';
_str+='<a href="javascript:Local.doCharge();"><img src="images/aw.png"></a>';
_str+='</div> ';
_str+='</div> ';
_str+='</div> ';

return _str;
}

