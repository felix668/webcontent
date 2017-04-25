<template>
	<div class="BookBlock"
	:class=" class_ ">
		<div class="header">
			<div class="bookClass">
				{{books.length>0?books[current].class:'--'}}
			</div>
		</div>
		<div class="container">
			<div class="bb-custom-wrapper">
			
				<div id="bb-bookblock" class="bb-bookblock"
				@touchstart="touchstart($event)"
				@touchend="touchend($event)"
				@touchcancel="touchend($event)">

					<div class="bb-item"
					v-for="(a,i) in books">
						<div class="upper" style="background:url();background-size:100% 100%;">
							<div class="upper-book"
							v-for="n in 2">
								<p class="title">{{a.books[n-1].title}}</p>
								<p class="author">{{a.books[n-1].author}}</p>
							</div>
						</div>
						<div class="lower" style="background:url();background-size:100% 100%;">
							<scroller :act="act" :items="a.books"></scroller>	
						</div>
					</div>

				</div>
<!-- 				<div class="nav">
					<a id="bb-nav-prev" class="bb-custom-icon bb-custom-icon-arrow-left">Previous</a>
					<a id="bb-nav-next" class="bb-custom-icon bb-custom-icon-arrow-right">Next</a>
				</div> -->
				
			</div>
		</div>
		<div class="footer">
			<div class="pageNo">
				{{current+1}}/{{books.length}}
			</div>
		</div>
	</div>
</template>

<style lang="less">
	.BookBlock {
		position: absolute; left: 0; top: 0;
		width: 100%; height: 100vh;
		z-index: 209;
		transition: transform 1s;
		&.leave {
			transform: translate3d(0,-150%,0);
		}
		.header {
			.bookClass {
				font-size: 0.26rem;
			}
		}

		.upper-book {
			float: left;
			.title {
				font-size: 0.26rem;
			}
			.author {
				font-size: 0.26rem;
			}
		}

		.footer {
			.pageNo {
				font-size: 0.26rem;
			}
		}
	}
</style>

<script type="text/javascript">
	import './BookBlock.less';

	var bb;
	
	export default {
		props: {
			act: {},
			loggedIn: {},
			books: {},

			stage: {},
			current: {}
		},
		computed: {
		},
		components: {
			Scroller: require('./Scroller.vue')
		},
		data: function(){
			return {
				class_: '',

				Y0: 0,
				Y2: 0
			}
		},
		watch: {
			stage: function(nv,ov){
				if( ov===1&&nv===2 ){
					this.class_ = 'leave';
				}else if( ov===2&&nv===1 ){
					this.class_ = '';
				}
			},
			current: function(nv,ov){
				if( nv>ov ){
					bb.next();
				}else{
					bb.prev();
				}
			},
			books: function(){
				setTimeout(()=>{
					bb = new BookBlock( document.querySelector('#bb-bookblock'), {
						orientation : 'horizontal',
						speed : 700
					} );
				},500);
			}
		},
		mounted: function(){
			// setTimeout(()=>{
				

				
			// 	// add navigation events
			// 	// document.querySelector('#bb-nav-next').addEventListener( 'click', function() {
			// 	// 	bb.next();
			// 	// 	return false;
			// 	// } );
			// 	// document.querySelector('#bb-nav-prev').addEventListener( 'click', function() {
			// 	// 	bb.prev();
			// 	// 	return false;
			// 	// } );
			// },500);
		},
		methods: {
			touchstart: function(e){
				this.Y0 = e.changedTouches[0].pageY;
			},
			touchend: function(e){
				this.Y2 = e.changedTouches[0].pageY;
				var distanceY = this.Y2 - this.Y0;
				
				this.act({
					type: 'SWITCH',
					direction: (function(){
						if( distanceY>3 ){
							return 'down';
						}else if( distanceY<-3 ){
							return 'up'
						}else{
							return ''
						};
					})()
				});

			}
		}
	}
</script>