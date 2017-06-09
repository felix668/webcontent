<template>
	<div class="loading">
		<div class="loadbox">
			<img src="images/load-1.png">
			<img src="images/load-hand.png" class="hand" id="hand" @touchend="enter">
		</div>
		<img src="images/load.gif" class="loadani">
		<p class="progress">{{percent+"%"}}</p>
	</div>
</template>
<style scoped>
.loading{width: 100%;height: 100%;background: #fff;position: absolute;top:0;left: 0;z-index: 100}
.loadbox{width: 2.28rem;margin:4.08rem auto 0;position: relative;}
.hand{width: 1.18rem;right: -.6rem;bottom:-.6rem;position: absolute;display:none;-webkit-animation:ani1-1 .4s infinite;}
@-webkit-keyframes ani1-1{
	from{-webkit-transform:scale(1);}
	to{-webkit-transform:scale(1.2);}
}
.loadani{width:1.6rem;margin:.26rem auto;}
.progress{color: #3b3b3b;font-size: .32rem;text-align: center;}
</style>
<script type="text/javascript">
	export default{
		data:function(){
			return{
				percent:0
			}
		},
		mounted(){
			this.getProgress();
		},
		methods:{
			getProgress(){
				var myVideo=$("#video1")[0],self=this,i=0;
				myVideo.controls=false;
				var vtimer = setInterval(function() {
					i+=Math.floor(Math.random()*7);
				    self.percent=i;	
				    if(i < 100) {						
						return;
					}
					self.percent=100;
					clearInterval(vtimer);
					$("#hand").show();    	 				
				},200);
				// var vtimer = setInterval(function() {
				//     var end = self.getEnd(myVideo),duration = myVideo.duration;	
				//     self.percent=parseInt(end/duration)*100;	
				//     if(duration){
				//     	console.log(duration);
				//     	console.log(end)
				//     	if(end < duration) {						
				// 		    return;
				// 		}
				// 	  	clearInterval(vtimer);
				// 	  	$("#hand").show();
				//     }	    	 				
				// },200);
			},
			getEnd(video){
				var end=0;
				try{
					end=video.buffered.end(0) || 0;
					end=parseInt(end*1000+1)/1000;
				}catch(e){
				}
				return end;
			},
			enter(){
				$("#video1")[0].play();
				this.$emit("loadend");
			}
		}
	}
</script>