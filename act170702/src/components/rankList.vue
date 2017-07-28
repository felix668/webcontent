<template>
<div class="rankbox">
	<table :class="['ranklist',{'hide':hide}]">
		<thead>
			<th>排名</th>
			<th>昵称</th>
			<th>{{rank == "week" ? '本周积分' : '总榜积分'}}</th>
		</thead>
		<tbody>
			<tr v-for="(item,index) in listinfo" :class="index < 3 ? 'top'+index : ''" v-show="index < length">
				<td>
					<img :src="'src/images/top'+index+'.png'" class="topTag" v-if="index<3">
					<i v-else :class="['rank',{'rank2': parseInt(index) > 8}]">
						{{item.rank}}
					</i>
				</td>
				<td>
					<div class="avor">
						<img :src="item.avor || 'src/images/default.png'">
					</div>
					<span class="nick f26">
						{{item.nick || '游客用户'}}
					</span>
				</td>
				<td>
					<div class="score">{{item.score}}</div>
				</td>
			</tr>
		</tbody>
	</table>
	<div class="all f26" @click="showall" v-if="hide">查看全部>></div>
	<div class="all f26" @click="hideall" v-else>收起>></div>
</div>
</template>
<style lang="scss" scoped>
.rankbox{
	margin-top:.05rem;
}
table{border-collapse: collapse;border-spacing: 0;}
.ranklist {
	width: 100%;
	text-align: left;
	thead{background: #d5d5e2;height: .84rem;line-height: .84rem;}
	th{
		font-weight: normal;
		-webkit-box-sizing:border-box;
		box-sizing:border-box;
		&:nth-child(1){
			width: 1.3rem;
			padding-left: .3rem;
		}
		&:nth-child(2){
			width: 4.3rem;
			padding-left: .86rem;
		}
		&:nth-child(3){
			width: 1.9rem;
			padding-left: .48rem;
		}
	}
	.avor{
		width:.54rem;
		height:.54rem;
		margin-left:.1rem;
		border-radius: 50%;
		overflow: hidden;
		display: inline-block;
		vertical-align: middle;
	}
	.top0,.top1,.top2{
		.avor{width: .72rem;height: .72rem;margin:0;}
	}
	.topTag{width: .86rem;}
	.rank{font-size: .54rem;color: #fae27c;margin-left:.36rem;text-shadow: 1px 1px #f4ad8c;}
	.rank2{margin-left:.24rem;}
	.nick{
		margin-left:.2rem;
	}
	tbody{
		color:#9696b3;
		tr{
			height: 1.06rem;
		    background: -webkit-linear-gradient(bottom, transparent 50%, #eee 50%) no-repeat bottom left;
		    background-size: 100% 1px;
		}
	}
	.score{float: right;margin-right: .3rem;}	
}
.hide tbody tr:nth-child(10){
	background: none;
}
.all{color: #fe9d98;line-height:.88rem;margin-bottom: .48rem;text-align: center;}
</style>
<script>
export default {
	props:["listinfo","rank"],
	data(){
		return {
			hide:true
		}
	},
	methods:{
		showall(){
			this.hide = false;
			Local.forceLog(common.param("act_f"),"PHBmore");
		},
		hideall(){
			this.hide = true;
		}
	},
	computed:{
		length(){
			return this.hide ? 10 : 50;
		}
	}
}
</script>

