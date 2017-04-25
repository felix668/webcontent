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
					<div @click="goDetail(book.bid)" class="bcover">
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
				<div class="btn" v-if="!pkdata.userHasBoughtPackageId || pkdata.userHasBoughtPackageId.indexOf(n-1+'')==-1" @click="buybook(n-1)">
					<strong>立即抢购</strong>
					<span>({{pknum[n-1]}}人已抢)</span>
				</div>
				<div class="btn disable" v-else>
					<strong>立即抢购</strong>
					<span>({{pknum[n-1]}}人已抢)</span>
				</div>
			</div>
		</div>	
	</div>
</template>	
<script type="text/javascript">
	export default {
		props:["pkdata","pknum"],
		data:function(){
			return{
					
			}
		},
		methods:{
			goDetail:(bid)=>{
				ABook.gotoDetail(bid);
			},
			buybook:function(n){
				var info=this.pkdata['batchPackage'+n];
				info.pickId=n;
				info.clomn=1;
				this.$emit('buy',info);
				Local.forceLog(common.param("act_f"),"TSJc1btn"+(n+1));
			}
		}
	};	
</script>	