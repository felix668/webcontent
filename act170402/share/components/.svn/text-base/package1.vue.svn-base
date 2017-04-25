<template>
	<div class="plist" id="column1"> 
		<img :src="'../images/m1.png'" class="title">
		<div class="package">
			<div class="pname">
				<h3>{{pkdata.packageTopic}}</h3>
			</div>
			<ul class="booklist">
				<li v-for="book in pkdata.batch">
					<div @click="loadApp" class="bcover">
						<img :src="book.cover">
					</div>
					<p class="bname">{{book.title}}</p>
					<p class="author">{{book.author}}</p>
				</li>
			</ul>
			<div class="buyinfo">
				<div class="prices">
					<strong>14.23元／3本</strong>
					<p>{{pkdata.packageMoney}}元/3本</p>
				</div>
				<div class="btn" @click="loadApp">
					<strong>{{canpick ? "立即抢购" : "即将开抢"}}</strong>
				</div>				
			</div>
		</div>	
	</div>
</template>	
<style lang="sass">
</style>
<script type="text/javascript">
	export default {
		props:["pkdata","canpick"],
		data:function(){
			return{
					
			}
		},
		created:function(){
			
		},
		methods:{
			loadApp:function(){
				this.$emit('load');
			}
		}
	};	
</script>	