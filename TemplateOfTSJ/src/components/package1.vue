<template>
	<div class="plist" id="column1"> 
		<img :src="styleobj.title1" class="title">
		<div class="package" v-for="(item,index) in batchPackage" :style="'background-image:url('+styleobj.columnbg1+')'">
			<div class="pname">
				<h3>{{item.bagName}}</h3>
			</div>
			<img class="hot" :src="styleobj.hot" v-if="Math.max.apply([],pknum)==pknum[index]">
			<ul class="booklist">
				<li v-for="book in item.bookInfo">
					<div @click="goDetail(book.bid)" class="bcover">
						<img :src="book.cover">
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
				</li>
			</ul>
			<div class="buyinfo">
				<div class="prices">
					<strong :style="{color:styleobj.color1}">{{item.discountBagMoney}}元／3本</strong>
					<p>{{item.originalBagMoney}}元/3本</p>
				</div>
				<div class="btn" v-if="!isbuy || isbuy.indexOf(index+'')==-1"  :style="{backgroundColor:styleobj.color2}" v-on:click="buybook(index)">
					<strong>立即抢购</strong>
					<span>({{pknum[index]}}人已抢)</span>
				</div>
				<div class="btn disable" v-else>
					<strong>立即抢购</strong>
					<span>({{pknum[index]}}人已抢)</span>
				</div>
			</div>
		</div>	
	</div>
</template>	
<script type="text/javascript">
	export default {
		props:["pkdata"],
		data:function(){
			return{
				pknum:this.pkdata.batchNumber || [],
				isbuy:this.pkdata.userHasBoughtPackageId || [],
				batchPackage:this.pkdata.batchPackage,
				styleobj:this.pkdata.pictureAndStyle
			}
		},
		methods:{
			goDetail(bid){
       			Local.goBookDetail(bid);        
			},
			buybook(n){
				if(!this.pkdata.isLogin){
					Local.login();
					return;
				}
				var info=Object.assign({},this.batchPackage[n],{
					pickId:n,
					clomn:1
				})
				this.$emit('buy',info);
				Local.forceLog(common.param("act_f"),"TSJc1btn"+n);
			}
		}
	};	
</script>	