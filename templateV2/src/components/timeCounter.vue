<template>
	<div class="countdown vflex" :id="mdata.id" :mid="mdata.mid">
		<p class="ctitle line1" v-if="mdata.content" :style="styleobj.title">{{mdata.content}}</p>
		<time :style="styleobj.text">
			<span class="time days" :style="styleobj.num">{{format(days)}}</span>
			<span class="text">天</span>
			<span class="time" :style="styleobj.num">{{format(hours)}}</span>
			<span class="text">时</span>
			<span class="time" :style="styleobj.num">{{format(minutes)}}</span>
			<span class="text">分</span>
			<span class="time" :style="styleobj.num">{{format(seconds)}}</span>
			<span class="text">秒</span>
		</time>
	</div>
</template>
<style lang="scss" scoped>
	.countdown {
		height: 1.2rem;
		.ctitle {
			text-align: center;
			line-height: .34rem;
		}
		time{
			display: block;		
			overflow: hidden;
			.time {
				margin:.06rem;
				line-height:.6rem;
				font-size: .48rem;
				font-weight: bold;
				text-align: center;
			}
			.text {
				line-height: 0.4rem;
				font-size: 0.3rem;
				text-align: center;				
			}
			.days{
				margin-left:0;
			}
		}
	}
</style>
<script>
	export default {
		props:["mdata"],
		data(){
			return {
				timeleft: this.mdata.time,
				_timeleft: null,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
				styleobj:{
					title:{
						color:this.mdata.fontcolor
					},
					num:{
						color:this.mdata.numcolor
					},
					text:{
						color:this.mdata.hourcolor
					}
				}
			}
		},
		mounted(){
			this.counter();
		},
		methods: {
			counter(){
				this._timeleft = this.timeleft;
				this.setNumbers(this.timeleft);
				let interval = setInterval(()=>{
					this._timeleft -= 1000;
					if( this._timeleft <= 0 ){
						clearInterval(interval);
					}else{
						this.setNumbers(this._timeleft);
					};
				},1000);
			},
			setNumbers(time){
				let days = Math.floor( time/1000/3600/24 );
				let hours = Math.floor( (time - days*1000*3600*24)/1000/3600 );
				let minutes = Math.floor( (time - days*1000*3600*24 - hours*1000*3600)/1000/60 );
				let seconds = Math.floor( (time - days*1000*3600*24 - hours*1000*3600 - minutes*1000*60)/1000 );
				this.days = days;
				this.hours = hours;
				this.minutes = minutes;
				this.seconds = seconds;
			},
			format(num){
				if(num < 10 && num > 0){
					num = '0'+num;
				};
				return num;
			}
		}
	}
</script>