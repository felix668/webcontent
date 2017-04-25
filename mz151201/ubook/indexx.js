function winners() {
var _str='';
Index.shuffle(Index.winners);
for(var i=0;i<Index.winners.length&&i<3;i++){
_str+='<li>用户<span>'+Index.winners[i].uin+'</span>获得'+Index.winners[i].prize+'</li>';
}
return _str;
}

function bookList(data) {
var _str='';
if(!nl(data.bookList)){
var bookList=data.bookList;
for(var i=0;i<bookList.length;i++){
_str+='<li><a href="javascript:Index.goToIntro('+bookList[i].id+')"><img src="'+bookList[i].cover+'"><p>'+bookList[i].title+'</p></a></li>';
}
}
return _str;
}

