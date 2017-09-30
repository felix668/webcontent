<template>
	<div class="loadingbox">
		<div class="loadingTop">
			<span class="loads">
				<svg width="24" height="23" viewBox="0 0 48 46" xmlns="http://www.w3.org/2000/svg">
					<path d="M47.43 24C47.43 11.06 36.94.57 24 .57S.57 11.06.57 24c0 9.27 5.434 17.55 13.72 21.328 1.006.458 2.192.015 2.65-.99.46-1.005.015-2.192-.99-2.65C9.076 38.555 4.57 31.688 4.57 24c0-10.73 8.7-19.43 19.43-19.43S43.43 13.27 43.43 24c0 7.66-4.473 14.505-11.307 17.655-1.004.462-1.442 1.65-.98 2.653.463 1.004 1.65 1.442 2.654.98C42.037 41.49 47.43 33.234 47.43 24z" class="cls-default"></path>
				</svg>
			</span>
			正在加载...
		</div>
	</div>
</template>
<style scoped lang="sass">
.loadingbox{position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: white;color: grey;text-align: center;font-size: 14px;z-index: 9999;}
.loadingTop{ display:block; margin:0 auto; text-align:center; padding:16px 0;}
.loads{ width:24px; height:24px; padding: 8px; -webkit-animation:rotate 1s linear infinite;display:inline-block; margin:0 auto;vertical-align: middle;}
svg{margin:0;padding:0;}
.cls-default { fill: #3399ff; fill-rule: evenodd;}
@-webkit-keyframes rotate{
  0%{-webkit-transform:rotate(0deg)}
  100%{-webkit-transform:rotate(360deg);}
}
</style>