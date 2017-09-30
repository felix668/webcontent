<template>
	<div class="banner" :id="mdata.id" :mid="mdata.mid">
		<img :src="mdata.banner" alt="">
	</div>
</template>
<style lang="scss" scoped>
.banner img{width: 100%;}
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

