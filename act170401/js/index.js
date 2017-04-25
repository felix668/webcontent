var vm=new Vue({
 	el:"#app",
 	data:{
 		form: {
			city: {
				val: '',
				state: ''
			},
			school: {
				val: '',
				state: ''
			},
			name: {
				val: '',
				state: ''
			},
			qq: {
				val: '',
				state: ''
			},
			mobile: {
				val: '',
				state: ''
			}
		},
		picArr:[1,2,3,4,5,6,7,8,9,10,11,12,1,7,11,13,14,13],
		done: false,
		mask:false
	},
	created: function(){
		if( localStorage.form ){
	    	var form = JSON.parse(localStorage.form);
	    	for( var key in form ){
	    		this.form[key].val = form[key].val;
	    	}
	    	this.done = true;
    	}
	},
	mounted:function(){
		var self=this;
		window.addEventListener("DOMContentLoaded",function(){
			setTimeout(function(){
				document.querySelector("#wrap").className="wrap show";
				self.init();
			},3000);
			document.body.addEventListener("touchstart",function(){},false);
			Local.forceLog(common.param("act_f"),"HGpageinit");
			
		});
		window.CLOSE_WINDOW=function(){
			self.closeP();
		};
	},
	computed: {
		error:function(){
			var error = false;
			for( var key in this.form ){
				if( this.form[key].state==='error' ){
					error = true;
				}
			}
			return error;
		}
	},
	methods: {
		init:function(){			
			this.pageswiper();
			this.share();
		},
		closeP:function(){
			Local.closePage();
		},
		playV:function(){
			if(window.pt=="adr"){
				this.$refs.vmask.className="vmask vani";			
			}
			var video=document.querySelector("#voice");
			var loading=document.querySelector("#loading");
			var timeupdate=true;
			video.addEventListener("timeupdate", function(){
				if(timeupdate){
					loading.style.display="none";	
					timeupdate=false;
				}
			},false)
			video.addEventListener("waiting", function(){
				loading.style.display="block";	
			},false)
			video.play();
			Local.forceLog(common.param("act_f"),"HGplayVideo");
		},
		closeV:function(){
			this.$refs.vmask.className="vmask";
			document.querySelector("#voice").pause();
		},
		share:function(){
			var shareObj = {
				url : common.sharefront()+"act170401/com/index.html",
				cover :common.sharefront()+"act170401/com/images/cover.jpg",
				title: "胡歌微电影独家放送",
				desc: "胡歌赴美的第52天，这部片子我就刷了666遍"
			};
			Local.setIconForShareing(shareObj.url, shareObj.cover, shareObj.title,shareObj.desc);
			this.$refs.share.onclick=function(){
				Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title, shareObj.desc);
				Local.forceLog(common.param("act_f"),"HGshare");
			}
		},
		pageswiper:function(){
			var galleryBig = new Swiper('#swiper-big', {
			    pagination : '.swiper-pagination',
			    normalizeSlideIndex:false,
			    onTap:function(){
			    	document.querySelector("#swiper-big").style.opacity="0";
			    	setTimeout(function(){
			    		document.querySelector("#swiper-big").style.zIndex="-1";
			    	},300)
			    },
			    onTransitionEnd:function(swiper){
			    	gallerySmall.slideTo(swiper.activeIndex);
			    }
			});
			var gallerySmall = new Swiper('#swiper-small', {
			    slidesPerView: 'auto',
			    touchRatio: 0.2,
				slideToClickedSlide: true,
				normalizeSlideIndex:false,			
				preloadImages:true,
			    onTap:function(swiper){	    	
			    	document.querySelector("#swiper-big").style.cssText+="opacity:1;z-index:20";
			    	galleryBig.slideTo(swiper.activeIndex);	 
			    	Local.forceLog(common.param("act_f"),"HGposter");
			    }
			});
		},
		showForm:function(){
			this.mask=true;
		},
		hideForm:function(){
			this.mask=false;
		},
		fill:function(e,key){
			this.form[key].val = e.target.value;
			console.log(this.form[key].val)
		},
		check:function(key){
			if( this.form[key].val==='' ){
				this.form[key].state = 'error';
			}else{
				this.form[key].state = '';
				return true;
			}
		},
		checkQQ:function(){
			if( /^(\d{5,})$/.test(this.form.qq.val) ){
				this.form.qq.state = '';
				return true;
			}else{
				this.form.qq.state = 'error';
			}
		},
		checkMobile:function(){
			if( /^1\d{10}$/.test(this.form.mobile.val) ){
				this.form.mobile.state = '';
				return true;
			}else{
				this.form.mobile.state = 'error';
			}
		},
		submit:function(){
			if(
				this.check('city')&&
				this.check('school')&&
				this.check('name')&&
				this.checkQQ()&&
				this.checkMobile()
				){
				this.done = true;
				localStorage.form=window.JSON.stringify(this.form);
				var pl = this.form;
				Local.forceLog(common.param("act_f"),pl.city.val+"|"+pl.school.val+"|"+pl.name.val+"|"+pl.qq.val+"|"+pl.mobile.val)
			};
		},
		edit:function(){
			this.done = false;
		}
    }
 })