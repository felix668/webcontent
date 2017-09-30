<template>
	<ul class="tab" :class="{'fixtab':tab.fix}" id="tab" ref="tab">  
		<li :class="{'active':tab.pos==0}" :style="'background-image:url('+styleobj.tab+')'"></li>
		<li :class="{'active':tab.pos==1}" :style="'background-image:url('+styleobj.tab+')'"></li>
	</ul>
</template>	
<style lang="sass" scoped>
%centerflex{
	display: -webkit-flex;
	-webkit-align-items: center;
    -webkit-justify-content: center;
	display: -webkit-box;
	display: box;
	-webkit-box-align:center;
	-webkit-box-pack:center;
}
.tab{
	background: #fff;
	@extend %centerflex;
	li{
		position: relative;
		width: 3.75rem;
		height:.88rem;
		background-repeat:no-repeat;
		background-size: 7.5rem auto;
		&:nth-child(1).active{
			background-position:0 -2rem;
		}
		&:nth-child(2){
			background-position:right -2rem;
			&.active{
				background-position:right 0;
			}
		}	
	}
}
.fixtab{
	position:fixed;
	top: 0;
	left:0;
	z-index:100;
	width: 100%;
}
</style>
<script type="text/javascript">
	export default {
		props:["flog","pkdata"],
		data:function(){
			return{			
				tab:{pos:0,fix:false},
				styleobj:this.pkdata.pictureAndStyle
			}
		},
		mounted:function(){
			this.init();
		},
		methods:{
			init(){
				var self=this;
				setTimeout(function(){
					self.fixscroll();
				},1000)
			},
			fixscroll:function(){
				var tabPos,scrollTop;		
				var fixHeight=this.$refs.tab.clientHeight;
				var tablists=document.querySelectorAll("#tab li");
				tabPos=this.$refs.tab.offsetTop;	
				var t0=parseInt(document.querySelector("#column1").offsetTop-fixHeight);	
				var t1=parseInt(document.querySelector("#column2").offsetTop-fixHeight);
				var root=document.querySelector("#root");
				var self=this;
				window.onscroll=function(){					
					scrollTop=document.body.scrollTop;
					if(scrollTop>=tabPos){
						root.style.marginTop=fixHeight+"px";
						self.tab.fix=true;
					}else{
						self.tab.fix=false;
						root.style.marginTop="0";
					}
					if(scrollTop<=t0){
						self.tab.pos=0;
					}else if(scrollTop>=t1){
						self.tab.pos=1;
					}
				}
				for(var i=0;i<tablists.length;i++){
					(function(index){
						tablists[i].onclick=function() {
							if(index==0){
								window.scrollTo(0,t0);
							}else if(index==1){
								window.scrollTo(0,t1);
							}
							if(self.flog){
								//Local.forceLog(common.param("act_f"),"TJStab"+index);
							}
						}
					})(i)
				}			
			}	
		}
	}
</script>