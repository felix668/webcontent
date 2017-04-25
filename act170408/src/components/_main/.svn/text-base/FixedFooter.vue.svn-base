<template>
	<div class="FooterFixed">
		<div class="fixed" v-if=" !meta.share&&done===false ">
			<img class="btn_to_login" :src=" img+'/main/btn_to_login.png' "
			v-if=" !user.loggedIn "
			@click="$store.dispatch({type:'TO_LOGIN'})"/>
			<div class="btn_disabled" 
			:style=" 'background-image:url('+img+'/main/btn_disabled.png);background-size:100% auto;' "
			v-if=" user.loggedIn&&!green ">
				再阅读{{30 - (user.time_span - user.donated)}}分钟可捐
			</div>
			<img class="btn_donate" :src=" img+'/main/btn_donate.png' "
			v-if=" user.loggedIn&&green "
			@click="$store.dispatch({type:'DONATE'})"/>
			<img class="btn_share" :src=" img+'/main/btn_share.png' "
			@click="$store.dispatch({type:'INVITE'})"/>

		</div>
		<div class="fixed" v-if=" !meta.share&&done===true ">
			<img class="btn_fruit" :src=" img+'/main/btn_fruit.png' "
			@click="$store.dispatch({type:'INVITE'})"/>
		</div>

		<div class="fixed" v-if=" meta.share&&done===false ">
			<img class="btn_to_app" :src=" img+'/main/btn_to_app.png' "
			@click="$store.dispatch({type:'TO_PAGE_MAIN'})"/>
		</div>
		<div class="fixed" v-if=" meta.share&&done===true ">
			<img class="btn_pass" :src=" img+'/main/btn_pass.png' "
			@click="$store.dispatch({type:'SHOW',what:'mask_wechat'})"/>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.FooterFixed {
		width: 100%; height: 1.3rem;
		// background: orange;
		overflow: hidden;
		.fixed {
			position: fixed; left: 0; bottom: 0;
			width: 100%; height: 1.3rem;
			background: rgba(0,0,0,0.7);
			.btn_to_login {
				position: absolute; left: 0.32rem; top: 0.2rem;
				width: 3.31rem; 
			}
			.btn_disabled {
				position: absolute; left: 0.32rem; top: 0.2rem;
				width: 3.31rem; height: 0.9rem;
				font-size: 0.32rem; line-height: 0.9rem;
				font-weight: 600;
				color: rgba(255,255,255,0.6);
				text-indent: 0.25rem;
			}
			.btn_donate {
				position: absolute; left: 0.32rem; top: 0.2rem;
				width: 3.31rem; 
			}
			.btn_share {
				position: absolute; right: 0.32rem; top: 0.2rem;
				width: 3.31rem; 
			}
			.btn_to_app,.btn_fruit,.btn_pass {
				position: absolute; right: 2.14rem; top: 0.2rem;
				width: 3.31rem; 
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: {
		},
		components: {
			// Countdown: require('./Countdown.vue'),
			// Explosion: require('./Explosion.vue')
		},
		data: function(){
			return {

			}
		},
		computed: {
			done(){
				return this.$store.state.done;
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