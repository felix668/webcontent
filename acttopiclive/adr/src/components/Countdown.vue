<template>
<div class="COUNTDOWN" :style="style">
	<img class="timeImg" :src="img.time">
	<div class="content11">
		<p class="days">{{days}}</p>
		<p class="hours">{{hours}}</p>
		<p class="minutes">{{minutes}}</p>
	</div>
</div>
</template>

<script>
	module.exports = {
		props: ['timeleft','act','style'],
		data: function(){
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				img: {
					time: 'img/time.png'
				}
			}
		},
		watch: {
			timeleft: function(new_val){
				this.setNumbers(new_val);
			}
		},
		mounted: function(){
			this.setNumbers(this.timeleft);
			setInterval(()=>{
				this.act({
					type: 'MINUS',
					value: 60000
				})
			},60000);
		},
		methods: {
			setNumbers: function(time){
				var days = Math.floor( time/1000/3600/24 );
				var hours = Math.floor( (time - days*1000*3600*24)/1000/3600 );
				var minutes = Math.floor( (time - days*1000*3600*24 - hours*1000*3600)/1000/60 );
				//days = this.format(days);
				hours = this.format(hours);
				minutes = this.format(minutes);
				this.days = days;
				this.hours = hours;
				this.minutes = minutes;
				//console.log(this.days)
			},
			format: function(num){
				if(num<10){
					num = '0'+num;
				};
				return num;
			}
		}
	}
</script>

<style lang="less" scoped>
	.COUNTDOWN {
		position: absolute; left: 0.62rem; top: 0.48rem;
		width: 2.40rem; height: 0.48rem;
		//font-size: 0.48rem;
		font-size: 6.67vw; 
		line-height: 0.48rem;
		color: #e2b65c;
		.timeImg {
			position: absolute; right: 0; bottom: 0;
			//width: 2.11rem;
			width: 29vw;
		}
		.content11 {
			position: relative;
			width: 100%; height: 100%;
			overflow: hidden;
			p {
				float: left;
			}
			.days {
				position: absolute; left: 0; top: 0;
				//margin-right: 0.22rem;
				//margin-right: 5vw;
			}
			.hours {
				position: absolute; left: 9vw; top: 0;
				//margin-right: 0.22rem;
				//margin-right: 5vw;
			}
			.minutes {
				position: absolute; left: 21.5vw; top: 0;
			}
		}
	}
</style>