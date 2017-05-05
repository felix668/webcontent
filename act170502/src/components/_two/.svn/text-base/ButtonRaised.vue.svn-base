<style lang="less" scoped>
	@color-bg: #3fbc82;
	@color-shadow: #31a06c;
	.ButtonRaised {
		position: relative; display: block; overflow: hidden; z-index: 0;
		width: 3.3rem; height: 0.94rem;
		margin: auto; margin-bottom: 0.28rem;
		color: white;
		font-size: 0.32rem; font-weight: 600; text-align: center; line-height: 0.94rem;
		border-radius: 0.08rem;
		cursor: pointer;
		transition-property: transform box-shadow;
		transition-duration: 0.1s;
		background: @color-bg;
		box-shadow: 0 0.04rem 0 @color-shadow;
		&:active {
			background: @color-shadow;
			box-shadow: 0 0 0 @color-shadow;
			transform: translate3d(0,0.04rem,0);
		}
	}
</style>

<template>
	<div class="ButtonRaised"
	@click="go_to">
		{{conf.type==='two'?'去书架看书':'待朕一阅'}}
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			conf() {
				return this.$store.state.conf;
			}
		},
		methods: {
			go_to() {
				if(this.conf.type==='two') {
					this.$store.dispatch({
						type: 'TO_BOOKSHELF'
					});
				}else {
					this.$store.dispatch({
						type: 'TO_READ',
						bid: this.$store.state.book_five.bid
					})
				}
			}
		}
	}
</script>