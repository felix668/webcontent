<template>
	<div class="BallotFour">
		<div class="item"
		v-for="a in ballot.actors"
		:style=" 'background:url('+img+'/actors/'+a.uid+'.png);background-size:100% auto;' ">
			<p class="votes" v-show="!share">{{a.votes}}票</p>
			<div class="vote"
			:class="
				(ballot.voted===a.id?'voted':'')+
				''+
				(ballot.voted>=0&&ballot.voted!==a.id?'disabled':'') "
			@click="VOTE(a)">{{ballot.voted===a.id?'已投':'投票'}}</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.BallotFour {
		position: relative;
		width: 100%;
		margin-left: 0.42rem;
		overflow: hidden;
		.item {
			position: relative;
			float: left;
			width: 1.5rem; height: 4.04rem;
			margin-right: 0.2rem;
			overflow: hidden;
			.votes {
				width: 100%;
				margin-top: 2.9rem;
				margin-bottom: 0.15rem;
				font-size: 0.28rem;
				text-align: center;
			}
			.vote {
				position: absolute; left: 0.25rem; top: 3.4rem;
				width: 1rem; height: 0.4rem; line-height: 0.4rem;
				// margin: auto;
				text-align: center;
				font-size: 0.26rem;
				color: white;
				background: #cfb268;
				border-radius: 0.04rem;
				&.voted {
					background: #1a1a1a;
					color: #cfb268;
				}
				&.disabled {
					background: #e1d7bd;
				}
			}
		}
	}
</style>

<script>
	export default {
		props: {
			share: {},
			ballot: {},
			img: {},
			act: {}
		},
		components: {
		},
		data: function(){
			return {
				state: 'ready'
			}
		},
		computed: {
		},
		created: function(){
			
		},
		watch: {
			
		},
		methods: {
			VOTE: function(a){
				if( this.share ){
					this.act({
						type: 'VOTE'
					});
				}else if( this.ballot.voted>=0 ){
					Local.showToast('您已投过票了~');
				}else if( this.ballot.voted<0 ){
					if( this.state!=='waiting' ){
						this.state = 'waiting';
						this.act({
							type: 'VOTE',
							ballot_id: this.ballot.id,
							id: a.id,
							uid: a.uid
						})
					};
				}
			}
		}
	}
</script>