<template>	
	<mask-load v-if="!loaded"></mask-load>	
	<template v-if="pagetype==1">
		<top banner="banner2" pack="pack2"></top>
		<div class="wrap" v-if="loaded">
			<div class="box">
				<box5 :dataobj="initdata"></box5>
				<box4 pic="part3-2" :booklist="initdata.booklist2" :addall="initdata.addall"></box4>
			</div>
		</div>			
	</template>
	<template v-if="pagetype==2">
		<top></top>
		<div class="wrap" v-if="loaded">
			<div class="box">
				<box2 title="幸运专享一" :dataobj="initdata"></box2>
				<box3 title="幸运专享二" :dataobj="initdata"></box3>
			</div>
		</div>
		<mask-select v-show="showmask=='maskSelect'"></mask-select>
		<mask-shelf v-show="showmask=='maskShelf'"></mask-shelf>	
	</template>
	<template v-if="pagetype==3">
		<top></top>
		<div class="wrap" v-if="loaded">
			<div class="box">
				<box3 title="幸运专享一" :dataobj="initdata"></box3>
			</div>
		</div>
		<mask-shelf v-show="showmask=='maskShelf'"></mask-shelf>
	</template>
	<template v-if="pagetype==4">
		<top></top>
		<div class="wrap" v-if="loaded">
			<div class="box">
				<box1 title="幸运专享一" :monthpicked="initdata.monthpicked"></box1>
				<box3 title="幸运专享二" :dataobj="initdata"></box3>	
			</div>
		</div>
		<mask-shelf v-show="showmask=='maskShelf'"></mask-shelf>
	</template>
	<template v-if="pagetype==5">
		<top></top>
		<div class="wrap" v-if="loaded">
			<div class="box">
				<box1 title="幸运专享一" :monthpicked="initdata.monthpicked"></box1>
				<box2 title="幸运专享二" :dataobj="initdata"></box2>
				<box3 title="幸运专享三" :dataobj="initdata"></box3>	
			</div>
		</div>
		<mask-select v-show="showmask=='maskSelect'"></mask-select>
		<mask-shelf v-show="showmask=='maskShelf'"></mask-shelf>
	</template>
	<template v-if="pagetype==6">
		<top></top>
		<div class="wrap" v-if="loaded">
			<div class="box"> 
				<box1 title="幸运专享一" :monthpicked="initdata.monthpicked"></box1>
				<box4 title="幸运专享二" :booklist="initdata.booklist1" :addall="initdata.addall" free="true"></box4>
				<box3 title="幸运专享三" :dataobj="initdata"></box3>	
			</div>
		</div>
		<mask-shelf v-show="showmask=='maskShelf'"></mask-shelf>
	</template>
	<template v-if="pagetype==7">
		<top banner="banner2" pack="pack2"></top>
		<div class="wrap" v-if="loaded">
			<div class="box">
				<box1 pic="part1-2" :monthpicked="initdata.monthpicked"></box1>
				<box4 pic="part3-2" :booklist="initdata.booklist2" :addall="initdata.addall"></box4>
			</div>
		</div>
	</template>	
	<template v-if="pagetype==8">
		<top></top>
		<div class="wrap" v-if="loaded">
			<div class="box">
				<box2 title="幸运专享一" :dataobj="initdata"></box2>
				<box4 title="幸运专享二"  pic="part3"  :booklist="initdata.booklist2" :addall="initdata.addall" free="true"></box4>
			</div>
		</div>
		<mask-select v-show="showmask=='maskSelect'"></mask-select>
	</template>	
	<div class="cpr"><p>本活动解释权归QQ阅读所有</p></div>
	<over-box v-if="over"></over-box>
</template>
<script>
	import '../css/index.css';
	//import data from '../src/data.js';
	module.exports = {
		data: function(){
			return {
				showmask:'',
				over:false,
				initdata:{},
				loaded:false,
				islogin:false,
				pagetype:param("pagetype")
			}
		},
		created:function(){
			this.initp();			
		},
		methods:{
			initp:function(){
				var self=this;
				Local.init();
				Local.reqaObj(server() + "topic/old/init?pagetype="+self.pagetype, function(data) {
					self.initdata=data;
					self.islogin=data.isLogin;
					self.loaded=true;				
				}, [], function() {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("LYHindex","","");		
			}		
		},
		components: {
			maskLoad:require('../components/maskload.vue'),
			top:require('../components/top.vue'),
		    box1:require('../components/box1.vue'),
		    box2:require('../components/box2.vue'),
		    box3:require('../components/box3.vue'),
		    box4:require('../components/box4.vue'),
		    box5:require('../components/box5.vue'),
			overBox: require('../components/over.vue'),
			maskSelect:require("../components/maskselect.vue"),
			maskShelf:require("../components/maskshelf.vue")
		},
		watch:{
			"showmask":function(val, oldVal){
				if(val!==''){
					$("body").addClass("noscroll");
				}else{
					$("body").removeClass("noscroll");
				}
			}
		}
	}
</script>