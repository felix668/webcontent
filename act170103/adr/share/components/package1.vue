<template>
	<div class="plist" id="column1"> 
		<img :src="'../adr/images/m1.png'" class="title">
		<div class="package" v-for="n in 3">
			<div class="pname">
				<h3>{{pkdata['batchPackage'+(n-1)].bagName}}</h3>
			</div>
			<i class="hot" v-if="Math.max.apply([],pknum)==pknum[n-1]"></i>
			<ul class="booklist">
				<li v-for="book in pkdata['batchPackage'+(n-1)].bookInfo">
					<div class="bcover" @click="loadApp">
						<img :src="book.cover">
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
				</li>
			</ul>
			<div class="buyinfo">
				<div class="prices">
					<strong>{{pkdata['batchPackage'+(n-1)].discountBagMoney}}元／3本</strong>
					<p>{{pkdata['batchPackage'+(n-1)].originalBagMoney}}元/3本</p>
				</div>
				<div class="btn" @click="loadApp">
					<strong>立即抢购</strong>
					<span>({{pknum[n-1]}}人已抢)</span>
				</div>
			</div>
		</div>	
	</div>
</template>	
<style lang="sass">
</style>
<script type="text/javascript">
	export default {
		props:["pkdata","pknum"],
		data:function(){
			return{
					
			}
		},
		created:function(){
			
		},
		methods:{
			loadApp:function(){
				this.$emit('load');
				forceLog(param("act_f"),"TSJspBtn2");	
			}
		}
	};	
</script>	