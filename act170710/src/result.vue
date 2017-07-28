<template>
	<div id="app">
		<div class="exchange">
			  <div class="states"><img src="src/images/allRight.png"></div>
			  <div class="explain">成功兑换<span>6</span>书券，已自动发放至账户
			    <p>书券可直接购买书籍，1书券=1书币完美阅读！</p>
			</div>
		</div>
		<div class="exchangeList">
		  <div class="newtitle">
		    <p>本周畅销书<em class="newtl"></em><em class="newtr"></em></p>
		  </div>
  		  <ul class="booklist">
        	 <li class="active"> 
          		<div class="bagCover"><img src="img/book100126.jpg"></div>
	            <div class="bagDetail">
		            <h3>1.嫡女惊华：倾世小魔妃倾世小魔妃倾世小魔妃倾世小魔妃倾世小魔妃倾世小魔妃倾世小魔妃倾世小魔妃倾世小魔妃</h3>
		            <p>都市丨CHEN喜乐<span class="popul">3.8万热销</span></p>
		            <p>在纷纷扰扰的江湖中，笑看武林纷乱！</p>
	          </div>
            </li>
        </ul>
	</div>
</template>
<script type="text/javascript">
	import "./css/index";
	export default {
		data(){
			return{
		 		plat:window.pt
			}
		},
		created(){
	 		this.init();
	 	},
	 	methods:{
	 		init(){
	 			var server = this.plat == "ios" ? "https://ptcommon.reader.qq.com/v6_3_9/nativepage/readTime/getWeekExchangeInfo?c_platform=ioswp" : "http://ptcommon.reader.qq.com/v6_3_9/nativepage/readTime/getWeekExchangeInfo";
	 				Local.reqaObj(server, data => {
						if(data.code==0){
							
						}
					}, [], function() {
						Local.showToast("网络异常，请稍候重试");
					}, 1);				
	 			}
	 		}
		}
	};
</script>	
