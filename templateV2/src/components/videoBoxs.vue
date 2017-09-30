<template>
	<div class="video-box" :id="mdata.id" :mid="mdata.mid">
		<div class="videolayer" :style="styleobj.area">
			<iframe frameborder="0" width="100%" height="100%" :src="source.url"></iframe>
		</div>
		<div class="videolist" id="videolist" v-if="mdata.list.length>1">
			 <div class="listbox" id="listbox">
			 	<span v-for="(item,index) in mdata.list" @click="selectPlay(index)" :style="index == vsrc ? styleobj.vseled : styleobj.vlist">
			 		第{{index+1}}集
			 		<img src="src/images/videoIcon.png" class="ico" v-if="item.superscript === 1">
			 	</span>
			 </div>
		</div>
	</div>
</template>
<style lang="sass" scoped>
.video-box{margin:0 .32rem;padding:.16rem 0 .34rem;
	.videolayer{height:3.86rem;position: relative;}
}
.videolist{
	overflow:hidden;margin-top:.24rem;white-space:nowrap;
	span{display:inline-block;width:.98rem;height:.56rem;line-height:.58rem;text-align:center;margin-right:.24rem;position:relative;color:#67666b;background:#1f2025;}
	.ico{position:absolute;width: .24rem;top:0;right:0;}
}
</style>
<script>
import IScroll from "iscroll";
// var Iscroll=require("iscroll");
export default {
	props:["mdata"],
	data(){
		return{
			vsrc:0,
			styleobj:{
				area:{
					border:`1px solid ${this.mdata.area || '#333'}`
				},
				vlist:{
					background:this.mdata.bgcolor,
					color:this.mdata.fontcolor1
				},
				vseled:{
					background:this.mdata.bgcolor,
					color:this.mdata.fontcolor2
				}
			}
		}
	},
	mounted(){
		this.setIscroll();
	},
	methods:{
		selectPlay(index){
			this.vsrc=index;
		},
		setIscroll(){
			if(this.mdata.list.length > 6){
				let wid=this.mdata.list.length * ($("#listbox span").width() + parseInt($("#listbox span").css("margin-right"))) + "px";
				$("#listbox").width(wid);
				new IScroll("#videolist",{scrollX: true});
			}				
		}
	},
	computed:{
		source(){
			return this.mdata.list[this.vsrc] || {};
		}
	}
}
</script>

