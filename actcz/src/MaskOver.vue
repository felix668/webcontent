<template>
	<div class="over">
		<div class="over-c">
	        <img :src="'img/over.png'" alt="本期活动已结束">
	        <p class="over-p1">本期活动已结束</p>
	        <p class="over-p2">敬请期待下一波活动</p>
	    </div>
	</div>
</template>
<style lang="less" scoped>
.over {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1999;
  .over-c {
	  height: 4.16rem;
	  overflow: hidden;
	  text-align: center;
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  margin: auto; 
	  img {
		  width: 2.05rem;
		  height: 2.19rem;
		  margin: 0.32rem auto 0; }
		}
		p {
	  	 color: #999;
	 	 font-size: 0.30rem;
	  	 line-height: 1;
  		 }
  		 .over-p1 {
  margin-top: 0.33rem; }

.over-p2 {
  margin-top: 0.24rem;
  margin-bottom: 0.48rem; }
 }
</style>
