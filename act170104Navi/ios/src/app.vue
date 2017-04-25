<template>
	<div id="root">
		<div class="wrap">
			<div class="gobook" v-show="!isblackuser">
				<div class="imgbox"></div>
				<a class='btn' @click="gobook"></a>
			</div>
			<div class="goredbag" v-show="isblackuser">
				<div class="imgbox"></div>
				<a class='btn' @click="goredbag"></a>
			</div>
		</div>
		<mask-loading v-show="loading"></mask-loading>
		<mask-over v-show="over"></mask-over>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			maskLoading: require('../src/MaskLoading.vue'),
			maskOver: require('../src/MaskOver.vue')
		},
		data:function(){
			return {
				loading:true,
				over:false,
				isblackuser:false
			}
		},
		methods: {      
			initpage:function(){
				var self=this;
				Local.reqaObj(server() + "pkg170104/naviInit", function(data) {
					console.log(data);
					if(data.code==-4){
						self.over=true;
					}
					self.loading=false;
					self.isblackuser=data.isBlackUser;
					
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"),'SDinit');
			},//去书籍详情
			gobook:function(){
				window.location.href="uniteqqreader://nativepage/infostream/list";
				forceLog(param("act_f"),'booklist');
			},
			goredbag:function(){
				Local.openPage("https://yuedu.reader.qq.com/event/act170106/ios/index.html?act_f=170106");
				forceLog(param("act_f"),'redbag');
			}
		},
		created:function(){
			//页面初始化
	        this.initpage();
		}
	}
</script>