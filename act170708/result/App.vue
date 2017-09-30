<template>
	<div id="app">
		<mask-load v-if="loading"></mask-load>
		<template>
			<div id="banner" :style="styleObj">
				<template v-if="showCode==false">
					<span class="again" @click="again">再来一次</span>
					<span class="mask"></span>
					<div class="share" @click="share"></div>
					<p class="desc">首次分享成功后，点击“返回QQ阅读”可<span>赢50动漫抵扣券和100积分</span></p>
					<span class="test"></span>
				</template>
				<template v-else>
					<span class="qrcode"></span>
				</template>
			</div>
		</template>	
	</div>
</template>

<script>

	import "./css/result.scss"
	import maskLoad from "../src/components/Load.vue"
	export default {
		data:function(){
			return{
		 		loading: true,
				plat: env.pt,
				constellation: param('constellation'),
				gender: param('gender') == 1 ? 'm' : 'w',
				showCode: false
			}
		},
		computed:{
			imageUrl(){
				let random = parseInt(Math.random()*2)+1
				return common.sharefront()+`act170708/result/images/${this.constellation}/${this.gender}${random}.jpg`
			},
			styleObj(){
				return {
					backgroundImage: `url(${this.imageUrl})`
				}
			}
		},
		created(){
			console.log(0)

			Local.cacheImage(this.imageUrl)
			let self = this
			// window.afterShare = function(){
			// 	console.log(11)
		 //      	Local.reqaObj(common.server() + "pkg170708/pick", data=>{
		 //      		console.log(data)
		 //      		if (self.plat == 'ios') {
	  //     				Local.showToast('分享成功')
	  //     			}
		 //      		// if (data.code == 1) {
		 //      		// }
			// 	}, [], function() {
			// 			Local.showToast("网络异常，请稍候重试")
			// 	}, 1)
		 //    }
		},
		mounted(){
			window.onload = _=>{
				this.loading = false
			}
	 	},
	 	methods:{
	 		again(){
	 			location.href = "./index.html"
	 		},
	 		share(){
	 			this.showCode = true
	 			Local.shareStyleImage(this.imageUrl,common.sharefront()+'act170708/result/images/space.png')
	 		}
	 	}, 	
	 	components:{
	 		maskLoad
	 	}
	}
</script>	
