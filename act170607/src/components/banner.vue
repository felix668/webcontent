<template>
	<div class="top">
		<img :src="banner">
		<img src="src/images/lyf.png" class="jy">
	</div>
	

</template>
<style lang="sass">
.top{position: relative;
	.jy{position:absolute;bottom:-.6rem;left:.86rem;width:2.18rem;}
}

</style>
<script>
	export default{
		props:["type"],
		computed:{
			banner(){
				return this.type ? "src/images/banner2.jpg" : "src/images/banner.jpg" 
			}
		}
	}
</script>
