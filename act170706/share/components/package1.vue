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
					<div class="bcover" @click="loadApp">
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
				<div class="btn" @click="loadApp"  :style="{backgroundColor:styleobj.color2}">
					<strong>立即抢购</strong>
					<span>({{pknum[index]}}人已抢)</span>
				</div>
			</div>
		</div>	
	</div>
</template>	
<style lang="sass">
</style>
<script type="text/javascript">
	export default {
		props:["pkdata"],
		data:function(){
			return{
				pknum:this.pkdata.batchNumber,
				batchPackage:this.pkdata.batchPackage,
				styleobj:this.pkdata.pictureAndStyle	
			}
		},
		created:function(){
			
		},
		methods:{
			loadApp:function(){
				this.$emit('load');
				forceLog("tsj","TSJspBtn2");	
			}
		}
	};	
</script>	