<template>
	<div class="top">
		<img :src="'images/'+(banner?banner:'banner')+'.jpg'" class="banner">
		<img :src="'images/'+(pack?pack:'pack')+'.png'" class="pack" id="top">
	</div>
</template>
<script type="text/javascript">
	export default {
		props:["banner","pack"]
	}
</script>