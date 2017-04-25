<template>
	<div class="MyAudio">
		<div class="play"
		@click="play"></div>
		<audio ref="audio" src="heart_beat.mp3"></audio>
	</div>
</template>

<style lang="less" scoped>
	.MyAudio {
		width: 4rem;
		height: 1rem;
		background: black;
		.play {
			width: 0.5rem; height: 0.5rem;
			background: white;
		}
	}
</style>

<script>
	export default {
		created: function(){

		},
		methods: {
			play: function(){
				this.$refs.audio.play();
			}
		}
	}
</script>