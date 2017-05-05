<template>
<div class="resultpage">
	<div class="hua"></div>
	<div class="resultbox">
		<img :src="resultdata.resulenum==0?'../adr/public/images/noquan.png':'../adr/public/images/quan.png'" alr="jptu" />
		<div class="answerok" v-show="resultdata.resulenum!=0">
			<h4>恭喜你，答对{{ resultdata.resulenum }}道题，获得{{ resultdata.resulenum*quannum }}书券 </h4>
		    <p>书券已到账，可以去账户中查看</p>
		</div>
		<div class="answerno" v-show="resultdata.resulenum==0">
			你错过一大波书券／阅券，<br>期待下次活动吧
		</div>
		<div class="quersour">题目来自于这2本书，感兴趣就去阅读吧！</div>
		<ul class="Resbooklist">
			<li v-for="booklist in resultdata.resultbooks">
				<img :src="booklist.bookface" @click="gobook(booklist.bid)" />
				<p class="bookname">{{ booklist.bookname }}</p>
				<p>{{ booklist.author }}</p>
			</li>
		</ul>
	</div>	
</div>
</template>
<script>
	module.exports = {
		props:['resultdata','quannum'],
		data: function(){
			return {
			}
		},
		computed:{
			styleObj:function(){
				return {
					sourttbg:{
						backgroundImage:"url("+this.resultstyle.qsbg+")",
						color:this.resultstyle.qsftcol
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
