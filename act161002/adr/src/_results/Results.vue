<template>
	<div class="Results" v-cloak
	:style=" show_mask?'height:100vh;overflow:hidden;':'overflow:hidden' ">
		<img class="bg" :src=" 'img/results/bg.png' "/>
		<mask-text 
		:show="show_mask" 
		:title="mask_title"
		:text="mask_text"
		:act="act"></mask-text>
		<div class="content__">
			<img class="title_img" :src=" 'img/results/title.png' "/>
			<cards :act="act"></cards>
			<div class="middle--">
				<img class="middle_img" :src=" 'img/results/middle_img.png' "/>
				<div class="clickable"
				@click="act({type:'TO_TEN'})"></div>
			</div>
			<list :list="list"></list>
			<p class="notice">获奖用户请填写<span @click="TO_CONTACT">联系方式</span> ,方便客服与您取得联系</p>
			<p class="copyright">活动最终解释权归QQ阅读所有</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.Results {
		position: relative;
		width: 100%;
		//overflow: hidden;
		.bg {
			width: 100%;
		}
		.content__ {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			.title_img {
				position: absolute; left: 1.48rem; top: 1.35rem;
				width: 4.24rem;
			}

			.middle-- {
				position: relative;
				box-sizing: border-box;
				padding: 0 0.32rem;
				width: 100%;
				margin-bottom: 0.6rem;
				.middle_img {
					width: 100%;
				}
				.clickable {
					position: absolute; top: 2.5rem;
					width: 6.47rem; height: 2.55rem;
					//background: red;
					//opacity: 0.2;
				}
			}

			.notice {
				font-size: 0.24rem; text-align: center; color: #684428;
				margin-bottom: 0.46rem;
				span {
					color: #fbdabe;
					text-decoration: underline;
				}
			}
			.copyright {
				//margin-bottom: 1.12rem;
				font-size: 0.2rem; text-align: center; color: #756759;
			}
		}
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			maskText: require('./MaskText.vue'),
			cards: require('./Cards.vue'),
			list: require('./List.vue')
		},
		data: function(){
			return {
				ios: (function(){
					var el = document.querySelector('[config]');
					var val = el.getAttribute('config');
					console.log(val)
					return /ios/.test( val )?true:false
				})(),
				testMode: false,

				loggedIn: false,

				show_mask: false,
				mask_title: '--',
				mask_text: '--',

				list: {
					three: [],
					seven: []
				}

			}
		},
		computed: {
			name: function(){
				return this.ios?'阅券':'书券';
			}
		},
		mounted: function(){
			this.act({type:'SET_LIST'});
			Local.forceLog( common.param('act_f'),'results' );
		},
		methods: {
			TO_CONTACT: function(){
				this.act({
					type: 'TO_CONTACT'
				})
			},
			act: function(action){
				var self = this;
				switch(action.type){
					case 'SET_LIST':
						self.list.three.push({
							name: '凉秋词',
							img: 'http://q1.qlogo.cn/g?b=qq&k=4hT1TVDtNT0IdyJgWFmOhg&s=40&t=1476834466',
							prize: ['5000'+self.name,'+财神公仔']
						},{
							name: '了',
							img: 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM5UTYt5kZxRFLAUQ14Crxs4g9kFzYicZGw09rze6gWB3yNdyVp5Y1XmNaa9rOibgwG8bibKxal1uriaARJpYibIqrhictsia6925gd23I/0',
							prize: ['4000'+self.name,'+QQ存钱罐一个']
						},{
							name: '搁、浅的回忆',
							img: 'http://q2.qlogo.cn/g?b=qq&k=zVtTGxEnFAMr5OKicmOgqkg&s=40&t=1458694124',
							prize: ['3000'+self.name,'+QQ存钱罐一个']
						});
						self.list.seven.push({
							name: '朝朝~',
							img: 'http://q1.qlogo.cn/g?b=qq&k=rjkm26KV2DWiaXGBmJaI6mA&s=40&t=1381765393',
							prize: '1000'+self.name
						},{
							name: 'by樱沫雪',
							img: 'http://q1.qlogo.cn/g?b=qq&k=nLuic3fKibU8GF3tTj6Owk2Q&s=40&t=1476969924',
							prize: '1000'+self.name
						},{
							name: '讨厌鬼',
							img: 'http://q4.qlogo.cn/g?b=qq&k=7uHrPEKHvZic61CSqqs4C4w&s=40&t=1428566603',
							prize: '1000'+self.name
						},{
							name: '千年の徘徊',
							img: 'http://q2.qlogo.cn/g?b=qq&k=k0hzxdhVq5uILFCqcgN5SQ&s=40&t=1464618679',
							prize: '1000'+self.name
						},{
							name: '只是过客',
							img: 'http://q3.qlogo.cn/g?b=qq&k=3icIqqsYdYmplBiaUlwbxLcA&s=40&t=1472081171',
							prize: '1000'+self.name
						},{
							name: '暗影风醒',
							img: 'http://q4.qlogo.cn/g?b=qq&k=5mZyyE8j57yibNleiaZ1IE3Q&s=40&t=1427627532',
							prize: '1000'+self.name
						},{
							name: '浅梦芙蓉',
							img: 'http://q2.qlogo.cn/g?b=qq&k=jABt1Cbovsib1SJrBtTgW0w&s=40&t=1414923769',
							prize: '1000'+self.name
						})
						break;
					case 'SHOW_MASK':
						this.mask_title = action.title;
						this.mask_text = action.text;
						this.show_mask = true;
						Local.forceLog( common.param('act_f'),'article_'+action.id );
						pgvSendClick({hottag:'161002_HALLOWEEN.RESULTS.'+(self.ios?'IOS':'ADR')+'.ARTICLE_'+action.id});
						break;
					case 'CLOSE_MASK':
						this.show_mask = false;
						break;
					case 'TO_WRITER':
						Local.forceLog( common.param('act_f'),'avatar_'+action.id );
						pgvSendClick({hottag:'161002_HALLOWEEN.RESULTS.'+(self.ios?'IOS':'ADR')+'.AVATAR_'+action.id});
						var id = (action.id==='candy'?'3004969000772701':'3635406703847501');
						if( self.ios ){
							location.href = 'uniteqqreader://nativepage/authors/mainpage?authorId='+id;
						}else{
							location.href = 'uniteqqreader://nativepage/authors/mainpage?authorId='+id;
						};
						break;
					case 'TO_BOOK':
						Local.forceLog( common.param('act_f'),'cover_'+action.id );
						pgvSendClick({hottag:'161002_HALLOWEEN.RESULTS.'+(self.ios?'IOS':'ADR')+'.COVER_'+action.id});
						ABook.gotoDetail( action.bid );
						break;
					case 'TO_TEN':
						Local.forceLog( common.param('act_f'),'ten' );
						pgvSendClick({hottag:'161002_HALLOWEEN.RESULTS.'+(self.ios?'IOS':'ADR')+'.COLLECTION'});
						ABook.gotoDetail( '14827501' );
						break;
					case 'TO_CONTACT':
						var href = location.href;
						href = href.replace(/results\.html/,'contact.html');
						location.href = href;
						break;
				}
			}
		}
	}
</script>