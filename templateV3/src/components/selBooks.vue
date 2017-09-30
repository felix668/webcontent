<template>
	<div class="selbooks" :mid="mdata.mid"> 
		<ul class="booklist">
			<li v-for="(book,index) in mdata.list" :style="styleobj.text"> 
				<div @click="goDetail(book.publish,book.bid)" class="bcover">
					<img :src="book.cover">			
				</div>	
				<p class="bname">{{book.name}}</p>
				<p class="author">{{book.author}}</p>
				<p class="price" v-if="book.price !==''" :style="styleobj.price">{{book.price}}元/{{book.pricetype === 1 ? '千字' : '本'}}</p>
				<img :src="mdata.btn0" v-show="selectIndex.indexOf(index) == -1 && canchoose" @click="choose(index,book)" class="btn">
				<img :src="mdata.btn1" v-show="selectIndex.indexOf(index) > -1" @click="choose(index,book)" class="btn">
				<img :src="mdata.btn2" v-show="selectIndex.indexOf(index) == -1 && !canchoose" class="btn">
			</li>
		</ul>
		<div class="selinfo">
			已选<span>{{selectIndex.length}}/{{mdata.num}}</span>
		</div>
	</div>
</template>	
<style lang="sass" scoped>
.selbooks{
	padding:.32rem .48rem;
}
.selinfo{
	font-size:.2rem;text-align:center;line-height:.4rem;margin-bottom:-.1rem;
}
</style>
<script type="text/javascript">
	import Bus from "./bus.js";
	export default {
		props:["mdata"],
		data:function(){
			return{	
				selectBooks:[],
				selectIndex:this.mdata.selectIndex.slice(0) || [],
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
		computed:{
			canchoose(){
				return (this.selectIndex.length < this.mdata.num) && this.mdata.operStatus === 0 ? true : false;	
			}
		},
		methods:{
			goDetail(publish,bid){
				if(this.$parent.sharepage){
					this.$parent.isHasApp();
					return;
				}
				if(publish == 1){
					Local.goBookDetail(bid);
				}     			        
			},
			choose(index,book){	
				if(this.$parent.sharepage){
					return;
				}	
				if(this.mdata.operStatus === 1){//说明已经选过或者是已经加过书架 不能再操作
					return;
				}			
				if(this.selectIndex.indexOf(index) > -1){
					this.removeTodo(this.selectIndex,index);
					this.removeTodo(this.selectBooks,book);
				}else{
					this.selectIndex.push(index);
					this.selectBooks.push(book);
				}
				Local.forceLog("templateV2",`TpSelbooks${index+1}`,this.$parent.actid,this.mdata.id);
				//向绑定模块传递数据
				if(this.selectIndex.length){
					Bus.$emit(this.mdata.id,this.selectBooks);
				}			
			},
			removeTodo(arry,todo) {
			    var index = arry.indexOf(todo);
			    arry.splice(index, 1);
			}
		}
	};	
</script>	