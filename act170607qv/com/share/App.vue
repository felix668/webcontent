<template>
	<div id="app">
		<div class="banner"></div>
		<div class="downbtn" @click="downQQread"><span>下载QQ阅读领取</span><ul class="arrows"><img :src="'src/images/arrow.png'"><img :src="'src/images/arrow.png'"><img :src="'src/images/arrow.png'"></ul></div>
		<h4>腾讯视频VIP会员下载QQ阅读即可获得“百元”大礼包</h4>
		<div class="prize"></div>
		<p class="copyright">本活动仅限QQ阅读新用户参加</p>
		<Alert v-show="showAlert"></Alert>
	</div>
</template>

<script type="text/javascript">
	import "../src/css/index.less"
	import Alert from "../src/components/Alert.vue";
	export default {
		components:{
	 		Alert
	 	},
		data:function(){
			return{
				showAlert:false,//是否显示弹窗
			}
		},
	 	methods:{
	 		downQQread(){
	 			let self=this;
	 			self.showAlert=true;
	 		},
	 	}
	}

</script>
