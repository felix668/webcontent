<template>
	<div class="Item"
	:style=" 'background:url('+img+'/writers/'+info.uid+(info.uid===3?'_2':'')+'.png);background-size:100% auto;' "
	@click="act({type:'TO_BOOK',bid:info.bid})">
		<p class="text_dbz">代表作</p>
		<p class="title">{{info.title}}</p>
		<div class="vote"
		:class=" (voted>=0&&voted===info.id?'voted':'')+' '+(voted>=0&&voted!==info.id?'disabled':'') "
		@click="VOTE($event)">
			{{voted===info.id?'已投':'投票'}}
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Item {
		float: left;
		position: relative;
		width: 1.5rem; height: 4.05rem;
		margin-right: 0.11rem; margin-left: 0.11rem;
		overflow: hidden;
		.text_dbz {
			margin-top: 2.7rem;
			font-size: 0.24rem;
			text-align: center;
		}
		.title {
			margin-bottom: 0.2rem;
			font-size: 0.20rem;
			text-align: center;
		}
		.vote {
			width: 1rem; height: 0.4rem; line-height: 0.4rem;
			margin: auto;
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
</style>

<script>
	export default {
		props: {
			state: {},
			type: {},
			info: {},
			voted: {},
			img: {},
			act: {}
		},
		components: {

		},
		data: function(){
			return {
			}
		},
		watch: {

		},
		computed: {
		},
		created: function(){
			
		},
		watch: {
			
		},
		methods: {
			VOTE: function(e){
				e.stopPropagation();
				console.log(this.voted);
				if( this.state!=='pending'&&this.voted<0 ){
					this.act({
						type: 'VOTE',
						type_: this.type,
						uid: this.info.uid,
						id: this.info.id
					})
				}else if( this.voted>=0 ){
					Local.showToast('您已投过票啦~');
				}
			}
		}
	}
</script>