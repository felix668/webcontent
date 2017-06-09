<template>
	<div class="FooterFixed">
		<div class="fixed">

			<div class="btn_buy"
			@click="$store.dispatch({type:'DO_SOMETHING'})">
				{{deal.bought?'去看书':'我要抢购'}}
				<icon-arrows></icon-arrows>
      </div>

		</div>
	</div>
</template>

<style lang="less" scoped>
	.FooterFixed {
		width: 100%; height: 1.3rem;
		background: #28202e;
		// overflow: hidden;
		.fixed {
			position: fixed; left: 0; bottom: 0;
			width: 100%; height: 1.3rem;
			background: rgba(0,0,0,0.7);
      overflow: hidden;
			.btn_buy {
				position: relative;
				width: 6.3rem; height: 0.92rem;
        margin: auto; margin-top: 0.2rem;
        border-radius: 0.1rem;
        background: #67c890;
        font-size: 0.32rem; font-weight: 600; color: white;
        line-height: 0.92rem; text-align: center;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
		},
		components: {
			IconArrows: require('./IconArrows.vue'),
		},
		data: function(){
			return {

			}
		},
		computed: {
			deal(){
				return this.$store.state.deal;
			},
			meta(){
				return this.$store.state.meta;
			},
			user(){
				return this.$store.state.user;
			},
			img(){
				return this.$store.state.img;
			},
			green(){
				if( this.$store.state.user.time_span - this.$store.state.user.donated>=30 ){
					return true;
				}else{
					return false;
				}
			}
		},
		watch: {

		},
		mounted: function(){
		},
		methods: {
		}
	}
</script>