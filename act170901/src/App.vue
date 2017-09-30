<template>
	<div id="app">
		<load v-if="loading"></load>
		<over v-if="over"></over>
		<template v-if="!over">
			<img id="top" src="src/images/top.png" alt=""></img>
			<div class="active-details">
				<div>
					<p class="first">活动时间：即日起至9月22日</p>
					
					<span>找到书内的主人公，用他们的人设写个小番外呗！</span>
					<span>初次见面？人物设定？乌龙事件？大结局？</span>
					<span>笔锋一转来个神转折？</span>
				
					
					<p class="last">海量{{plat=="ios"?"阅":"书"}}券，个性实物礼品等着你哟！</p>
				</div>
				
			</div>
			<div class="book-list">
				<img class="title" src="src/images/title.png" alt=""></img>
				<ul id="list-content">
					<li @click="goLink(1)">
							
							<img class="cover" src="src/images/cover1.png" alt="">
							<div>
								<p>逆天九小姐：帝尊，别跑！</p>
								<span>水清竹</span>
							</div>
							<img class="link" src="src/images/link.png" alt="">
							<img class="line" src="src/images/line.png" alt="">
					
					</li>
					<li @click="goLink(2)">
					
							<img class="cover" src="src/images/cover2.png" alt="">
							<div>
								<p>恶魔的专属：丫头，你好甜</p>
								<span>默小水</span>
							</div>
							<img class="link" src="src/images/link.png" alt="">
							<img class="line" src="src/images/line.png" alt="">
						
					</li>
					<li @click="goLink(3)">					
							<img class="cover" src="src/images/cover3.png" alt="">
							<div>
								<p>暖婚契约，大叔，笑一个</p>
								<span>寻君</span>
							</div>
							<img class="link" src="src/images/link.png" alt="">
							<img class="line" src="src/images/line.png" alt="">
						</a>
					</li>
					<li @click="goLink(4)">
				
							<img class="cover" v-if="plat=='ios'" :src="imgData.ios" alt="">
							<img class="cover" v-if="plat!='ios'" :src="imgData.ad" alt="">
							<div>
								<p>呆萌小萝莉：高冷男神太腹黑</p>
								<span>忘记呼吸的猫</span>
							</div>
							<img class="link" src="src/images/link.png" alt="">
							<img class="line" src="src/images/line.png" alt="">
					
					</li>
					<li @click="goLink(5)">
						
							<img class="cover" src="src/images/cover5.png" alt="">
							<div>
								<p>公子风流</p>
								<span>上山打老虎额</span>
							</div>
							<img class="link" src="src/images/link.png" alt="">
							<img class="line" src="src/images/line.png" alt="">
						
					</li>
					<li @click="goLink(6)">
						
							<img class="cover" src="src/images/cover6.png" alt="">
							<div>
								<p>三国之召唤猛将</p>
								<span>青铜剑客</span>
							</div>
							<img class="link" src="src/images/link.png" alt="">
							<img class="line" src="src/images/line.png" alt="">
					
					</li>
					<li @click="goLink(7)">
					
							<img class="cover" src="src/images/cover7.png" alt="">
							<div>
								<p>楚乔传原著：11处特工皇妃</p>
								<span>潇湘冬儿</span>
							</div>
							<img class="link" src="src/images/link.png" alt="">
							<img class="line" src="src/images/line.png" alt="">
						
					</li>
					<li @click="goLink(8)">
					
							<img class="cover" src="src/images/cover8.png" alt="">
							<div>
								<p>白袍总管</p>
								<span>萧舒</span>
							</div>
							<img class="link" src="src/images/link.png" alt="">
						
					</li>
					<img class="bottle" src="src/images/bottle.png" alt="">
				</ul>
			</div>
			<img id="bottom" src="src/images/bottom.png" alt="">
		</template>
	</div>
</template>
<style src="./css/app.scss" lang="sass"></style>
<script>
	import load from "./components/load"
	import over from "./components/over"
	import data from "./js/data"

	export default {
		data: function () {
			return {
				plat: window.pt,
				loading: true,
				over: false,
				isLogin: true,
				isguest: false,
				ut: common.param("ut"),
				imgData:{
					ios: 'src/images/cover4.png',
					ad: 'src/images/cover2.1.jpg',
				}

				
			}
		},
		created() {
			this.initPage()
		},
		computed:{
			
			
		},
		methods: {
			initPage() {
				Local.forceLog(common.param('act_f'),"initPage");	

				if (process.env.NODE_ENV == 'local') {
					this.loading = false
					
				} else {
					this.loading = false
					// Local.reqaObj(`${common.server()}newuser/day30init?ut=${this.ut}`, data => {
					
				}
				// var shareObj = {
				//     url : common.sharefront()+"act170901/index.html",
				//     cover : common.sharefront()+"act170901/images/cover1.png",
				//     title : "大奖抽不停",
				//     intro : "快来一起领QQ阅读红包爵迹电影票和签名照"
				//   };
			 //  Local.setIconForShareing(shareObj.url, shareObj.cover, shareObj.title,shareObj.intro);
			},
			goLink(num){
				Local.forceLog(common.param('act_f'),"clickPage"+num);		
				if(num==1){
					window.location.href = "uniteqqreader://nativepage/comment/detail?bid=13714263&commentid=a0000000vXhn1drbxa000LXz&ctype=0"
				}else if(num==2){
					window.location.href = "uniteqqreader://nativepage/comment/detail?bid=13430981&commentid=a0000000uM0j1drRG300016s&ctype=0"
				}else if(num==3){
					window.location.href = "uniteqqreader://nativepage/comment/detail?bid=809436&commentid=a00000003OZQ1drZ1A000ENr&ctype=0"
				}else if(num==4){
					window.location.href = "uniteqqreader://nativepage/comment/detail?bid=19351804&commentid=a0000001JCHs1draxI000J2L&ctype=0"
				}else if(num==5){
					window.location.href = "uniteqqreader://nativepage/comment/detail?bid=500267&commentid=a0000000268p1dra3Z000Gn3&ctype=0"
				}else if(num==6){
					window.location.href = "uniteqqreader://nativepage/comment/detail?bid=523730&commentid=a00000002CFG1draHI000HMF&ctype=0"
				}else if(num==7){
					window.location.href = "uniteqqreader://nativepage/comment/detail?bid=126658&commentid=a00000000Wws1drX4j0009zv&ctype=0"
				}else if(num==8){
					window.location.href = "uniteqqreader://nativepage/comment/detail?bid=808100&commentid=a00000003ODs1drXdh000BAO&ctype=0"
				}
			}
			
			
		},
		components: {
			load,
			over
		}
	}
</script>