<template>
	<div class="$parent.chatshowchat">
		<div class="chatbox">
			<div class="closechat" @click="closechat"></div>
			<p>{{ username }} 加入群聊</p>
			<div class="chatlist" id="wrapper">
				<div id="scroller">
					<div id="scrolling">
						<ul ref="list">
							<li v-for="chatlist in chatinfo" >
								<div class="face_name">
									<img :src="chatlist.cover" >
									{{ chatlist.nname }}
								</div>
								<div class="chatinfo">
									{{ chatlist.info }}
									<div class="imgbox">
										<img v-for="imgs in chatlist.infoimg" :src="imgs.imgface" >
									</div>
								</div>
							</li>
						</ul>
						<div class="govote" @click="closechat"><span>立刻去投月票</span></div>
						<div class="h7"></div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {
				chatinfo:[{
					cover:'src/images/face1.png',
					nname:'小生',
					info:'猫腻大神，好喜欢你的书',
					infoimg:''
				},{
					cover:'src/images/face2.png',
					nname:'猫腻',
					info:'谢谢，喜欢我的书可以给我投月票哦',
					infoimg:''
				},{
					cover:'src/images/face3.png',
					nname:'见见',
					info:'投月票有啥用？',
					infoimg:''
				},{
					cover:'src/images/face4.png',
					nname:'唐家三少',
					info:'月票是对你喜欢的作者的回馈，投月票，会提升作者月票榜排名，激励大神写出更好的作品哦～',
					infoimg:[{
						imgface:'src/images/tkimg1.jpg'
					},{
						imgface:'src/images/tkimg2.jpg'
					}]
				},{
					cover:'src/images/face5.png',
					nname:'飞龙在天',
					info:'大神大神，我有月票，可以在哪里投',
					infoimg:''
				},{
					cover:'src/images/face6.png',
					nname:'辰东',
					info:'可在章节互动页、阅读尾页等页面对作品投月票',
					infoimg:[{
						imgface:'src/images/tkimg3.jpg'
					},{
						imgface:'src/images/tkimg4.jpg'
					}]
				},{
					cover:'src/images/face7.png',
					nname:'菜头',
					info:'大神，在哪里可以查到我有没有月票',
					infoimg:''
				},{
					cover:'src/images/face8.png',
					nname:'叶非夜',
					info:'可以进入个人中心查看月票详细信息哦',
					infoimg:[{imgface:'src/images/tkimg5.jpg'}]
				},{
					cover:'src/images/face9.png',
					nname:'大飞',
					info:'大神，我没有月票，如何获得呢？',
					infoimg:''
				},{
					cover:'src/images/face10.png',
					nname:'夜北',
					info:'订阅书籍达到指定标准后根据VIP等级赠送月票',
					infoimg:[{imgface:'src/images/tkimg6.jpg'}]
				},{
					cover:'src/images/face6.png',
					nname:'辰东',
					info:'现在也可以在活动页投月票哦',
					infoimg:''
				}],
				timer:''
			}
		},
		props:['mask','username','scrolsstart','num','timerok'],
		mounted: function(){
			 this.$nextTick(function () {			 	
		        this.$on("chatscroll",function(data){
		        	console.log('en'+data)
				    var self=this;				    
					setTimeout(function(){
						let heiH=$("#wrapper").height();
						let len=$("#scrolling li").length;
						let scrollH=0;
						$("#scrolling li").eq(data).show();
						$("#scrolling li").eq(data).addClass('animations');
						self.timer=setInterval(function(){
							data++;
							if(data>len){
								data=len;
								$(".govote").show();
								clearInterval(self.timer);
							}
							console.log(data);
							$("#scrolling li").eq(data).show();
							$("#scrolling li").eq(data).addClass('animations');
							scrollH=$("#scrolling").height();
							let offsetY=scrollH-heiH;
							if(scrollH>=heiH){
								$("#scroller").scrollTop(offsetY);
							}
						},2000);
					},100);
				});
		      })
		
		},
		watch: {
		},
		methods: {
			closechat:function(){
				var self=this;
				self.$parent.chatshow=false;
				self.$parent.timerok=false;
				clearInterval(self.timer);
				$("#scrolling li").show();
				$("#scrolling li").addClass('animations');
				$(".govote").show();
			}
		},
		created:function(){
			 
	    }
	}
</script>