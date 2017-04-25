<template>
	<div class="spoilerbox">
		<a class="close" @click="closemask()"><img :src="'images/close.png'" /></a>
		<h4>第一章 大神引入怀</h4>
		<p>“我和你之间隔了一整个青春，但我愿意陪你一路走你的青春”——叶非夜《大神引入怀》</p>
		<p>“那天晚上，是你吗？”</p>
		<p>十八岁的季忆幻想过一千种，甚至一万种对自己喜欢的男孩告白的方式，可她没想到，当她鼓起全部勇气站在喜欢的男孩面前，开口的第一句话竟然是：“那天晚上的那个男人，是你吗？”</p>
		<p>贺季晨垂着眸，姿势简单的倚着树干，在听到季忆的问话后，眼皮都没掀一下，只是眉心轻蹙了蹙，连带着睫毛微微一颤，随即他干净耀眼的脸上便恢复了一贯的平淡无波。</p>
		<p>若不是季忆清楚捕捉到了他的神情浮动，她还以为他根本没听到她问的话，她目不转睛的望着面前的少年，静等了一小会儿，看少年始终没有任何要回应的意思，轻抿了抿唇，再开口，虽还是疑问话，可字里行间却带了几分笃定：“那天晚上就是你，对不对？”</p>
		<p>贺季晨终于抬起头，慢条斯理的扫了一眼季忆，漆黑的眼底没带任何的情绪和情感，随后就站直了身子，转了个方向，一身要离开的意思。</p>
		<p>季忆望着贺季晨的背影，下意识地握紧了拳头。</p>
		<p>那晚的人，肯定是他，不会错的……</p>
		<p>那晚的他，亲吻她的姿势，那么的温柔，也不会错的……</p>
		<div class="bottmbox">更多精彩，4月10日新书正式上线，届时千万不要错过！</div>
	</div>
</template>
<style lang="less" scoped>
.spoilerbox{ position: relative; z-index: 100; width: 100%; padding-top: .84rem; background: #fcf1fd; color: #2b2b2b;font-size: .36rem; line-height: .6rem; }
.spoilerbox img{ position: absolute; top: .4rem; right: .4rem; width: .44rem; height: .44rem; display: block;}
.spoilerbox h4{text-align: center; font-weight: bold;}
.spoilerbox p{ text-indent: 2em; margin-bottom: .3rem; margin: 0 .4rem .2rem;}
.bottmbox{ background: #736b84; padding:.2rem .4rem; color: #cbb0ed; font-size: .32rem; line-height: .48rem; margin-top: .3rem;}
</style>
<script>
	module.exports = {
		data: function(){
			return {
			}
		},
		methods: {
			closemask:function(){
			    this.$parent.showjutou=false;
			}
		}
		
	}
</script>
