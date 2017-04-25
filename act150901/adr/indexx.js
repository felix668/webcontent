function bookList(data,from) {
var _str='';
if(nl(data)){
return;
}
_str+='<ul class="book_list cf">';
for(var i=0;i<data.length;i++){
var book=data[i];
_str+='<li>';
_str+='<div class="bookbox">';
_str+='<img onclick="Index.openDetail('+book.id+')" src="'+book.cover+'">';
_str+='<p>'+book.title+'</p>';
_str+='<p>'+book.author+'</p>';
_str+='<a href="javascript:Index.vote('+book.id+',\''+from+'\');" class="btn_vote">投1票</a>';
_str+='</div>';
_str+='</li>';
}
_str+='</ul>';
return _str;
}

function shelfBooks(data) {
var _str='';
_str+='<div class="title"><h4>月票好书正在读</h4></div>';
_str+='<div>'+bookList(data.shelfBooks,'shelf')+'</div>';
return _str;
}

function columnBooks(data) {
var _str='';
_str+='<div class="title"><h4>原创文学风云榜</h4></div>';
_str+='<div>'+bookList(data.columnBooks,'column')+'</div>';
_str+='<a id="moreBookBtn" href="javascript:void(0);" class="btn_more">> 更多好书 <</a>';
return _str;
}

function tipContent(data) {
var _str='';
if(data.ret==-101){
_str+='<h4>书籍不存在</h4>';
_str+='<p></p>';
_str+='<a href="javascript:void(0)" onclick="vh(\'tip\')" class="btn_zdl">知道啦</a>';
}else if(data.ret==-102){
_str+='<h4>这本书不支持投月票</h4>';
_str+='<p></p>';
_str+='<p>本月月票 '+bookMonthCnt+' <span class="red">+1</span></p>';
_str+='<a href="javascript:void(0)" onclick="vh(\'tip\')" class="btn_zdl">知道啦</a>';
}else if(data.ret==-10000||data.ret==-3000){
_str+='<h4>票数不足</h4>';
_str+='<p>提升VIP等级及订阅消费<br>可获得更多月票</p>';
_str+='<a href="javascript:void(0)" onclick="vh(\'tip\')" class="btn_zdl">知道啦</a>';
}else if(data.ret==-10001||data.ret==-10002){
_str+='<h4>使用超限，投票失败</h4>';
if(data.fansLevel==10){
_str+='<p>该书盟主用户每日最多投5票<br>每月最多投5票</p>';
}else{
_str+='<p>普通VIP用户对单本作品<br>每日最多投2票<br>每月总计最多投5票</p>';
}
_str+='<a href="javascript:void(0)" onclick="vh(\'tip\')" class="btn_zdl">知道啦</a>';
}else if(data.ret==0){
_str+='<h4>投票成功</h4>';
_str+='<p>《'+data.book.title+'》</p>';
_str+='<p>本月月票 '+data.bookMonthCnt+' <span class="red">+1</span></p>';
_str+='<a href="javascript:void(0)" onclick="vh(\'tip\');Index.refreshUserMonthTicketLeft();" class="btn_zdl">知道啦</a>';
}else{
_str+='<h4>投票失败'+data.ret+'</h4>';
_str+='<p>系统繁忙，请稍候再试</p>';
_str+='<a href="javascript:void(0)" onclick="vh(\'tip\')" class="btn_zdl">知道啦</a>';
}

return _str;
}

