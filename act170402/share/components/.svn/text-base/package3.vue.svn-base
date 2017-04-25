<template>
	<div class="plist" id="column3"> 
		<img :src="'../images/m3.png'" class="title">
		<div class="package">
			<div class="pname" v-if="pkdata.packageTopic">
				<h3>{{pkdata.packageTopic}}</h3>
			</div>
			<div class="flashbook">
				<div @click="loadApp" class="bcover">
					<img :src="pkdata.cover">
				</div>
				<p class="bname">{{pkdata.title}}</p>
				<p class="author">{{pkdata.author}}</p>
				<div class="buyinfo">
					<div class="prices">
						<strong>1元<b>（100{{bi}}）</b></strong>
						<p>{{pkdata.price}}元(含后续章节)</p>
					</div>
					<div class="btn" @click="loadApp">
						<strong>{{canpick ? "1元抢" : "即将开抢"}}</strong>
					</div>	
				</div>		
		</div>	
	</div>
</template>	
<style lang="sass"scoped>
.flashbook{position: relative;padding:.5rem 0 .42rem;}
.flashbook .bcover{width:1.56rem;float:left;margin:0 .36rem 0 .38rem;}
.flashbook>p{margin-left:1.92rem;}
.flashbook .buyinfo{border:none;padding:0;width:4.3rem;}
.flashbook .prices b{font-size:.28rem;}
</style>
<script type="text/javascript">
	export default {
		props:["pkdata","isbuy","canpick"],
		data:function(){
			return{
				bi:this.$parent.plat=="adr" ? "书币" : "阅点"
			}
		},
		methods:{
			loadApp:function(){
				this.$emit('load');
			}
		}
	};	
</script>	