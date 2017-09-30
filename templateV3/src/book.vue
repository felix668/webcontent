<template>
	<div id="app">
		<div class="bookmask" :style="styleobj">
			<div class="nb-wrap">
				<p class="b-title">{{mdata.title}}</p>
				<p class="b-content" v-for="(item,index) in mdata.content" :key="index">{{item}}</p>
			</div>
		</div>	
	</div>
</template>
<style lang="scss" scoped>
.bookmask{position: fixed;top:0;left: 0;width: 100%;height: 100%;overflow: hidden;z-index: 100;}
.close{position: absolute;right:0;top:0;width: .96rem;z-index: 2}
.nb-wrap{padding: .96rem .32rem .32rem;}
.b-title{font-size: .5rem;margin: 0 0 .96rem .2rem;}
.b-content{font-size: .32rem;line-height: .52rem;text-indent: 2em}
</style>
<script type="text/javascript">
	import IScroll from "iscroll";
	export default {
		data(){
			return {
				mdata:{},
				styleobj:{}
			}
		},
		methods: {
	 		init(){
				Local.reqaObj(`${common.server()}getModule?actid=${common.param("actid")}&moduleid=${common.param("moduleid")}`, data => { 
					console.log(data);
					this.mdata=data; 			
		            this.styleinit();		  	
				}, [], () => {				
					Local.showToast("网络异常，请稍候重试");
				}, 1);	
				Local.forceLog("templateV2","bookPInit",common.param("actid"),common.param("moduleid"));
			},
			styleinit(){
				this.styleobj={
					color:this.mdata.fontcolor,
					backgroundColor:this.mdata.bgcolor || common.param("bgcolor")
				}
			}		
		}
	}
</script>	
