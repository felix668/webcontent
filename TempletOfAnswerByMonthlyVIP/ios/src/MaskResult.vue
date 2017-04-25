<template>
<div class="resultpage">
	<div class="hua"></div>
	<div class="resultbox" :style="styleObj.cardStyle">
	    
		<img :src="resultdata.rewardimg[0]" alr="jptu" />
		<div class="answerok" v-show="resultdata.resulenum!=0">
			<h4 :style="{ color:redcol }">恭喜你，答对{{ resultdata.resulenum }}道题，获得{{ resultdata.resulenum*5 }}书券 </h4>
		    <p :style="{ color:ftcol }">书券已到账，可以去账户中查看</p>
		</div>
		<div class="answerno" v-show="resultdata.resulenum==0" :style="{ color:redcol }">
			你错过一大波书券／阅券，<br>期待下次活动吧
		</div>
		<div class="quersour" :style="styleObj.sourttbg">题目来自于这2本书，感兴趣就去阅读吧！</div>
		<ul class="Resbooklist">
			<li v-for="booklist in resultdata.resultbooks">
				<img :src="booklist.bookface" @click="gobook(booklist.bid)" />
				<p :style="{color:resultdata.bnamecol}">{{ booklist.bookname }}</p>
				<p :style="{color:resultdata.bauthorcol}">{{ booklist.author }}</p>
			</li>
		</ul>
	</div>	
</div>
</template>
<script>
	module.exports = {
		props:['cardbg','resultdata','ftcol','redcol'],
		data: function(){
			return {
			}
		},
		computed:{
			styleObj:function(){
				return {
					sourttbg:{
						backgroundImage:"url("+this.resultdata.qsbg+")",
						color:this.resultdata.qsftcol
					},
					cardStyle:{
						backgroundImage:"url("+this.cardbg+")"
					},
				};
			}
		},
		methods: {
			gobook:function(bid){
			    //ABook.gotoRead(bid);
				console.log(bid);
			}
		}
		
	}
</script>
