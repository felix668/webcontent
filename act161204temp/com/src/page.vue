<template>	
	<mask-load v-if="!loaded"></mask-load>	
	<top></top>
	<div class="wrap" v-if="loaded">
		<div class="box">
			<box1 title="幸运专享一" :monthpicked="initdata.monthpicked"></box1>
			<box3 title="幸运专享二" :dataobj="initdata"></box3>	
		</div>
	</div>
	<app-load v-show="showmask=='appLoad'"></app-load>
	<div class="cpr"><p>本活动解释权归QQ阅读所有</p></div>
	<over-box v-if="over"></over-box>
</template>
<script>
	import '../css/index.css';
	module.exports = {
		data: function(){
			return {
				showmask:'',
				over:false,
				initdata:{},
				loaded:false,
				islogin:false,
				pagetype:4
			}
		},
		created:function(){
			this.initp();			
		},
		methods:{
			initp: function(){
				var self = this;
				//Local.init();
				Local.reqaObj(server() + "pkg161204/init?gs="+param("gs"), function (data) {
					self.initdata = data;
					self.islogin = data.isLogin;
					self.loaded = true;
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("LSYHindexout","161201");
			},
			downloadOrOpen:function(){
				var self=this;
				S.open(function(installStat,plat){
					forceLog("LSYHdownOrOpen","161201");					
					if(installStat){
						N.openPage(prefix() + "act161204temp/" + env.pt+ "/index.html?gs="+param("gs"));						
						setTimeout(function(){
							self.showmask="appLoad";
		                },2000);
					}else{
						setTimeout(function(){
							self.showmask="appLoad";		                    
		                },2000);
					}
				})
			},
			isscroll:function(event){
				event.preventDefault();
			}					
		},
		components: {
			maskLoad:require('../components/maskload.vue'),
			top:require('../components/top.vue'),
		    box1:require('../components/box1.vue'),
		    box3:require('../components/box3.vue'),		  
			overBox: require('../components/over.vue'),
			appLoad:require("../components/appload.vue")
		},
		watch:{			
			"showmask":function(val, oldVal){
				var self=this;
				if(val!==''){
					document.body.addEventListener('touchmove',self.isscroll, false);
				}else{
					document.body.removeEventListener('touchmove',self.isscroll);
				}
			}
		}
	}
</script>