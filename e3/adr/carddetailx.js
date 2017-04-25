function fillContent(data) {
var _str='';
_str+='<div class="mask"></div>';
_str+='<div class="pop_cnt">';
_str+='<div class="close"><b></b></div>';
_str+='<div class="pop_title"></div>';
_str+='<div class="w">';

_str+='</div>';
_str+='</div>';
_str+='<div class="cnt">';
_str+='<ul>';
_str+='<li id="cardshow">';
if(data.prize > 0) {
_str+='<div class="card_in"><img src="images/a'+data.prize+'.png"></div>';
_str+='<div class="card_w">已刮开，恭喜您刮中'+data.prizeName+'。</div>';
} else if(data.prize == 0 && data.used == "true") {
_str+='<div class="card_in"><img src="images/not.png"></div>';
_str+='<div class="card_w">已刮开，没中奖</div>';
} else if(data.expired == "true") {
_str+='<div class="card_in"><img src="images/expired.png"></div>';
_str+='<div class="card_w">很抱歉，此刮刮卡己过期。</div>';
} else {
_str+='<div class="scratch_area" id="wScratchPad"></div>';
_str+='<div class="card_no">';
_str+='<a href="javascript:CardDetail.startScratch(\''+data.lid+'\');">';
_str+='<span>开始刮奖</span>';
_str+='</a>';
_str+='</div>';
_str+='<div id="hide"></div>';
_str+='<div class="card_w">未刮开，马上开始刮奖吧！</div>';
}
_str+='</li>';
_str+='</ul>';
_str+='</div>';
return _str;
}

