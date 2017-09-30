<template>
	<div id="app">
		<load v-if="loading"></load>
		<over v-if="over"></over>
		<template>
      <div id="banner"></div>
      <div class="video">
        <p class="title"></p>
        <div class="box">
          <div class="mask"></div>
          <span class="btn"></span>
        </div>
      </div>
      <div class="book">
        <p class="title"></p>
        <div class="box">
          <ul>
            <li v-for="item in 6" :key="item" :style="{backgroundImage: `url(src/images/body/${item}.png)`}"></li>
          </ul>
        </div>
      </div>
		</template> 
	</div>
</template>
<style src="./css/live.scss" lang="sass" ></style>
<script>
	import load from "./components/load"
	import over from "./components/over"
	import comment from "./components/comment"
	import data from "./js/data"
	
	export default { 
		data: function () {
			return {
				plat: window.pt,
				loading: true,
				over: false,
				isLogin: true,
				isguest: false,
      }
    },
    created(){
      this.initPage()
    },
    methods:{
      initPage(){
        this.loading = false
      }
    },
		components: {
			load,
			over,
			comment
		}
	}
</script>