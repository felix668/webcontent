<template>
	<div class="sbook cflex" :id="mdata.id" :mid="mdata.mid">
		<img :src="book.cover" class="bcover" @click="goDetail(book.publish,book.bid)">
		<div class="intro" @click="goDetail(book.publish,book.bid)" :style="styleobj.text">
			<p class="title line1">{{book.name}}</p> 
			<p class="price" v-if="book.price !==''" :style="styleobj.price">{{book.price}}元/{{book.pricetype === 1 ? '千字' : '本'}}</p>
      <p class="author">{{book.author}}</p>
			<div class="detail line3">
         <p v-for="list in book.intro">{{list}}</p>
      </div>
		</div>
	</div>
</template>
<style lang="sass" scoped>
.sbook{
  margin:0 .32rem;
  height:3.2rem;
  padding:.35rem 0;
  -webkit-box-sizing:border-box;
  .bcover{
  	width:1.8rem;height:2.5rem;
  	margin-right:.32rem;
  }
  .intro{
  	width:4.74rem;
  }
  .title{
  	font-size:.32rem;line-height:.52rem;font-weight:bold;margin-top:-.1rem;
  }
  .price{font-size:.24rem;line-height:.36rem;}
  .author{line-height:.48rem;}
  .detail{
  	line-height:.42rem;
    margin-top:.03rem;
  }
}
</style>
<script>
import Bus from "./bus";
export default {
	props:["mdata"],
	data(){
		return{
      book:this.mdata.list[0],
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
		goDetail(publish,bid){
      console.log(111)
      console.log(publish,bid)
      if(this.$parent.sharepage){
        this.$parent.isHasApp();
        return;
      }
      if(publish == 1){
        Local.forceLog("templateV2","TpSinglebook",this.$parent.actid,this.mdata.id);
  			Local.goBookDetail(bid);
      }
		}
	}
}
</script>

