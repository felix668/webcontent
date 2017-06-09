<template>
	<div class="Countdown">
		<img class="countdown_title" :src=" img+'main/countdown_title.png' "/>
		<div class="outer">
			<div class="inner">
				<p class="time days">{{format(days)}}</p>
				<div class="text">天</div>
				<p class="time hours">{{format(hours)}}</p>
				<div class="text">时</div>
				<p class="time minutes">{{format(minutes)}}</p>
				<div class="text">分</div>
				<p class="time seconds">{{format(seconds)}}</p>
				<div class="text">秒</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Countdown {
		position: relative;
		/*width: 2.16rem; */
		margin-top: 5.13rem;
		overflow: hidden;
		.countdown_title {
			width: 3.55rem;
			margin: auto; margin-bottom: 0.1rem;
		}
		.outer {
			width: 5.8rem;
			padding: 0.07rem 0;
			margin: auto;
			background: rgba(92,70,197,0.9);
			border-radius: 0.1rem;
			opacity: 0.9;
			overflow: hidden;
		}
		.inner {
			box-sizing: border-box;
			width: 5rem;
			padding: 0.12rem 0 0.12rem 0.32rem;
			margin: auto;
			background: #7066d4;
			border-radius: 0.1rem;
			overflow: hidden;
			p {
				font-size: 0.3rem;
			}
			.time {
				float: left;
				width: 0.6rem; height: 0.4rem;
				line-height: 0.4rem;
				font-size: 0.28rem;
				color: #fceec3;
				text-align: center;
				background: #5c46c5;
				border-radius: 0.1rem;
			}
			.text {
				float: left;
				width: 0.5rem;
				line-height: 0.4rem;
				font-size: 0.3rem;
				text-align: center;
				color: #ccc7fb;
			}
		}
	}
</style>

<script>
	export default {
		// props: ['timeleft'],
		data: function(){
			return {
				// timeleft: null,
				_timeleft: null,

				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			}
		},
		computed: {
			img() {
				return this.$store.state.img;
			},
		},
		watch: {
			'$store.state.data.timeleft': function( nv ){
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
			// setTimeout(()=>{
			// 	this.timeleft = 1000000000;
			// },1000)
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
				this.days = days;
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