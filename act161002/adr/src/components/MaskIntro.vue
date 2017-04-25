<template>
	<div class="MASK-INTRO" v-show="show">
		<div class="content__">
			<div class="panel">
				<div class="avatar">
					<img class="avatar-img" :src=" 'img/avatars/'+(writer.id||0)+'.jpg' "/>
				</div>
				<p class="nickname">{{writer.nickname}}</p>
				<p class="intro__">{{writer.intro}}</p>
				<div class="book" @click="toBook">
					<div class="upper">
						<img class="cover" :src=" img.cover+(writer.id||'0')+'.jpg' ">
						<div class="right__">
							<p class="top__">
								代表作
							</p>
							<p class="bookname">
								{{writer.bookname}}
							</p>
						</div>
					</div>
					<div class="lower">
						{{writer.bookintro}}
					</div>
				</div>
				<div class="footer__">
					<img class="pick__" :src="img.pick" v-show="picked<0"
					@click="pick"/>
				</div>
				<img class="close" :src=" img.close "
				@click="close"/>
					
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.MASK-INTRO {
		display: table;
		position: fixed; left: 0; top: 0;
		width: 100%; height: 100%;
		background: rgba(0,0,0,0.8);
		z-index: 99;
		.content__ {
			display: table-cell;
			vertical-align: middle;
			.panel {
				position: relative;
				width: 4.74rem;
				padding-top: 0.85rem;
				margin: auto;
				background: #1d1635;
				border-radius: 0.2rem;
				.avatar {
					box-sizing: border-box;
					position: absolute; left: 1.67rem; top: -0.7rem;
					width: 1.4rem; height: 1.4rem;
					border: 0.08rem solid #1d1635;
					border-radius: 1000px;
					overflow: hidden;
					.avatar-img {
						width: 100%; height: 100%;
					}
				}
				.nickname {
					font-size: 0.24rem;
					text-align: center; color: #fba377;
				}
				.intro__ {
					//width: 100%;
					padding-top: 0.3rem;
					padding-left: 0.46rem;
					padding-right: 0.46rem;
					padding-bottom: 0.3rem;
					font-size: 0.24rem; line-height: 0.4rem;
					color: #c57e5d;
				}
				.book {
					padding: 0.34rem 0.5rem 0.14rem 0.5rem;
					background: #251a3f;
					.upper {
						overflow: hidden;
						.cover {
							float: left;
							width: 1rem;
							margin-right: 0.32rem;
						}
						.right__ {
								float: left;
								width: 2.4rem;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							.top__ {
								padding-top: 0.2rem;
								padding-bottom: 0.2rem;
								font-size: 0.24rem; color: #c57e5d;
							}
							.bookname {
								width: 100%;
								font-size: 0.3rem;
								color: #fba377;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
					}
					.lower {
						padding-top: 0.2rem;
						padding-bottom: 0.15rem;
						line-height: 0.4rem;
						font-size: 0.24rem; color: #c57e5d;
					}
				}
				.footer__ {
					padding-top: 0.32rem;
					padding-bottom: 0.34rem;
					.pick__ {
						width: 2.1rem;
						margin: auto;
					}
				}
				.close {
					position: absolute; top: 0.12rem; right: 0.12rem;
					width: 0.59rem;
				}
			}
		}
	}
</style>

<script type="text/javascript">
import {writers} from '../data/writers.js';

export default {
	props: ['show','writerNo','picked','act'],
	data: function(){
		return {
			img: {
				close: 'img/icon-close.png',
				cover: 'img/covers/',
				pick: 'img/pick-larger.png'
			},
			writer: {
				id: 0,
				nickname: '--',
				intro: '--',
				bid: '0',
				bookname: '--',
				bookintro: '--'
			}
		}
	},
	watch: {
		writerNo: function(){
			this.update();
		}
	},
	mounted: function(){
		this.update();
	},
	methods: {
		update: function(){
			for(var key in this.writer){
				this.writer[key] = writers[this.writerNo][key];
			}
		},
		toBook: function(){
			Local.forceLog( common.param('act_f'),'cover_'+this.writer.id );
			ABook.gotoDetail(this.writer.bid);
		},
		pick: function(){
			Local.forceLog( common.param('act_f'),'vote_intro_'+this.writer.id );
			this.act({
				type: 'PICK',
				id: this.writer.id
			})
		},
		close: function(){
			this.act({
				type: 'CLOSE_INTRO'
			})
		}
	}

}
</script>