<template>
	<div class="Song">
		<div class="left_part"></div>
		<div class="middle_part">
			<div class="comment">
				<div class="avatar">
					<img :src=" 'img/avatar.jpg' "/>
				</div>
				<p class="comment_text">{{writer.desc}}</p>
			</div>
			<div class="middle_">
				<div class="avatar_">
					<img :src=" 'img/avatar.jpg' "/>
				</div>
				<div class="block"
				@click="click">
					<p class="song_name">{{writer.song}}</p>
					<div class="runtime"
					:style=" 'transform:scaleX('+scaleX+')' "></div>
					<audio ref="audio" src="heart_beat.mp3"></audio>
				</div>
			</div>
			<div class="bottom_">
				<p class="b_left">
					“想听歌还是八卦呀？来大神说提问吧”
				</p>
				<div class="to_ask">
					去提问
				</div>
			</div>
		</div>
		<div class="right_part">
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Song {
		margin-left: 0.34rem;
		overflow: hidden;
		.left_part {
			float: left;
			width: 0.37rem; height: 2rem;
			margin-top: 0.2rem; margin-right: 0.15rem;
			border-top: 0.02rem solid #856858;
			border-left: 0.02rem solid #856858;
			border-bottom: 0.02rem solid #856858;
			border-top-left-radius: 0.16rem;
			border-bottom-left-radius: 0.16rem;
		}
		.right_part {
			float: left;
			width: 0.37rem; height: 2rem;
			margin-top: 0.2rem; margin-left: 0.15rem;
			border-top: 0.02rem solid #856858;
			border-right: 0.02rem solid #856858;
			border-bottom: 0.02rem solid #856858;
			border-top-right-radius: 0.16rem;
			border-bottom-right-radius: 0.16rem;
		}
		.middle_part {
			float: left;
			// width: 6.84rem;
			.comment {
				overflow: hidden;
				margin-bottom: 0.28rem;
				.avatar {
					float: left;
					position: relative;
					overflow: hidden;
					width: 0.52rem; height: 0.52rem;
					margin-left: 0.04rem; margin-right: 0.1rem;
					border-radius: 1000px;
					img {
						width: 100%; height: 100%;
					}
				}
				.comment_text {
					line-height: 0.52rem;
					font-size: 0.3rem; color: #544b43;
				}
			}
			.middle_ {
				height: 1.14rem;
				.avatar_ {
					float: left;
					width: 0.8rem; height: 0.8rem;
					margin-right: 0.08rem;
					border-radius: 100px;
					overflow: hidden;
					img {
						width: 100%; height: 100%;
					}
				}
				.block {
					position: relative;
					overflow: hidden;
					width: 4.1rem; height: 0.8rem;
					border-top-right-radius: 0.4rem;
					border-bottom-right-radius: 0.4rem; 
					border-top-left-radius: 0.4rem; 
					background: #ff8c8c;
					box-shadow: 0 0.06rem 0 0 #d77676;
					transform: translate3d(0,0,0);
					.song_name {
						position: absolute; left: 0.98rem; top: 0;
						height: 0.8rem;
						font-size: 0.3rem; color: white; line-height: 0.8rem;
						z-index: 10;
					}
					.runtime {
						width: 100%; height: 100%;
						background: #d39692;
						transform-origin: 0 0;
						transform: scaleX(0);
					}
				}
			}
			.bottom_ {
				.b_left {
					float: left;
					//margin-right: 0.26rem;
					font-size: 0.26rem; color: #726153; line-height: 0.49rem;
				}
				.to_ask {
					float: left;
					width: 1.02rem; height: 0.49rem;
					border-radius: 0.1rem;
					background: #3399ff;
					line-height: 0.49rem; text-align: center; color: white; font-size: 0.26rem;
				}
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			writer: {},
			currentOne: {}
		},
		data: function(){
			return {
				scaleX: 0
			}
		},
		watch: {
			currentOne: function(){
				//this.reset();
			}
		},
		mounted: function(){
			this.$refs.audio.volume = 0.8;
		},
		methods: {
			click: function(){
				this.$refs.audio.paused?this.play():this.pause();
			},
			play: function(){
				if( this.$refs.audio.paused ){
					this.$refs.audio.play();
					var interval = setInterval(()=>{
						var a = this.calc();
						if(a===1){
							this.reset();
						};
					},1000)
				};	
			},
			pause: function(){
				if( !this.$refs.audio.paused ){
					this.$refs.audio.pause();
					//clearInterval(this.interval);
				};
			},
			reset: function(){
				this.$refs.audio.pause();
				//clearInterval(this.interval);
				this.$refs.audio.currentTime = 0;
				this.scaleX = 0;
			},
			calc: function(){
				var duration = this.$refs.audio.duration;
				var currentTime = this.$refs.audio.currentTime;
				this.scaleX = currentTime/duration;
				return this.scaleX;
			}
		}
	}
</script>