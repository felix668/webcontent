function fillContent(data) {
var _str='';

_str+='<div class="cnt">';
if(nl(data.cards)) {
_str+='<div class="card_in"><img src="images/none.png"></div>';
_str+='<div class="card_w">很遗憾，您还没有刮刮卡。<br>';
_str+='<a href="javascript:Local.go(\'rules.html\');">如何获得刮刮卡></a>';
_str+='</div>';
} else {
_str+='<ul>';
for(var i=0;i<data.cards.length;i++) {
_str+='<li>';
if(data.cards[i].used) {
_str+='<div class="fl">刮</div>';
_str+='<div class="w" onclick="javascript:Local.go(\'carddetail.html?lid='+data.cards[i].lotteryId+'&pid='+data.cards[i].prizeId+'&pname='+data.cards[i].prizeName+'&ie='+data.cards[i].expired+'&used='+data.cards[i].used+'\');">';
_str+='<span>'+data.cards[i].createDate+'   已刮开</span><br>';
if(data.cards[i].win) {
_str+='恭喜您！获得了' + data.cards[i].prizeName;
} else {
_str+='很遗憾！没有中奖，再接再励吧！';
}
_str+='</div>';
} else {
if(data.cards[i].expired){
_str+='<div class="fl yellow">刮</div>';
_str+='<div class="w">';
_str+='<span>'+data.cards[i].createDate+'   已经过期 </span><br>';
_str+='很抱歉，此刮刮卡已过期！';
_str+='</div>';
} else {
_str+='<div class="fl yellow">刮</div>';
_str+='<div class="w" onclick="javascript:Local.go(\'carddetail.html?lid='+data.cards[i].lotteryId+'&pid='+data.cards[i].prizeId+'&pname='+data.cards[i].prizeName+'&ie='+data.cards[i].expired+'&used='+data.cards[i].used+'\');">';
_str+='<span>'+data.cards[i].createDate+'    等你刮开</span><br>';
_str+='恭喜！获得刮刮卡，快来刮奖！';
_str+='</div>';
}
}
_str+='</li>';
}
_str+='</ul>';
}
_str+='</div>';
return _str;
}

