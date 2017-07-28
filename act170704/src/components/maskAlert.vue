<template>
<div>
    <div class="chestbox">
    	<div class="chestbig" :class="{active:anmok}">
    		<div class="chest"></div>
    		<div class="start"></div>
    		<div class="lingt"></div>
    		<div class="prizeImg"><img :src="(type==1 && plar=='ios')?prizeImg[10]:prizeImg[type]"/></div>
    	</div>
    	<div class="qpbox" v-show="qip">
			<img :src="'./src/images/paop.png'" />
		</div>
    </div>
    <div class="explain">
    	<p v-show="islogin">已打开<span>{{ useNum }}</span>次，还可打开<span>{{ surplusNum }}</span>次宝箱</p>（每满100积分可打开1次）
    </div>
	<div class="openIntegral" :class="{active:addclss}" @touchstart.stop="anmt($event)"   @click="openChest($event)"><img :src="'./src/images/btn.png'" /></div>
	<div class="mask" v-show='maskshow'>
		<div class="teaparea">
			<div class="closetk" @click="closemask" v-show="type==2 ||type==3 || type==4 || type==-10"></div>
			<div v-if="type==-10">
				<h4>积分不足</h4>
			    <p>开宝箱需要100积分，还差{{ chaNum }}分可开宝箱 </p>
			    <div class="closebtn" @click="gojifen">赚积分 >></div>
			</div>
			<div v-if="type==2 ||type==3 || type==4">
				<h4>恭喜你，获得{{ prizeName[type] }}</h4>
			    <div class="imgbox"><img :src="prizeImg[type]" /></div>
			    <div class="closebtn bluebtn" @click="gocontact">填写联系方式</div>
			    <p class="mioashu">请认真填写联系方式，以便客服联系到您</p>
			</div>
			<div v-if=" type==1 || type==5 ">
				<h4>恭喜你，获得{{ prizeNum }}{{ type==5?'成长值':plar=='adr'?'书券':'阅券' }}</h4>
			    <div class="imgbox"><img :src="(type==1 && plar=='adr') || type==5?prizeImg[type]:prizeImg[10]" /></div>
			    <div class="closebtn bluebtn" @click="closemask">我知道了</div>
			    <p class="mioashu" v-if="type==1">已及时到帐，有效期7日</p>
			</div>
			<div v-if=" type==0">
				<h4>很遗憾，未中奖<br>一定是打开姿势不对</h4>
			    <div class="imgbox"><img :src="prizeImg[type]" /></div>
			    <div class="closebtn bluebtn" @click="closemask">我知道了</div>
			</div>
		</div>
	</div>
</div>
	
</template>
<script>
	export default {
		props:['plar','useNum','surplusNum','islogin','jifen'],
		data(){
			return{
				maskshow:false,
				chaNum:0,
				type:-100,//奖品类型
				weekNum:0,//第几周奖池
				prizeNum:0,//书券／成长值
				prizeName:['谢谢参与','书券','5Q币','公仔','小米插排','成长值','QQ阅读电子书','漫画周边','U盘','小米移动电源'],
				prizeImg:['./src/images/thanks.png','./src/images/shuquan.png','./src/images/Qbi.png','./src/images/gongzai.png','./src/images/chapai.png','./src/images/chengzhzhi.png','./src/images/QQreadbook.png','./src/images/zhoubian.png','./src/images/Upan.png','./src/images/dianyuan.png','./src/images/yuequan.png'],
				qip:true,
				clickok:true,
                anmok:false,
                addclss:false
				
			}
		},
	 	methods:{
	 		closemask(){
	 			this.maskshow=false;
	 			this.qip=true;
	 			this.clickok=true;
                this.anmok=false;
                this.addclss=false;
	 		},
	 		openChest(e){
                Local.forceLog(common.param("act_f"),"JFBXopenbx");
	 			if(this.islogin){
	 				if(this.clickok){
	 				    this.clickok=false;
                        console.log(common.server() + "pkg170704/pick");
				 		Local.reqaObj(common.server() + "pkg170704/pick", data=>{
							console.log(data);							
							if(data.code==-10){
								this.type=data.code;
								this.maskshow=true;
								this.chaNum=data.scoreneed;
							}else if(data.code==0){
								this.weekNum=data.week;
								this.type=data.prizeid;
                                this.anmok=true;
                                this.prizeNum=data.count;
                                if(this.weekNum>0 && this.type==4){
                                    let ind=parseInt(this.weekNum+5);
                                    console.log(ind,)
                                    this.prizeName[this.type]=this.prizeName[ind];
                                    this.prizeImg[this.type]=this.prizeImg[ind];
                                }
								let timer;
								timer=setTimeout(()=>{ this.qip=false;timer=null;},1162);
				 				timer=setTimeout(()=>{ this.maskshow=true;timer=null;},3300);
				 				this.$parent.useNum+=1;
				 				this.$parent.surplusNum-=1;
							}
							
						});
					}	 				
	 			}else{
	 				Local.login();
	 			}
	 			
	 		},
	 		gocontact(){
	 			this.closemask();
	 			let url=this.plar=="ios" ? `${common.front()}act161002/ios/contact.html` :`${common.front()}act161002/adr/contact.html`;
                Local.openInside(url);
	 		},
            gojifen(){
                Local.openInside(`${common.front()}act170705/index.html`);
            },
            anmt(e){
                this.addclss=true;
            }
	 	}
	}
</script>
<style lang='less' >
	.chestbox{ position: relative; z-index: 1;margin:0 auto .6rem;
    &:after{
        content:"";
        position: absolute;
        left: 0;
        bottom:-.24rem;
        width: 100%;
        height: .81rem;
        background: url(../images/zhedang.png) no-repeat;
        background-size: 100% auto;
    }    
}
.chestbig{ width: 3.94rem; height: 4rem; overflow: hidden; margin: 0 auto; 
}
.chest{
         width: 3.94rem; height: 4rem; margin:0 auto; 
         background: url(../images/chest.png) no-repeat;
         background-size: 100% auto; -webkit-transform-origin:center center;
    }
.start{ position: absolute; left: 50%; top: .5rem; margin-left: -1.46rem; width: 2.92rem; height: 2.25rem; -webkit-transform-origin:50% 50%;
    background: url(../images/start.png) no-repeat; background-size: 100% 100%; display: none; 
}
.lingt{ position: absolute; left: 50%; top: -.6rem; margin-left: -2rem; width: 4.01rem; height: 4.04rem; display: none; background: url(../images/light.png) no-repeat; background-size: 100% 100%;-webkit-transform-origin:50% 50%;}
.prizeImg{ position: absolute;left: 50%; top: .3rem; width: 2rem; height: 2rem; margin-left: -1rem;  -webkit-transform:scale(0);-webkit-transform-origin:50% 50%;
     img{display: block; width: 100%;}
}
.chestbig.active .chest{-webkit-animation:shake steps(1) 3.32s forwards;
    @-webkit-keyframes shake {
          0%{ -webkit-transform: rotate(0);background-position: 0 0;}
          5%{ -webkit-transform: rotate(6deg);background-position: 0 0;}
          8%{ -webkit-transform: rotate(-5deg);background-position: 0 0;}
          10%{ -webkit-transform: rotate(4deg);background-position: 0 0;}
          12%{ -webkit-transform: rotate(-3deg);background-position: 0 0;}
          13%{ -webkit-transform: rotate(2deg);background-position: 0 0;}
          14%{ -webkit-transform: rotate(0deg);background-position: 0 0;}
          25%{ background-position: 0 0;}
          29%{ background-position: 0 -4rem;}
          32%{ background-position: 0 -8rem;}
          36%{ background-position: 0 -12rem;}
          100%{background-position: 0 -12rem;}
    }
}
.chestbig.active .start{-webkit-animation:anim 3.32s forwards; display: block;
@-webkit-keyframes anim {
        0%,40%{opacity: 0;}
        100%{opacity: 1}
    }
}
.chestbig.active .lingt{-webkit-animation:rotates 3.32s forwards;display: block;
@-webkit-keyframes rotates {
        0%,32%{opacity: 0;-webkit-transform: rotate(0deg); }
        35%{opacity: 0;-webkit-transform: rotate(0deg);}
        100%{opacity: 1;-webkit-transform: rotate(500deg);}
    }
}
.chestbig.active .prizeImg{ -webkit-animation:scales 3.32s forwards; 
@-webkit-keyframes scales {
        0%,35%{-webkit-transform: scale(0); }
        85%{-webkit-transform: scale(1.2);}
        100%{-webkit-transform: scale(1);}
}
}
.openIntegral{ width: 4.7rem; height: 1.08rem; margin: .26rem auto;
   img{ display: block; width: 100%; }
   &.active{ -webkit-animation:scalesbtn .3s linear forwards; -webkit-transform-origin:50% 50%; }
}
.receivebtn{ width: 4.66rem; height: .86rem; line-height: .86rem; text-align: center; font-size: .32rem; color:#835c47 ; border:2px solid #da9567; border-radius: 5px; margin:0 auto;
   &.active{ -webkit-animation:scalesbtn .3s linear forwards; -webkit-transform-origin:50% 50%; }
}
@-webkit-keyframes scalesbtn {
        0%{-webkit-transform: scale(1);}
        50%{-webkit-transform: scale(.95);}
        100%{-webkit-transform: scale(1);}
}
.qpbox{ position: absolute; left: 0; top:0; z-index: -1; width: 7.5rem; height:3.14rem; 
    img{ display: block; width: 100%; }
}
.centerflex{
    display: -webkit-flex;
    -webkit-align-items:center;
    -webkit-justify-content: center;
    display: -webkit-box;
    display: box;
    -webkit-box-align:center;
    -webkit-box-pack:center;
}
.tkstyle{
    background: #fff7e7;
    width: 5.2rem;
    border-radius: .2rem;
    padding-bottom: .46rem;
    position: relative;
    z-index: 1;
}
.mask{
    background: rgba(0,0,0,.4); position: fixed; z-index: 1000; left: 0; top: 0 ;.centerflex;width: 100%; height: 100%;
    .teaparea{ text-align: center; .tkstyle; padding-top: .96rem;-webkit-animation:scalse .2s linear forwards; -webkit-transform-origin:50% 50%; -webkit-transform: scale(0); opacity: 0;
        &:before{
            content:'';
            position: absolute;
            left: 0;
            top: -.2rem;
            width: 100%;
            height: .82rem;
            background: url(../images/tktopbg.png) no-repeat top left;
            background-size: 100% auto;
            
        }
        @-webkit-keyframes scalse {
          0%{ -webkit-transform: scale(0); opacity: 0;}
          100%{-webkit-transform: scale(1);opacity: 1;}
        }
        .closetk{
            position: absolute;
            top: .2rem;
            right: .28rem;
            width: .4rem; 
            height: .4rem;
            background: url(../images/close.png) no-repeat center right;
            background-size: .26rem .26rem;
        }
        h4{
            font-size: .32rem;
            color: #333;
            font-weight: normal;
            line-height: .6rem;
        }
        p{
            font-size: .24rem;
            color: #f08c59;
            margin:0 .36rem;
            &.txtleft{
                text-align: left;
            }
            &.mioashu{
            	margin-top: .2rem;
            }
        }
        .imgbox{
            width: 2rem;
            height: 2rem;
            border:2px solid #ead9b8;
            background: #fffaef;
            display: -webkit-flex;
            -webkit-align-items:center;
            -webkit-justify-content: center;
            margin: .3rem auto 0;
            img{
                display: block;
                width: 1.32rem;
                height:1.32rem;
                
            }
        }
        
        .closebtn{
            width: 4.4rem;
            height: .78rem;
            margin:.32rem auto 0;
            border-radius: 5px;
            background: #e77c6e;
            border-bottom: 2px solid #cfe2d5;
            text-align: center;
            line-height: .78rem;
            font-size: .32rem;
            color: #fff;
            &.bluebtn{
                background: #86c3b9;
                border-bottom: 2px solid rgba(134,195,185,.4);
            }
        }
    }
}
</style>

