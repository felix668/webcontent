var cookie = {};

cookie.addCookie = function (name,value,expiresMins){ 
var cookieString=name+"="+escape(value); 
if(expiresMins>0){ 
var date=new Date(); 
date.setTime(date.getTime+expiresMins*60*1000); 
cookieString=cookieString+"; expires="+date.toGMTString(); 
} 
document.cookie=cookieString; 
} 

cookie.getCookie = function(name){ 
var strCookie=document.cookie; 
var arrCookie=strCookie.split("; "); 
for(var i=0;i<arrCookie.length;i++){ 
var arr=arrCookie[i].split("="); 
if(arr[0]==name)return arr[1]; 
} 
return ""; 
} 

cookie.deleteCookie = function(name){ 
var date=new Date(); 
date.setTime(date.getTime()-10000); 
document.cookie=name+"=v; expires="+date.toGMTString(); 
} 