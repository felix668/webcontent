<template>
	<div class="title" :id="mdata.id" :mid="mdata.mid">
		<img :src="mdata.background">
	</div>
</template>
<style lang="sass" scoped>
.title{ 
	height:1.2rem;
	img{
		width: 100%;
		height:100%;
	}
}
</style>
<script>
export default {
	props:["mdata"],
	data(){
		return{

		}
	},
	created(){

	}
}
</script>

