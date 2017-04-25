<template>
	<div class="Countdown">
		<div class="content11">
			<p class="minutes">{{format(minutes)}}</p>
			<p class="seconds">{{format(seconds)}}</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Countdown {
		position: relative;
		width: 2.16rem; height: 0.74rem;
		overflow: hidden;
		.content11 {
			overflow: hidden;
			p {
				font-size: 0.3rem;
			}
			.minutes {
				position: absolute; left: 0.1rem; top: 0;
				letter-spacing: 0.25rem;
			}
			.seconds {
				position: absolute; left: 1.1rem; top: 0;
				letter-spacing: 0.25rem;
			}
		}
	}
</style>

<script>
	export default {
		// props: ['timeleft'],
		data: function(){
			return {
				timeleft: null,
				_timeleft: null,

				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			}
		},
		watch: {
			timeleft: function( nv ){
				console.log(nv);
				this._timeleft = nv;
				this.setNumbers( nv );
				
				var interval = setInterval(()=>{
					//console.log(111)
					this._timeleft -= 1000;
					if( this._timeleft===0 ){
						clearInterval( interval );
						location.href = location.href;
					}else{
						// var seconds;
						// var minutes;
						// seconds = this.seconds - 1;
						// if( seconds<0 ){
						// 	seconds = 59;
						// 	minutes = this.minutes - 1;
						// }else{
						// 	minutes = this.minutes;
						// }
						// this.seconds = seconds;
						// this.minutes = minutes;
						// this.hours = hours;
						this.setNumbers( this._timeleft );
					};
				},1000);
			}
		},
		mounted: function(){
			setTimeout(()=>{
				this.timeleft = 100000;
			},1000)
		},
		methods: {
			setNumbers: function(time){
				var days = Math.floor( time/1000/3600/24 );
				var hours = Math.floor( (time - days*1000*3600*24)/1000/3600 );
				var minutes = Math.floor( (time - days*1000*3600*24 - hours*1000*3600)/1000/60 );
				var seconds = Math.floor( (time - days*1000*3600*24 - hours*1000*3600 - minutes*1000*60)/1000 );
				//days = this.format(days);
				//hours = this.format(hours);
				// minutes = this.format(minutes);
				// seconds = this.format(seconds);
				//this.days = days;
				this.hours = hours;
				this.minutes = minutes;
				this.seconds = seconds;
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