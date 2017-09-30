<template>
	<div class="showbooks" :mid="mdata.mid"> 
		<ul class="booklist">
			<li v-for="(book,index) in mdata.list" :style="styleobj.text">
				<div @click="goDetail(book.publish,book.bid,index+1)" class="bcover">
					<img :src="book.cover">			
				</div>	
				<p class="bname">{{book.name}}</p>
				<p class="author">{{book.author}}</p>
				<p class="price" v-if="book.price !==''" :style="styleobj.price">{{book.price}}元/{{book.pricetype === 1 ? '千字' : '本'}}</p>
			</li>
		</ul>
	</div>
</template>	
<style lang="sass" scoped>
.showbooks{
	padding:.32rem .48rem;
}
</style>
<script type="text/javascript">
	import Bus from "./bus.js";
	export default {
		props:["mdata"],
		data:function(){
			return{	
				styleobj:{
			        price:{
			          color:this.mdata.pricecolor
			        },
			        text:{
			          color:this.mdata.fontcolor
			        }
      			}
			}
		},
		mounted(){
	      Bus.$emit(this.mdata.id,this.mdata.list);
		},
		methods:{
			goDetail(publish,bid,index){
				console.log(publish,bid)
				if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
				if(publish == 1){
					Local.forceLog("templateV2","TpShowbooks"+index,this.$parent.actid,this.mdata.id);
       				Local.goBookDetail(bid); 
				}	       
			}
		}
	};	
</script>	